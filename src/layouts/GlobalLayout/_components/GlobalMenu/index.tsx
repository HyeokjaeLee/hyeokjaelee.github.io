import { shallow } from 'zustand/shallow';

import { useEffect } from 'react';

import { Logo } from '@components/Logo';
import { Drawer, useDarkMode } from '@hyeokjaelee/pastime-ui';
import { useLocation } from '@reach/router';
import { useGlobalStore } from '@stores/useGlobalStore';

import { GlobalMenuFooter } from './GlobalMenuFooter';
import { GlobalMenuLastPostList } from './GlobalMenuLastPostList';
import { GlobalMenuPageList } from './GlobalMenuPageList';

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
      className="p-2"
      drawerDirection="left"
      opened={isGlobalMenuOpen}
      onClose={() => setIsGlobalMenuOpen(false)}
    >
      <Drawer.Header
        closeButton
        className="flex items-start justify-between gap-40 p-2"
      >
        <div className="rounded-full bg-black p-2 dark:bg-white">
          <Logo className="size-5" fill={isDarkMode ? 'black' : 'white'} />
        </div>
      </Drawer.Header>
      <GlobalMenuPageList />
      <GlobalMenuLastPostList />
      <GlobalMenuFooter />
    </Drawer>
  );
};
