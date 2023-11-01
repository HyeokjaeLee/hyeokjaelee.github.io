import React, { useState } from 'react';
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
}: PostCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <li key={slug} className="w-full md:w-1/2 lg:w-1/4">
      <Link
        to={slug}
        className="p-2 block hover:pt-0 hover:pb-4 transition-all"
      >
        <article className="w-full transition-shadow rounded-md hover:shadow-lg dark:shadow-black">
          <div className="relative w-full h-0 pb-[50%] rounded-t-md overflow-hidden">
            <Skeleton
              className={`absolute w-full h-full object-cover ${
                isLoading ? '' : 'hidden'
              }`}
            />
            <img
              src={titleImage}
              alt={title}
              loading="lazy"
              onLoad={() => setIsLoading(false)}
              className={`absolute w-full h-full object-cover ${
                isLoading ? 'invisible' : ''
              }`}
            />
          </div>
          <section className="bg-white dark:bg-zinc-700 p-3 flex flex-col">
            <h4 className="truncate">{title}</h4>
            <div className="h-[3.75em]">
              <p className="text-sm line-clamp-3 box-border">{description}</p>
            </div>
          </section>
          <section className="bg-white dark:bg-zinc-700 px-3 py-2 rounded-b-md border-t border-zinc-100 dark:border-zinc-600 flex items-center justify-between">
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
};
