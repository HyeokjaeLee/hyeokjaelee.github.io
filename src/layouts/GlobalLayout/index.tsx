import { SELECTOR } from '@constants/layout';
import { cn } from '@utils/cn';
import type { PageProps } from 'gatsby';
import { AnimatePresence, motion } from 'motion/react';

import { GlobalNavigation } from './_components/GlobalNavigation';
import { useSyncLayout } from './_hooks/useSyncLayout';

const GlobalLayout = ({ children, location }: PageProps) => {
  useSyncLayout();

  return (
    <div
      className={cn('hide-scrollbar relative size-full overflow-auto')}
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
