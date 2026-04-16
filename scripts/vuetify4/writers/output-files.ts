import fs from 'node:fs/promises';
import path from 'node:path';
import { slugify, toPosix } from '../core-utils.ts';
import type { NavData, NavSection, PageRecord, WorkspacePaths } from '../types.ts';

type AgentGuides = {
  openai: string;
  copilot: string;
  claude: string;
};

type ManifestSection = {
  section: string;
  pageCount: number;
  file: string;
};

type Manifest = {
  version: string;
  docsBuild: string;
  capturedFrom?: string;
  generatedAt: string;
  totalPages: number;
  sections: ManifestSection[];
  pages: PageRecord[];
};

function resolveNavSections(navData: NavData): NavSection[] {
  return Array.isArray(navData.sections) ? navData.sections : navData.sections?.value ?? [];
}

export async function writeSectionIndexes(navSections: readonly NavSection[], pageResults: readonly PageRecord[], paths: WorkspacePaths): Promise<void> {
  for (const section of navSections) {
    const pages = pageResults.filter(result => result.section === section.section);
    const indexFile = path.join(paths.outputRoot, `${slugify(section.section)}.md`);
    const lines: string[] = [
      `# ${section.section}`,
      '',
      `Pages in this section: ${pages.length}`,
      '',
      '## Pages',
      '',
    ];

    for (const page of pages) {
      const relativePath = toPosix(path.relative(path.dirname(indexFile), path.join(paths.workspaceRoot, page.file)));
      lines.push(`- [${page.title}](${relativePath})`);
    }

    lines.push('');
    await fs.writeFile(indexFile, lines.join('\n'), 'utf8');
  }
}

export async function writeRootFiles(navData: NavData, pageResults: readonly PageRecord[], paths: WorkspacePaths): Promise<void> {
  const navSections = resolveNavSections(navData);
  const manifest: Manifest = {
    version: navData.version,
    docsBuild: navData.docsBuild,
    capturedFrom: navData.capturedFrom,
    generatedAt: new Date().toISOString(),
    totalPages: pageResults.length,
    sections: navSections.map(section => ({
      section: section.section,
      pageCount: pageResults.filter(page => page.section === section.section).length,
      file: toPosix(path.relative(paths.workspaceRoot, path.join(paths.outputRoot, `${slugify(section.section)}.md`))),
    })),
    pages: [...pageResults],
  };

  const failures = pageResults.filter(page => page.status !== 'ok');
  const rootReadme: string[] = [
    '# Vuetify 4 Skills Package',
    '',
    `Pinned Vuetify release: ${navData.version}`,
    '',
    `Pinned docs build: ${navData.docsBuild}`,
    '',
    `Total pages: ${pageResults.length}`,
    '',
    '## Section Index',
    '',
  ];

  for (const section of manifest.sections) {
    const relativePath = toPosix(path.relative(paths.outputRoot, path.join(paths.workspaceRoot, section.file)));
    rootReadme.push(`- [${section.section}](${relativePath}) (${section.pageCount} pages)`);
  }

  rootReadme.push(
    '',
    '## Agent Notes',
    '',
    '- The corpus is restricted to Vuetify 4 documentation URLs under https://vuetifyjs.com/en/.',
    '- Prefer page files under pages/ for implementation details and section indexes for discovery.',
    '- Framework exports are written under skills/vuetify4/frameworks for direct ingestion by common coding agents.',
    '',
  );

  await fs.writeFile(path.join(paths.outputRoot, 'README.md'), rootReadme.join('\n'), 'utf8');
  await fs.writeFile(path.join(paths.outputRoot, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  await fs.writeFile(path.join(paths.outputRoot, 'failures.json'), `${JSON.stringify(failures, null, 2)}\n`, 'utf8');
}

export async function writeFrameworkExports(navData: NavData, pageResults: readonly PageRecord[], paths: WorkspacePaths): Promise<void> {
  const openAiDir = path.join(paths.frameworksRoot, 'openai-responses');
  const copilotDir = path.join(paths.frameworksRoot, 'copilot');
  const claudeDir = path.join(paths.frameworksRoot, 'claude');

  await fs.mkdir(openAiDir, { recursive: true });
  await fs.mkdir(copilotDir, { recursive: true });
  await fs.mkdir(claudeDir, { recursive: true });

  const documentsJsonl = pageResults.map(page => JSON.stringify({
    title: page.title,
    section: page.section,
    url: page.url,
    file: page.file,
    summary: page.summary,
    headings: page.headings,
    apiKind: page.apiKind,
    apiSectionCounts: page.apiSectionCounts,
  })).join('\n') + '\n';

  const guides = buildAgentGuides(navData, pageResults);

  await fs.writeFile(path.join(openAiDir, 'documents.jsonl'), documentsJsonl, 'utf8');
  await fs.writeFile(path.join(openAiDir, 'system-prompt.md'), guides.openai, 'utf8');
  await fs.writeFile(path.join(copilotDir, 'AGENTS.md'), guides.copilot, 'utf8');
  await fs.writeFile(path.join(claudeDir, 'CLAUDE.md'), guides.claude, 'utf8');
  await fs.writeFile(path.join(paths.workspaceRoot, 'AGENTS.md'), guides.copilot, 'utf8');
  await fs.writeFile(path.join(paths.workspaceRoot, 'CLAUDE.md'), guides.claude, 'utf8');
}

function buildAgentGuides(navData: NavData, pageResults: readonly PageRecord[]): AgentGuides {
  const navSections = resolveNavSections(navData);
  const common = [
    '# Vuetify 4 Agent Guide',
    '',
    `Pinned release: ${navData.version}`,
    `Pinned docs build: ${navData.docsBuild}`,
    `Total pages: ${pageResults.length}`,
    '',
    'Use this corpus only for Vuetify 4 questions.',
    'Prefer guide and component pages for usage patterns and implementation examples.',
    'Prefer API pages for props, events, slots, directives, composables, and source links.',
    'If guide prose and API enrichment differ, prefer the API-enrichment section and linked source file.',
    '',
    '## Section Order',
    '',
    ...navSections.map(section => `- ${section.section}`),
    '',
    '## Primary Files',
    '',
    '- skills/vuetify4/manifest.json',
    '- skills/vuetify4/README.md',
    '- skills/vuetify4/pages/**',
    '',
  ].join('\n');

  return {
    openai: `${common}## Retrieval Strategy\n\n1. Search documents.jsonl by title, section, and headings.\n2. Read the referenced Markdown page under skills/vuetify4/pages.\n3. For API pages, use the API Enrichment section before the raw source snippets.\n`,
    copilot: `${common}## Working Rules\n\n1. Stay within Vuetify 4 semantics and APIs.\n2. Read both the guide page and the related API page for component questions.\n3. Prefer source-derived keys and locale descriptions when a prop or slot detail matters.\n`,
    claude: `${common}## Response Rules\n\n1. Answer with Vuetify 4-only guidance.\n2. Use guide pages for examples and API pages for contract details.\n3. Mention the generated page path and linked source file when the answer depends on source behavior.\n`,
  };
}
