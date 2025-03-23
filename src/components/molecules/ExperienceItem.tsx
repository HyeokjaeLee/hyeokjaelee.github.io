import { DISPLAY_TYPE, useDisplayType } from '@hooks/useDisplayType';
import React, { Fragment } from 'react';
import { ExternalLink } from 'react-feather';

import type { StackBadgeProps } from '../atoms/StackBadge';
import { StackBadge } from '../atoms/StackBadge';

interface ExperienceContentProps {
  description: string[];
  project: {
    title: string;
    content: (
      | string
      | {
          what: string;
          result?: string;
          link?: string;
        }
    )[];
  }[];
}

const ExperienceContent = ({
  description,
  project,
}: ExperienceContentProps) => {
  const isPdf = useDisplayType() === DISPLAY_TYPE.PDF;

  return (
    <ul className="flex flex-col gap-6 leading-6">
      <li>
        <ul className="ml-4 list-disc">
          {description.map((item, index) => {
            const splittedItem = item.split('***');

            return (
              <li key={index}>
                {splittedItem.map((part, partIndex) => {
                  // 짝수 인덱스는 일반 텍스트, 홀수 인덱스는 강조할 텍스트
                  return partIndex % 2 === 0 ? (
                    part
                  ) : (
                    <strong key={partIndex}>{part}</strong>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </li>
      <li>
        <h4 className="mb-3 text-xl font-bold">프로젝트</h4>
        <dl>
          {project.map(({ title, content }, index) => {
            return (
              <Fragment key={index}>
                <dt className="mb-2 text-lg font-bold">
                  {index + 1}. {title}
                </dt>
                <dd className="mb-4">
                  <ul className="ml-8 list-disc text-sm leading-6">
                    {content.map((value, index) => {
                      if (typeof value === 'object') {
                        return (
                          <li key={index}>
                            {value.what}
                            {value.link ? (
                              isPdf ? (
                                <a
                                  href={value.link}
                                  className="block text-blue-500 underline"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  바로가기
                                </a>
                              ) : (
                                <a
                                  className="ml-1 inline-block"
                                  href={value.link}
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  <ExternalLink className="size-3 text-blue-500" />
                                </a>
                              )
                            ) : null}
                            {value.result ? (
                              <blockquote className="my-2 border-l-4 border-yellow-400 pl-2 text-zinc-400">
                                {value.result}
                              </blockquote>
                            ) : null}
                          </li>
                        );
                      }

                      return <li key={index}>{value}</li>;
                    })}
                  </ul>
                </dd>
              </Fragment>
            );
          })}
        </dl>
      </li>
    </ul>
  );
};

interface ExperienceProps {
  title: string;
  period?: string;
  children?: React.ReactNode;
  jobTitle?: string;
  id?: string;
  borderBottom?: boolean;
  description?: string;
  stacks?: StackBadgeProps[];
}

export const Experience = Object.assign(
  ({
    title,
    period,
    children,
    jobTitle,
    id,
    borderBottom,
    description,
    stacks,
  }: ExperienceProps) => (
    <dl
      className={`flex flex-col gap-3 border-zinc-300 md:flex-row md:gap-5 dark:border-zinc-700 ${
        borderBottom ? 'mb-4 border-b' : ''
      }`}
      id={id}
    >
      <dt className={`flex flex-col ${children ? 'md:w-44' : ''}`}>
        <h3 className="text-2xl font-bold">{title}</h3>
        {jobTitle ? <p className="text-sm">{jobTitle}</p> : null}
        {period ? (
          <span className="whitespace-nowrap text-xs text-zinc-400">
            {period}
          </span>
        ) : null}
        {description ? (
          <span className="mt-3 text-xs">{description}</span>
        ) : null}
        <section className="mt-4 flex flex-wrap gap-1">
          {stacks?.map((stack) => <StackBadge key={stack.name} {...stack} />)}
        </section>
      </dt>
      <dd className="mb-4 flex-1">{children}</dd>
    </dl>
  ),
  { Content: ExperienceContent },
);
