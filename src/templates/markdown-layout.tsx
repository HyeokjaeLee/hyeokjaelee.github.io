import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { Nav } from "../components/nav";
interface Data {
  excerpt: string;
  fields: { slug: string };
  frontmatter: { title: string; date: string };
}

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        emoji: string;
        date: string;
        title: string;
        description: string;
        tag: string[];
      };
      fields: {
        slug: string;
      };
    };
    allMarkdownRemark: {
      nodes: Data[];
    };
  };
}

const BlogSpots = ({ data }: Props) => {
  const { markdownRemark, allMarkdownRemark } = data;
  const postInfo = markdownRemark.frontmatter;
  const postsDataList = data.allMarkdownRemark.nodes;
  postInfo.tag.map((_tag) => {});
  return (
    <>
      <Helmet
        title={postInfo.title}
        meta={[
          { name: "description", content: postInfo.description },
          { name: "keywords", content: postInfo.tag.join() },
        ]}
      />
      <Nav />
      <section id="contents">
        <header>
          <p>{postInfo.date}</p>
          <h2>
            {postInfo.emoji} {postInfo.title}
          </h2>
          <p></p>
        </header>
        <hr />
        <article dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </section>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        emoji
        title
        date
        description
        tag
      }
      fields {
        slug
      }
    }
    allMarkdownRemark(limit: 5, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
        }
      }
    }
  }
`;

export default BlogSpots;
