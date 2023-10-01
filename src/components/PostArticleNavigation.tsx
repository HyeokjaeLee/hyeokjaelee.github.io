import scrollTo from 'gatsby-plugin-smoothscroll';

import React, { useEffect, useState } from 'react';

import type { NotNullableMarkdownRemark } from './PostArticle';

interface PostArticleNavigationProps
  extends Pick<NotNullableMarkdownRemark, 'headings'> {
  title?: string | null;
}

export const PostArticleNavigation = ({
  title,
  headings,
}: PostArticleNavigationProps) => {
  const [visibleId, setVisibleId] = useState('');
  useEffect(() => {
    const idMap = new Map<
      string,
      {
        isVisible: boolean;
        element: Element;
      }
    >();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target, isIntersecting } = entry;

          idMap.set(target.id, {
            isVisible: isIntersecting,
            element: target,
          });

          for (const [id, { isVisible }] of idMap) {
            if (isVisible) {
              setVisibleId(id);
              break;
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    headings?.forEach((heading) => {
      if (!heading) return;
      const { id } = heading;
      const element = document.querySelector(`#${id}`);
      if (!element) return;
      if (id) observer.observe(element);
    });
  }, [headings]);

  if (!headings || !title) return null;

  return (
    <div className="flex-1">
      <nav className="my-4 ml-12 sticky top-2 px-4 py-1 text-xs border-l-2 border-zinc-200">
        <h3 className="font-bold text-sm mb-2">{title}</h3>
        <ul className="list-disc ml-4 flex flex-col gap-1 text-zinc-400">
          {headings.map((heading) => {
            if (!heading) return null;
            const { value, depth, id } = heading;
            return (
              <li
                key={id}
                className={`list-item`}
                style={{
                  marginLeft: `${((depth ?? 1) - 1) * 0.5}rem`,
                }}
              >
                <button onClick={() => scrollTo(`#${id}`)}>{value}</button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
