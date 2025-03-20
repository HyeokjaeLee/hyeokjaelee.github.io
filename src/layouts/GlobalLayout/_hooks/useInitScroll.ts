import { IS_CLIENT } from '@constants/etc';
import { SELECTOR } from '@constants/layout';
import { useEffect } from 'react';

export const useInitScroll = () => {
  const pathname = IS_CLIENT ? window.location.pathname : '';

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
