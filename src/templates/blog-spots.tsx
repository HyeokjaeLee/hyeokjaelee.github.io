import { graphql } from "gatsby";
import React from "react";
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
        date: string;
        title: string;
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
  const postInfo = data.markdownRemark;
  const postsDataList = data.allMarkdownRemark.nodes;
  return (
    <div id="main">
      <span className="date">{postInfo.frontmatter.date}</span>
      <section id="content" className="main">
        <div dangerouslySetInnerHTML={{ __html: postInfo.html }} />
      </section>
      <hr />
    </div>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
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
