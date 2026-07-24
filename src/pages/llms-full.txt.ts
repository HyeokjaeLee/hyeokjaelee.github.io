import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

import { SITE_META } from '../constants/site';

// Expanded version of llms.txt: every blog post body concatenated into one file.
export const GET: APIRoute = async () => {
  const collection = await getCollection('blog');
  const sorted = [...collection].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
  const base = SITE_META.siteUrl.replace(/\/$/, '');

  const parts = [`# ${SITE_META.title}`, '', `> ${SITE_META.description}`, ''];

  for (const post of sorted) {
    parts.push(
      `## ${post.data.title}`,
      '',
      `- URL: ${base}/${post.id}/`,
      `- Date: ${post.data.date.toISOString().slice(0, 10)}`,
      `- Tags: ${post.data.tags.join(', ')}`,
      '',
      post.body ?? '',
      '',
      '---',
      '',
    );
  }

  return new Response(parts.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
};
