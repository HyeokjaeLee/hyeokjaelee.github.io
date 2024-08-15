import { useLayoutEffect, type PropsWithChildren } from 'react';

import { LOCAL_STARGE_KEY } from '@constants';
import { Theme } from '@radix-ui/themes';
import { useGlobalStore } from '@stores/useGlobalStore';

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const setIsDarkMode = useGlobalStore((state) => state.setIsDarkMode);
  useLayoutEffect(() => {
    const isDarkModeStorageValue = localStorage.getItem(
      LOCAL_STARGE_KEY.DARK_MODE,
    );

    const isDarkMode: boolean = isDarkModeStorageValue
      ? JSON.parse(isDarkModeStorageValue)
      : window.matchMedia('(prefers-color-scheme: dark)').matches;

    setIsDarkMode(isDarkMode);
  }, [setIsDarkMode]);

  return <Theme>{children}</Theme>;
};
