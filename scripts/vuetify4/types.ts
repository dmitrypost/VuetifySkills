export type WorkspacePaths = {
  workspaceRoot: string;
  navPath: string;
  outputRoot: string;
  pagesRoot: string;
  frameworksRoot: string;
};

export type NavLink = {
  href: string;
  text: string;
};

export type NavSection = {
  section: string;
  links: NavLink[];
};

export type NavData = {
  version: string;
  docsBuild: string;
  capturedFrom?: string;
  sections: NavSection[] | { value: NavSection[] };
};

export type Entry = {
  section: string;
  title: string;
  url: string;
};

export type CodeBlock = {
  language: string;
  code: string;
};

export type ApiSnippet = {
  label: string;
  code: string;
};

export type ApiKind = 'globals' | 'directive' | 'composable' | 'component';

export type ApiSourceSignals = {
  filePath: string;
  language: 'ts' | 'tsx';
  props: string[];
  events: string[];
  slots: string[];
  exposed: string[];
  snippets: ApiSnippet[];
};

export type ApiLocaleValue = string | Record<string, unknown> | null | undefined;

export type ApiLocaleData = Record<string, ApiLocaleValue>;

export type ApiDetails = {
  kind: ApiKind;
  apiName: string;
  slug: string;
  localeName: string | null;
  localeUrl: string | null;
  localeData: ApiLocaleData | null;
  sourceFile: { path: string; url: string } | null;
  sourceSignals: ApiSourceSignals | null;
};

export type Extracted = {
  sourceType: 'markdown' | 'html' | 'fallback';
  title: string;
  description: string;
  headings: string[];
  paragraphs: string[];
  codeBlocks: CodeBlock[];
  apiDetails?: ApiDetails;
};

export type PageStatus = 'ok' | 'error';

export type PageRecord = {
  section: string;
  navTitle: string;
  title: string;
  url: string;
  file: string;
  sourceType: string;
  summary: string;
  headings: string[];
  apiKind: ApiKind | null;
  apiSectionCounts: Record<string, number> | null;
  status: PageStatus;
  error: string | null;
  enrichmentError: string | null;
};

export type ApiContext = {
  kind: ApiKind;
  slug: string;
  apiName: string;
  localeNames: string[];
  sourceCandidates: string[];
};
