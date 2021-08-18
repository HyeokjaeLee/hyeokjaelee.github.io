import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "./global-data";
export const Comment = () => {
  //적당한 타입을 못찾겠음.
  const commentsElement: any = useRef();
  const [status, setStatus] = useState("pending");
  const { theme } = useContext(ThemeContext);
  const commentScript = document.createElement("script");
  const commentTheme = theme === "dark" ? "photon-dark" : "github-light";
  commentScript.onload = () => setStatus("success");
  commentScript.onerror = () => setStatus("failed");
  commentScript.async = true;
  commentScript.src = "https://utteranc.es/client.js";
  commentScript.setAttribute("repo", "HyeokjaeLee/hyeokjaelee.github.io");
  commentScript.setAttribute("issue-term", "url");
  commentScript.setAttribute("theme", commentTheme);
  commentScript.setAttribute("crossorigin", "anonymous");
  commentScript.setAttribute("id", "test");
  useEffect(() => {
    commentsElement.current.innerHTML = "";
    commentsElement.current.appendChild(commentScript);
  }, [theme]);
  return (
    <div className="content">
      <section ref={commentsElement} className="comment" />
      {status === "failed" && <div>Error. Please try again.</div>}
      {status === "pending" && <div>Loading script...</div>}
    </div>
  );
};
