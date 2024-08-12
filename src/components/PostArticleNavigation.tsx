import type { NotNullableMarkdownRemark } from './PostArticle';

import scrollTo from 'gatsby-plugin-smoothscroll';

import React from 'react';

import { useSelectedPostArticleHeading } from '@hooks/useSelectedPostArticleHeading';

interface PostArticleNavigationProps
  extends Pick<NotNullableMarkdownRemark, 'headings'> {
  title?: string | null;
}

export const PostArticleNavigation = ({
  title,
  headings,
}: PostArticleNavigationProps) => {
  const { selectedHeading, setSelectedHeading } =
    useSelectedPostArticleHeading(headings);

  if (!headings || !title) return null;

  return (
    <div className="lg:block hidden flex-1">
      <nav className="sticky top-2 my-4 ml-12 min-w-[15em] max-w-xs border-l-2 border-zinc-300 px-4 py-1 text-xs dark:border-zinc-700">
        <h3 className="mb-2 text-base font-bold">{title}</h3>
        <ul className="ml-4 flex list-disc flex-col gap-1">
          {headings.map((heading, index) => {
            if (!heading) return null;
            const { value, depth, id } = heading;

            return (
              <li
                key={index}
                className={`list-item transition-all ${
                  selectedHeading === id
                    ? 'text-sm font-bold text-zinc-700 dark:text-zinc-200'
                    : 'text-zinc-400 dark:text-zinc-500'
                }`}
                style={{
                  marginLeft: `${((depth ?? 1) - 1) * 0.5}rem`,
                }}
              >
                <button
                  className="cursor-pointer text-start hover:underline"
                  onClick={() => {
                    if (id) {
                      setSelectedHeading(id);
                      scrollTo(`#${id}`);
                    }
                  }}
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
