import { Link } from '@reach/router';
import React from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather';
import type { PostLayoutQuery } from 'types/graphql-types';

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
      className={`group flex w-full cursor-pointer items-center rounded-lg bg-zinc-200 px-2 py-4 dark:bg-zinc-800 ${
        {
          previous: 'flex-row',
          next: 'flex-row-reverse text-right',
        }[type]
      }`}
      to={slug}
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
              className={`${ICON_STYLE} group-hover:ml-4 group-hover:mr-0`}
            />
          ),
        }[type]
      }
      <div className="flex flex-col">
        <small className="text-xs font-semibold text-zinc-400 dark:text-zinc-600">
          {
            {
              previous: '이전 포스트',
              next: '다음 포스트',
            }[type]
          }
        </small>
        <h3
          className={`w-full text-sm font-bold text-zinc-800 dark:text-zinc-200 ${
            type === 'previous' ? 'pr-2' : 'pl-2'
          }`}
        >
          {title}
        </h3>
      </div>
    </Link>
  );
};
