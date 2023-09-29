import React from 'react';

import { GlobalHeader } from '@components/GlobalHeader';
import { GlobalHelloToast } from '@components/GlobalHelloToast';
import { GlobalMenu } from '@components/GlobalMenu';
import { useBindDarkMode } from '@hooks/useBindDarkMode';
import { Toast } from '@hyeokjaelee/pastime-ui';

import type { PageProps } from 'gatsby';

const GlobalLayout = ({ children }: PageProps) => {
  useBindDarkMode();

  return (
    <Toast.Provider>
      <GlobalHelloToast />
      <GlobalHeader />
      <main className="h-page bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-50 overflow-auto">
        {children}
      </main>
      <GlobalMenu />
    </Toast.Provider>
  );
};

export default GlobalLayout;
