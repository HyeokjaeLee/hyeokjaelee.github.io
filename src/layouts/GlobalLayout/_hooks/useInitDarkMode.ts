import { LOCAL_STORAGE } from '@constants/storage';
import { useLayoutStore } from '@stores/useLayoutStore';
import { useLayoutEffect } from 'react';

export const useInitDarkMode = () => {
  const setIsDarkMode = useLayoutStore((state) => state.setIsDarkMode);

  useLayoutEffect(() => {
    let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const darkModeString = localStorage.getItem(LOCAL_STORAGE.DARK_MODE);

    if (darkModeString) isDarkMode = darkModeString === 'true';

    setIsDarkMode(isDarkMode);
  }, [setIsDarkMode]);
};
