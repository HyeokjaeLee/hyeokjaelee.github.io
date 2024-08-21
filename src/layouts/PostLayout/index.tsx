import type { PageProps } from 'gatsby';
import type { PostLayoutQuery } from 'types/graphql-types';

import { graphql } from 'gatsby';
import parse from 'html-react-parser';

import * as React from 'react';

import { ArticleNavigationContainer } from '@components/ArticleNavigation';
import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';

import { Comment } from './_components/Comment';
import { PostArticleHeader } from './_components/PostArticleHeader';
import { RandomPostSuggestion } from './_components/RandomPostSuggestion';

type PostLayoutProps = PageProps<PostLayoutQuery>;

export const Head = ({ data: { markdownRemark } }: PostLayoutProps) => {
  const { title, description } = markdownRemark?.frontmatter ?? {};

  return <Meta description={description} title={title} />;
};

const PostLayout = ({
  data: { markdownRemark, allMarkdownRemark },
}: PostLayoutProps) => {
  const { fields, frontmatter, headings, html } = markdownRemark ?? {};

  return (
    <article className="mt-16 break-keep py-4 font-nanum-square leading-relaxed phone:mt-8 tablet:mt-14">
      <PostArticleHeader
        date={frontmatter?.date}
        slug={fields?.slug}
        tags={frontmatter?.tags}
        title={frontmatter?.title}
      />
      <ArticleNavigationContainer
        headings={headings}
        title={frontmatter?.title}
      >
        <section
          className="post-body mx-auto w-full max-w-3xl px-4"
          itemProp="post-article-body"
        >
          {html ? parse(html) : null}
        </section>
      </ArticleNavigationContainer>
      <footer className="mx-auto mt-40 max-w-4xl phone:mt-9">
        <section className="px-4">
          <Bio />
          <hr className="mt-9 border-zinc-300 dark:border-zinc-700" />
        </section>
        <RandomPostSuggestion
          allMarkdownRemark={allMarkdownRemark}
          markdownRemark={markdownRemark}
        />
        <Comment />
      </footer>
    </article>
  );
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
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YY년 MM월 DD일")
        description
        tags
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YY년 MM월 DD일")
          title
          titleImage
          tags
          description
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        titleImage
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        titleImage
      }
    }
  }
`;
