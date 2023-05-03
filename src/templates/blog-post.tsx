import { Link, graphql, PageProps } from 'gatsby';

import * as React from 'react';
import { useMemo } from 'react';
import { ArrowLeftCircle, ArrowRightCircle, Tag, Clock } from 'react-feather';

import { Seo, Bio, LimitedWidthContainer } from '../components';

const BlogPostTemplate = ({
  data: { previous, next, markdownRemark: post },
}: PageProps<DataProps>) => {
  const formattedDate = useMemo(() => {
    const date = new Date(post.frontmatter.date);
    const dayDiff = Math.floor(
      (new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24),
    );
    if (dayDiff > 7) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}년 ${month}월 ${day}일`;
    }
    if (dayDiff) return `${dayDiff}일 전`;
    return '오늘';
  }, []);

  return (
    <LimitedWidthContainer>
      <article
        className={`blog-post mt-20 max-w-4xl mx-auto`}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 className="font-black text-6xl my-14">
            {post.frontmatter.title}
          </h1>
          <dl className="flex items-center">
            <dt className="ml-3">
              <Tag size="1.2em" />
            </dt>
            <dd>
              <ul className="flex ml-2">
                {post.frontmatter.tags.map((tag, index) => (
                  <li key={`${post.frontmatter.title}-${tag}`}>
                    {index ? ', ' : ''}
                    {tag}
                  </li>
                ))}
              </ul>
            </dd>
            <dt className="ml-5">
              <Clock size="1.2em" />
            </dt>
            <dd className="ml-2">{formattedDate}</dd>
          </dl>
        </header>
        <section
          itemProp="articleBody"
          className={`blog-post-content text-xl break-keep leading-9 px-8 py-10`}
        >
          {post.html}
        </section>
        <footer className="my-12">
          <Bio border={false} />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul className="flex w-full justify-between">
          <li>
            {previous && (
              <Link
                to={previous.fields.slug}
                rel="prev"
                className="flex-1 flex gap-2 items-center font-black pl-10 hover:pl-0 duration-300"
              >
                <ArrowLeftCircle /> {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link
                to={next.fields.slug}
                rel="next"
                className="flex-1 flex gap-2 items-center font-black  pr-10 hover:pr-0 duration-300"
              >
                {next.frontmatter.title} <ArrowRightCircle />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </LimitedWidthContainer>
  );
};

export const Head = ({
  data: { markdownRemark: post },
}: PageProps<DataProps>) => (
  <Seo
    title={post.frontmatter.title}
    description={post.frontmatter.description || post.excerpt}
  />
);

export default BlogPostTemplate;

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  markdownRemark: {
    id: string;
    excerpt: string;
    html: string;
    frontmatter: {
      title: string;
      date: string;
      description: string;
      emoji: string;
      tags: string[];
    };
  };
  previous: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
  next: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        emoji
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
