import type { APIRoute, GetStaticPaths } from 'astro';

import {
  getAllPosts,
  getAllTags,
  POST_PER_PAGE,
} from '../../../../utils/posts';

export const getStaticPaths = (async () => {
  const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()]);

  return tags.flatMap((tag) => {
    const tagPosts = posts.filter((post) => post.tags.includes(tag));
    const totalPages = Math.max(1, Math.ceil(tagPosts.length / POST_PER_PAGE));

    return Array.from({ length: totalPages }, (_, index) => ({
      params: { tag, page: `${index + 1}` },
    }));
  });
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const tag = params.tag as string;
  const page = Number(params.page);
  const posts = (await getAllPosts()).filter((post) => post.tags.includes(tag));
  const total = posts.length;
  const totalPages = Math.max(1, Math.ceil(total / POST_PER_PAGE));

  return new Response(
    JSON.stringify({
      posts: posts.slice((page - 1) * POST_PER_PAGE, page * POST_PER_PAGE),
      page,
      totalPages,
      total,
      perPage: POST_PER_PAGE,
    }),
    {
      headers: {
        'content-type': 'application/json',
      },
    },
  );
};
