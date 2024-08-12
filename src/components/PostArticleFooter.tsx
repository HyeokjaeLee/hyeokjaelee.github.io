import { PostLayoutQuery } from 'types/graphql-types';

import React from 'react';

import { Bio } from './Bio';
import { OtherPostLink } from './OtherPostLink';
import { Utterances } from './Utterances';

type PostArticleFooterProps = Pick<PostLayoutQuery, 'previous' | 'next'>;

export const PostArticleFooter = ({
  previous,
  next,
}: PostArticleFooterProps) => (
  <footer className="max-w-3xl mx-auto mt-9 lg:mt-40">
    <Bio />
    <hr className="border-zinc-300 dark:border-zinc-700 mt-9" />
    <section className="flex gap-3 justify-between mt-5 flex-col md:flex-row">
      <OtherPostLink {...previous} type="previous" />
      <OtherPostLink {...next} type="next" />
    </section>
    <Utterances />
  </footer>
);
