import { graphql, PageProps } from 'gatsby';

import * as React from 'react';
import { useMemo } from 'react';

import { Bio, LimitedWidthContainer, Seo, TagTab, PostCard } from '@components';

import { usePageInfoStore } from '../stores';

const IndexPage = ({
  data: {
    allMarkdownRemark: { nodes: posts },
  },
  location: { search },
}: PageProps<Queries.IndexPageQuery>) => {
  const [query] = usePageInfoStore((state) => [state.query]);
  const selectedTag = query.get('tag');

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return posts;
    return posts.filter((post) =>
      post?.frontmatter?.tags?.includes(selectedTag),
    );
  }, [selectedTag, posts]);

  const tagParam = new URLSearchParams(search).get('tag');

  return (
    <>
      <LimitedWidthContainer>
        <Bio />
      </LimitedWidthContainer>
      <TagTab
        tagParam={tagParam}
        className="mb-6"
        tags={[
          {
            tag: 'frontend',
            emoji: '🎨',
          },
          {
            tag: 'backend',
            emoji: '⚙️',
          },
          {
            tag: 'data',
            emoji: '📊',
          },
          {
            tag: '.etc',
            emoji: '📚',
          },
        ]}
      />
      <LimitedWidthContainer>
        <ol className="flex flex-wrap">
          {filteredPosts.map(({ frontmatter, fields, excerpt }) => {
            const slug = fields?.slug;
            return slug ? (
              <PostCard
                key={slug}
                slug={slug}
                frontmatter={frontmatter}
                tagParam={tagParam}
                excerpt={excerpt}
              />
            ) : null;
          })}
        </ol>
      </LimitedWidthContainer>
    </>
  );
};

export default IndexPage;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />;

export const IndexPageQuery = graphql`
  query IndexPage {
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
