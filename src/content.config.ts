import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { postSchema } from './content/schema';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/contents' }),
  schema: postSchema,
});

export const collections = { blog };
