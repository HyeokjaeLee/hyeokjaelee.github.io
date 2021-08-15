/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { Nav } from "../components/nav";

interface Node {
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
      nodes: Node[];
    };
  };
}
//필터 수정하기
const Index = ({ data }: Props) => {
  const { group, nodes } = data.allMarkdownRemark;
  const [targetTagList, setTargetTagList] = useState<string[]>([]);
  const [filteredNodes, setFilteredNodes] = useState<Node[]>(nodes);
  const EmptyPostElement = (
    <div className="emptyPost">
      <div className="icon">🚧</div>
      <h1>OOPSE!</h1>
      <p>조건을 만족하는 Post가 없습니다.</p>
    </div>
  );
  const checkTag = (tag: string) => (targetTagList.indexOf(tag) !== -1 ? "checked" : "");
  const entireTagList = group.map((item, entireTagListIndex) => (
    <li
      key={`entireTag${entireTagListIndex}`}
      onClick={() => {
        const tagIndex = targetTagList.indexOf(item.tag);
        if (tagIndex === -1) {
          targetTagList.push(item.tag);
        } else {
          targetTagList.splice(tagIndex, 1);
        }
        setTargetTagList(targetTagList);
        if (targetTagList.length === 0) {
          setFilteredNodes(nodes);
        } else {
          setFilteredNodes(
            nodes.filter((node) =>
              node.frontmatter.tag.filter((_tag) => targetTagList.includes(_tag)).length ===
              targetTagList.length
                ? true
                : false
            )
          );
        }
      }}
      className={checkTag(item.tag)}
    >
      {item.tag}
    </li>
  ));
  const PostList = filteredNodes.map((node, postListIndex) => {
    const { emoji, title, date, description, tag } = node.frontmatter;
    const IndividualsTagList = tag.map((_tag, individualsTagIndex) => {
      return (
        <li key={`individualsTag${individualsTagIndex}`} className={checkTag(_tag)}>
          {_tag}
        </li>
      );
    });
    return (
      <li key={`postList${postListIndex}`}>
        <Link to={node.fields.slug}>
          <div>
            <p className="date">Posted on {date}</p>
            <h2>
              {emoji} {title}
            </h2>
            <p>{description}</p>
            <ul className="tags individuals">{IndividualsTagList}</ul>
          </div>
        </Link>
      </li>
    );
  });
  return (
    <>
      <Nav />
      <section id="contents">
        <ul className="tags entire">{entireTagList}</ul>
        <ul id="posts">{PostList.length !== 0 ? PostList : EmptyPostElement}</ul>
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
