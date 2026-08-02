import type { APIRoute, GetStaticPaths } from 'astro';

import { getAllPosts, POST_PER_PAGE } from '../../../utils/posts';

export const getStaticPaths = (async () => {
  const posts = await getAllPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POST_PER_PAGE));

  return Array.from({ length: totalPages }, (_, index) => ({
    params: { page: `${index + 1}` },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) => {
  const page = Number(params.page);
  const posts = await getAllPosts();
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
