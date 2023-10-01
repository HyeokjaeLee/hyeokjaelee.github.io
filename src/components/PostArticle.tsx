import React from 'react';

import { PostArticleBody } from './PostArticleBody';
import { PostArticleHeader } from './PostArticleHeader';
import { PostArticleNavigation } from './PostArticleNavigation';

import type { PostLayoutQuery } from 'types';

type PostArticleProps = Pick<PostLayoutQuery, 'markdownRemark'>;

export const POST_ARTICLE_STYLES = {
  heading: 'font-bold mt-10 mb-4',
  'heading[depth=1]': 'text-4xl',
  'heading[depth=2]': 'text-3xl',
  'heading[depth=3]': 'text-2xl',
  'heading[depth=4]': 'text-xl',
  'heading[depth=5]': 'text-lg',
  'heading[depth=6]': 'text-base',
  paragraph: 'my-4',
  link: 'text-blue-500',
  list: 'list-disc ml-8',
  listItem: 'list-item',
  blockquote: 'border-l-4 border-gray-500 pl-4 italic',
  table: 'table-auto',
  tableCell: 'border px-4 py-2',
  tableRow: 'border px-4 py-2',
  image: 'max-w-full rounded-sm my-12 mx-auto',
  code: 'bg-gray-100 p-4 rounded-sm',
};

export type NotNullableMarkdownRemark = Exclude<
  PostLayoutQuery['markdownRemark'],
  undefined | null
>;

export const PostArticle = ({ markdownRemark }: PostArticleProps) => {
  const { frontmatter, html, headings } = markdownRemark ?? {};
  const { tags, title, date, description, titleImage } = frontmatter ?? {};
  console.log(markdownRemark);
  if (!description || !html) return null;

  return (
    <article className="leading-relaxed mt-8 md:mt-14 p-4 font-nanum-square break-keep">
      <PostArticleHeader title={title} date={date} tags={tags} />
      <div className="flex">
        <div className="flex-1" />
        <PostArticleBody html={html} />
        <PostArticleNavigation headings={headings} title={title} />
      </div>
    </article>
  );
};
