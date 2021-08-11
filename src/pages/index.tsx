/* eslint-disable react/prop-types */
import React from "react";
import { graphql, Link } from "gatsby";
import { Nav } from "../components/nav";
import "../assets/sass/pages/index.scss";

interface Nodes {
  excerpt: string;
  fields: { slug: string };
  frontmatter: {
    title: string;
    date: string;
    description: string;
    tag: string[];
  };
}
interface Group {
  tag: string;
  totalCount: number;
}
interface Props {
  data: {
    allMarkdownRemark: {
      group: Group[];
      nodes: Nodes[];
    };
  };
}
const Index = ({ data }: Props) => {
  const { group, nodes } = data.allMarkdownRemark;
  const postList = nodes.map((node) => {
    const tagListElement = node.frontmatter.tag.map((tag) => <li>{tag}</li>);
    return (
      <li>
        <Link to={node.fields.slug}>
          <div>
            <p className="date">{node.frontmatter.date}</p>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.description}</p>
            <ul className="tags">{tagListElement}</ul>
          </div>
        </Link>
      </li>
    );
  });
  return (
    <>
      <Nav />
      <section id="contents">
        <ul id="posts">{postList}</ul>
      </section>
    </>
  );
};

export default Index;

export const data = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      group(field: frontmatter___tag) {
        tag: fieldValue
        totalCount
      }
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
          description
          tag
        }
      }
    }
  }
`;
