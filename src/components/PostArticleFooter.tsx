import type { PostLayoutQuery } from 'types/graphql-types';

import React from 'react';

import { Bio } from './Bio';
import { OtherPostLink } from './OtherPostLink';
import { Utterances } from './Utterances';

type PostArticleFooterProps = Pick<PostLayoutQuery, 'previous' | 'next'>;

export const PostArticleFooter = ({
  previous,
  next,
}: PostArticleFooterProps) => (
  <footer className="lg:mt-40 mx-auto mt-9 max-w-3xl">
    <Bio />
    <hr className="mt-9 border-zinc-300 dark:border-zinc-700" />
    <section className="md:flex-row mt-5 flex flex-col justify-between gap-3">
      <OtherPostLink {...previous} type="previous" />
      <OtherPostLink {...next} type="next" />
    </section>
    <Utterances />
  </footer>
);
