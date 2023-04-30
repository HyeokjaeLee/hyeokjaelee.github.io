import React, { useLayoutEffect, useState } from "react";
import { Link } from "gatsby";
import type { PageProps } from "gatsby";
import { Logo, Searchbox } from "../components";
import { Sun, Moon } from "react-feather";
import { useDarkModeStore, usePageInfoStore } from "../stores";

interface LayoutProps {
  location: PageProps["location"];
  children: React.ReactNode;
  footerHidden?: boolean;
  path: string;
}

export default function (props: LayoutProps) {
  const { location, children, footerHidden, path } = props;
  console.log(props);
  const [darkMode, setDarkMode, backgroundColor, fontColor, borderColor] =
    useDarkModeStore(state => [
      state.darkMode,
      state.setDarkMode,
      state.backgroundColor,
      state.fontColor,
      state.borderColor,
    ]);

  const DEFAULT_WIDTH = "w-full max-w-[1280px] px-10";
  const rootPath = "/";
  const isRootPath = location.pathname === rootPath;
  const [setPath, setQuery] = usePageInfoStore(state => [
    state.setPath,
    state.setQuery,
  ]);

  const { search } = location;

  const [loading, setLoading] = useState(false);

  const linkList = [
    {
      children: "posts",
      to: "/",
    },
    {
      children: "about",
      to: "/about",
    },
  ];

  return (
    <div
      data-is-root-path={isRootPath}
      className={`flex flex-col min-h-[100vh] items-center ${backgroundColor} ${fontColor} animate-fade-in`}
    >
      <header
        className={
          "w-full h-[60px] bg-nav px-7 flex items-center text-nav font-bold z-10"
        }
      >
        <Link to="/" className="w-fit">
          <Logo height="30px" width="30px" />
        </Link>
        <nav className={`flex items-center justify-between flex-1 pl-4`}>
          <div className="flex gap-5 items-center flex-1">
            <Searchbox />
            <ul className="flex gap-5 items-center justify-center">
              {linkList.map(props => (
                <li>
                  <Link {...props} className="hover:text-dark-3" />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button
              className={`flex justify-center items-center rounded-[100%] p-2 duration-300 ${
                darkMode ? "hover:bg-zinc-600" : "hover:bg-yellow-500"
              }`}
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              {darkMode ? <Moon size="1.2rem" /> : <Sun size="1.2rem" />}
            </button>
          </div>
        </nav>
      </header>
      <main
        className={`py-10 flex-1 z-0 w-full ${
          loading ? "fade-out-bottom" : "fade-in-bottom"
        }`}
      >
        {children}
      </main>
      <footer
        className={`${DEFAULT_WIDTH} py-10 border-t-[1px] ${borderColor} ${
          footerHidden ? "hidden" : "fade-in"
        }`}
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
}
