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

  const parsed = matter(raw);
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
