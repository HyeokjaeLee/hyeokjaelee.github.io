import { shallow } from 'zustand/shallow';

import React from 'react';

import { GlobalHeader } from '@components/GlobalHeader';
import { GlobalMenu } from '@components/GlobalMenu';
import { useBindDarkMode } from '@hooks/useBindDarkMode';
import { Toast } from '@hyeokjaelee/pastime-ui';
import { useGlobalStore } from '@stores/useGlobalStore';

import type { PageProps } from 'gatsby';

const GlobalLayout = ({ children }: PageProps) => {
  const isNavVisible = useGlobalStore((state) => state.isNavVisible, shallow);
  useBindDarkMode();

  return (
    <Toast.Provider>
      {isNavVisible ? <GlobalHeader /> : null}
      <main
        className={`bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-50 overflow-auto ${
          isNavVisible ? 'h-page' : 'h-full'
        }`}
      >
        {children}
      </main>
      <GlobalMenu />
    </Toast.Provider>
  );
};

export default GlobalLayout;
