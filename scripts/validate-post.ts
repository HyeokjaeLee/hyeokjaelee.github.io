import { readFileSync } from 'node:fs';
import { relative } from 'node:path';
import matter from 'gray-matter';
import { postSchema } from '../src/content/schema';

// CJK Unified Ideographs + Extension A + Compatibility — Han characters used in Chinese.
// Korean Hangul (U+AC00–U+D7AF) and Japanese kana are intentionally excluded.
const CJK_IDEOGRAPH = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]/u;

function findChinese(raw: string): { line: number; snippet: string }[] {
  const hits: { line: number; snippet: string }[] = [];
  const lines = raw.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (CJK_IDEOGRAPH.test(lines[i])) {
      hits.push({ line: i + 1, snippet: lines[i].trim().slice(0, 60) });
    }
  }
  return hits;
}

/**
 * Pre-check YAML frontmatter formatting before gray-matter parsing.
 * Catches common mistakes: missing newlines after ---, merged fields, etc.
 */
function checkFrontmatterFormat(raw: string): string[] {
  const errors: string[] = [];
  const lines = raw.split('\n');

  // Line 0 must be exactly '---'
  if (lines[0] !== '---') {
    if (lines[0].startsWith('---')) {
      errors.push(
        `line 1: opening '---' must be on its own line (found: "${lines[0].slice(0, 50)}...")`,
      );
    } else {
      errors.push('line 1: must start with ---');
    }
    return errors; // can't safely check further
  }

  // Find closing ---
  let closeIdx = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      closeIdx = i;
      break;
    }
  }
  if (closeIdx === -1) {
    errors.push('missing closing --- delimiter');
    return errors;
  }

  // Each frontmatter line (1..closeIdx-1) must have at most one YAML key
  const knownKeys = ['title', 'description', 'date', 'tags', 'titleImage', 'author'];
  for (let i = 1; i < closeIdx; i++) {
    const line = lines[i];

    // Count how many known keys appear on this line
    let keysOnLine: string[] = [];
    for (const key of knownKeys) {
      const pattern = new RegExp(`\\b${key}:`);
      if (pattern.test(line)) {
        keysOnLine.push(key);
      }
    }

    if (keysOnLine.length > 1) {
      errors.push(
        `line ${i + 1}: multiple YAML keys on one line (${keysOnLine.join(', ')}) — each field must be on its own line`,
      );
    }
  }

  return errors;
}

const files = process.argv.slice(2);

if (files.length === 0) {
  console.log('usage: bun run scripts/validate-post.ts <markdown-files...>');
  process.exit(0);
}

let failed = 0;

for (const file of files) {
  const rel = relative(process.cwd(), file) || file;
  const raw = readFileSync(file, 'utf8');
  const errors: string[] = [];

  if (!raw.startsWith('---')) {
    console.log(`✖ ${rel}: missing frontmatter`);
    failed++;
    continue;
  }

  // Pre-check: catch YAML formatting issues before gray-matter
  const fmtErrors = checkFrontmatterFormat(raw);
  if (fmtErrors.length > 0) {
    console.log(`✖ ${rel}`);
    for (const error of fmtErrors) {
      console.log(`  • ${error}`);
    }
    failed++;
    continue;
  }

  // Parse with gray-matter (wrapped in try-catch for safety)
  let parsed: matter.GrayMatterFile<string>;
  try {
    parsed = matter(raw);
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.log(`✖ ${rel}`);
    console.log(`  • frontmatter parse error: ${msg}`);
    failed++;
    continue;
  }

  const result = postSchema.safeParse(parsed.data);
  if (!result.success) {
    for (const issue of result.error.issues) {
      const field = issue.path.join('.') || '(root)';
      errors.push(`${field}: ${issue.message}`);
    }
  }

  const chineseHits = findChinese(raw);
  if (chineseHits.length > 0) {
    errors.push(
      `Chinese (CJK ideograph) characters detected — ${chineseHits.length} line(s)`,
    );
    for (const hit of chineseHits.slice(0, 5)) {
      errors.push(`line ${hit.line}: ${hit.snippet}`);
    }
  }

  if (errors.length === 0) {
    console.log(`✓ ${rel}`);
    continue;
  }

  console.log(`✖ ${rel}`);
  for (const error of errors) {
    console.log(`  • ${error}`);
  }
  failed++;
}

process.exit(failed > 0 ? 1 : 0);
