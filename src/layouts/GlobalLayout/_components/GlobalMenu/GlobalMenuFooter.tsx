import { shallow } from 'zustand/shallow';

import { Moon, Sun } from 'react-feather';

import { LOCAL_STARGE_KEY } from '@constants';
import { useGetSocialDataList } from '@hooks/useGetSocialDataList';
import { Switch } from '@radix-ui/themes';
import { useGlobalStore } from '@stores/useGlobalStore';

const SWITCH_ID = 'dark-mode-switch';

export const GlobalMenuFooter = () => {
  const socialDataList = useGetSocialDataList();
  const [isDarkMode, setIsDarkMode] = useGlobalStore(
    (state) => [state.isDarkMode, state.setIsDarkMode],
    shallow,
  );

  return (
    <footer className="border-t border-gray-300 p-4 duration-200 dark:border-gray-700">
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
        <div className="flex size-fit flex-col items-center gap-2">
          <label
            className="flex cursor-pointer flex-col items-center justify-center"
            htmlFor={SWITCH_ID}
          >
            {isDarkMode ? (
              <Moon className="size-3 animate-wiggle-more" />
            ) : (
              <Sun className="size-3 animate-wiggle-more" />
            )}
            <p className="text-xs">{isDarkMode ? 'dark' : 'light'}</p>
          </label>
          <Switch
            className="cursor-pointer"
            color="gray"
            defaultChecked={isDarkMode}
            id={SWITCH_ID}
            onCheckedChange={(value) => {
              localStorage.setItem(
                LOCAL_STARGE_KEY.DARK_MODE,
                JSON.stringify(value),
              );

              setIsDarkMode(value);
            }}
          />
        </div>
      </div>
      <div className="mt-2 text-xs font-light leading-none text-gray-500">
        © 2023. Hyeokjae all rights reserved.
      </div>
    </footer>
  );
};
