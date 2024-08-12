import React from 'react';
import { List, User } from 'react-feather';

import { GlobalMenuItem } from './GlobalMenuItem';

const PAGE_LIST = [
  {
    name: 'Posts',
    path: '/',
    icon: List,
  },
  {
    name: 'About',
    path: '/about',
    icon: User,
  },
];

export const GlobalMenuPageList = () => (
  <ul className="my-2 p-1">
    {PAGE_LIST.map(({ name, path, icon: Icon }) => (
      <GlobalMenuItem key={path} src={path}>
        <Icon className="size-4 text-gray-500 dark:text-gray-400" /> {name}
      </GlobalMenuItem>
    ))}
  </ul>
);
