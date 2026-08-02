import { z } from 'zod';

export const postSchema = z.object({
  title: z.string(),
  titleImage: z.string().optional(),
  description: z.string(),
  date: z.coerce.date({ error: 'invalid date value (use YYYY-MM-DD)' }),
  tags: z.array(z.string()).default([]),
});
