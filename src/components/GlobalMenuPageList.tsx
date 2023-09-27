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
  <ul className="p-1 my-2">
    {PAGE_LIST.map(({ name, path, icon: Icon }) => (
      <GlobalMenuItem src={path} key={path}>
        <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" /> {name}
      </GlobalMenuItem>
    ))}
  </ul>
);
