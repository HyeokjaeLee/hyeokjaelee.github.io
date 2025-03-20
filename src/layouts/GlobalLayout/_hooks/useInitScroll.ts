import { SELECTOR } from '@constants/layout';
import { useEffect } from 'react';

export const useInitScroll = () => {
  useEffect(() => {
    const rootElement = document.getElementById(SELECTOR.ROOT);
    if (rootElement) {
      rootElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.href]);
};
