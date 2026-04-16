import path from 'node:path';
import { load } from 'cheerio';
import { cleanText, cleanYamlValue, firstMatch, rawMarkdownUrl, unique, uniqueByCode, uniqueMatches } from '../core-utils.ts';
import { fetchWithRetry, tryFetch } from '../fetch-utils.ts';
import type { CodeBlock, Entry, Extracted } from '../types.ts';

export async function extractPage(url: string): Promise<Extracted> {
  const markdownResponse = await tryFetch(rawMarkdownUrl(url));
  if (markdownResponse?.ok) {
    const markdown = await markdownResponse.text();
    return extractFromMarkdown(url, markdown);
  }

  const htmlResponse = await fetchWithRetry(url);
  const html = await htmlResponse.text();
  return extractFromHtml(url, html);
}

export function buildFallbackExtraction(entry: Entry, errorMessage: string): Extracted {
  return {
    sourceType: 'fallback',
    title: entry.title,
    description: `Automated extraction failed for this page: ${errorMessage}`,
    headings: [],
    paragraphs: [
      `Use the source page directly when you need details for ${entry.title}.`,
      'The generator kept this page in the corpus so the navigation map remains complete for Vuetify 4.',
    ],
    codeBlocks: [],
  };
}

function extractFromMarkdown(url: string, markdown: string): Extracted {
  const frontmatterDescription = extractFrontmatterDescription(markdown);
  const body = stripFrontmatter(markdown).trim();
  const codeBlocks: CodeBlock[] = [...body.matchAll(/```([^\n]*)\n([\s\S]*?)```/g)]
    .map(match => ({
      language: match[1].trim() || 'txt',
      code: match[2].trim(),
    }))
    .filter(block => block.code)
    .slice(0, 8);

  const cleaned = body.replace(/```([^\n]*)\n[\s\S]*?```/g, '\n');
  const title = firstMatch(cleaned, /^#\s+(.+)$/m) || path.basename(new URL(url).pathname);
  const headings = uniqueMatches(cleaned, /^##+\s+(.+)$/gm, 18);
  const paragraphs = extractMarkdownParagraphs(cleaned, title);

  return {
    sourceType: 'markdown',
    title,
    description: frontmatterDescription || paragraphs[0] || '',
    headings,
    paragraphs,
    codeBlocks,
  };
}

function extractFromHtml(url: string, html: string): Extracted {
  const $ = load(html);
  const main = $('main').first().clone();
  main.find('script, style, nav, aside').remove();

  const title = cleanText(main.find('h1').first().text()) || cleanText($('title').first().text().replace(/\s+[-—]\s+Vuetify$/, ''));
  const description = cleanText($('meta[name="description"]').attr('content') || '');
  const headings = unique(
    main
      .find('h2, h3')
      .map((_, element) => cleanText($(element).text()))
      .get(),
  ).slice(0, 18);

  const paragraphs = unique(
    main
      .find('p')
      .map((_, element) => cleanText($(element).text()))
      .get()
      .filter((text: string) => text.length > 30),
  ).slice(0, 8);

  const codeBlocks = uniqueByCode(
    main
      .find('pre code')
      .map((_, element): CodeBlock => ({
        language: cleanText($(element).attr('class') || '').replace(/^language-/, '') || 'txt',
        code: $(element).text().trim(),
      }))
      .get()
      .filter((block: CodeBlock) => block.code),
  ).slice(0, 8);

  return {
    sourceType: 'html',
    title,
    description: paragraphs[0] || description,
    headings,
    paragraphs,
    codeBlocks,
  };
}

function stripFrontmatter(markdown: string): string {
  if (!markdown.startsWith('---\n')) return markdown;

  const end = markdown.indexOf('\n---\n', 4);
  if (end === -1) return markdown;
  return markdown.slice(end + 5);
}

function extractFrontmatterDescription(markdown: string): string {
  if (!markdown.startsWith('---\n')) return '';

  const end = markdown.indexOf('\n---\n', 4);
  if (end === -1) return '';

  const frontmatter = markdown.slice(4, end);
  const match = frontmatter.match(/^\s*description:\s*(.+)$/m);
  return cleanYamlValue(match?.[1] || '');
}

function extractMarkdownParagraphs(markdown: string, title: string): string[] {
  const blocks = markdown.split(/\n\s*\n/g);
  const paragraphs: string[] = [];

  for (const block of blocks) {
    const text = cleanText(block.replace(/^>\s?/gm, '').replace(/<[^>]+>/g, ' '));
    if (!text) continue;
    if (text === title) continue;
    if (/^#{1,6}\s/.test(block)) continue;
    if (/^[-*]\s/.test(block)) continue;
    if (/^\d+\.\s/.test(block)) continue;
    if (/^:::/m.test(block)) continue;
    if (/^import\s/m.test(block)) continue;
    if (/^export\s/m.test(block)) continue;
    if (/^<[^>]+>/m.test(block)) continue;
    if (/\bfrom\s+['"][^'"]+['"]/.test(block) && text.length < 120) continue;

    paragraphs.push(text);
    if (paragraphs.length === 8) break;
  }

  return paragraphs;
}
