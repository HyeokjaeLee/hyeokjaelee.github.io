import * as React from "react";
import { Link, graphql } from "gatsby";

import { Seo, Bio, LimitedWidthContainer } from "../components";
import { PageProps } from "gatsby";
import { useDarkModeStore } from "../stores";
import { ArrowLeftCircle, ArrowRightCircle, Tag, Clock } from "react-feather";

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}: PageProps<DataProps>) => {
  const siteTitle = site.siteMetadata.title || `Title`;

  const [borderColor, subBackgroundColor, subFontColor] = useDarkModeStore(
    state => [state.borderColor, state.subBackgroundColor, state.subFontColor]
  );

  return (
    <LimitedWidthContainer>
      <h1 itemProp="headline" className="text-5xl font-black leading-normal">
        {post.frontmatter.title}
      </h1>
      <article
        className={`blog-post mt-10 rounded-container border ${borderColor}`}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header
          className={`${subBackgroundColor} border-b ${borderColor} ${subFontColor} flex items-center px-5 py-3 justify-between`}
        >
          <dl className="flex items-center">
            <dt className="text-2xl">{post.frontmatter.emoji}</dt>
            <dd className="font-black ml-1">{post.frontmatter.title}</dd>
          </dl>
          <dl className="flex items-center">
            <dt className="ml-3">
              <Tag size="1.2em" />
            </dt>
            <dd>
              <ul className="flex ml-1">
                {post.frontmatter.tags.map((tag, index) => {
                  return (
                    <li key={`${post.frontmatter.title}-${tag}`}>
                      {index ? ", " : ""}
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </dd>
            <dt className="ml-5">
              <Clock size="1.2em" />
            </dt>
            <dd className="ml-2">{post.frontmatter.date}</dd>
          </dl>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className={`blog-post-content text-xl break-keep leading-9 px-8 py-10`}
        />
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
}: PageProps<DataProps>) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  );
};

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
