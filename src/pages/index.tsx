import { graphql } from 'gatsby';

import React from 'react';

import { Meta } from '@components/Meta';

const IndexPage = () => <section>ss</section>;

export default IndexPage;

export const Head = () => <Meta title="Home" />;

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
        }
      }
    }
  }
`;
