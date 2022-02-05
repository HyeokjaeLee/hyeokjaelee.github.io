import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "contexts/theme";
const attributes = new Map([
  ["src", "https://utteranc.es/client.js"],
  ["repo", "HyeokjaeLee/hyeokjaelee.github.io"],
  ["issue-term", "url"],
  ["crossorigin", "anonymous"],
  ["async", "false"],
]);
export const Comment = () => {
  const comment = useRef<HTMLElement>(null);
  const CommentWrap = () => <section ref={comment} />;
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const commentElement = comment.current;
    if (!commentElement) return;
    const commentScript = document.createElement("script");
    for (const [attribute, value] of attributes) commentScript.setAttribute(attribute, value);
    commentScript.setAttribute("theme", theme === "dark" ? "photon-dark" : "github-light");
    commentElement.innerHTML = "";
    commentElement.appendChild(commentScript);
  }, [theme]);

  return <CommentWrap />;
};
