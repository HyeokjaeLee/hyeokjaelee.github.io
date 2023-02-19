import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Book, PenTool, ArrowRight } from "react-feather";
import { Link, graphql, useStaticQuery, navigate } from "gatsby";

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
    `
  ).allMarkdownRemark;

  const [search, setSearch] = React.useState("");

  const standardizeString = useCallback(
    (str: string) => str.toLowerCase().replace(/[^a-z0-9가-힣]/gi, ""),
    []
  );

  const searchTextArray = useMemo(
    () => search.split(" ").map(value => standardizeString(value)),
    [search, standardizeString]
  );

  const filteredPosts = useMemo(
    () =>
      nodes
        .filter(({ frontmatter: { title } }) => {
          const standardizedTitle = standardizeString(title);
          return searchTextArray.every(value =>
            standardizedTitle.includes(value)
          );
        })
        .splice(0, SHOWN_POSTS),
    [searchTextArray, nodes, standardizeString]
  );

  const [focused, setFocused] = useState<boolean>();

  const [hoveredPostIndex, setHoveredPostIndex] = useState<number>();

  useEffect(() => {
    if (focused) {
      const keyboardEvent = ({ key }: KeyboardEvent) => {
        switch (key) {
          case "ArrowDown":
            return setHoveredPostIndex(prev => {
              if (prev === undefined) return 0;
              if (prev === filteredPosts.length - 1) return prev;
              return prev + 1;
            });

          case "ArrowUp":
            return setHoveredPostIndex(prev => {
              if (prev === undefined) return 0;
              if (prev === 0) return prev;
              return prev - 1;
            });

          case "Enter":
            return setHoveredPostIndex(prev => {
              if (prev === undefined) return;
              navigate(filteredPosts[prev].fields.slug);
              setFocused(false);
              return undefined;
            });

          default:
            return;
        }
      };
      document.addEventListener("keydown", keyboardEvent);
      return () => document.removeEventListener("keydown", keyboardEvent);
    }
    return;
  }, [focused]);

  return (
    <div className="static w-full max-w-sm [&:has(:focus)]:max-w-lg [&:has(:focus)>div>svg]:hidden transition-[max-width] duration-300 ease-in-out">
      <div className="border-1 rounded-container bg-[#0d1117] [&:has(:focus)]:rounded-b-none border-[#30363d] gap-1 px-2 flex items-center w-full h-10 text-nav relative z-10">
        <input
          placeholder="Search"
          className="focus:outline-none flex-1 bg-transparent font-medium"
          value={search}
          onChange={({ target: { value } }) => {
            setSearch(value);
            setHoveredPostIndex(undefined);
          }}
          onClick={() => setFocused(true)}
          onBlur={() => {
            setHoveredPostIndex(undefined);
            setTimeout(() => setFocused(false), 300);
          }}
        />
        <Book width="1.1em" hanging="1.1em" />
      </div>
      <div
        className={`relative ${
          focused
            ? "fade-in-top"
            : focused === undefined
            ? "hidden"
            : "fade-out-top"
        }`}
      >
        <ul className="absolute top-[-1px] left-0 bg-[#0d1117] w-full rounded-b-container border-[#30363d] border-1">
          {filteredPosts.map((item, index) => (
            <li
              className="border-b-1 border-[#30363d] last:border-none"
              key={index}
            >
              <Link
                className={`px-5 py-2 transition-colors duration-200 flex items-center gap-4 [&:hover>div]:flex ${
                  hoveredPostIndex === index ? "bg-link" : ""
                }`}
                to={item.fields.slug}
                onMouseEnter={() => setHoveredPostIndex(index)}
              >
                <div className="pt-1 text-sm">{item.frontmatter.emoji}</div>
                <p className="pt-1 whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.frontmatter.title}
                </p>
                <div className="ml-auto hidden text-xs h-[1.5em] bg-[#0d1117] items-center justify-center gap- px-1 rounded-container fade-in">
                  Jump to <ArrowRight width="1em" hanging="1em" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
