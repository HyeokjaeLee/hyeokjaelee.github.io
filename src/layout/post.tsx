import { graphql, Link } from "gatsby";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import * as style from "styles/pages/post.module.scss";
import postProfile from "img/post-profile.jpg";
import LeftArrow from "img/left-arrow.svg";
import RightArrow from "img/right-arrow.svg";
import { Comment } from "components/comment";
import { ThemeContext } from "contexts/theme";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement(); //code 하이라이트
interface Data {
  excerpt: string;
  fields: { slug: string };
  frontmatter: { title: string; description: string };
  id: string;
}

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        title: string;
        titleImage: string;
        description: string;
        tags: string[];
      };
      fields: {
        slug: string;
      };
      id: string;
    };
    allMarkdownRemark: {
      nodes: Data[];
    };
  };
}

const BlogSpots = ({ data }: Props) => {
  const { markdownRemark, allMarkdownRemark } = data;
  const postInfo = markdownRemark.frontmatter;
  const postsDataList = allMarkdownRemark.nodes;
  const postIndex = postsDataList.findIndex((postData) => postData.id === markdownRemark.id);
  const { theme } = useContext(ThemeContext);
  const postTags = (
    <ul className={style.tags}>
      {postInfo.tags.map((_tag, index) => (
        <li key={index}>{_tag}</li>
      ))}
    </ul>
  );
  const NextPostNav = () => {
    const postNode = postIndex < postsDataList.length - 1 ? postsDataList[postIndex + 1] : null;
    if (!postNode) return <></>;
    return (
      <Link to={postNode.fields.slug} className={`${style.nearPostLink} ${style.next}`}>
        <div className={style.nearPostInfo}>
          <h3>{postNode.frontmatter.title}</h3>
          <p>{postNode.frontmatter.description}</p>
        </div>
        <RightArrow />
      </Link>
    );
  };
  const PrevPostNav = () => {
    const postNode = postIndex > 0 ? postsDataList[postIndex - 1] : null;
    if (!postNode) return <></>;
    return (
      <Link to={postNode.fields.slug} className={`${style.nearPostLink} ${style.prev}`}>
        <LeftArrow />
        <div className={style.nearPostInfo}>
          <h3>{postNode.frontmatter.title}</h3>
          <p>{postNode.frontmatter.description}</p>
        </div>
      </Link>
    );
  };
  return (
    <div className={theme === "dark" ? style.postDark : style.post}>
      <Helmet
        title={postInfo.title}
        meta={[
          { name: "description", content: postInfo.description },
          { name: "keywords", content: postInfo.tags.join(",") },
        ]}
      />
      <article className={style.postContent}>
        <header className={style.postHeader}>
          <section>
            <p className={style.postedOn}>Posted on {postInfo.date}</p>
            <h1 className={style.postTitle}>{postInfo.title}</h1>
          </section>
          {postTags}
        </header>
        <section className={style.titleImageWrap}>
          <img src={postInfo.titleImage} alt="post profile" className={style.titleImage} />
          <div className={style.descriptionWrap}>
            <h2 className={style.description}>{postInfo.description}</h2>
          </div>
        </section>
        <section
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
          className={style.postBody}
        />
        <footer className={style.postFooter}>
          <section className={style.writerInfo}>
            <img className={style.logo} src={postProfile} />
            <div className="profile text">
              <h1>Hyeok-jae Lee</h1>
              <p>개발자를 꿈꾸는 코더</p>
            </div>
          </section>
        </footer>
      </article>
      <div className={style.commentWrap}>
        <Comment />
      </div>
      <nav className={style.nearPostNav}>
        <PrevPostNav />
        <NextPostNav />
      </nav>
    </div>
  );
};
/**
 *       <NearPost postNode={prevPostNode} direction="left" />
      <NearPost postNode={nextPostNode} direction="right" />
 */
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        titleImage
        date
        description
        tags
      }
      fields {
        slug
      }
      id
    }
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          description
          title
        }
        id
      }
    }
  }
`;

export default BlogSpots;
