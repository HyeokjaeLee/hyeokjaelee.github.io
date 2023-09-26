import { shallow } from 'zustand/shallow';

import React, { useEffect } from 'react';

import { Drawer, useDarkMode } from '@hyeokjaelee/pastime-ui';
import { useLocation } from '@reach/router';
import { useGlobalStore } from '@stores/useGlobalStore';

import { GlobalMenuFooter } from './GlobalMenuFooter';
import { Logo } from './Logo';

export const GlobalMenu = () => {
  const [isGlobalMenuOpen, setIsGlobalMenuOpen] = useGlobalStore(
    (state) => [state.isGlobalMenuOpen, state.setIsGlobalMenuOpen],
    shallow,
  );
  const { pathname } = useLocation();

  useEffect(() => setIsGlobalMenuOpen(false), [setIsGlobalMenuOpen, pathname]);

  const { isDarkMode } = useDarkMode();

  return (
    <Drawer
      opened={isGlobalMenuOpen}
      drawerDirection="left"
      className="p-2"
      onClose={() => setIsGlobalMenuOpen(false)}
    >
      <Drawer.Header
        closeButton
        className="flex gap-40 items-start justify-between p-2"
      >
        <div className="p-2 bg-black dark:bg-white rounded-full">
          <Logo className="w-5 h-5" fill={isDarkMode ? 'black' : 'white'} />
        </div>
      </Drawer.Header>
      <GlobalMenuFooter />
    </Drawer>
  );
};
