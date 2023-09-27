import { navigate } from 'gatsby';

import React from 'react';

import type { UseGetPostDataListReturn } from '@hooks/useGetPostDataList';
import { Tab } from '@hyeokjaelee/pastime-ui';
import { useLocation } from '@reach/router';

type PostTagTabProps = Pick<UseGetPostDataListReturn, 'tagCountMap'>;

export const PostTagTab = ({ tagCountMap }: PostTagTabProps) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const selectedTag = searchParams.get('tag');
  return (
    <section className="w-full flex justify-center sticky top-0 z-10 bg-zinc-200 dark:bg-zinc-900">
      <Tab size="small" className="font-normal">
        {['all', ...tagCountMap.keys()].map((tag) => (
          <Tab.Item
            active={selectedTag === tag}
            onClick={() => navigate(`?tag=${tag}`)}
          >
            {tag}
          </Tab.Item>
        ))}
      </Tab>
    </section>
  );
};
