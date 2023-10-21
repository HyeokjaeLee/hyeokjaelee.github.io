import React from 'react';

import { useGlobalStore } from '@stores/useGlobalStore';

interface StackProps {
  name: string;
  logo?: string;
  backgroundColor: string;
  blackLogo?: boolean;
}

interface LinkProps {
  name: string;
  href: string;
  type?: 'github' | 'blog' | 'storybook' | 'product';
}

interface WorkExperienceItemProps {
  title: string;
  stacks: StackProps[];
  links?: LinkProps[];
  whatDidIDo?: string[];
  description?: string;
  borderBottom?: boolean;
}

const WorkExperienceItem = ({
  title,
  stacks,
  whatDidIDo,
  description,
  links,
  borderBottom,
}: WorkExperienceItemProps) => (
  <li
    className={`border-zinc-300 dark:border-zinc-700 ${
      borderBottom ? 'border-b pb-4 mb-4' : ''
    }`}
  >
    <h4 className="text-xl font-bold">{title}</h4>
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
              {whatDidIDo.map((summary, index) => (
                <li key={index}>{summary}</li>
              ))}
            </ul>
          </dd>
        </>
      ) : null}
      {stacks ? (
        <>
          <dt className="font-bold text-lg mt-3 mb-1">Tech Stack</dt>
          <dd>
            <ul className="flex gap-1 flex-wrap">
              {stacks.map(({ name, backgroundColor, blackLogo, logo }) => (
                <li key={name}>
                  <img
                    src={`https://img.shields.io/badge/${name}-${backgroundColor.replace(
                      '#',
                      '',
                    )}?style=flat-square&logo=${logo ?? name}&logoColor=${
                      blackLogo ? 'black' : 'white'
                    }`}
                    alt={name}
                    loading="lazy"
                  />
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

interface WorkExperienceProps {
  title: string;
  period?: string;
  children: React.ReactNode;
  jobTitle: string;
  id?: string;
  borderBottom?: boolean;
}

export const WorkExperience = Object.assign(
  ({
    title,
    period,
    children,
    jobTitle,
    id,
    borderBottom,
  }: WorkExperienceProps) => {
    const helloTarget = useGlobalStore((state) => state.helloTarget);
    return (
      <dl
        className={`flex gap-3 flex-col md:flex-row border-zinc-300 dark:border-zinc-700 ${
          borderBottom ? 'border-b mb-4' : ''
        }`}
        id={id}
      >
        <dt className="flex flex-col w-52">
          <h3 className="font-bold text-2xl">{title}</h3>
          <p className="text-sm">{jobTitle}</p>
          {period && helloTarget ? (
            <span className="text-zinc-400 text-xs whitespace-nowrap">
              {period}
            </span>
          ) : null}
        </dt>
        <dd className="mb-4 flex-1">
          <ul>{children}</ul>
        </dd>
      </dl>
    );
  },
  { Item: WorkExperienceItem },
);
