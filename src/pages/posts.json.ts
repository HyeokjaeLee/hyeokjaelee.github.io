import type { APIRoute } from 'astro';

import { getAllPosts } from '../utils/posts';

export const GET: APIRoute = async () => {
  const posts = await getAllPosts();

  return new Response(JSON.stringify(posts), {
    headers: {
      'content-type': 'application/json',
    },
  });
};
