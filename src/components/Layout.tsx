import { Link } from "gatsby";
import React from "react";
import type { PageProps } from "gatsby";
import { Logo } from "./Logo";
import { useDarkModeStore } from "../stores";
import { Sun, Moon } from "react-feather";
interface LayoutProps {
  location: PageProps["location"];
  children: React.ReactNode;
}

export const Layout = ({ location, children }: LayoutProps) => {
  const DEFAULT_WIDTH = "w-full max-w-5xl px-10";
  const rootPath = "/";
  const isRootPath = location.pathname === rootPath;
  const { darkMode, setDarkMode, backgroundColor, fontColor, borderColor } =
    useDarkModeStore();

  return (
    <div
      data-is-root-path={isRootPath}
      className={`flex flex-col min-h-[100vh] items-center ${backgroundColor} ${fontColor}`}
    >
      <header
        className={`w-full flex flex-col items-center border-b-[1px] ${borderColor}`}
      >
        <nav className={`${DEFAULT_WIDTH} flex items-center justify-between`}>
          <Link to="/">
            <Logo height="4rem" width="4rem" />
          </Link>
          <ul className="flex gap-3 items-center justify-center">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <button
                className={`flex justify-center items-center rounded-[100%] p-2 hover:transition-all duration-300 ease-in-out ${
                  darkMode ? "hover:bg-zinc-600" : "hover:bg-zinc-300"
                } active:bg-yellow-500`}
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                {darkMode ? <Moon size="1.2rem" /> : <Sun size="1.2rem" />}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main className={`${DEFAULT_WIDTH} py-10 flex-1`}>{children}</main>
      <footer
        className={`${DEFAULT_WIDTH} py-10 border-t-[1px] ${borderColor}`}
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
