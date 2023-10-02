import { graphql, PageProps } from 'gatsby';

import * as React from 'react';

import { Meta } from '@components/Meta';
import { PostArticle } from '@components/PostArticle';
import { PostLayoutFooter } from '@components/PostLayoutFooter';

import type { PostLayoutQuery } from 'types';

type PostLayoutProps = PageProps<PostLayoutQuery>;

const PostLayout = ({
  data: { previous, next, markdownRemark },
}: PostLayoutProps) => (
  <>
    <PostArticle markdownRemark={markdownRemark} />
    <PostLayoutFooter />
  </>
);

export const Head = ({ data: { markdownRemark } }: PostLayoutProps) => {
  const { title, description } = markdownRemark?.frontmatter ?? {};
  return <Meta title={title} description={description} />;
};

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
