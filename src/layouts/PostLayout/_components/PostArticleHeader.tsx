import type { PostLayoutQuery } from 'types/graphql-types';

import React from 'react';
import { Calendar, Tag } from 'react-feather';

import { Link } from '@reach/router';

type PostArticleHeaderProps = Pick<
  Exclude<
    Exclude<PostLayoutQuery['markdownRemark'], undefined | null>['frontmatter'],
    undefined | null
  >,
  'date' | 'tags' | 'title'
>;
const ICON_SIZE = 'w-4 h-4';

export const PostArticleHeader = ({
  title,
  date,
  tags,
}: PostArticleHeaderProps) =>
  title && date && tags ? (
    <header className="relative mb-7 overflow-hidden border-b border-zinc-300 pb-7 dark:border-zinc-700">
      <div className="z-[1] mx-auto max-w-3xl font-pretendard">
        <h1 className="mb-7 text-4xl font-extrabold leading-normal tracking-tight">
          {title}
        </h1>
        <dl className="flex flex-wrap items-center">
          <dt className="mr-2">
            <Calendar className={ICON_SIZE} />
          </dt>
          <dd>
            <small>{date}</small>
          </dd>
          <dt className="ml-6 mr-2 mt-[0.15rem]">
            <Tag className={ICON_SIZE} />
          </dt>
          <dd>
            <ul className="mt-[0.15rem] flex gap-1">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-zinc-200 px-2 py-1 text-xs font-semibold text-zinc-600 transition-colors hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600"
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
