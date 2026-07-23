import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { marked } from 'marked';

import { SITE_META } from '../constants/site';

/** Plain-text excerpt approximating Gatsby's `node.excerpt`. */
function excerpt(body: string, max = 160): string {
  return body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`~[\]()!|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

export const GET: APIRoute = async (context) => {
  const collection = await getCollection('blog');
  const sorted = [...collection].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  const items = await Promise.all(
    sorted.map(async (post) => {
      const { title, description, date } = post.data;
      const content = await marked.parse(post.body ?? '');

      return {
        title,
        description: excerpt(post.body ?? '') || description,
        pubDate: date,
        link: `/${post.id}/`,
        content,
      };
    }),
  );

  return rss({
    title: SITE_META.title,
    description: SITE_META.description,
    site: context.site ?? SITE_META.siteUrl,
    items,
    customData: '<language>ko-kr</language>',
  });
};
