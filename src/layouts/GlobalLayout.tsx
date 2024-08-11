import { shallow } from 'zustand/shallow';

import React from 'react';

import { GlobalHeader } from '@components/GlobalHeader';
import { GlobalMenu } from '@components/GlobalMenu';
import { useBindDarkMode } from '@hooks/useBindDarkMode';

import { useGlobalStore } from '@stores/useGlobalStore';

import type { PageProps } from 'gatsby';
import { ToastContainer } from 'react-toastify';

const GlobalLayout = ({ children }: PageProps) => {
  const isNavVisible = useGlobalStore((state) => state.isNavVisible, shallow);
  useBindDarkMode();

  return (
    <>
      <GlobalHeader />
      <main
        className={`bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-50 overflow-auto ${
          isNavVisible ? 'h-page' : 'h-full '
        }`}
      >
        <ToastContainer />
        {children}
      </main>
      <GlobalMenu />
    </>
  );
};

export default GlobalLayout;
