import path from 'node:path';
import { REPO_RAW_ROOT } from './config.ts';
import type { ApiLocaleData, CodeBlock, Entry, NavData, NavSection } from './types.ts';

export function normalizeSections(nav: NavData): NavSection[] {
  if (Array.isArray(nav.sections)) return nav.sections;
  return nav.sections?.value ?? [];
}

export function buildEntries(navSections: NavSection[], docsPrefix: string): Entry[] {
  const seen = new Set<string>();
  const entries: Entry[] = [];

  for (const section of navSections) {
    for (const link of section.links) {
      if (!link.href?.startsWith(docsPrefix)) continue;

      const normalizedUrl = normalizeUrl(link.href);
      if (seen.has(normalizedUrl)) continue;

      seen.add(normalizedUrl);
      entries.push({
        section: section.section,
        title: link.text.trim(),
        url: normalizedUrl,
      });
    }
  }

  return entries;
}

export function normalizeUrl(url: string): string {
  const normalized = new URL(url);
  normalized.hash = '';

  if (normalized.pathname.endsWith('/') && normalized.pathname !== '/en/') {
    normalized.pathname = normalized.pathname.slice(0, -1);
  }

  return normalized.toString();
}

export function outputFileForUrl(pagesRoot: string, url: string): string {
  const pathname = new URL(url).pathname;
  const localPath = pathname.replace(/^\/en\//, '').replace(/^\//, '');
  return path.join(pagesRoot, `${localPath}.md`);
}

export function rawMarkdownUrl(url: string): string {
  const pathname = new URL(url).pathname.replace(/\/$/, '');
  return `${REPO_RAW_ROOT}/packages/docs/src/pages${pathname}.md`;
}

export function firstMatch(text: string, pattern: RegExp): string {
  const match = text.match(pattern);
  return match?.[1]?.trim() || '';
}

export function uniqueMatches(text: string, pattern: RegExp, limit: number): string[] {
  return unique([...text.matchAll(pattern)].map(match => cleanText(match[1]))).slice(0, limit);
}

export function cleanText(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

export function cleanYamlValue(value: string): string {
  return value.replace(/^['"]|['"]$/g, '').trim();
}

export function kebabToCamel(value: string): string {
  return value.replace(/-([a-z0-9])/g, (_, character: string) => character.toUpperCase());
}

export function kebabToPascal(value: string): string {
  const camel = kebabToCamel(value);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

export function unique<T>(values: readonly T[]): T[] {
  return [...new Set(values.filter(Boolean))];
}

export function uniqueByCode(blocks: readonly CodeBlock[]): CodeBlock[] {
  const seen = new Set<string>();
  const results: CodeBlock[] = [];

  for (const block of blocks) {
    const key = `${block.language}::${block.code}`;
    if (seen.has(key)) continue;
    seen.add(key);
    results.push(block);
  }

  return results;
}

export function countApiSections(localeData: ApiLocaleData | null | undefined): Record<string, number> | null {
  if (!localeData) return null;

  return Object.fromEntries(
    Object.entries(localeData).map(([sectionName, value]) => {
      const count = value && typeof value === 'object' && !Array.isArray(value)
        ? Object.keys(value).length
        : value
          ? 1
          : 0;
      return [sectionName, count];
    }),
  );
}

export function titleCase(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function yamlString(value: unknown): string {
  return JSON.stringify(String(value ?? ''));
}

export function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function toPosix(value: string): string {
  return value.replace(/\\/g, '/');
}

export async function mapLimit<T, R>(
  items: readonly T[],
  limit: number,
  iteratee: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let nextIndex = 0;

  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const currentIndex = nextIndex;
      nextIndex += 1;

      if (currentIndex >= items.length) return;
      results[currentIndex] = await iteratee(items[currentIndex], currentIndex);
    }
  });

  await Promise.all(workers);
  return results;
}
