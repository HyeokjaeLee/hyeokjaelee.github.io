import { useEffect, useState } from 'react';

/**
 * Returns the current URL search params and keeps them in sync with the browser
 * location, including Astro view-transition swaps.
 */
export const useSearchParams = () => {
  const [searchParams, setSearchParams] = useState<URLSearchParams>(
    () =>
      new URLSearchParams(
        typeof window === 'undefined' ? '' : window.location.search,
      ),
  );

  useEffect(() => {
    const update = () =>
      setSearchParams(new URLSearchParams(window.location.search));

    window.addEventListener('popstate', update);
    window.addEventListener('astro:after-swap', update);

    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('astro:after-swap', update);
    };
  }, []);

  return searchParams;
};
