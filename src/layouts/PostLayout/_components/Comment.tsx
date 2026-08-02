import { GISCUS_CONFIG } from '@constants/giscus';
import { useLayoutStore } from '@stores/useLayoutStore';
import { cn } from '@utils/cn';
import { useEffect, useRef, useState } from 'react';

const REPO = 'Hyeokjaelee/hyeokjaelee.github.io';
const giscusTheme = (dark: boolean) => (dark ? 'noborder_dark' : 'noborder_light');
const utterancesTheme = (dark: boolean) =>
  dark ? 'dark-blue' : 'github-light';

const clearWidgets = () => {
  document
    .querySelectorAll('.utterances, .giscus, iframe.giscus-frame')
    .forEach((node) => node.remove());
};

const appendWidget = (container: HTMLElement, dark: boolean) => {
  const script = document.createElement('script');

  if (GISCUS_CONFIG.isEnabled) {
    const attrs: Record<string, string> = {
      src: 'https://giscus.app/client.js',
      'data-repo': REPO,
      'data-repo-id': GISCUS_CONFIG.repoId,
      'data-category': GISCUS_CONFIG.category,
      'data-category-id': GISCUS_CONFIG.categoryId,
      'data-mapping': GISCUS_CONFIG.mapping,
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
  } else {
    // Fallback: utterances until the giscus category is configured.
    const attrs: Record<string, string> = {
      src: 'https://utteranc.es/client.js',
      repo: REPO,
      'issue-term': 'url',
      label: 'comment',
      crossorigin: 'anonymous',
      async: 'true',
      theme: utterancesTheme(dark),
    };
    Object.entries(attrs).forEach(([key, value]) =>
      script.setAttribute(key, value),
    );
  }

  container.appendChild(script);
};

export const Comment = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isDarkMode = useLayoutStore((state) => state.isDarkMode);
  const [isMounted, setIsMounted] = useState(false);
  // Mount the widget once.
  useEffect(() => {
    setIsMounted(false);

    const timer = setTimeout(() => {
      if (!ref.current) return;

      appendWidget(ref.current, document.documentElement.classList.contains('dark'));
      setIsMounted(true);
    }, 1_000);

    return () => {
      clearTimeout(timer);
      clearWidgets();
    };
  }, []);

  // Sync theme on dark-mode toggle without reloading the whole widget.
  useEffect(() => {
    if (!isMounted) return;

    if (GISCUS_CONFIG.isEnabled) {
      // giscus: switch theme in place via postMessage.
      const iframe = document.querySelector<HTMLIFrameElement>(
        'iframe.giscus-frame',
      );

      iframe?.contentWindow?.postMessage(
        { giscus: { setConfig: { theme: giscusTheme(isDarkMode) } } },
        'https://giscus.app',
      );
    } else {
      // utterances: theme is fixed at load, so reload the widget.
      clearWidgets();

      if (ref.current) {
        appendWidget(ref.current, isDarkMode);
      }
    }
  }, [isDarkMode, isMounted]);

  return (
    <section id="comments" className="mx-auto flex scroll-mt-20 px-5 py-4">
      <div
        ref={ref}
        className={cn('min-h-64 w-full', {
          'animate-fade-up animate-duration-700': isMounted,
        })}
      />
    </section>
  );
};
