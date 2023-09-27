import React from 'react';

import { GlobalHeader } from '@components/GlobalHeader';
import { GlobalMenu } from '@components/GlobalMenu';
import { useBindDarkMode } from '@hooks/useBindDarkMode';

import type { PageProps } from 'gatsby';

const GlobalLayout = ({ children }: PageProps) => {
  useBindDarkMode();

  return (
    <>
      <GlobalHeader />
      <main className="h-page bg-zinc-200 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 overflow-auto">
        {children}
      </main>
      <GlobalMenu />
    </>
  );
};

export default GlobalLayout;
