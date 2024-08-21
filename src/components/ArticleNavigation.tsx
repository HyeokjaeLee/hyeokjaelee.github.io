import scrollTo from 'gatsby-plugin-smoothscroll';
import { debounce } from 'lodash-es';

import { useEffect, useRef, useState } from 'react';
interface ArticleNavigationContainerProps {
  headings?:
    | ({
        depth?: number | null;
        value?: string | null;
        id?: string | null;
      } | null)[]
    | null;
  title?: string | null;
  children?: React.ReactNode;
}

export const ArticleNavigationContainer = ({
  title,
  children,
  headings,
}: ArticleNavigationContainerProps) => {
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

  return (
    <div className="flex">
      <div className="block flex-1 phone:hidden tablet:hidden" />
      {children}
      <aside className="block flex-1 phone:hidden tablet:hidden">
        <nav className="sticky top-4 my-4 ml-12 min-w-[15em] max-w-xs px-4 py-1 text-xs">
          <h3 className="mb-2 text-base font-bold">{title}</h3>
          <ul className="ml-4 flex list-disc flex-col gap-1">
            {headings?.map((heading, index) => {
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
                        preventScrollEvent.current = true;
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
      </aside>
    </div>
  );
};
