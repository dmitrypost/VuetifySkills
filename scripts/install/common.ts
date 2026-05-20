import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const skillsRoot = path.join(repoRoot, 'skills', 'vuetify4');
export const frameworksRoot = path.join(skillsRoot, 'frameworks');

export type InstallScope =
  | { kind: 'global'; root: string }
  | { kind: 'local'; root: string };

export function parseScope(argv: readonly string[], globalRoot: string): InstallScope {
  const target = argv[2];
  if (!target) {
    return { kind: 'global', root: globalRoot };
  }
  return { kind: 'local', root: path.resolve(target) };
}

export function homeDir(): string {
  return os.homedir();
}

export async function ensureSkillsReady(): Promise<void> {
  try {
    await fs.access(path.join(skillsRoot, 'manifest.json'));
  } catch {
    throw new Error(`Skills corpus not found at ${skillsRoot}. Run "npm run generate" first.`);
  }
}

export async function copyCorpus(destination: string): Promise<void> {
  await fs.mkdir(destination, { recursive: true });
  await fs.cp(skillsRoot, destination, {
    recursive: true,
    filter: (source) => {
      const relative = path.relative(skillsRoot, source);
      if (relative === 'frameworks' || relative.startsWith(`frameworks${path.sep}`)) return false;
      if (relative === 'failures.json') return false;
      if (relative === 'SKILL.md') return false;
      return true;
    },
  });
}

export async function writeFile(filePath: string, contents: string): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, contents, 'utf8');
}

export async function readFrameworkFile(relative: string): Promise<string> {
  return fs.readFile(path.join(frameworksRoot, relative), 'utf8');
}

export function logInstalled(framework: string, scope: InstallScope, targets: readonly string[]): void {
  const label = scope.kind === 'global' ? 'global' : `local (${scope.root})`;
  console.log(`Installed ${framework} skill (${label}):`);
  for (const target of targets) console.log(`  ${target}`);
}
