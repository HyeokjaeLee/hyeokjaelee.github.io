import type { StackBadgeProps } from './StackBadge';

import React from 'react';

import { StackBadge } from './StackBadge';

interface LinkProps {
  name: string;
  href: string;
  type?: 'github' | 'blog' | 'storybook' | 'product';
}

interface ExperienceItemProps {
  title: string;
  stacks?: StackBadgeProps[];
  links?: LinkProps[];
  whatDidIDo?: (string | { what: string; result: string })[];
  description?: string;
  borderBottom?: boolean;
  id?: string;
}

const ExperienceItem = ({
  title,
  stacks,
  whatDidIDo,
  description,
  links,
  borderBottom,
  id,
}: ExperienceItemProps) => (
  <li
    className={`border-zinc-300 dark:border-zinc-700 ${
      borderBottom ? 'mb-4 border-b pb-4' : ''
    }`}
  >
    <h4 className="text-xl font-bold" id={id}>
      {title}
    </h4>
    <dl>
      {description ? (
        <>
          <dt className="mb-1 mt-3 text-lg font-bold">Description</dt>
          <dd className="whitespace-pre-wrap text-sm">{description}</dd>
        </>
      ) : null}
      {whatDidIDo ? (
        <>
          <dt className="mb-1 mt-2 text-lg font-bold">What did I do</dt>
          <dd>
            <ul className="ml-4 list-disc text-sm">
              {whatDidIDo.map((summary, index) => {
                if (typeof summary === 'object') {
                  return (
                    <li key={index}>
                      {summary.what}
                      <blockquote className="my-2 border-l-4 border-yellow-400 pl-2 text-zinc-400">
                        {summary.result}
                      </blockquote>
                    </li>
                  );
                }

                return <li key={index}>{summary}</li>;
              })}
            </ul>
          </dd>
        </>
      ) : null}
      {stacks ? (
        <>
          <dt className="mb-1 mt-3 text-lg font-bold">Tech Stack</dt>
          <dd>
            <ul className="flex flex-wrap gap-1">
              {stacks.map((props) => (
                <li key={props.name}>
                  <StackBadge {...props} />
                </li>
              ))}
            </ul>
          </dd>
        </>
      ) : null}
    </dl>
    {links ? (
      <>
        <dt className="mt-3 text-lg font-bold">Link</dt>
        <dd>
          <ul className="border-gray-500 text-xs">
            {links.map(({ name, href, type = 'blog' }) => (
              <li key={name}>
                <a
                  className="text-blue-500 hover:underline"
                  href={href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {name} (
                  {
                    {
                      github: 'Github repo',
                      blog: 'Blog post',
                      storybook: 'Storybook',
                      product: 'Product',
                    }[type]
                  }
                  )
                </a>
              </li>
            ))}
          </ul>
        </dd>
      </>
    ) : null}
  </li>
);

interface ExperienceProps {
  title: string;
  period?: string;
  children?: React.ReactNode;
  jobTitle?: string;
  id?: string;
  borderBottom?: boolean;
  description?: string;
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
  }: ExperienceProps) => (
    <dl
      className={`md:flex-row md:gap-5 flex flex-col gap-3 border-zinc-300 dark:border-zinc-700 ${
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
      </dt>
      <dd className="mb-4 flex-1">
        <ul>{children}</ul>
      </dd>
    </dl>
  ),
  { Item: ExperienceItem },
);
