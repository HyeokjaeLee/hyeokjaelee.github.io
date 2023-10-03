import React from 'react';

import { PostArticleBody } from './PostArticleBody';
import { PostArticleFooter } from './PostArticleFooter';
import { PostArticleHeader } from './PostArticleHeader';
import { PostArticleNavigation } from './PostArticleNavigation';

import type { PostLayoutQuery } from 'types';

export type NotNullableMarkdownRemark = Exclude<
  PostLayoutQuery['markdownRemark'],
  undefined | null
>;

export const PostArticle = ({
  markdownRemark,
  ...otherPostProps
}: PostLayoutQuery) => {
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
      <PostArticleFooter {...otherPostProps} />
    </article>
  );
};
