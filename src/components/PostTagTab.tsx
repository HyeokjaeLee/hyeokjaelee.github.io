import type { UseGetPostDataListReturn } from '@hooks/useGetPostDataList';
import { Tab } from '@hyeokjaelee/pastime-ui';
import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import React from 'react';

type PostTagTabProps = Pick<UseGetPostDataListReturn, 'tagCountMap'>;

const POST_TAG_EMOJI_MAP = new Map([
  ['all', '📚'],
  ['issues', '🚧'],
  ['frontend', '🎨'],
  ['backend', '🔧'],
  ['devops', '📦'],
  ['etc', '🎁'],
  ['project', '📝'],
  ['data', '📊'],
  ['devOps', '📦'],
]);

export const PostTagTab = ({ tagCountMap }: PostTagTabProps) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const selectedTag = searchParams.get('tag');

  return (
    <section className="sticky top-0 z-10 flex w-full justify-center border-b border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900">
      <Tab className="text-sm font-normal" size="small">
        {['all', ...tagCountMap.keys()].map((tag) => (
          <Tab.Item
            key={tag}
            active={selectedTag === tag || (tag === 'all' && !selectedTag)}
            onClick={() => navigate(`?tag=${tag}`)}
          >
            <span className="mr-1 text-xs">{POST_TAG_EMOJI_MAP.get(tag)}</span>{' '}
            {tag}
          </Tab.Item>
        ))}
      </Tab>
    </section>
  );
};
