import { titleCase, yamlString } from '../core-utils.ts';
import type { ApiDetails, ApiLocaleData, Entry, Extracted, NavData, PageRecord } from '../types.ts';

type RelatedPage = Pick<PageRecord, 'title' | 'url'>;

export type RenderPageMarkdownArgs = {
  nav: NavData;
  entry: Entry;
  extracted: Extracted;
  relatedPages: readonly RelatedPage[];
  pageRecord: PageRecord;
  getRelatedPath: (relatedUrl: string) => string;
};

type ApiLocaleSection = {
  title: string;
  items: { name: string | null; description: string }[];
};

export function renderPageMarkdown({ nav, entry, extracted, relatedPages, pageRecord, getRelatedPath }: RenderPageMarkdownArgs): string {
  const lines: string[] = [
    '---',
    `title: ${yamlString(pageRecord.title)}`,
    `nav_title: ${yamlString(entry.title)}`,
    `section: ${yamlString(entry.section)}`,
    `source_url: ${yamlString(entry.url)}`,
    `source_type: ${yamlString(extracted.sourceType)}`,
    `vuetify_version: ${yamlString(nav.version)}`,
    `docs_build: ${yamlString(nav.docsBuild)}`,
    `status: ${yamlString(pageRecord.status)}`,
    '---',
    '',
    `# ${pageRecord.title}`,
    '',
    `Source: ${entry.url}`,
    '',
    '## Agent Use',
    '',
    renderAgentUse(entry.section, pageRecord.title),
  ];

  if (extracted.description) {
    lines.push('', '## Overview', '', extracted.description);
  }

  if (extracted.headings.length) {
    lines.push('', '## Key Headings', '');
    for (const heading of extracted.headings) {
      lines.push(`- ${heading}`);
    }
  }

  if (extracted.paragraphs.length) {
    lines.push('', '## Extracted Guidance', '');
    for (const paragraph of extracted.paragraphs) {
      lines.push(paragraph, '');
    }
    if (lines.at(-1) === '') lines.pop();
  }

  if (extracted.apiDetails) {
    lines.push(...renderApiDetails(extracted.apiDetails));
  }

  if (extracted.codeBlocks.length) {
    lines.push('', '## Code Patterns', '');
    for (const block of extracted.codeBlocks) {
      lines.push(`\`\`\`${block.language ? block.language : ''}`);
      lines.push(block.code);
      lines.push('```', '');
    }
    if (lines.at(-1) === '') lines.pop();
  }

  if (relatedPages.length) {
    lines.push('', '## Related Pages', '');
    for (const related of relatedPages) {
      lines.push(`- [${related.title}](${getRelatedPath(related.url)})`);
    }
  }

  if (pageRecord.status !== 'ok' && pageRecord.error) {
    lines.push('', '## Extraction Status', '', pageRecord.error);
  }

  if (pageRecord.enrichmentError) {
    lines.push('', '## API Enrichment Status', '', pageRecord.enrichmentError);
  }

  lines.push('');
  return lines.join('\n');
}

function renderApiDetails(apiDetails: ApiDetails): string[] {
  const lines: string[] = ['', '## API Enrichment', ''];

  lines.push(`Kind: ${apiDetails.kind}`);

  if (apiDetails.localeUrl) {
    lines.push(`Locale descriptions: ${apiDetails.localeUrl}`);
  }

  if (apiDetails.sourceFile?.url) {
    lines.push(`Source file: ${apiDetails.sourceFile.url}`);
  }

  for (const section of normalizeApiLocaleSections(apiDetails.localeData)) {
    lines.push('', `## ${section.title}`, '');
    for (const item of section.items) {
      if (item.name) lines.push(`- ${item.name}: ${item.description}`);
      else lines.push(item.description);
    }
  }

  if (apiDetails.sourceSignals) {
    const { props, events, slots, exposed, snippets } = apiDetails.sourceSignals;

    if (props.length || events.length || slots.length || exposed.length) {
      lines.push('', '## Source-derived Keys', '');
      if (props.length) lines.push(`- Props: ${props.join(', ')}`);
      if (events.length) lines.push(`- Events: ${events.join(', ')}`);
      if (slots.length) lines.push(`- Slots: ${slots.join(', ')}`);
      if (exposed.length) lines.push(`- Exposed: ${exposed.join(', ')}`);
    }

    if (snippets.length) {
      lines.push('', '## Source Snippets', '');
      for (const snippet of snippets) {
        lines.push(`### ${snippet.label}`, '', `\`\`\`${apiDetails.sourceSignals.language}`);
        lines.push(snippet.code);
        lines.push('```', '');
      }
      if (lines.at(-1) === '') lines.pop();
    }
  }

  return lines;
}

function normalizeApiLocaleSections(localeData: ApiLocaleData | null): ApiLocaleSection[] {
  if (!localeData) return [];

  const sectionOrder = ['props', 'events', 'slots', 'exposed', 'sass', 'argument', 'modifiers', 'value'];

  return sectionOrder.flatMap((sectionName): ApiLocaleSection[] => {
    const value = localeData[sectionName];
    if (!value) return [];

    if (typeof value === 'string') {
      return [{ title: titleCase(sectionName), items: [{ name: null, description: value }] }];
    }

    if (typeof value === 'object') {
      return [{
        title: titleCase(sectionName),
        items: Object.entries(value).map(([name, description]) => ({
          name,
          description: typeof description === 'string' ? description : JSON.stringify(description),
        })),
      }];
    }

    return [];
  });
}

function renderAgentUse(section: string, title: string): string {
  const normalizedSection = section.toLowerCase();

  if (normalizedSection === 'api') {
    return `Use this page when you need the Vuetify 4 API contract for ${title}, including props, events, slots, directives, or composable details.`;
  }

  if (normalizedSection === 'components') {
    return `Use this page when implementing, configuring, or debugging the Vuetify 4 ${title} component.`;
  }

  if (normalizedSection === 'features') {
    return `Use this page for framework-level Vuetify 4 behavior related to ${title}, especially setup and global configuration decisions.`;
  }

  if (normalizedSection === 'styles and animations') {
    return `Use this page when styling Vuetify 4 applications or applying utility classes and transitions related to ${title}.`;
  }

  if (normalizedSection === 'directives') {
    return `Use this page when applying the Vuetify 4 ${title} directive and its runtime behavior.`;
  }

  return `Use this page when you need Vuetify 4 guidance about ${title}.`;
}
