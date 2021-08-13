/* eslint-disable react/prop-types */
import React from "react";
import { graphql, Link } from "gatsby";
import { Nav } from "../components/nav";

interface Nodes {
  excerpt: string;
  fields: { slug: string };
  frontmatter: {
    emoji: string;
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
  const tagList = group.map((item) => (
    <li>
      {item.tag} ({item.totalCount})
    </li>
  ));
  const postList = nodes.map((node) => {
    const { emoji, title, date, description, tag } = node.frontmatter;
    const tagListElement = tag.map((_tag) => <li>{_tag}</li>);
    return (
      <li>
        <Link to={node.fields.slug}>
          <div>
            <p className="date">{date}</p>
            <h2>
              {emoji} {title}
            </h2>
            <p>{description}</p>
            <ul className="tags individuals">{tagListElement}</ul>
          </div>
        </Link>
      </li>
    );
  });
  return (
    <>
      <Nav />
      <section id="contents">
        <ul className="tags entire">{tagList}</ul>
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
          emoji
          date
          title
          description
          tag
        }
      }
    }
  }
`;
