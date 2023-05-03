import { graphql, useStaticQuery, navigate } from 'gatsby';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Book, ArrowRight } from 'react-feather';

interface SearchData {
  allMarkdownRemark: {
    nodes: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        emoji: string;
      };
    }[];
  };
}

export const Searchbox = () => {
  const SHOWN_POSTS = 5;
  const { nodes } = useStaticQuery<SearchData>(
    graphql`
      query {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              emoji
            }
          }
        }
      }
    `,
  ).allMarkdownRemark;

  const [search, setSearch] = React.useState('');

  const standardizeString = useCallback(
    (str: string) => str.toLowerCase().replace(/[^a-z0-9가-힣]/gi, ''),
    [],
  );

  const searchTextArray = useMemo(
    () => search.split(' ').map((value) => standardizeString(value)),
    [search, standardizeString],
  );

  const filteredPosts = useMemo(
    () =>
      nodes
        .filter(({ frontmatter: { title } }) => {
          const standardizedTitle = standardizeString(title);
          return searchTextArray.every((value) =>
            standardizedTitle.includes(value),
          );
        })
        .splice(0, SHOWN_POSTS),
    [searchTextArray, nodes, standardizeString],
  );
  const [opened, setOpened] = useState<boolean | 'closing'>(false);

  const close = useCallback(() => {
    setOpened('closing');
    setTimeout(() => setOpened(false), 300);
  }, []);

  const isOpened = opened === true;

  const [hoveredPostIndex, setHoveredPostIndex] = useState(-1);

  useEffect(() => {
    if (isOpened) {
      setHoveredPostIndex(-1);
      const keyboardEvent = (event: KeyboardEvent) => {
        switch (event.key) {
          case 'ArrowDown':
            event.preventDefault();
            return setHoveredPostIndex((prev) => {
              if (prev < 0) return 0;
              if (prev < filteredPosts.length - 1) return prev + 1;
              return prev;
            });

          case 'ArrowUp':
            event.preventDefault();
            return setHoveredPostIndex((prev) => {
              if (prev > 0) return prev - 1;
              return prev;
            });

          case 'Enter':
            event.preventDefault();
            return setHoveredPostIndex((prev) => {
              navigate(filteredPosts[prev].fields.slug);
              return -1;
            });

          default:
        }
      };
      document.addEventListener('keydown', keyboardEvent);
      return () => document.removeEventListener('keydown', keyboardEvent);
    }
    return undefined;
  }, [filteredPosts, isOpened]);

  const openStyle = () => {
    if (opened) {
      if (opened === 'closing') return 'fade-out-top';
      return 'fade-in-top';
    }
    return 'hidden';
  };

  return (
    <div
      className={`static w-full transition-[max-width] duration-300 ease-in-out ${
        opened ? 'max-w-lg' : 'max-w-sm'
      }`}
    >
      <div className="border rounded-container bg-[#0d1117] [&:has(:focus)]:rounded-b-none border-[#30363d] gap-1 px-2 flex items-center w-full h-10 text-nav relative z-10">
        <input
          placeholder="search"
          className="focus:outline-none flex-1 bg-transparent font-medium"
          value={search}
          onChange={({ target: { value } }) => {
            setSearch(value);
            setHoveredPostIndex(-1);
          }}
          onClick={() => setOpened(true)}
          onBlur={() => setTimeout(close, 100)}
        />
        <Book
          width="1.1em"
          hanging="1.1em"
          className={`${opened ? 'scale-out-center' : 'scale-in-center'}`}
        />
      </div>
      <div className={`relative ${openStyle()}`}>
        <ul className="absolute top-[-1px] left-0 bg-[#0d1117] w-full rounded-b-container border-[#30363d] border">
          {filteredPosts.map((item, index) => {
            const { frontmatter, fields } = item;
            return (
              <li
                className="border-b-1 border-[#30363d] last:border-none"
                key={index}
              >
                <button
                  className={`px-5 py-2 transition-colors duration-200 flex items-center gap-4 [&:hover>div]:flex ${
                    hoveredPostIndex === index ? 'bg-link' : ''
                  }`}
                  onClick={() => {
                    navigate(fields.slug);
                    close();
                  }}
                  onMouseEnter={() => setHoveredPostIndex(index)}
                >
                  <div className="pt-1 text-sm">{frontmatter.emoji}</div>
                  <p className="pt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                    {frontmatter.title}
                  </p>
                  <div className="ml-auto hidden text-xs h-[1.5em] bg-[#0d1117] items-center justify-center gap- px-1 rounded-container fade-in whitespace-nowrap">
                    Jump to <ArrowRight width="1em" hanging="1em" />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
