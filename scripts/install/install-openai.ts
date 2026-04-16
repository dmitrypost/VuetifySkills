import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { ensureSkillsReady, frameworksRoot, homeDir, logInstalled, parseScope, skillsRoot } from './common.ts';

const STORE_NAME = 'vuetify4-skills';
const BATCH_SIZE = 50;

type OpenAIClient = {
  vectorStores: {
    create(params: { name: string }): Promise<{ id: string }>;
    fileBatches: {
      uploadAndPoll(
        vectorStoreId: string,
        params: { files: NodeJS.ReadableStream[] },
      ): Promise<{ file_counts: { completed: number; failed: number } }>;
    };
  };
};

async function main(): Promise<void> {
  await ensureSkillsReady();

  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY environment variable is required.');
  }

  let OpenAI: new (config?: unknown) => OpenAIClient;
  try {
    const mod = await import('openai' as string);
    OpenAI = mod.default;
  } catch {
    throw new Error('The "openai" package is required. Install it with: npm install openai');
  }

  const globalRoot = path.join(homeDir(), '.config', 'vuetify4-skills');
  const scope = parseScope(process.argv, globalRoot);
  const metadataPath = scope.kind === 'global'
    ? path.join(scope.root, 'openai-vector-store.json')
    : path.join(scope.root, '.vuetify4-skills-openai.json');

  const pageFiles = await collectPages(path.join(skillsRoot, 'pages'));
  console.log(`Found ${pageFiles.length} markdown pages to upload.`);

  const client = new OpenAI();
  const store = await client.vectorStores.create({ name: STORE_NAME });
  console.log(`Created vector store ${store.id}`);

  for (let i = 0; i < pageFiles.length; i += BATCH_SIZE) {
    const batch = pageFiles.slice(i, i + BATCH_SIZE);
    const streams = batch.map(file => fs.createReadStream(file));
    const result = await client.vectorStores.fileBatches.uploadAndPoll(store.id, { files: streams });
    console.log(`Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${result.file_counts.completed}/${batch.length} completed, ${result.file_counts.failed} failed`);
  }

  const systemPrompt = await fsp.readFile(path.join(frameworksRoot, 'openai-responses', 'system-prompt.md'), 'utf8');
  const metadata = {
    vectorStoreId: store.id,
    storeName: STORE_NAME,
    uploadedAt: new Date().toISOString(),
    fileCount: pageFiles.length,
    systemPrompt,
  };

  await fsp.mkdir(path.dirname(metadataPath), { recursive: true });
  await fsp.writeFile(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');

  logInstalled('openai-responses', scope, [`vector store: ${store.id}`, metadataPath]);
}

async function collectPages(root: string): Promise<string[]> {
  const out: string[] = [];
  const entries = await fsp.readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) {
      out.push(...await collectPages(full));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      out.push(full);
    }
  }
  return out;
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
