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
    tags: string[];
  };
}
interface Group {
  tags: string;
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
  const POSTS_PER_PAGE = 2;
  const { group, nodes } = data.allMarkdownRemark;
  const { theme } = useContext(ThemeContext);
  let queryString = location.search;
  queryString = queryString.slice(queryString.indexOf("?") + 1);
  let queryData = {
    page: 1,
    tag: "",
  };
  // queryString 분류
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
  const filteredByTagNodes = !queryData.tag
    ? nodes
    : nodes.filter((node) => node.frontmatter.tags.includes(queryData.tag));
  const totalPagesCount = Math.ceil(filteredByTagNodes.length / POSTS_PER_PAGE);
  (queryData.page < 1 || totalPagesCount < queryData.page) && (queryData.page = 1);

  const Pagination = () => {
    /**표시할 페이지 네비게이션 숫자*/
    const pagesOnNav = [queryData.page];
    //앞뒤로 2개씩 추가
    for (let i = 1; i <= 2; i++) {
      let firstPage = pagesOnNav[0];
      let lastPage = pagesOnNav[pagesOnNav.length - 1];
      if (0 < firstPage - 1) pagesOnNav.unshift(pagesOnNav[0] - 1);
      else if (lastPage + 1 <= totalPagesCount) pagesOnNav.push(lastPage + 1);
      firstPage = pagesOnNav[0];
      lastPage = pagesOnNav[pagesOnNav.length - 1];
      if (lastPage + 1 <= totalPagesCount) pagesOnNav.push(lastPage + 1);
      else if (0 < firstPage - 1) pagesOnNav.unshift(firstPage - 1);
    }
    const paginationItems = pagesOnNav.map((page) => (
      <li key={`page${page}`}>
        <Link
          className={style.page}
          to={!queryData.tag ? `/?page=${page}` : `/?tag=${queryData.tag}&page=${page}`}
        >
          {page}
        </Link>
      </li>
    ));
    const firstPage = pagesOnNav[0];
    const lastPage = pagesOnNav[pagesOnNav.length - 1];
    lastPage + 1 <= totalPagesCount &&
      paginationItems.push(
        <li>
          <Link
            to={
              !queryData.tag
                ? `/?page=${lastPage + 1}`
                : `/?tag=${queryData.tag}&page=${lastPage + 1}`
            }
          >
            <RightArrow />
          </Link>
        </li>
      );
    firstPage - 1 >= 1 &&
      paginationItems.unshift(
        <li>
          <Link
            to={
              !queryData.tag
                ? `/?page=${firstPage - 1}`
                : `/?tag=${queryData.tag}&page=${firstPage - 1}`
            }
          >
            <LeftArrow />
          </Link>
        </li>
      );
    return <ul className={style.pagination}>{paginationItems}</ul>;
  };

  const aPageNodes = filteredByTagNodes.slice(
    (queryData.page - 1) * POSTS_PER_PAGE,
    queryData.page * POSTS_PER_PAGE
  );
  return (
    <section className={theme === "dark" ? style.indexDark : style.index}>
      <ul className={style.tags}>
        {group.map((item) => (
          <li>
            <Link
              to={queryData.tag === item.tags ? "/" : `/?tag=${item.tags}`}
              className={style.tag}
            >
              {item.tags}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={style.posts}>
        {aPageNodes.map((node, postListIndex) => {
          const { title, titleImage, date, description, tags } = node.frontmatter;
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
                  <ul className={style.tags}>
                    {tags.map((_tag, individualsTagIndex) => (
                      <li key={`individualsTag${individualsTagIndex}`} className={style.tag}>
                        {_tag}
                      </li>
                    ))}
                  </ul>
                </section>
              </Link>
            </li>
          );
        })}
      </ul>
      <Pagination />
    </section>
  );
};

export default Index;

export const data = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      group(field: frontmatter___tags) {
        tags: fieldValue
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
          tags
        }
      }
    }
  }
`;
