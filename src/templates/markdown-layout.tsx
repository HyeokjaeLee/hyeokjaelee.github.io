import { graphql } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Nav } from "../components/nav";

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
    scriptEl.setAttribute("issue-term", "title");
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
  frontmatter: { title: string; date: string };
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
    };
    allMarkdownRemark: {
      nodes: Data[];
    };
  };
}

const BlogSpots = ({ data }: Props) => {
  const { markdownRemark, allMarkdownRemark } = data;
  const postInfo = markdownRemark.frontmatter;
  const postsDataList = data.allMarkdownRemark.nodes;
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
        </article>
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
    }
    allMarkdownRemark(limit: 5, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date
          title
        }
      }
    }
  }
`;

export default BlogSpots;
