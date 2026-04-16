import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { WorkspacePaths } from './types.ts';

export const DOCS_HOST = 'https://vuetifyjs.com';
export const DOCS_PREFIX = `${DOCS_HOST}/en/`;
export const REPO_RAW_ROOT = 'https://raw.githubusercontent.com/vuetifyjs/vuetify/master';
export const REPO_BLOB_ROOT = 'https://github.com/vuetifyjs/vuetify/blob/master';
export const USER_AGENT = 'Vuetify4SkillsGenerator/1.0';
export const COMPONENT_ROOT_SUFFIXES: readonly string[] = ['WindowItem', 'Window', 'VerticalActions', 'VerticalItem', 'Actions', 'Action', 'Subtitle', 'Title', 'Text', 'Group', 'Item', 'Header', 'Footer', 'Rows', 'Row', 'Controls', 'Control', 'Months', 'Month', 'Years', 'Year', 'Clock', 'Media', 'Img', 'Divider'];

export function getWorkspacePaths(metaUrl: string): WorkspacePaths {
  const __dirname = path.dirname(fileURLToPath(metaUrl));
  const workspaceRoot = path.resolve(__dirname, '..');
  const outputRoot = path.join(workspaceRoot, 'skills', 'vuetify4');

  return {
    workspaceRoot,
    navPath: path.join(workspaceRoot, 'data', 'vuetify4-nav.json'),
    outputRoot,
    pagesRoot: path.join(outputRoot, 'pages'),
    frameworksRoot: path.join(outputRoot, 'frameworks'),
  };
}
