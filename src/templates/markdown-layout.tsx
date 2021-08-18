import { graphql, Link } from "gatsby";
import React, { ReactComponentElement, ReactElement, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Nav } from "../components/nav";
import postProfile from "../assets/img/post-profile.jpg";
import LeftArrow from "../assets/img/left-arrow.svg";
import RightArrow from "../assets/img/right-arrow.svg";
import { Comment } from "../components/comment";

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
        emoji: string;
        date: string;
        title: string;
        description: string;
        tag: string[];
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
enum Arrow {
  left = "left",
  right = "right",
}
const BlogSpots = ({ data }: Props) => {
  const { markdownRemark, allMarkdownRemark } = data;
  const postInfo = markdownRemark.frontmatter;
  const postsDataList = data.allMarkdownRemark.nodes;
  const postIndex = postsDataList.findIndex((postData) => postData.id === markdownRemark.id);
  const prevPostInfo = postIndex > 0 ? postsDataList[postIndex - 1] : null;
  const nextPostInfo = postIndex < postsDataList.length - 1 ? postsDataList[postIndex + 1] : null;
  const get_other_post = (postInfo: Data | null, arrow: Arrow) =>
    postInfo! ? (
      <div id="otherContents" className="content">
        <Link className={arrow} to={postInfo.fields.slug}>
          {arrow == "left" ? <LeftArrow className="arrow" /> : <></>}
          <div>
            <h2>{postInfo.frontmatter.title}</h2>
            <p>{postInfo.frontmatter.description}</p>
          </div>
          {arrow == "right" ? <RightArrow className="arrow" /> : <></>}
        </Link>
      </div>
    ) : (
      <></>
    );
  const tags = postInfo.tag.map((_tag, index) => <li key={index}>{_tag}</li>);
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
      <div className="content first">
        <article id="md-article">
          <header>
            <i>Posted on {postInfo.date}</i>
            <h2>
              {postInfo.emoji} {postInfo.title}
            </h2>
            <ul className="tags individuals">{tags}</ul>
          </header>
          <hr />
          <section dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          <footer>
            <img className="profile pic" src={postProfile} />
            <div className="profile text">
              <h1>Hyeok-Jae Lee</h1>
              <p>개발자를 꿈꾸는 코더</p>
            </div>
          </footer>
        </article>
      </div>
      <Comment />
      {get_other_post(prevPostInfo, Arrow.left)}
      {get_other_post(nextPostInfo, Arrow.right)}
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
