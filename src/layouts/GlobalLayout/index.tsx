import { SELECTOR } from '@constants/layout';
import { DISPLAY_TYPE, useDisplayType } from '@hooks/useDisplayType';
import { cn } from '@utils/cn';
import type { PageProps } from 'gatsby';
import { AnimatePresence, motion } from 'motion/react';

import { GlobalNavigation } from './_components/GlobalNavigation';
import { useInitDarkMode } from './_hooks/useInitDarkMode';
import { useInitScroll } from './_hooks/useInitScroll';
import { useSyncLayout } from './_hooks/useSyncLayout';

const GlobalLayout = ({ children, location }: PageProps) => {
  useSyncLayout();
  useInitScroll();
  useInitDarkMode();

  const displayType = useDisplayType();

  return (
    <div
      className={cn('relative size-full overflow-auto', {
        'hide-scrollbar overflow-auto': displayType === DISPLAY_TYPE.WEB,
      })}
      id={SELECTOR.ROOT}
    >
      <GlobalNavigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          id={SELECTOR.MAIN}
          className={cn('size-full', 'bg-background text-primary')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default GlobalLayout;
