import React from 'react';

import { useGlobalStore } from '@stores/useGlobalStore';

interface ProjectContainerProps {
  title: string;
  period?: string;
  children: React.ReactNode;
  jobTitle: string;
  id?: string;
}

export const ProjectContainer = ({
  title,
  period,
  children,
  jobTitle,
  id,
}: ProjectContainerProps) => {
  const helloTarget = useGlobalStore((state) => state.helloTarget);
  return (
    <dl className="flex gap-3 flex-col md:flex-row">
      <dt className="flex flex-col w-52">
        <h3 className="font-bold text-2xl" id={id}>
          {title}
        </h3>
        <p className="text-sm">{jobTitle}</p>
        {period && helloTarget ? (
          <span className="text-zinc-400 text-xs whitespace-nowrap">
            {period}
          </span>
        ) : null}
      </dt>
      <dd className="mb-4 flex-1">{children}</dd>
    </dl>
  );
};
