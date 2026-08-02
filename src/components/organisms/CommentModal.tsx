'use client';

import { Button } from '@components/atoms/Button';
import { Spinner } from '@components/atoms/Spinner';
import { GISCUS_CONFIG } from '@constants/giscus';
import { SITE_META } from '@constants/site';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useCommentDrawerStore } from '@stores/useCommentDrawerStore';
import { useLayoutStore } from '@stores/useLayoutStore';
import { cn } from '@utils/cn';
import { X } from 'lucide-react';
import { useEffect, useLayoutEffect, useState } from 'react';

const GISCUS_ORIGIN = 'https://giscus.app';

// Treat giscus as "fully loaded" only after its height stops changing — the
// iframe renders an internal "loading comments" state before the real content,
// and each render posts a new resizeHeight. Debouncing the last message means
// we wait until the real content is in place.
const READY_DEBOUNCE = 600;
const READY_FALLBACK = 10_000;

const giscusTheme = (dark: boolean) =>
  dark ? 'noborder_dark' : 'noborder_light';

/** giscus `mapping:'specific'` needs an explicit term = the post's canonical URL. */
const buildTerm = (pathname: string) =>
  new URL(pathname, SITE_META.siteUrl).href;

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

export const CommentModal = () => {
  const isOpen = useCommentDrawerStore((s) => s.isOpen);
  const target = useCommentDrawerStore((s) => s.target);
  const closeCommentDrawer = useCommentDrawerStore((s) => s.closeCommentDrawer);
  const isDarkMode = useLayoutStore((s) => s.isDarkMode);

  // Callback ref: the dialog portal mounts content asynchronously, so track the
  // container via state and let the load effect re-run once it exists.
  const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading synchronously on open so the modal never flashes its ready
  // state before the spinner paints — isLoading would otherwise stay stale
  // from the previous open cycle (this component stays mounted while closed).
  useLayoutEffect(() => {
    if (target) setIsLoading(true);
  }, [target]);
  // Load giscus for the target; reveal only once its height stabilises.
  useEffect(() => {
    if (!isOpen || !target || !containerEl) return;

    setIsLoading(true);
    appendGiscus(containerEl, buildTerm(target.pathname));

    let readyTimer: number;

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== GISCUS_ORIGIN) return;

      const height = event.data?.giscus?.resizeHeight;
      if (typeof height !== 'number') return;

      const iframe = containerEl.querySelector<HTMLIFrameElement>(
        'iframe.giscus-frame',
      );
      if (iframe) iframe.style.height = `${height}px`;

      // Reset on every height change; fire only when it goes quiet.
      window.clearTimeout(readyTimer);
      readyTimer = window.setTimeout(() => setIsLoading(false), READY_DEBOUNCE);
    };

    window.addEventListener('message', onMessage);
    const fallback = window.setTimeout(
      () => setIsLoading(false),
      READY_FALLBACK,
    );

    return () => {
      window.removeEventListener('message', onMessage);
      window.clearTimeout(readyTimer);
      window.clearTimeout(fallback);
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

  if (!isOpen || !target) return null;

  return (
    <DialogPrimitive.Root open onOpenChange={(o) => !o && closeCommentDrawer()}>
      <DialogPrimitive.Portal>
        {/* Backdrop; centered spinner while loading (modal itself stays hidden). */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 data-[state=open]:animate-fade">
          {isLoading ? <Spinner className="size-10 text-white" /> : null}
        </DialogPrimitive.Overlay>
        {/*
          Content is mounted from the start so the iframe can load, but kept
          invisible (opacity-0, non-interactive) until ready — so the size is
          already final when it appears (no layout shift).
        */}
        <DialogPrimitive.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          className={cn(
            'bg-background text-primary fixed z-51 flex max-h-[85vh] flex-col overflow-hidden transition-opacity duration-200',
            // mobile: bottom sheet
            'inset-x-0 bottom-0 rounded-t-2xl',
            // desktop: centered modal
            'sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:w-full sm:max-w-lg sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl',
            isLoading ? 'pointer-events-none opacity-0' : 'opacity-100',
          )}
        >
          <header className="flex items-center justify-between border-b px-4 py-3">
            <DialogPrimitive.Title className="truncate text-base font-semibold">
              {target.title ?? '댓글'}
            </DialogPrimitive.Title>
            <Button
              aria-label="닫기"
              onClick={closeCommentDrawer}
              onlyIcon
              size="8"
              variant="ghost"
            >
              <X className="size-4" />
            </Button>
          </header>
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
            <div ref={setContainerEl} />
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
