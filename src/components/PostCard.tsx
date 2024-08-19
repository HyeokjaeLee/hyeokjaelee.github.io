import React, { useState } from 'react';
import { Tag } from 'react-feather';

import type { PostData } from '@hooks/useGetPostDataList';
import { Skeleton, Tooltip } from '@hyeokjaelee/pastime-ui';
import { Link } from '@reach/router';

import { TitleImage } from '../generated/TitleImage';

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
    <li key={slug} className="md:w-1/2 lg:w-1/4 w-full">
      <Link
        className="block p-2 transition-all hover:pb-4 hover:pt-0"
        to={slug}
      >
        <article className="w-full rounded-md transition-shadow hover:shadow-lg dark:shadow-black">
          <div className="relative h-0 w-full overflow-hidden rounded-t-md pb-[50%]">
            <Skeleton
              className={`absolute size-full object-cover ${
                isLoading ? '' : 'hidden'
              }`}
            />

            <img
              alt={title}
              className={`absolute size-full object-cover ${
                isLoading ? 'invisible' : ''
              }`}
              loading="lazy"
              src={titleImage}
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <section className="flex flex-col bg-white p-3 dark:bg-zinc-700">
            <h4 className="truncate">{title}</h4>
            <div className="h-[3.75em]">
              <p className="box-border line-clamp-3 text-sm">{description}</p>
            </div>
          </section>
          <section className="flex items-center justify-between rounded-b-md border-t border-zinc-100 bg-white px-3 py-2 dark:border-zinc-600 dark:bg-zinc-700">
            <div className="text-[0.6em] font-medium leading-3">{date}</div>
            <Tooltip>
              <Tooltip.Area>
                <Tag className="mt-1 size-3 text-zinc-400" />
              </Tooltip.Area>
              <Tooltip.Content className="px-2 py-1 text-xs">
                {tags.join(', ')}
              </Tooltip.Content>
            </Tooltip>
          </section>
        </article>
      </Link>
    </li>
  );
};
