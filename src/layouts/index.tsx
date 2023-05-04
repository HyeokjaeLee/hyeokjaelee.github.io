import { Link } from 'gatsby';
import { shallow } from 'zustand/shallow';

import React, { useLayoutEffect } from 'react';
import { Sun, Moon } from 'react-feather';

import { Logo, PostSearchbox } from '@components';
import { useLayoutStore } from '@stores';

import type { PageProps } from 'gatsby';

const Layout = ({ location: { pathname }, children }: PageProps) => {
  const linkList = [
    {
      children: 'posts',
      to: '/',
    },
    {
      children: 'about',
      to: '/about',
    },
  ];

  const [darkMode, setDarkMode] = useLayoutStore(
    (state) => [state.darkMode, state.setDarkMode],
    shallow,
  );

  useLayoutEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div
      data-is-root-path={pathname === '/'}
      className="flex flex-col min-h-[100vh] items-center bg-light-1 dark:bg-dark-1 text-light-1 dark:text-dark-1 animate-fade-in"
    >
      <header className="w-full h-[60px] bg-nav px-7 flex items-center text-nav font-bold z-10">
        <Link to="/" className="w-fit">
          <Logo height="30px" width="30px" />
        </Link>
        <nav className="flex items-center justify-between flex-1 pl-4">
          <div className="flex gap-5 items-center flex-1">
            <PostSearchbox />
            <ul className="flex gap-5 items-center justify-center">
              {linkList.map((props) => (
                <li>
                  <Link {...props} className="hover:text-dark-3" />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button
              className={`flex justify-center items-center rounded-[100%] p-2 duration-300 hover:bg-zinc-600 dark:hover:bg-yellow-500`}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Moon size="1.2rem" /> : <Sun size="1.2rem" />}
            </button>
          </div>
        </nav>
      </header>
      <main className="py-10 flex-1 z-0 w-full">{children}</main>
      <footer className="w-full max-w-[1280px] px-10 py-10 border-t-[1px] border-light-1 dark:border-dark-1">
        <p className="font-bold">Designed by HYEOKJAE.LEE</p>
        <p className="text-sm">
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.com"> Gatsby</a> | 모든 나눔스퀘어
          서체의 지식재산권은 (주)네이버에 있습니다.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
