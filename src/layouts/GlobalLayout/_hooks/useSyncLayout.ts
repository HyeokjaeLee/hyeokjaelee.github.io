import { useLayoutStore } from '@stores/useLayoutStore';
import { throttle } from 'es-toolkit';
import { useLayoutEffect } from 'react';
import { useShallow } from 'zustand/shallow';

export const useSyncLayout = () => {
  const [resetMediaQuery, resetIsTouchDevice] = useLayoutStore(
    useShallow((state) => [state.resetMediaQuery, state.resetIsTouchDevice]),
  );

  useLayoutEffect(() => {
    const throttledResetLayout = throttle(() => {
      resetMediaQuery();
      resetIsTouchDevice();
    }, 33);

    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'childList') {
          throttledResetLayout();
        }
      });
    });

    observer.observe(window.document.body, {
      childList: true,
      subtree: true,
    });

    window.addEventListener('resize', throttledResetLayout);
    window.visualViewport?.addEventListener('resize', throttledResetLayout);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', throttledResetLayout);
      window.visualViewport?.removeEventListener(
        'resize',
        throttledResetLayout,
      );
    };
  }, [resetMediaQuery, resetIsTouchDevice]);
};
