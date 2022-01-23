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

const Index = ({ data }: Props) => {
  const postsPerPage = 12;
  const { group, nodes } = data.allMarkdownRemark;
  const [targetTagList, setTargetTagList] = useState<string[]>([]);
  const [filteredNodes, setFilteredNodes] = useState<Node[]>(nodes);
  const [currentPage, setCurrentPage] = useState(1);
  const { theme } = useContext(ThemeContext);
  const TagFilter = () => (
    <div className={style.tags}>
      {group.map((item, entireTagListIndex) => {
        const filter_posts_by_tag = () => {
          setCurrentPage(1);
          setFilteredNodes(nodes);
          const tagIndex = targetTagList.indexOf(item.tag);
          if (tagIndex === -1) {
            targetTagList.push(item.tag);
          } else {
            targetTagList.splice(tagIndex, 1);
          }
          setTargetTagList(targetTagList);
          if (targetTagList.length > 0) {
            setFilteredNodes(
              //선택된 태그의 갯수와 Post의 태그가 선택된 태그에 포함되는 갯수가 같아야 함
              nodes.filter(
                (node) =>
                  node.frontmatter.tag.filter((_tag) => targetTagList.includes(_tag)).length ===
                  targetTagList.length
              )
            );
          }
        };
        return (
          <a
            key={`entireTag${entireTagListIndex}`}
            onClick={filter_posts_by_tag}
            className={style.tag}
          >
            {item.tag}
          </a>
        );
      })}
    </div>
  );

  const Posts = () => {
    const viewingNodes = filteredNodes.slice(
      (currentPage - 1) * postsPerPage,
      currentPage * postsPerPage
    );
    const emptyPost = (
      <div className="emptyPost">
        <div className="icon">🚧</div>
        <h1>OOPSE!</h1>
        <p>조건을 만족하는 Post가 없습니다.</p>
      </div>
    );
    const postList = viewingNodes.map((node, postListIndex) => {
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
    });
    return <ul className={style.posts}>{postList.length === 0 ? emptyPost : postList}</ul>;
  };
  const indexClass = theme === "dark" ? style.indexDark : style.index;
  return (
    <section className={indexClass}>
      <TagFilter />
      <Posts />
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
