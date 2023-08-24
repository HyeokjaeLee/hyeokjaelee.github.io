import { graphql, navigate, useStaticQuery } from 'gatsby';

import { useMemo } from 'react';

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

export const usePostOptionsToSearch = () => {
  const { nodes } =
    useStaticQuery<PostsToSearchQuery>(postsToSearchQuery).allMarkdownRemark;

  return useMemo(() => {
    const postMap = new Map(
      nodes.map(({ frontmatter, fields }) => {
        if (!frontmatter || !fields)
          throw new Error('frontmatter or fields is not exist');

        const { emoji, title } = frontmatter;
        const { slug } = fields;

        if (!emoji || !title || !slug)
          throw new Error('frontmatter is not exist');

        return [`${emoji} ${title}`, slug];
      }),
    );

    return {
      postOptions: [...postMap.keys()],
      moveToPost: (keyword: string) => {
        const slug = postMap.get(keyword);

        if (!slug) throw new Error('slug is not exist');

        navigate(slug);
      },
    };
  }, [nodes]);
};
