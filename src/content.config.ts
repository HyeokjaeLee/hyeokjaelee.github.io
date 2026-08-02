import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { postSchema } from './content/schema';

const blog = defineCollection({
  loader: glob({
    pattern: '**/content.md',
    base: './contents',
    // Each post lives at contents/<slug>/content.md; derive the id from the
    // directory so URLs stay /<slug>/ rather than /<slug>/content/.
    generateId: ({ entry }) =>
      entry
        .replace(/^\.\//, '')
        .replace(/\/content\.md$/, '')
        .replace(/\.md$/, ''),
  }),
  schema: postSchema,
});

export const collections = { blog };
