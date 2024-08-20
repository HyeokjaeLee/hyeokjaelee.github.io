import React, { useEffect, useRef, useState } from 'react';

import { useGlobalStore } from '@stores/useGlobalStore';
import { cn } from '@utils/cn';

export const Comment = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isDarkMode = useGlobalStore((state) => state.isDarkMode);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(false);

    const timer = setTimeout(() => {
      if (!ref.current) return;
      const utterances = document.createElement('script');
      const attributes = {
        src: 'https://utteranc.es/client.js',
        repo: 'HyeokjaeLee/hyeokjaelee.github.io',
        'issue-term': 'url',
        label: 'comment',
        crossorigin: 'anonymous',
        async: 'true',
        theme: isDarkMode ? 'dark-blue' : 'github-light',
      };

      Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });

      ref.current.appendChild(utterances);

      setIsMounted(true);
    }, 1_000);

    return () => {
      clearTimeout(timer);
      document.querySelectorAll('.utterances').forEach((node) => node.remove());
    };
  }, [isDarkMode]);

  return (
    <section className="mx-auto flex px-5 py-4">
      <div
        ref={ref}
        className={cn('w-full min-h-64', {
          'animate-fade-up animate-duration-700': isMounted,
        })}
      />
    </section>
  );
};
