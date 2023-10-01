import { graphql, PageProps } from 'gatsby';

import * as React from 'react';

import { PostArticle } from '@components/PostArticle';

import type { PostLayoutQuery } from 'types';

const PostLayout = ({
  data: { previous, next, markdownRemark },
}: PageProps<PostLayoutQuery>) => (
  <PostArticle markdownRemark={markdownRemark} />
);

export default PostLayout;

export const postLayoutQuery = graphql`
  query PostLayout($id: String!, $previousPostId: String, $nextPostId: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      headings {
        depth
        value
        id
      }
      frontmatter {
        title
        date(formatString: "YY년 MM월 DD일")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

/**
 * export const Head = ({
  data: { markdownRemark: post },
}: PageProps<DataProps>) => (
  <Seo
    title={post.frontmatter.title}
    description={post.frontmatter.description || post.excerpt}
  />
);
 */
