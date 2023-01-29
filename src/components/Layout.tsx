import { Link } from "gatsby";
import React from "react";
import type { PageProps } from "gatsby";
import { Logo } from "./Logo";
interface LayoutProps {
  title: string;
  location: PageProps["location"];
  children: React.ReactNode;
}

export const Layout = ({ location, title, children }: LayoutProps) => {
  const DEFAULT_WIDTH = "w-full max-w-3xl px-10";
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
    <div
      data-is-root-path={isRootPath}
      className="flex flex-col min-h-[100vh] items-center"
    >
      <header className="w-full flex flex-col items-center border-b-[1px] border-x-cyan-100">
        <nav className={`${DEFAULT_WIDTH} flex items-center justify-between`}>
          <Link to="/">
            <Logo height="4rem" width="4rem" />
          </Link>
          <ul className="flex gap-3">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={`${DEFAULT_WIDTH} py-10 flex-1`}>{children}</main>
      <footer
        className={`${DEFAULT_WIDTH} py-10 border-t-[1px] border-x-cyan-100`}
      >
        <p className="font-bold">Designed by Leehyeokjae</p>
        <p className="text-sm">
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.com"> Gatsby</a> | 모든 나눔스퀘어
          서체의 지식재산권은 (주)네이버에 있습니다.
        </p>
      </footer>
    </div>
  );
};
