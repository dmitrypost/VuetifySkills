import { unique } from './core-utils.ts';

export function extractBlockAfterMarker(source: string, marker: string): string {
  const start = source.indexOf(marker);
  if (start === -1) return '';

  const blockStart = source.indexOf('{', start);
  if (blockStart === -1) return '';
  return source.slice(blockStart, findMatchingBrace(source, blockStart) + 1);
}

export function extractNamedObjectBlock(source: string, propertyName: string): string {
  const pattern = new RegExp(`${propertyName}\\s*:\\s*\\{`);
  const match = pattern.exec(source);
  if (!match) return '';

  const blockStart = source.indexOf('{', match.index);
  if (blockStart === -1) return '';
  return source.slice(blockStart, findMatchingBrace(source, blockStart) + 1);
}

export function extractTypeLiteral(source: string, typeName: string): string {
  const pattern = new RegExp(`export\\s+type\\s+${typeName}\\s*=\\s*\\{`);
  const match = pattern.exec(source);
  if (!match) return '';

  const blockStart = source.indexOf('{', match.index);
  if (blockStart === -1) return '';
  return source.slice(blockStart, findMatchingBrace(source, blockStart) + 1);
}

export function extractLeadingSourceSnippet(source: string): string {
  return source.split('\n').slice(0, 40).join('\n').trim();
}

export function parseExposedReturnKeys(source: string, apiName: string): string[] {
  const pattern = new RegExp(`export\\s+function\\s+${apiName}\\s*\\([^)]*\\)\\s*\\{`);
  const match = pattern.exec(source);
  if (!match) return [];

  const bodyStart = source.indexOf('{', match.index);
  if (bodyStart === -1) return [];
  const body = source.slice(bodyStart + 1, findMatchingBrace(source, bodyStart));
  const returnMatch = body.match(/return\s+\{([\s\S]*?)\n\}/m);
  if (!returnMatch) return [];

  return parseTopLevelKeys(`{${returnMatch[1]}}`).filter(key => !key.startsWith('...'));
}

export function parseTopLevelKeys(block: string): string[] {
  const keys: string[] = [];
  let depth = 0;
  let token = '';
  let inString = false;
  let stringChar = '';
  let escape = false;
  let inLineComment = false;
  let inBlockComment = false;

  for (let index = 0; index < block.length; index += 1) {
    const char = block[index];
    const next = block[index + 1];

    if (inLineComment) {
      if (char === '\n') inLineComment = false;
      continue;
    }

    if (inBlockComment) {
      if (char === '*' && next === '/') {
        inBlockComment = false;
        index += 1;
      }
      continue;
    }

    if (inString) {
      token += char;
      if (escape) {
        escape = false;
      } else if (char === '\\') {
        escape = true;
      } else if (char === stringChar) {
        inString = false;
      }
      continue;
    }

    if (char === '/' && next === '/') {
      inLineComment = true;
      index += 1;
      continue;
    }

    if (char === '/' && next === '*') {
      inBlockComment = true;
      index += 1;
      continue;
    }

    if (char === '\'' || char === '"' || char === '`') {
      inString = true;
      stringChar = char;
      token += char;
      continue;
    }

    if (char === '{' || char === '[' || char === '(') {
      depth += 1;
      token += char;
      continue;
    }

    if (char === '}' || char === ']' || char === ')') {
      depth -= 1;
      token += char;
      continue;
    }

    if (depth === 1 && (char === ':' || char === ',' || char === '\n')) {
      const normalized = token.trim();
      const key = normalized.replace(/,$/, '').trim();
      if (char === ':' && key) {
        keys.push(key.replace(/^['"]|['"]$/g, ''));
      } else if ((char === ',' || char === '\n') && key.startsWith('...')) {
        keys.push(key);
      }
      token = '';
      continue;
    }

    token += char;
  }

  return unique(keys.filter(Boolean));
}

export function findMatchingBrace(source: string, startIndex: number): number {
  let depth = 0;
  let inString = false;
  let stringChar = '';
  let escape = false;

  for (let index = startIndex; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      if (escape) {
        escape = false;
      } else if (char === '\\') {
        escape = true;
      } else if (char === stringChar) {
        inString = false;
      }
      continue;
    }

    if (char === '\'' || char === '"' || char === '`') {
      inString = true;
      stringChar = char;
      continue;
    }

    if (char === '{') depth += 1;
    if (char === '}') {
      depth -= 1;
      if (depth === 0) return index;
    }
  }

  return source.length - 1;
}
