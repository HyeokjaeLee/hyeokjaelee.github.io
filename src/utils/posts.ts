import { getCollection } from 'astro:content';

import type { PostData } from '@shared/types';

export const POST_PER_PAGE = 20;

// Eagerly resolve every content asset under contents/ to its built asset URL so
// frontmatter `titleImage` paths (e.g. "assets/<file>") resolve to optimized
// assets. Body images are handled separately by Astro's markdown pipeline.
// posts.ts lives in src/utils/, so root contents/ is two levels up.
//
// The `contents/_shared/assets/` directory holds common images reusable across
// posts. Reference them with the `@shared/` prefix in frontmatter:
//   titleImage: '@shared/assets/dev-diary.png'
const imageUrls = import.meta.glob('../../contents/**/assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export function resolveTitleImage(slug: string, titleImage?: string): string {
  if (!titleImage) {
    return '';
  }

  // Remote image (e.g. GitHub user-content URL) — use as-is.
  if (/^https?:\/\//.test(titleImage)) {
    return titleImage;
  }

  // Shared common asset: @shared/assets/<file> → contents/_shared/assets/<file>
  if (titleImage.startsWith('@shared/')) {
    return (
      imageUrls[
        `../../contents/_shared/${titleImage.slice('@shared/'.length)}`
      ] ?? ''
    );
  }

  return imageUrls[`../../contents/${slug}/${titleImage}`] ?? '';
}

function formatDate(date: Date): string {
  const yy = date.getFullYear().toString().slice(2);
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  return `${yy}년 ${mm}월 ${dd}일`;
}

/** Read the full blog collection, sorted newest-first, as serializable data. */
export async function getAllPosts(): Promise<PostData[]> {
  const collection = await getCollection('blog');

  return collection
    .map((post) => {
      const { title, titleImage, description, tags, date } = post.data;

      return {
        slug: `/${post.id}/`,
        title,
        titleImage: resolveTitleImage(post.id, titleImage),
        tags,
        description,
        date: date.toISOString(),
        dateLabel: formatDate(date),
      } satisfies PostData;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Unique, sorted list of every tag used across all posts (build-time). */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tagSet = new Set<string>();

  for (const post of posts) {
    for (const tag of post.tags) {
      tagSet.add(tag);
    }
  }

  return Array.from(tagSet).sort();
}
