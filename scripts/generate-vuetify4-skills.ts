import fs from 'node:fs/promises';
import path from 'node:path';

import { DOCS_PREFIX, getWorkspacePaths } from './vuetify4/config.ts';
import { buildEntries, countApiSections, mapLimit, normalizeSections, outputFileForUrl, toPosix } from './vuetify4/core-utils.ts';
import { extractApiDetails } from './vuetify4/extractors/api-enrichment.ts';
import { buildFallbackExtraction, extractPage } from './vuetify4/extractors/page-content.ts';
import { renderPageMarkdown } from './vuetify4/writers/markdown.ts';
import { writeFrameworkExports, writeRootFiles, writeSectionIndexes } from './vuetify4/writers/output-files.ts';
import type { Entry, Extracted, NavData, PageRecord } from './vuetify4/types.ts';

const paths = getWorkspacePaths(import.meta.url);
const nav = JSON.parse((await fs.readFile(paths.navPath, 'utf8')).replace(/^\uFEFF/, '')) as NavData;
const sections = normalizeSections(nav);
const docEntries = buildEntries(sections, DOCS_PREFIX);

await fs.mkdir(paths.outputRoot, { recursive: true });
await fs.mkdir(paths.pagesRoot, { recursive: true });
await fs.mkdir(paths.frameworksRoot, { recursive: true });

const pageResults = await mapLimit(docEntries, 5, async (entry, index) => {
  return generatePage(entry, index + 1, docEntries.length);
});

await writeSectionIndexes(sections, pageResults, paths);
await writeRootFiles(nav, pageResults, paths);
await writeFrameworkExports(nav, pageResults, paths);

const failures = pageResults.filter(result => result.status !== 'ok');

console.log(`Generated ${pageResults.length} Vuetify 4 skill pages.`);
if (failures.length) {
  console.log(`Completed with ${failures.length} extraction failures. See skills/vuetify4/failures.json.`);
}

async function generatePage(entry: Entry, index: number, total: number): Promise<PageRecord> {
  const outputFile = outputFileForUrl(paths.pagesRoot, entry.url);
  const relatedPages = docEntries
    .filter(candidate => candidate.section === entry.section && candidate.url !== entry.url)
    .slice(0, 6);

  let extracted: Extracted;
  let status: PageRecord['status'] = 'ok';
  let errorMessage: string | null = null;
  let enrichmentError: string | null = null;

  try {
    extracted = await extractPage(entry.url);

    if (entry.section === 'API') {
      try {
        extracted.apiDetails = await extractApiDetails(entry);
      } catch (error) {
        enrichmentError = error instanceof Error ? error.message : String(error);
      }
    }
  } catch (error) {
    status = 'error';
    errorMessage = error instanceof Error ? error.message : String(error);
    extracted = buildFallbackExtraction(entry, errorMessage);
  }

  const pageRecord: PageRecord = {
    section: entry.section,
    navTitle: entry.title,
    title: extracted.title || entry.title,
    url: entry.url,
    file: toPosix(path.relative(paths.workspaceRoot, outputFile)),
    sourceType: extracted.sourceType,
    summary: extracted.description,
    headings: extracted.headings,
    apiKind: extracted.apiDetails?.kind ?? null,
    apiSectionCounts: countApiSections(extracted.apiDetails?.localeData),
    status,
    error: errorMessage,
    enrichmentError,
  };

  const content = renderPageMarkdown({
    nav,
    entry,
    extracted,
    relatedPages,
    pageRecord,
    getRelatedPath: relatedUrl => toPosix(path.relative(path.dirname(outputFile), outputFileForUrl(paths.pagesRoot, relatedUrl))),
  });

  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  await fs.writeFile(outputFile, content, 'utf8');

  if (index % 25 === 0 || index === total) {
    console.log(`Processed ${index}/${total}: ${entry.url}`);
  }

  return pageRecord;
}
