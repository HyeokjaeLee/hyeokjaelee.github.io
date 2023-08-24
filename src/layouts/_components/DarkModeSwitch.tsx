import React from 'react';
import { Sun, Moon } from 'react-feather';

import { Switch, useDarkMode } from '@hyeokjaelee/pastime-ui';

import { useTailwindDarkMode } from '../_hooks/useTailwindDarkMode';

export const DarkModeSwitch = () => {
  const { isDarkMode, setDarkMode } = useDarkMode();

  useTailwindDarkMode(isDarkMode);

  const iconProps = {
    size: '15px',
    color: 'black',
  };

  return (
    <Switch
      size="large"
      value={isDarkMode}
      onChange={(e) => {
        setDarkMode(e.value);
      }}
    >
      {isDarkMode ? <Moon {...iconProps} /> : <Sun {...iconProps} />}
    </Switch>
  );
};
