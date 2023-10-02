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

    return () => {
      document.querySelectorAll('.utterances').forEach((node) => node.remove());
    };
  }, [isDarkMode]);

  return (
    <section className="max-w-3xl py-4 px-5 mx-auto flex">
      <div ref={ref} className="min-h-[20em] w-full" />
      {
        {
          [STATUS.LOADING]: <Skeleton className="w-full h-64" />,
          [STATUS.FAIL]: (
            <div className="flex flex-col h-64 justify-center items-center w-full gap-2 font-semibold text-zinc-300 dark:text-zinc-700">
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
