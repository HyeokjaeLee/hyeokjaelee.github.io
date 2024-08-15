import { shallow } from 'zustand/shallow';

import { LOCAL_STARGE_KEY } from '@constants';
import { useGetSocialDataList } from '@hooks/useGetSocialDataList';
import { Switch } from '@radix-ui/themes';
import { useGlobalStore } from '@stores/useGlobalStore';

export const GlobalMenuFooter = () => {
  const socialDataList = useGetSocialDataList();
  const [isDarkMode, setIsDarkMode] = useGlobalStore(
    (state) => [state.isDarkMode, state.setIsDarkMode],
    shallow,
  );

  return (
    <footer className="border-t border-gray-300 p-4 dark:border-gray-700">
      <div className="flex justify-between">
        <ul className="flex flex-col gap-1">
          {socialDataList.map(({ name, href, target, icon: Icon }) => (
            <li key={name}>
              <a
                className="flex cursor-pointer items-center gap-2 text-sm font-light hover:underline"
                href={href}
                target={target}
              >
                <Icon className="size-3" /> {name}
              </a>
            </li>
          ))}
        </ul>
        <Switch
          defaultChecked={isDarkMode}
          onCheckedChange={(value) => {
            localStorage.setItem(
              LOCAL_STARGE_KEY.DARK_MODE,
              JSON.stringify(value),
            );

            setIsDarkMode(value);
          }}
        />
      </div>
      <div className="mt-2 text-xs font-light leading-none text-gray-500">
        © 2023. Hyeokjae all rights reserved.
      </div>
    </footer>
  );
};
