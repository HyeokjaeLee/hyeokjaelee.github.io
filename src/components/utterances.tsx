import React, { useEffect, useRef, useState } from "react";

export const Utterances = () => {
  //알맞은 타입을 못찾겠음.
  const commentsEl: any = useRef();
  const [status, setStatus] = useState("pending");

  //ss
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
  return (
    <div>
      {status === "failed" && <div>Error. Please try again.</div>}
      {status === "pending" && <div>Loading script...</div>}
      <div id="comments" ref={commentsEl} />
    </div>
  );
};
