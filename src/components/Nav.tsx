import React from "react";
import { Link } from "gatsby";
export const Nav = (props: any) => {
  const { navItem } = props;
  return (
    <nav className="nav">
      <div className="nav-item"> {navItem}</div>
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
  );
};
