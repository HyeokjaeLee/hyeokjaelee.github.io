import React from 'react';
import { Calendar } from 'react-feather';

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
    <>
      <dt className="mb-4">
        <h3 className="font-bold text-2xl flex items-center" id={id}>
          {title}
          {period && helloTarget ? (
            <div className="text-zinc-400 text-base flex gap-1 items-center ml-2">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
          ) : null}
        </h3>
        <p className="text-sm ml-1">{jobTitle}</p>
      </dt>
      <dd className="mb-4">{children}</dd>
    </>
  );
};
