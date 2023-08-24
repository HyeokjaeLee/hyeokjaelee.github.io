import days from 'dayjs';
import { Link } from 'gatsby';

import React from 'react';
import { Tag } from 'react-feather';

import type { PostCardData } from '@hooks';

interface PostCardProps extends PostCardData {
  selectedTag: string | null;
}

export const PostCard = ({
  selectedTag,
  slug,
  excerpt,
  date,
  description,
  emoji,
  tags,
  title,
}: PostCardProps) => {
  const TEXT_COMMON_STYLE =
    'group-hover:text-light-1 dark:group-hover:text-dark-1 transition-colors duration-300';

  const BACKGROUND_COMMON_STYLE =
    'group-hover:bg-light-2 dark:group-hover:bg-dark-2 transition-[background-color] duration-400';

  return (
    <li className="group w-full pc:w-[33.333%] tablet:w-[50%] p-2">
      <Link to={slug ?? ''} itemProp="url">
        <article
          className="flex flex-col border box-border border-light-1 dark:border-dark-1 rounded-container h-64 pt-6 text-light-3 dark:text-dark-3 group-hover:shadow-lg dark:group-hover:shadow-black/30 transition-shadow duration-300"
          itemScope
          itemType="http://schema.org/Article"
        >
          <section className="flex flex-col flex-1 px-6">
            <header className="mt-1 mb-5 flex gap-2">
              <h2
                className={`flex-1 text-xl font-bold line-clamp-2 ${TEXT_COMMON_STYLE}`}
                itemProp="headline"
              >
                {title || slug}
              </h2>
              <div>
                <small
                  className={`border-light-1 dark:border-dark-1 border py-1 px-2 rounded-full font-black ${BACKGROUND_COMMON_STYLE}`}
                >
                  {days(date).format('YYYY.MM.DD')}
                </small>
              </div>
            </header>
            <p
              itemProp="description"
              className={`line-clamp-3 ${TEXT_COMMON_STYLE}`}
            >
              {`${emoji} ${description}` || excerpt}
            </p>
          </section>
          <section
            className={`px-6 flex gap-2 items-center py-4 border-t border-light-1 dark:border-dark-1 overflow-hidden rounded-b-container ${BACKGROUND_COMMON_STYLE}`}
          >
            <Tag size="1.3em" />
            <ul className="text-sm flex flex-wrap justify-end">
              {tags?.map((tag, index) => (
                <li
                  key={`${title}-${tag}`}
                  className={
                    selectedTag === tag ? 'font-black underline' : undefined
                  }
                >
                  {index ? ', ' : ''}
                  {tag}
                </li>
              ))}
            </ul>
          </section>
        </article>
      </Link>
    </li>
  );
};
