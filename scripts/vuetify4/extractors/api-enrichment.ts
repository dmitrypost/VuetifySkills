import { COMPONENT_ROOT_SUFFIXES, REPO_BLOB_ROOT, REPO_RAW_ROOT } from '../config.ts';
import { countApiSections, kebabToCamel, kebabToPascal, unique } from '../core-utils.ts';
import { tryFetch } from '../fetch-utils.ts';
import { extractBlockAfterMarker, extractLeadingSourceSnippet, extractNamedObjectBlock, extractTypeLiteral, parseExposedReturnKeys, parseTopLevelKeys } from '../source-parser.ts';
import type { ApiContext, ApiDetails, ApiLocaleData, ApiSourceSignals, Entry } from '../types.ts';

type LocaleResult = { name: string; url: string; data: ApiLocaleData };
type SourceFileResult = { path: string; content: string };

export async function extractApiDetails(entry: Entry): Promise<ApiDetails> {
  const context = getApiContext(entry.url);
  const [localeData, sourceFile] = await Promise.all([
    fetchApiLocale(context.localeNames),
    fetchFirstAvailableSource(context.sourceCandidates),
  ]);

  return {
    kind: context.kind,
    apiName: context.apiName,
    slug: context.slug,
    localeName: localeData?.name || null,
    localeUrl: localeData?.url || null,
    localeData: localeData?.data || null,
    sourceFile: sourceFile
      ? {
          path: sourceFile.path,
          url: `${REPO_BLOB_ROOT}/${sourceFile.path}`,
        }
      : null,
    sourceSignals: sourceFile
      ? extractApiSourceSignals(context, sourceFile.content, sourceFile.path)
      : null,
  };
}

export { countApiSections };

function getApiContext(url: string): ApiContext {
  const slug = new URL(url).pathname.split('/').filter(Boolean).at(-1) || '';

  if (slug === 'globals') {
    return {
      kind: 'globals',
      slug,
      apiName: 'globals',
      localeNames: [],
      sourceCandidates: [
        'packages/vuetify/src/entry-bundler.ts',
        'packages/vuetify/src/composables/index.ts',
      ],
    };
  }

  if (slug.endsWith('-directive')) {
    const apiName = slug.replace(/-directive$/, '');
    const directiveName = apiName.replace(/^v-/, '');

    return {
      kind: 'directive',
      slug,
      apiName,
      localeNames: [apiName],
      sourceCandidates: [
        `packages/vuetify/src/directives/${directiveName}/index.ts`,
        `packages/vuetify/src/directives/${directiveName}/index.tsx`,
        `packages/vuetify/src/directives/${directiveName}.ts`,
        `packages/vuetify/src/directives/${directiveName}.tsx`,
      ],
    };
  }

  if (slug.startsWith('use-')) {
    const apiName = kebabToCamel(slug);
    const baseName = apiName.replace(/^use/, '');
    const lowerStem = baseName ? baseName.charAt(0).toLowerCase() + baseName.slice(1) : apiName;
    const flatStem = baseName.toLowerCase();

    return {
      kind: 'composable',
      slug,
      apiName,
      localeNames: [apiName],
      sourceCandidates: unique([
        `packages/vuetify/src/composables/${apiName}.ts`,
        `packages/vuetify/src/composables/${apiName}.tsx`,
        `packages/vuetify/src/composables/${lowerStem}.ts`,
        `packages/vuetify/src/composables/${lowerStem}.tsx`,
        `packages/vuetify/src/composables/${flatStem}.ts`,
        `packages/vuetify/src/composables/${flatStem}.tsx`,
        `packages/vuetify/src/composables/${lowerStem}/index.ts`,
        `packages/vuetify/src/composables/${flatStem}/index.ts`,
      ]),
    };
  }

  const apiName = kebabToPascal(slug);
  const candidates: string[] = [];

  for (const root of getComponentRoots(apiName)) {
    candidates.push(`packages/vuetify/src/components/${root}/${apiName}.tsx`);
    candidates.push(`packages/vuetify/src/components/${root}/${apiName}.ts`);
    candidates.push(`packages/vuetify/src/labs/${root}/${apiName}.tsx`);
    candidates.push(`packages/vuetify/src/labs/${root}/${apiName}.ts`);
  }

  return {
    kind: 'component',
    slug,
    apiName,
    localeNames: [apiName],
    sourceCandidates: unique(candidates),
  };
}

function getComponentRoots(apiName: string): string[] {
  const roots = new Set<string>([apiName]);
  const queue: string[] = [apiName];

  while (queue.length) {
    const current = queue.shift()!;

    for (const suffix of COMPONENT_ROOT_SUFFIXES) {
      if (current.length > suffix.length && current.endsWith(suffix)) {
        const next = current.slice(0, -suffix.length);
        if (next.startsWith('V') && !roots.has(next)) {
          roots.add(next);
          queue.push(next);
        }
      }
    }
  }

  return [...roots];
}

async function fetchApiLocale(localeNames: readonly string[]): Promise<LocaleResult | null> {
  for (const name of localeNames) {
    const url = `${REPO_RAW_ROOT}/packages/api-generator/src/locale/en/${name}.json`;
    const response = await tryFetch(url);
    if (!response?.ok) continue;

    return {
      name,
      url: `${REPO_BLOB_ROOT}/packages/api-generator/src/locale/en/${name}.json`,
      data: JSON.parse(await response.text()) as ApiLocaleData,
    };
  }

  return null;
}

async function fetchFirstAvailableSource(paths: readonly string[]): Promise<SourceFileResult | null> {
  for (const filePath of paths) {
    const response = await tryFetch(`${REPO_RAW_ROOT}/${filePath}`);
    if (!response?.ok) continue;

    return {
      path: filePath,
      content: await response.text(),
    };
  }

  return null;
}

function extractApiSourceSignals(context: ApiContext, source: string, filePath: string): ApiSourceSignals {
  const signals: ApiSourceSignals = {
    filePath,
    language: filePath.endsWith('.tsx') ? 'tsx' : 'ts',
    props: [],
    events: [],
    slots: [],
    exposed: [],
    snippets: [],
  };

  if (context.kind === 'component') {
    const propsBlock = extractBlockAfterMarker(source, 'propsFactory({');
    const emitsBlock = extractNamedObjectBlock(source, 'emits');
    const slotsBlock = extractTypeLiteral(source, `${context.apiName}Slots`);

    signals.props = propsBlock ? parseTopLevelKeys(propsBlock).filter(key => !key.startsWith('...')) : [];
    signals.events = emitsBlock ? parseTopLevelKeys(emitsBlock).filter(key => !key.startsWith('...')) : [];
    signals.slots = slotsBlock ? parseTopLevelKeys(slotsBlock).filter(key => !key.startsWith('...')) : [];

    if (propsBlock) signals.snippets.push({ label: 'propsFactory', code: propsBlock.trim() });
    if (slotsBlock) signals.snippets.push({ label: 'slots', code: slotsBlock.trim() });
    if (emitsBlock) signals.snippets.push({ label: 'emits', code: emitsBlock.trim() });
  } else if (context.kind === 'composable') {
    signals.exposed = parseExposedReturnKeys(source, context.apiName);
    signals.snippets.push({ label: 'composable source', code: extractLeadingSourceSnippet(source) });
  } else if (context.kind === 'directive') {
    signals.snippets.push({ label: 'directive source', code: extractLeadingSourceSnippet(source) });
  } else if (context.kind === 'globals') {
    signals.snippets.push({ label: 'global exports', code: extractLeadingSourceSnippet(source) });
  }

  signals.snippets = signals.snippets.slice(0, 3);
  return signals;
}
