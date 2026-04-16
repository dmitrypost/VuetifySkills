import path from 'node:path';
import { copyCorpus, ensureSkillsReady, homeDir, logInstalled, parseScope, readFrameworkFile, writeFile } from './common.ts';

const SKILL_NAME = 'vuetify4';
const SKILL_DESCRIPTION = 'Vuetify 4 documentation corpus (release 4.0.5). Use for Vuetify 4-only component, API, directive, and composable questions; prefer API pages for contracts and guide pages for usage examples.';

async function main(): Promise<void> {
  await ensureSkillsReady();

  const globalRoot = path.join(homeDir(), '.claude', 'skills', SKILL_NAME);
  const scope = parseScope(process.argv, globalRoot);
  const skillRoot = scope.kind === 'global' ? scope.root : path.join(scope.root, '.claude', 'skills', SKILL_NAME);

  await copyCorpus(skillRoot);

  const guide = await readFrameworkFile(path.join('claude', 'CLAUDE.md'));
  const skillMd = `---\nname: ${SKILL_NAME}\ndescription: ${SKILL_DESCRIPTION}\n---\n\n${guide}`;
  await writeFile(path.join(skillRoot, 'SKILL.md'), skillMd);

  if (scope.kind === 'local') {
    await writeFile(path.join(scope.root, 'CLAUDE.md'), guide);
  }

  const targets = [skillRoot, path.join(skillRoot, 'SKILL.md')];
  if (scope.kind === 'local') targets.push(path.join(scope.root, 'CLAUDE.md'));
  logInstalled('claude', scope, targets);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
