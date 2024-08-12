import { navigate } from 'gatsby';

import React from 'react';

import { Button } from '@hyeokjaelee/pastime-ui';

interface GlobalMenuItemProps {
  src: string;
  children: React.ReactNode;
}

export const GlobalMenuItem = ({ src, children }: GlobalMenuItemProps) => (
  <li>
    <Button
      className="w-full justify-end"
      size="small"
      theme="clear"
      onClick={() => navigate(src)}
    >
      <div className="flex max-w-xs items-center gap-2 truncate text-sm">
        {children}
      </div>
    </Button>
  </li>
);
