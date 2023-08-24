import { graphql } from 'gatsby';

import * as React from 'react';

import { LimitedWidthContainer, Seo } from '@components/atoms';
import { Bio } from '@components/molecules';
import { PostCardList, TagTab } from '@components/templates';
import { useURLSearchParams } from '@hooks';

const IndexPage = () => {
  const selectedTag = useURLSearchParams().get('tag');

  return (
    <>
      <LimitedWidthContainer>
        <Bio />
      </LimitedWidthContainer>
      <TagTab
        tagParam={selectedTag}
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
      <PostCardList />
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
