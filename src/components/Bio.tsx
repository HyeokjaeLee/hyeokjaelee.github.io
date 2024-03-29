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
      <div className="rounded-full bg-zinc-900 dark:bg-zinc-50 p-4">
        <Logo className="w-14 h-14" fill={isDarkMode ? 'black' : 'white'} />
      </div>
      <div>
        <h2 className="font-semibold text-xl mb-1">{title}</h2>
        <ul className="flex gap-2 flex-wrap items-center">
          {socialDataList.map(({ name, href, icon: Icon, target }) => (
            <li key={name}>
              <a
                className="flex gap-1 text-xs items-center hover:underline cursor-pointer"
                href={href}
                target={target}
              >
                <Icon className="w-3 h-3" />
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
