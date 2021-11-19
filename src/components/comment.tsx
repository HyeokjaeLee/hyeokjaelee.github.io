import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "contexts/theme";
export const Comment = () => {
  //적당한 타입을 못찾겠음.
  const comment: any = useRef();
  const [status, setStatus] = useState("pending");
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const commentElement: HTMLElement = comment.current;
    const commentScript = document.createElement("script");
    const attributes = {
      src: `https://utteranc.es/client.js`,
      repo: "HyeokjaeLee/hyeokjaelee.github.io",
      "issue-term": "url",
      theme: theme === "dark" ? "photon-dark" : "github-light",
      crossorigin: "anonymous",
      async: "true",
    };
    Object.entries(attributes).forEach(([key, value]) => {
      commentScript.setAttribute(key, value);
    });
    commentScript.onload = () => setStatus("success");
    commentScript.onerror = () => setStatus("failed");
    commentElement.innerHTML = "";
    commentElement.appendChild(commentScript);
  }, [theme]);
  return (
    <div className="content">
      <section ref={comment} />
      {status === "failed" && <div>Error. Please try again.</div>}
      {status === "pending" && <div>Loading script...</div>}
    </div>
  );
};
