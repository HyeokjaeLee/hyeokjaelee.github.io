import { SELECTOR } from '@constants/layout';
import { cn } from '@utils/cn';
import type { PageProps } from 'gatsby';

import { GlobalNavigation } from './_components/GlobalNavigation';
import { useSyncLayout } from './_hooks/useSyncLayout';

const GlobalLayout = ({ children, location }: PageProps) => {
  useSyncLayout();

  return (
    <div
      className={cn('hide-scrollbar relative size-full overflow-auto')}
      id={SELECTOR.ROOT}
    >
      <GlobalNavigation search={location.search} />
      <main
        id={SELECTOR.MAIN}
        className={cn('size-full', 'bg-background text-primary')}
      >
        {children}
      </main>
    </div>
  );
};

export default GlobalLayout;
