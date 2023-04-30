import { Link, graphql, PageProps } from "gatsby";

import * as React from "react";
import { useMemo } from "react";
import { Tag } from "react-feather";

import { Bio, LimitedWidthContainer, Seo, TagFilter } from "../components";
import { useDarkModeStore, usePageInfoStore } from "../stores";

const BlogIndex = ({ data }: PageProps<DataProps>) => {
  const [query] = usePageInfoStore((state) => [state.query]);
  const selectedTag = query.get("tag");

  const posts = data.allMarkdownRemark.nodes;
  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((post) => post.frontmatter.tags.includes(selectedTag));
  }, [selectedTag, posts]);
  const postCount = posts.length;

  if (postCount === 0) {
    return (
      <main>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </main>
    );
  }

  const [borderColor, thrirdFontColor] = useDarkModeStore((state) => [
    state.borderColor,
    state.thrirdFontColor,
  ]);

  return (
    <>
      <LimitedWidthContainer>
        <Bio />
      </LimitedWidthContainer>
      <TagFilter
        className="mb-6"
        tags={[
          {
            tag: "frontend",
            emoji: "🎨",
          },
          {
            tag: "backend",
            emoji: "⚙️",
          },
          {
            tag: "data",
            emoji: "📊",
          },
          {
            tag: ".etc",
            emoji: "📚",
          },
        ]}
      />
      <LimitedWidthContainer>
        <ol className="flex flex-wrap">
          {filteredPosts.map(({ frontmatter, fields, excerpt }) => {
            const title = frontmatter.title || fields.slug;
            const date = new Date(frontmatter.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();

            return (
              <li
                key={fields.slug}
                className="w-full pc:w-[33.333%] tablet:w-[50%] p-2"
              >
                <article
                  className={`flex flex-col border box-border ${borderColor} rounded-container h-[240px] pt-6 pb-4 ${thrirdFontColor}`}
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <section className="flex flex-col flex-1 px-6">
                    <header className="mt-1 mb-5 flex gap-2">
                      <h2
                        className="flex-1 text-xl font-bold"
                        itemProp="headline"
                      >
                        <Link
                          to={fields.slug}
                          itemProp="url"
                          className="link line-clamp-2"
                        >
                          {title}
                        </Link>
                      </h2>
                      <div>
                        <small
                          className={`${borderColor} border py-1 px-2 rounded-full font-black`}
                        >
                          {year}.{month}.{day}
                        </small>
                      </div>
                    </header>
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          `${frontmatter.emoji} ${frontmatter.description}` ||
                          excerpt,
                      }}
                      itemProp="description"
                      className={`line-clamp-3`}
                    />
                  </section>
                  <section
                    className={`px-6 flex gap-2 items-center pt-4 border-t ${borderColor}`}
                  >
                    <Tag size="1.3em" />
                    <ul className="text-sm flex flex-wrap justify-end">
                      {frontmatter.tags.map((tag, index) => (
                        <li
                          key={`${title}-${tag}`}
                          className={`${
                            selectedTag === tag ? "font-black underline" : ""
                          }`}
                        >
                          {index ? ", " : ""}
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </section>
                </article>
              </li>
            );
          })}
        </ol>
      </LimitedWidthContainer>
    </>
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
        emoji: string;
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
          emoji
        }
      }
    }
  }
`;
