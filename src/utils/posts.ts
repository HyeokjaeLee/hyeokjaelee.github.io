import { getCollection } from 'astro:content';

import type { PostData } from '@shared/types';

// Eagerly resolve every image under src/images to its built asset URL so that
// frontmatter `titleImage` relative paths (e.g. "../images/contents/...") and
// markdown body images can be served as optimized assets.
const imageUrls = import.meta.glob('../images/**/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function resolveTitleImage(titleImage?: string): string {
  if (!titleImage) {
    return '';
  }

  // Remote image (e.g. GitHub user-content URL) — use as-is.
  if (/^https?:\/\//.test(titleImage)) {
    return titleImage;
  }

  return imageUrls[titleImage] ?? '';
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
        titleImage: resolveTitleImage(titleImage),
        tags,
        description,
        date: date.toISOString(),
        dateLabel: formatDate(date),
      } satisfies PostData;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}
