import React from 'react';

import { useGetSiteMetaData } from '@hooks/useGetSiteMetaData';
import { useGetSocialDataList } from '@hooks/useGetSocialDataList';
import { useDarkMode } from '@hyeokjaelee/pastime-ui';

import { Logo } from './Logo';

export const Bio = () => {
  const { isDarkMode } = useDarkMode();
  const socialDataList = useGetSocialDataList();
  const { title } = useGetSiteMetaData();

  return (
    <section className="flex items-center gap-4">
      <div className="rounded-full bg-zinc-900 p-4 dark:bg-zinc-50">
        <Logo className="size-14" fill={isDarkMode ? 'black' : 'white'} />
      </div>
      <div>
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
        <ul className="flex flex-wrap items-center gap-2">
          {socialDataList.map(({ name, href, icon: Icon, target }) => (
            <li key={name}>
              <a
                className="flex cursor-pointer items-center gap-1 text-xs hover:underline"
                href={href}
                target={target}
              >
                <Icon className="size-3" />
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
