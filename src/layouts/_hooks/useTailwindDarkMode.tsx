import { useEffect } from 'react';

export const useTailwindDarkMode = (isDarkMode: boolean) => {
  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);
};
