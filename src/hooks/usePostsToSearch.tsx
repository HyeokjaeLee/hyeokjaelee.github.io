import { graphql, useStaticQuery } from 'gatsby';

import type { PostsToSearchQuery } from '@types';

const postsToSearchQuery = graphql`
  query PostsToSearch {
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
`;

export const usePostToSearch = () => {
  const { nodes } =
    useStaticQuery<PostsToSearchQuery>(postsToSearchQuery).allMarkdownRemark;

  return nodes;
};
