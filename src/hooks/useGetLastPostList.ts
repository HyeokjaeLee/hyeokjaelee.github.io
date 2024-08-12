import { graphql, useStaticQuery } from 'gatsby';
import { LastPostListQuery } from 'types/graphql-types';

interface LastPost {
  slug: string;
  title: string;
  titleImage: string;
}

export const useGetLastPostList = (): LastPost[] => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery<LastPostListQuery>(graphql`
    query LastPostList {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 5) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            titleImage
          }
        }
      }
    }
  `);

  const lastPostList: LastPost[] = [];

  nodes.forEach(({ fields, frontmatter }) => {
    const slug = fields?.slug;
    const { title, titleImage } = frontmatter ?? {};

    if (slug && title && titleImage)
      lastPostList.push({ slug, title, titleImage });
  });

  return lastPostList;
};
