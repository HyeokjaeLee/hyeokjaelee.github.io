import { debounce } from 'lodash-es';

import { useEffect, useRef, useState } from 'react';

import type { NotNullableMarkdownRemark } from '@components/PostArticle';

type UseSelectedPostArticleHeadingParams =
  NotNullableMarkdownRemark['headings'];

export const useSelectedPostArticleHeading = (
  headings: UseSelectedPostArticleHeadingParams,
) => {
  const [selectedHeading, setSelectedHeading] = useState('');

  const preventScrollEvent = useRef(false);

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
        });
      },
      {
        threshold: 0.5,
      },
    );

    headings?.forEach((heading) => {
      if (!heading) return;
      const { id } = heading;
      const element = document.querySelector(`#${id}`);
      if (!element) return;
      if (id) observer.observe(element);
    });

    const main = document.querySelector('main');

    const scrollEvent = debounce(() => {
      if (main && !preventScrollEvent.current) {
        for (const [id, { isVisible }] of idMap) {
          if (isVisible) {
            setSelectedHeading(id);
            break;
          }
        }
      } else preventScrollEvent.current = false;
    }, 30);

    main?.addEventListener('scroll', scrollEvent, { passive: true });

    return () => {
      observer.disconnect();
      main?.removeEventListener('scroll', scrollEvent);
    };
  }, [headings]);

  return {
    selectedHeading,
    setSelectedHeading: (id: string) => {
      setSelectedHeading(id);
      preventScrollEvent.current = true;
    },
  };
};
