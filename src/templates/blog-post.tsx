import * as React from "react";
import { Link, graphql } from "gatsby";

import { Seo, Layout, Bio } from "../components";
import { PageProps } from "gatsby";
import { useDarkModeStore } from "../stores";
import { ArrowLeftCircle, ArrowRightCircle } from "react-feather";

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}: PageProps<DataProps>) => {
  const siteTitle = site.siteMetadata?.title || `Title`;

  const borderColor = useDarkModeStore(state => state.borderColor);

  return (
    <Layout location={location}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="py-10">
          <h1
            itemProp="headline"
            className="text-5xl font-black leading-normal"
          >
            {post.frontmatter.title}
          </h1>
          <p className="my-5">{post.frontmatter.date}</p>
          <ul className="flex gap-3 flex-wrap">
            {post.frontmatter.tags.map(tag => {
              return (
                <li
                  className={`${borderColor} border-[1px] py-1 px-4 rounded-full font-bold`}
                  key={`${post.frontmatter.title}-${tag}`}
                >
                  #{tag}
                </li>
              );
            })}
          </ul>
        </header>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          className="blog-post-content text-xl break-keep leading-9"
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
    </Layout>
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
