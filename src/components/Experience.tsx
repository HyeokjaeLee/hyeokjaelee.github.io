import React from 'react';

import { StackBadge, StackBadgeProps } from './StackBadge';

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
      borderBottom ? 'border-b pb-4 mb-4' : ''
    }`}
  >
    <h4 className="text-xl font-bold" id={id}>
      {title}
    </h4>
    <dl>
      {description ? (
        <>
          <dt className="font-bold text-lg mt-3 mb-1">Description</dt>
          <dd className="text-sm whitespace-pre-wrap">{description}</dd>
        </>
      ) : null}
      {whatDidIDo ? (
        <>
          <dt className="font-bold text-lg mt-2 mb-1">What did I do</dt>
          <dd>
            <ul className="text-sm list-disc ml-4">
              {whatDidIDo.map((summary, index) => {
                if (typeof summary === 'object') {
                  return (
                    <li key={index}>
                      {summary.what}
                      <blockquote className="pl-2 border-l-4 border-yellow-400 my-2 text-zinc-400">
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
          <dt className="font-bold text-lg mt-3 mb-1">Tech Stack</dt>
          <dd>
            <ul className="flex gap-1 flex-wrap">
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
        <dt className="font-bold text-lg mt-3">Link</dt>
        <dd>
          <ul className="border-gray-500 text-xs">
            {links.map(({ name, href, type = 'blog' }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                  rel="noreferrer"
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
      className={`flex gap-3 flex-col md:flex-row md:gap-5 border-zinc-300 dark:border-zinc-700 ${
        borderBottom ? 'border-b mb-4' : ''
      }`}
      id={id}
    >
      <dt className={`flex flex-col ${children ? 'md:w-44' : ''}`}>
        <h3 className="font-bold text-2xl">{title}</h3>
        {jobTitle ? <p className="text-sm">{jobTitle}</p> : null}
        {period ? (
          <span className="text-zinc-400 text-xs whitespace-nowrap">
            {period}
          </span>
        ) : null}
        {description ? (
          <span className="text-xs mt-3">{description}</span>
        ) : null}
      </dt>
      <dd className="mb-4 flex-1">
        <ul>{children}</ul>
      </dd>
    </dl>
  ),
  { Item: ExperienceItem },
);
