import React from 'react';

import { Bio } from './Bio';
import { PostArticleBody } from './PostArticleBody';
import { PostArticleHeader } from './PostArticleHeader';
import { PostArticleNavigation } from './PostArticleNavigation';

import type { PostLayoutQuery } from 'types';

type PostArticleProps = Pick<PostLayoutQuery, 'markdownRemark'>;

export type NotNullableMarkdownRemark = Exclude<
  PostLayoutQuery['markdownRemark'],
  undefined | null
>;

export const PostArticle = ({ markdownRemark }: PostArticleProps) => {
  const { frontmatter, html, headings } = markdownRemark ?? {};
  const { tags, title, date, description } = frontmatter ?? {};

  if (!description || !html) return null;

  return (
    <article className="leading-relaxed mt-8 md:mt-14 p-4 font-nanum-square break-keep">
      <PostArticleHeader title={title} date={date} tags={tags} />
      <div className="flex">
        <div className="flex-1 hidden lg:block" />
        <PostArticleBody html={html} />
        <PostArticleNavigation headings={headings} title={title} />
      </div>
      <footer className="max-w-3xl mx-auto mt-52 pb-9 border-b-1 border-zinc-300 dark:border-zinc-700">
        <Bio />
      </footer>
    </article>
  );
};
