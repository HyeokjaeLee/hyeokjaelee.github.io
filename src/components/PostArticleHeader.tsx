import React from 'react';
import { Calendar, Tag } from 'react-feather';

import { Link } from '@reach/router';

import type { NotNullableMarkdownRemark } from './PostArticle';

type PostArticleHeaderProps = Pick<
  Exclude<NotNullableMarkdownRemark['frontmatter'], undefined | null>,
  'date' | 'tags' | 'title'
>;
const ICON_SIZE = 'w-4 h-4';

export const PostArticleHeader = ({
  title,
  date,
  tags,
}: PostArticleHeaderProps) =>
  title && date && tags ? (
    <header className="mb-7 pb-7 border-b border-zinc-300 dark:border-zinc-700 relative overflow-hidden">
      <div className="max-w-3xl mx-auto font-pretendard z-[1]">
        <h1 className="font-extrabold text-4xl tracking-tight leading-normal mb-7">
          {title}
        </h1>
        <dl className="flex items-center flex-wrap">
          <dt className="mr-2">
            <Calendar className={ICON_SIZE} />
          </dt>
          <dd>
            <small>{date}</small>
          </dd>
          <dt className="mr-2 ml-6 mt-[0.15rem]">
            <Tag className={ICON_SIZE} />
          </dt>
          <dd>
            <ul className="mt-[0.15rem] flex gap-1">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="text-xs py-1 px-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 rounded-md font-semibold text-zinc-600 dark:text-zinc-200 transition-colors"
                >
                  <Link to={`/?tag=${tag}`}>#{tag}</Link>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
      </div>
    </header>
  ) : null;
