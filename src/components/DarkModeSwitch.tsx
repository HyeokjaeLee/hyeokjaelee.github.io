import React from 'react';
import { Sun, Moon } from 'react-feather';

import { DARK_MODE_LOCAL_STORAGE_KEY } from '@hooks/useBindDarkMode';
import { Switch, useDarkMode } from '@hyeokjaelee/pastime-ui';

export const DarkModeSwitch = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <Switch
      size="small"
      value={isDarkMode}
      onChange={({ value }) => {
        if (value) {
          document.documentElement.classList.add('dark');
          localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, 'true');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem(DARK_MODE_LOCAL_STORAGE_KEY, 'false');
        }
      }}
    >
      {isDarkMode ? (
        <Moon className="size-2 text-black" />
      ) : (
        <Sun className="size-2 text-black" />
      )}
    </Switch>
  );
};
