import scrollTo from 'gatsby-plugin-smoothscroll';

import React from 'react';

import { useSelectedPostArticleHeading } from '@hooks/useSelectedPostArticleHeading';

import type { NotNullableMarkdownRemark } from './PostArticle';

interface PostArticleNavigationProps
  extends Pick<NotNullableMarkdownRemark, 'headings'> {
  title?: string | null;
}

export const PostArticleNavigation = ({
  title,
  headings,
}: PostArticleNavigationProps) => {
  const { selectedHeading } = useSelectedPostArticleHeading(headings);

  if (!headings || !title) return null;

  return (
    <div className="flex-1 hidden lg:block">
      <nav className="my-4 ml-12 sticky top-2 px-4 py-1 text-xs border-l-2 border-zinc-300 dark:border-zinc-700 min-w-[15em] max-w-xs">
        <h3 className="font-bold text-base mb-2">{title}</h3>
        <ul className="list-disc ml-4 flex flex-col gap-1">
          {headings.map((heading, index) => {
            if (!heading) return null;
            const { value, depth, id } = heading;
            return (
              <li
                key={index}
                className={`list-item transition-all ${
                  selectedHeading === id
                    ? 'text-zinc-700 dark:text-zinc-200 font-bold text-sm'
                    : 'text-zinc-400 dark:text-zinc-500'
                }`}
                style={{
                  marginLeft: `${((depth ?? 1) - 1) * 0.5}rem`,
                }}
              >
                <button
                  className="text-start"
                  onClick={() => scrollTo(`#${id}`)}
                >
                  {value}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
