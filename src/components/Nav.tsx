import React from "react";
import { Link } from "gatsby";
import "../assets/sass/layout/nav.scss";
export const Nav = () => {
  return (
    <>
      <div className="topPadding" />
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="bottomPadding" />
    </>
  );
};
