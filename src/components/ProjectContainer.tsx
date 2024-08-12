import React from 'react';

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
}: ProjectContainerProps) => (
  <dl className="md:flex-row flex flex-col gap-3">
    <dt className="flex w-52 flex-col">
      <h3 className="text-2xl font-bold" id={id}>
        {title}
      </h3>
      <p className="text-sm">{jobTitle}</p>
      {period ? (
        <span className="whitespace-nowrap text-xs text-zinc-400">
          {period}
        </span>
      ) : null}
    </dt>
    <dd className="mb-4 flex-1">{children}</dd>
  </dl>
);
