import { Link } from "gatsby";
import React from "react";
import type { PageProps } from "gatsby";

interface LayoutProps {
  title: string;
  location: PageProps["location"];
  children: React.ReactNode;
}

const Layout = ({ location, title, children }: LayoutProps) => {
  const rootPath = "/";
  const isRootPath = location.pathname === rootPath;
  let header;
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    );
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
