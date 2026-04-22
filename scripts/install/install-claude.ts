import path from 'node:path';
import { SKILL_NAME } from '../vuetify4/config.ts';
import { copyCorpus, ensureSkillsReady, homeDir, logInstalled, parseScope, readFrameworkFile, writeFile } from './common.ts';

async function main(): Promise<void> {
  await ensureSkillsReady();

  const globalRoot = path.join(homeDir(), '.claude', 'skills', SKILL_NAME);
  const scope = parseScope(process.argv, globalRoot);
  const skillRoot = scope.kind === 'global' ? scope.root : path.join(scope.root, '.claude', 'skills', SKILL_NAME);

  await copyCorpus(skillRoot);

  if (scope.kind === 'local') {
    const guide = await readFrameworkFile(path.join('claude', 'CLAUDE.md'));
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
