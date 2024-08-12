import type { PostLayoutQuery } from 'types/graphql-types';

import React from 'react';

import { PostArticleBody } from './PostArticleBody';
import { PostArticleFooter } from './PostArticleFooter';
import { PostArticleHeader } from './PostArticleHeader';
import { PostArticleNavigation } from './PostArticleNavigation';

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
    <article className="md:mt-14 mt-8 break-keep p-4 font-nanum-square leading-relaxed">
      <PostArticleHeader date={date} tags={tags} title={title} />
      <div className="flex">
        <div className="lg:block hidden flex-1" />
        <PostArticleBody html={html} />
        <PostArticleNavigation headings={headings} title={title} />
      </div>
      <PostArticleFooter {...otherPostProps} />
    </article>
  );
};
