import React from 'react';
import { Calendar, Link2 } from 'react-feather';

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

interface ProjectItemProps {
  title: string;
  summaries?: string[];
  stacks?: StackProps[];
  links?: LinkProps[];
  experiences?: string[];
  period?: string;
  id?: string;
}

export const AboutItem = ({
  title,
  summaries,
  stacks,
  experiences,
  links,
  period,
  id,
}: ProjectItemProps) => (
  <li className="mb-7">
    <h4 className="text-xl mb-3 flex items-center gap-2 flex-wrap" id={id}>
      {title}{' '}
      {period ? (
        <small className="flex items-center text-sm gap-1 font-semibold text-zinc-400">
          <Calendar className="w-4 h-4" />
          {period}
        </small>
      ) : null}
    </h4>
    {stacks ? (
      <ul className="flex gap-1 mb-5 flex-wrap">
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
    ) : null}
    {summaries ? (
      <ul className="text-sm list-disc ml-4">
        {summaries.map((summary, index) => (
          <li key={index} className="mb-1">
            {summary}
          </li>
        ))}
      </ul>
    ) : null}
    {experiences ? (
      <ul className="text-sm my-6">
        {experiences.map((experience, index) => (
          <li className="mb-2" key={index}>
            {experience}
          </li>
        ))}
      </ul>
    ) : null}

    {links ? (
      <blockquote className="border-l-4 border-gray-500 pl-3 text-xs">
        <h5 className="mb-1 flex gap-1 items-center font-bold">
          <Link2 className="w-3 h-3" />
          관련 링크
        </h5>
        <ul className="list-decimal ml-4">
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
      </blockquote>
    ) : null}
  </li>
);
