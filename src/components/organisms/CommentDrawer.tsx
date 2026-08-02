'use client';

import { Button } from '@components/atoms/Button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@components/molecules/Drawer';
import { GISCUS_CONFIG } from '@constants/giscus';
import { SITE_META } from '@constants/site';
import { useCommentDrawerStore } from '@stores/useCommentDrawerStore';
import { useLayoutStore } from '@stores/useLayoutStore';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

const GISCUS_ORIGIN = 'https://giscus.app';

const giscusTheme = (dark: boolean) => (dark ? 'noborder_dark' : 'noborder_light');

/** giscus `mapping:'specific'` needs an explicit term = the post's canonical URL. */
const buildTerm = (pathname: string) => new URL(pathname, SITE_META.siteUrl).href;

const appendGiscus = (container: HTMLElement, term: string) => {
  const dark = document.documentElement.classList.contains('dark');
  const script = document.createElement('script');

  const attrs: Record<string, string> = {
    src: 'https://giscus.app/client.js',
    'data-repo': GISCUS_CONFIG.repo,
    'data-repo-id': GISCUS_CONFIG.repoId,
    'data-category': GISCUS_CONFIG.category,
    'data-category-id': GISCUS_CONFIG.categoryId,
    'data-mapping': 'specific',
    'data-term': term,
    'data-strict': '0',
    'data-reactions-enabled': GISCUS_CONFIG.reactionsEnabled,
    'data-emit-metadata': '0',
    'data-input-position': GISCUS_CONFIG.inputPosition,
    'data-theme': giscusTheme(dark),
    'data-lang': GISCUS_CONFIG.lang,
    crossorigin: 'anonymous',
    async: 'true',
  };

  Object.entries(attrs).forEach(([key, value]) =>
    script.setAttribute(key, value),
  );

  container.appendChild(script);
};

const clearGiscus = (container: HTMLElement) => {
  container
    .querySelectorAll('.giscus, iframe.giscus-frame, script[src*="giscus"]')
    .forEach((node) => node.remove());
};

const CommentSkeleton = () => (
  <div
    aria-busy="true"
    aria-label="댓글 불러오는 중"
    className="animate-pulse space-y-4"
  >
    <div className="flex gap-2">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="size-8 rounded-full bg-zinc-200 dark:bg-zinc-700" />
      ))}
    </div>
    <div className="h-24 rounded-lg bg-zinc-200 dark:bg-zinc-700" />
    <div className="space-y-3">
      {[0, 1].map((i) => (
        <div key={i} className="flex gap-3">
          <div className="size-8 shrink-0 rounded-full bg-zinc-200 dark:bg-zinc-700" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-1/4 rounded bg-zinc-200 dark:bg-zinc-700" />
            <div className="h-3 w-full rounded bg-zinc-200 dark:bg-zinc-700" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const CommentDrawer = () => {
  const isOpen = useCommentDrawerStore((s) => s.isOpen);
  const target = useCommentDrawerStore((s) => s.target);
  const closeCommentDrawer = useCommentDrawerStore((s) => s.closeCommentDrawer);
  const isDarkMode = useLayoutStore((s) => s.isDarkMode);

  // Callback ref: the vaul portal mounts its content asynchronously after the
  // open effect fires, so we track the container element via state and let the
  // creation effect re-run once it exists.
  const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Create giscus fresh each time the drawer opens for a target.
  useEffect(() => {
    if (!isOpen || !target || !containerEl) return;

    setIsLoading(true);
    appendGiscus(containerEl, buildTerm(target.pathname));

    // giscus posts resizeHeight once the discussion renders — that's our
    // readiness signal and the source of truth for the iframe height
    // (cross-origin: we cannot measure it ourselves).
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== GISCUS_ORIGIN) return;

      const iframe = containerEl.querySelector<HTMLIFrameElement>(
        'iframe.giscus-frame',
      );
      const height = event.data?.giscus?.resizeHeight;

      if (typeof height === 'number' && iframe) {
        iframe.style.height = `${height}px`;
        setIsLoading(false);
      }
    };

    window.addEventListener('message', onMessage);

    // Fallback: never leave the skeleton up forever.
    const fallback = setTimeout(() => setIsLoading(false), 8000);

    return () => {
      window.removeEventListener('message', onMessage);
      clearTimeout(fallback);
      clearGiscus(containerEl);
    };
  }, [isOpen, target, containerEl]);

  // Sync theme on dark-mode toggle without reloading the widget.
  useEffect(() => {
    if (!isOpen || !containerEl) return;

    const iframe = containerEl.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame',
    );

    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: giscusTheme(isDarkMode) } } },
      GISCUS_ORIGIN,
    );
  }, [isDarkMode, isOpen, containerEl]);

  return (
    <Drawer
      direction="bottom"
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) closeCommentDrawer();
      }}
    >
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="flex-row items-center justify-between">
          <DrawerTitle className="truncate text-base font-semibold">
            {target?.title ?? '댓글'}
          </DrawerTitle>
          <Button
            aria-label="닫기"
            onClick={closeCommentDrawer}
            onlyIcon
            size="8"
            variant="ghost"
          >
            <X className="size-4" />
          </Button>
        </DrawerHeader>
        <div className="relative min-h-0 flex-1 overflow-y-auto px-4 pb-8">
          {/* giscus mounts here; kept visible (not display:none) so the iframe
              loads while the skeleton overlays it. */}
          <div className="min-h-[300px]" ref={setContainerEl} />
          {isLoading ? (
            <div className="absolute inset-0 top-0 px-4 pt-4">
              <CommentSkeleton />
            </div>
          ) : null}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
