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
      <main className="h-page">{children}</main>
      <GlobalMenu />
    </>
  );
};

export default GlobalLayout;
