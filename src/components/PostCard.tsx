import React from 'react';
import { Tag } from 'react-feather';

import type { PostData } from '@hooks/useGetPostDataList';
import { Skeleton, Tooltip } from '@hyeokjaelee/pastime-ui';
import { Link } from '@reach/router';

type PostCardProps = PostData;

export const PostCard = ({
  title,
  slug,
  titleImage,
  description,
  date,
  tags,
}: PostCardProps) => (
  <li key={slug} className="w-full md:w-1/2 lg:w-1/4">
    <Link to={slug} className="p-2 block hover:pt-0 hover:pb-4 transition-all">
      <article className="w-full transition-shadow rounded-md hover:shadow-lg dark:shadow-black">
        <div className="relative w-full h-0 pb-[50%] rounded-t-md overflow-hidden">
          <Skeleton className="absolute w-full h-full object-cover" />
          <img
            src={titleImage}
            alt={title}
            loading="lazy"
            className="absolute w-full h-full object-cover"
          />
        </div>
        <section className="bg-zinc-100 dark:bg-zinc-700 p-3 flex flex-col">
          <h4 className="truncate">{title}</h4>
          <div className="h-[3.75em]">
            <p className="text-sm line-clamp-3 box-border">{description}</p>
          </div>
        </section>
        <section className="bg-zinc-100 dark:bg-zinc-700 px-3 py-2 rounded-b-md border-t-1 border-zinc-200 dark:border-zinc-600 flex items-center justify-between">
          <div className="font-medium text-[0.6em] leading-3">{date}</div>
          <Tooltip>
            <Tooltip.Area>
              <Tag className="w-3 h-3 mt-1 text-zinc-400" />
            </Tooltip.Area>
            <Tooltip.Content className="py-1 px-2 text-xs">
              {tags.join(', ')}
            </Tooltip.Content>
          </Tooltip>
        </section>
      </article>
    </Link>
  </li>
);
