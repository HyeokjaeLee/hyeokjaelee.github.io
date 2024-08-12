import { graphql, useStaticQuery } from 'gatsby';
import { PostListToSearchQuery } from 'types/graphql-types';

export const useGetPostMapToSearch = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery<PostListToSearchQuery>(graphql`
    query PostListToSearch {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const postMap = new Map<string, string>();

  nodes.forEach(({ fields, frontmatter }) => {
    const slug = fields?.slug;
    const title = frontmatter?.title;

    if (title && slug) postMap.set(title, slug);
  });

  return postMap;
};
