import { SELECTOR } from '@constants/layout';
import { useLocation } from '@reach/router';
import { useEffect } from 'react';

export const useInitScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const rootElement = document.getElementById(SELECTOR.ROOT);
    if (rootElement) {
      rootElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [pathname]);
};
