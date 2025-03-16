import { SELECTOR } from '@constants/layout';
import { cn } from '@utils/cn';
import type { PageProps } from 'gatsby';

import { GlobalMenu } from './_components/GlobalMenu';
import { GlobalNavigation } from './_components/GlobalNavigation';
import { useSyncLayout } from './_hooks/useSyncLayout';

// 스크롤바 안정화를 위한 커스텀 클래스 정의
const scrollbarStableClass = 'scrollbar-stable';

// 커스텀 CSS 추가
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    .scrollbar-stable {
      scrollbar-gutter: stable;
    }
  `;
  document.head.appendChild(style);
}

const GlobalLayout = ({ children, location }: PageProps) => {
  useSyncLayout();

  return (
    <div
      className={cn(
        'hide-scrollbar relative size-full overflow-auto',
        scrollbarStableClass,
      )}
      id={SELECTOR.ROOT}
    >
      <GlobalNavigation search={location.search} />
      <main
        id={SELECTOR.MAIN}
        className={cn(
          'size-full',
          'bg-zinc-100 text-zinc-800',
          'dark:bg-zinc-900 dark:text-zinc-50',
        )}
      >
        {children}
      </main>
      <GlobalMenu pathname={location.pathname} />
    </div>
  );
};

export default GlobalLayout;
