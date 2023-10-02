import { useEffect, useState } from 'react';

import type { NotNullableMarkdownRemark } from '@components/PostArticle';

type UseSelectedPostArticleHeadingParams =
  NotNullableMarkdownRemark['headings'];

export const useSelectedPostArticleHeading = (
  headings: UseSelectedPostArticleHeadingParams,
) => {
  const [selectedHeading, setSelectedHeading] = useState('');
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
              setSelectedHeading(id);
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

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  return { selectedHeading };
};
