import { Link } from 'gatsby';

import React from 'react';

import { LimitedWidthContainer } from './LimitedWidthContainer';

interface TagTabItem {
  isSelected: boolean;
  tag?: string;
  emoji?: string;
}

const TagTabItem = ({ isSelected, tag, emoji }: TagTabItem) => (
  <li className={`${isSelected ? 'border-b-[3px] border-[#FC725C]' : ''} py-3`}>
    <Link
      to={tag ? `?tag=${tag}` : '/'}
      className="px-3 py-2 font-bold text-lg flex items-center gap-3 rounded-container hover:bg-light-2 dark:hover:bg-dark-2"
    >
      <span className="text-xl">{emoji ?? '🗂️'}</span> {tag ?? 'all'}
    </Link>
  </li>
);

interface TagTabProps {
  tags: { emoji: string; tag: string }[];
  className?: string;
  tagParam: string | null;
}

export const TagTab = ({ tags, className, tagParam }: TagTabProps) => {
  const hasSelectedTag = tags.some(({ tag }) => tag === tagParam);

  return (
    <section
      className={`border-b w-full border-light-1 dark:border-dark-1 sticky top-0 bg-light-1 dark:bg-dark-1 text-light-2 dark:text-dark-2 ${className}`}
    >
      <LimitedWidthContainer>
        <ul className="flex gap-3">
          <TagTabItem isSelected={!hasSelectedTag} />
          {tags.map(({ tag, emoji }) => (
            <TagTabItem
              key={tag}
              isSelected={tag === tagParam}
              tag={tag}
              emoji={emoji}
            />
          ))}
        </ul>
      </LimitedWidthContainer>
    </section>
  );
};
