import path from 'node:path';
import { copyCorpus, ensureSkillsReady, homeDir, logInstalled, parseScope, readFrameworkFile, writeFile } from './common.ts';

async function main(): Promise<void> {
  await ensureSkillsReady();

  const globalRoot = path.join(homeDir(), '.copilot-skills', 'vuetify4');
  const scope = parseScope(process.argv, globalRoot);

  const corpusDir = scope.kind === 'global' ? scope.root : path.join(scope.root, 'skills', 'vuetify4');
  await copyCorpus(corpusDir);

  const guide = await readFrameworkFile(path.join('copilot', 'AGENTS.md'));
  const agentsTarget = scope.kind === 'global'
    ? path.join(homeDir(), '.copilot-skills', 'AGENTS.md')
    : path.join(scope.root, 'AGENTS.md');
  await writeFile(agentsTarget, guide);

  logInstalled('copilot', scope, [corpusDir, agentsTarget]);
  if (scope.kind === 'global') {
    console.log('Note: GitHub Copilot loads AGENTS.md from a project root. For per-project use, re-run with a target path.');
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
