import React from 'react';

import { useGetSocialDataList } from '@hooks/useGetSocialDataList';

import { DarkModeSwitch } from './DarkModeSwitch';
import { LIST_SECTION_BORDER_STYLES } from './GlobalMenuLastPostList';

export const GlobalMenuFooter = () => {
  const socialDataList = useGetSocialDataList();

  return (
    <footer className="mt-auto">
      <img
        alt="visitor"
        src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fhyeokjaelee.github.io&count_bg=%236C7686&title_bg=%237F8B9E&icon_color=%23FFFFFF&title=Visitor&edge_flat=false"
        className="ml-auto py-2 animate-bounce"
      />
      <div
        className={`flex justify-between py-3 mb-1 ${LIST_SECTION_BORDER_STYLES}`}
      >
        <ul className="flex flex-col gap-1">
          {socialDataList.map(({ name, href, target, icon: Icon }) => (
            <li key={name}>
              <a
                className="flex text-xs items-center gap-2 font-light hover:underline cursor-pointer"
                href={href}
                target={target}
              >
                <Icon className="h-3 w-3" /> {name}
              </a>
            </li>
          ))}
        </ul>
        <DarkModeSwitch />
      </div>
      <div className="text-[0.6em] text-gray-500 leading-none font-light">
        © 2023. Hyeokjae all rights reserved.
      </div>
    </footer>
  );
};
