import * as React from "react";
import { Link, graphql } from "gatsby";

import { Layout, Bio, Seo } from "../components";

import { PageProps } from "gatsby";

import { useDarkModeStore } from "../stores";
import { useEffect, useMemo, useRef, useState, useLayoutEffect } from "react";

const BlogIndex = ({ data, location }: PageProps<DataProps>) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  const posts = data.allMarkdownRemark.nodes;
  const postCount = posts.length;
  const [visablePostCount, setVisablePostCount] = useState(1);
  const isAllPostShow = visablePostCount === postCount;
  const visablePost = posts.slice(0, visablePostCount);

  if (postCount === 0) {
    return (
      <Layout location={location}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  const [isIntersecting, setIntersecting] = useState(false);

  const loadingRef = useRef<Element>(null);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      }),
    [loadingRef]
  );

  useEffect(() => {
    observer.observe(loadingRef.current as Element);
    return () => observer.disconnect();
  }, []);

  const [darkMode] = useDarkModeStore(state => [state.darkMode]);

  useEffect(() => {
    if (isIntersecting) {
      let postForShow = visablePostCount + 1;
      const newInterval = setInterval(() => {
        setVisablePostCount(postForShow);
        postForShow++;
      }, 100);
      return () => {
        console.log("clearing interval");
        clearInterval(newInterval);
      };
    }
    return () => {};
  }, [isIntersecting]);

  return (
    <Layout location={location} footerHidden={!isAllPostShow}>
      <Bio />
      <div className="flex flex-col">
        <ol>
          {visablePost.map(({ frontmatter, fields, excerpt }) => {
            const title = frontmatter.title || fields.slug;
            return (
              <li key={fields.slug} className="fade-in-bottom">
                <Link
                  to={fields.slug}
                  itemProp="url"
                  className={`my-3 p-5 border-transparent border-b-2 ${
                    darkMode
                      ? "hover:bg-zinc-100 hover:text-zinc-800"
                      : "hover:bg-zinc-800 hover:text-zinc-300"
                  } hover:shadow-lg transition-all duration-200 ease-in-out rounded-xl hover:ml-7 block`}
                >
                  <article
                    className="flex justify-between"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <section>
                      <header>
                        <h2 className="text-2xl" itemProp="headline">
                          <span>{title}</span>
                        </h2>
                      </header>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: frontmatter.description || excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                    <div className="text-end">
                      <small>{frontmatter.date}</small>
                      <ul className="text-xs flex gap-2 flex-wrap justify-end">
                        {frontmatter.tags.map(tag => (
                          <li key={`${title}-${tag}`}>#{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Link>
              </li>
            );
          })}
        </ol>
        <div
          ref={loadingRef}
          className={`min-h-[86px] flex-1 ${isAllPostShow ? "hidden" : ""}`}
        />
      </div>
    </Layout>
  );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />;

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    nodes: {
      excerpt: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        date: string;
        title: string;
        description: string;
        tags: string[];
      };
    }[];
  };
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`;
