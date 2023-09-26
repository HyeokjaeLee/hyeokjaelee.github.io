import React from 'react';
import { Menu } from 'react-feather';

import { Button } from '@hyeokjaelee/pastime-ui';
import { useGlobalStore } from '@stores/useGlobalStore';

import { Logo } from './Logo';
import { PostSearchbox } from './PostSearchbox';

export const GlobalHeader = () => {
  const setIsGlobalMenuOpen = useGlobalStore(
    (state) => state.setIsGlobalMenuOpen,
  );

  return (
    <header className="bg-black flex px-3 gap-3 items-center h-nav">
      <div className="flex-1 flex gap-3 items-center">
        <Button
          icon={<Menu className="w-4 h-4" />}
          size="small"
          theme="clear"
          fixedDarkMode="dark"
          onClick={() => setIsGlobalMenuOpen(true)}
        />
        <Logo className="w-6 h-6" />
        <PostSearchbox />
      </div>
    </header>
  );
};
