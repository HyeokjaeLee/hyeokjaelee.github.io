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
      theme="clear"
      size="small"
      onClick={() => navigate(src)}
    >
      <div className="flex items-center gap-2 text-sm max-w-xs truncate">
        {children}
      </div>
    </Button>
  </li>
);
