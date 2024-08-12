import React, { useEffect, useRef, useState } from 'react';

import { Skeleton, useDarkMode } from '@hyeokjaelee/pastime-ui';

enum STATUS {
  SUCCESS = 'success',
  LOADING = 'loading',
  FAIL = 'fail',
}

const ATTRIBUTES = {
  src: 'https://utteranc.es/client.js',
  repo: 'HyeokjaeLee/hyeokjaelee.github.io',
  'issue-term': 'url',
  label: 'comment',
  crossorigin: 'anonymous',
  async: 'true',
};

export const Utterances = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState(STATUS.LOADING);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    setStatus(STATUS.LOADING);
    const timer = setTimeout(() => {
      const { current: UtterancesContainer } = ref;

      if (!UtterancesContainer) {
        setStatus(STATUS.FAIL);

        return;
      }

      const utterances = document.createElement('script');
      const attributes = {
        ...ATTRIBUTES,
        theme: isDarkMode ? 'dark-blue' : 'github-light',
      };

      Object.entries(attributes).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });

      UtterancesContainer.appendChild(utterances);

      setStatus(STATUS.SUCCESS);
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.querySelectorAll('.utterances').forEach((node) => node.remove());
    };
  }, [isDarkMode]);

  return (
    <section className="mx-auto flex px-5 py-4">
      <div
        ref={ref}
        className={`min-h-[269px] w-full ${
          status === STATUS.SUCCESS ? 'block' : 'hidden'
        }`}
      />
      {
        {
          [STATUS.LOADING]: <Skeleton className="h-64 w-full" />,
          [STATUS.FAIL]: (
            <div className="flex h-64 w-full flex-col items-center justify-center gap-2 font-semibold text-zinc-300 dark:text-zinc-700">
              <div className="text-5xl">😭</div>
              댓글을 가져오지 못했어요 ㅜㅜ
            </div>
          ),
          [STATUS.SUCCESS]: null,
        }[status]
      }
    </section>
  );
};
