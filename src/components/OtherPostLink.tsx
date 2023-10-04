import React from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';

import { Link } from '@reach/router';

import type { PostLayoutQuery } from 'types';

type OtherPostLinkProps = Exclude<
  PostLayoutQuery['previous'] | PostLayoutQuery['next'],
  undefined | null
> & {
  type: 'previous' | 'next';
};

const ICON_STYLE =
  'text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 w-6 h-6 mx-2 transition-all';

export const OtherPostLink = ({
  fields,
  frontmatter,
  type,
}: OtherPostLinkProps) => {
  const slug = fields?.slug;
  const { title, titleImage } = frontmatter ?? {};

  if (!slug || !title || !titleImage) return null;

  return (
    <Link
      to={slug}
      className={`group cursor-pointer bg-zinc-200 dark:bg-zinc-800 px-2 py-4 rounded-lg w-full items-center flex ${
        {
          previous: 'flex-row',
          next: 'flex-row-reverse text-right',
        }[type]
      }`}
    >
      {
        {
          previous: (
            <ArrowLeftCircle
              className={`${ICON_STYLE} group-hover:ml-0 group-hover:mr-4`}
            />
          ),
          next: (
            <ArrowRightCircle
              className={`${ICON_STYLE} group-hover:mr-0 group-hover:ml-4`}
            />
          ),
        }[type]
      }
      <div className="flex flex-col">
        <small className="font-semibold text-zinc-400 dark:text-zinc-600 text-xs">
          {
            {
              previous: '이전 포스트',
              next: '다음 포스트',
            }[type]
          }
        </small>
        <h3
          className={`text-sm font-bold w-full text-zinc-800 dark:text-zinc-200 ${
            type === 'previous' ? 'pr-2' : 'pl-2'
          }`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
};
