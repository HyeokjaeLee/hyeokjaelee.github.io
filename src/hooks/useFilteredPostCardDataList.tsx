import { graphql, useStaticQuery } from 'gatsby';

import { PostCardDataListQuery } from '@types';

const postCardDataListQuery = graphql`
  query PostCardDataList {
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

export const useFilteredPostCardDataList = (selectedTag: string | null) => {
  const { nodes } = useStaticQuery<PostCardDataListQuery>(
    postCardDataListQuery,
  ).allMarkdownRemark;

  const filteredNodes = selectedTag
    ? nodes.filter((node) => {
        const tags = node.frontmatter?.tags ?? [];
        return tags.includes(selectedTag);
      })
    : nodes;

  return filteredNodes.map(({ excerpt, fields, frontmatter }) => {
    const { slug } = fields ?? {};
    const { title, emoji, description, date, tags } = frontmatter ?? {};

    return {
      slug,
      title,
      emoji,
      description,
      date,
      tags,
      excerpt,
    };
  });
};

export type PostCardData = ReturnType<
  typeof useFilteredPostCardDataList
>[number];
