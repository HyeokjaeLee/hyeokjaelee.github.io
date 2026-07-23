import { SELECTOR } from '@constants/layout';
import { useEffect } from 'react';

/**
 * Scrolls the root scroll container back to the top on navigation, including
 * Astro view-transition swaps (replaces the old @reach/router pathname effect).
 */
export const useInitScroll = () => {
  useEffect(() => {
    const scrollToTop = () => {
      const rootElement = document.getElementById(SELECTOR.ROOT);

      if (rootElement) {
        rootElement.scrollTo({ behavior: 'smooth', top: 0 });
      }
    };

    document.addEventListener('astro:after-swap', scrollToTop);
    window.addEventListener('popstate', scrollToTop);

    return () => {
      document.removeEventListener('astro:after-swap', scrollToTop);
      window.removeEventListener('popstate', scrollToTop);
    };
  }, []);
};
