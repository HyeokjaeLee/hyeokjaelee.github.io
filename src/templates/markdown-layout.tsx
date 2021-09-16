import { graphql, Link } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { Nav } from "../components/nav";
import postProfile from "../assets/img/post-profile.jpg";
import LeftArrow from "../assets/img/left-arrow.svg";
import RightArrow from "../assets/img/right-arrow.svg";
import { Comment } from "../components/comment";
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

const BlogSpots = ({ data }: Props) => {
  const { markdownRemark, allMarkdownRemark } = data;
  const postInfo = markdownRemark.frontmatter;
  const postsDataList = allMarkdownRemark.nodes;
  const postIndex = postsDataList.findIndex((postData) => postData.id === markdownRemark.id);
  const prevPostNode = postIndex > 0 ? postsDataList[postIndex - 1] : null;
  const nextPostNode = postIndex < postsDataList.length - 1 ? postsDataList[postIndex + 1] : null;
  const postTags = (
    <ul className="tags each-post in-nav">
      {postInfo.tag.map((_tag, index) => (
        <li key={index}>{_tag}</li>
      ))}
    </ul>
  );
  const NearPost = (props: { postNode: Data | null; direction: "left" | "right" }) => {
    const { postNode, direction } = props;
    if (!!postNode) {
      const NearPostInfoElement = [
        <div>
          <h2>{postNode.frontmatter.title}</h2>
          <p>{postNode.frontmatter.description}</p>
        </div>,
      ];
      direction === "left"
        ? NearPostInfoElement.unshift(<LeftArrow className="arrow" />)
        : NearPostInfoElement.push(<RightArrow className="arrow" />);
      return (
        <div id="otherContents" className="content">
          <Link className={direction} to={postNode.fields.slug}>
            {NearPostInfoElement}
          </Link>
        </div>
      );
    }
    return <></>;
  };

  return (
    <>
      <Helmet
        title={postInfo.title}
        meta={[
          { name: "description", content: postInfo.description },
          { name: "keywords", content: postInfo.tag.join(",") },
        ]}
      />
      <Nav navItem={postTags} />
      <div className="content first">
        <article className="post">
          <header>
            <p className="posted-on">Posted on {postInfo.date}</p>
            <h1>
              {postInfo.emoji} {postInfo.title}
            </h1>
          </header>
          <section dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          <footer>
            <img className="profile pic" src={postProfile} />
            <div className="profile text">
              <h1>Hyeok-jae Lee</h1>
              <p>개발자를 꿈꾸는 코더</p>
            </div>
          </footer>
        </article>
      </div>
      <Comment />
      <NearPost postNode={prevPostNode} direction="left" />
      <NearPost postNode={nextPostNode} direction="right" />
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
