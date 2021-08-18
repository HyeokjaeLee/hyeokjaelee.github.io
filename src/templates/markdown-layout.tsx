import { graphql, Link } from "gatsby";
import React, { ReactComponentElement, ReactElement, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Nav } from "../components/nav";
import postProfile from "../assets/img/post-profile.jpg";
import LeftArrow from "../assets/img/left-arrow.svg";
import RightArrow from "../assets/img/right-arrow.svg";
const Utterances = () => {
  //알맞은 타입을 못찾겠음.
  const commentsEl: any = useRef();
  const [status, setStatus] = useState("pending");
  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.onload = () => setStatus("success");
    scriptEl.onerror = () => setStatus("failed");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "HyeokjaeLee/hyeokjaelee.github.io");
    scriptEl.setAttribute("issue-term", "url");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("crossorigin", "anonymous");
    commentsEl.current.appendChild(scriptEl);
  }, []);
  const [windowState, setWindowState] = useState("");
  return (
    <>
      <section ref={commentsEl} className={`comments ${windowState}`}></section>
      <button
        onClick={() => {
          const window = windowState === "" ? "open" : "";
          setWindowState(window);
        }}
        className={`commentsBtn ${windowState}`}
      >
        Comment
      </button>
      {status === "failed" && <div>Error. Please try again.</div>}
      {status === "pending" && <div>Loading script...</div>}
    </>
  );
};

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
const test: ReactElement = RightArrow;
const BlogSpots = ({ data }: Props) => {
  const { markdownRemark, allMarkdownRemark } = data;
  const postInfo = markdownRemark.frontmatter;
  const postsDataList = data.allMarkdownRemark.nodes;
  const postIndex = postsDataList.findIndex((postData) => postData.id === markdownRemark.id);
  const prevPostInfo = postIndex > 0 ? postsDataList[postIndex - 1] : null;
  const nextPostInfo = postIndex < postsDataList.length - 1 ? postsDataList[postIndex + 1] : null;
  const get_other_post = (postInfo: Data | null, arrow: Arrow) =>
    postInfo! ? (
      <Link className={arrow} to={postInfo.fields.slug}>
        {arrow == "left" ? <LeftArrow className="arrow" /> : <></>}
        <div>
          <h2>{postInfo.frontmatter.title}</h2>
          <p>{postInfo.frontmatter.description}</p>
        </div>
        {arrow == "right" ? <RightArrow className="arrow" /> : <></>}
      </Link>
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
      <Nav navItem={<Utterances />} />
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
              <h1>Hyeojae - Lee</h1>
              <p>개발자를 꿈꾸는 코더.</p>
            </div>
          </footer>
        </article>
      </div>
      <div id="otherContents" className="content">
        {get_other_post(prevPostInfo, Arrow.left)}
        {get_other_post(nextPostInfo, Arrow.right)}
      </div>
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
