import React from "react";
import { Link } from "gatsby";
export const Nav = (props: any) => {
  const { elements } = props;
  return (
    <>
      <div className="nav-padding top" />
      <nav className="nav">
        <div className="nav-item"> {elements}</div>
        <ul className="nav-item link">
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
      <div className="nav-padding" />
    </>
  );
};
