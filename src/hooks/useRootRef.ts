import { SELECTOR } from '@constants/layout';
import { useLayoutEffect, useRef } from 'react';

export const useRootRef = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    rootRef.current = document.getElementById(SELECTOR.ROOT);
  }, []);

  return rootRef;
};
