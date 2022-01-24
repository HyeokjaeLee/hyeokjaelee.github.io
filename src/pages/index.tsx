import React, { useEffect, useState, useContext } from "react";
import * as style from "styles/pages/index.module.scss";
import { graphql, Link } from "gatsby";
import LeftArrow from "img/left-arrow.svg";
import RightArrow from "img/right-arrow.svg";
import { ThemeContext } from "contexts/theme";
interface Node {
  excerpt: string;
  fields: { slug: string };
  frontmatter: {
    title: string;
    titleImage: string;
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
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      group: Group[];
      nodes: Node[];
    };
  };
}

const Index = ({ data, location }: Props) => {
  const POSTS_PER_PAGE = 12;
  const { group, nodes } = data.allMarkdownRemark;
  const { theme } = useContext(ThemeContext);
  let queryString = location.search;
  queryString = queryString.slice(queryString.indexOf("?") + 1);
  let queryData = {
    page: 1,
    tag: "",
  };
  queryString.split("&").forEach((query) => {
    const [key, value] = query.split("=");
    switch (key) {
      case "page":
        queryData.page = Number(value);
        break;
      case "tag":
        queryData.tag = value;
        break;
    }
  });
  const filteredNodes = !queryData.tag
    ? nodes
    : nodes.filter((node) => node.frontmatter.tag.includes(queryData.tag));
  return (
    <section className={theme === "dark" ? style.indexDark : style.index}>
      <ul className={style.tags}>
        {group.map((item) => (
          <li>
            <Link to={queryData.tag === item.tag ? "/" : `/?tag=${item.tag}`} className={style.tag}>
              {item.tag}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={style.posts}>
        {filteredNodes.map((node, postListIndex) => {
          const { title, titleImage, date, description, tag } = node.frontmatter;
          const IndividualsTagList = tag.map((_tag, individualsTagIndex) => (
            <li key={`individualsTag${individualsTagIndex}`} className={style.tag}>
              {_tag}
            </li>
          ));
          return (
            <li key={`postList${postListIndex}`} className={style.postWrap}>
              <Link to={node.fields.slug} className={style.post}>
                <section className={style.imageWrap}>
                  <img src={titleImage} />
                </section>
                <section className={style.infoWrap}>
                  <i>Posted on {date}</i>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <ul className={style.tags}>{IndividualsTagList}</ul>
                </section>
              </Link>
            </li>
          );
        })}
      </ul>
      ;
    </section>
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
          titleImage
          description
          tag
        }
      }
    }
  }
`;
