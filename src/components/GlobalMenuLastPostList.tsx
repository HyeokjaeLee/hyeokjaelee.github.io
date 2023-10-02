import React from 'react';

import { useGetLastPostList } from '@hooks/useGetLastPostList';

import { GlobalMenuItem } from './GlobalMenuItem';

export const LIST_SECTION_BORDER_STYLES =
  'p-2 border-t border-gray-300 dark:border-gray-700';

export const GlobalMenuLastPostList = () => {
  const lastPostList = useGetLastPostList();

  return (
    <section className={LIST_SECTION_BORDER_STYLES}>
      <h3 className="text-xs px-3 py-2 font-medium text-gray-400 dark:text-gray-500">
        Last posts
      </h3>
      <ul>
        {lastPostList.map((post) => (
          <GlobalMenuItem src={post.slug} key={post.slug}>
            <img
              src={post.titleImage}
              alt={post.title}
              className="w-4 h-4 object-cover rounded-full border-2 border-gray-400 dark:border-gray-500"
            />
            <span className="truncate">{post.title}</span>
          </GlobalMenuItem>
        ))}
      </ul>
    </section>
  );
};
