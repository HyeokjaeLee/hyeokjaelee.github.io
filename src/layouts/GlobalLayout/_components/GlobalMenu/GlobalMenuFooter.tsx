import React from 'react';

import { useGetSocialDataList } from '@hooks/useGetSocialDataList';

import { DarkModeSwitch } from '../../../../components/DarkModeSwitch';

import { LIST_SECTION_BORDER_STYLES } from './GlobalMenuLastPostList';

export const GlobalMenuFooter = () => {
  const socialDataList = useGetSocialDataList();

  return (
    <footer className="mt-auto">
      <img
        alt="visitor"
        className="ml-auto animate-bounce py-2"
        src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fhyeokjaelee.github.io&count_bg=%236C7686&title_bg=%237F8B9E&icon_color=%23FFFFFF&title=Visitor&edge_flat=false"
      />
      <div
        className={`mb-1 flex justify-between py-3 ${LIST_SECTION_BORDER_STYLES}`}
      >
        <ul className="flex flex-col gap-1">
          {socialDataList.map(({ name, href, target, icon: Icon }) => (
            <li key={name}>
              <a
                className="flex cursor-pointer items-center gap-2 text-xs font-light hover:underline"
                href={href}
                target={target}
              >
                <Icon className="size-3" /> {name}
              </a>
            </li>
          ))}
        </ul>
        <DarkModeSwitch />
      </div>
      <div className="text-[0.6em] font-light leading-none text-gray-500">
        © 2023. Hyeokjae all rights reserved.
      </div>
    </footer>
  );
};
