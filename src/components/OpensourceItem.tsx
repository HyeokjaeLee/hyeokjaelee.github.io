import React from 'react';

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

interface OpensourceItemProps {
  title: string;
  stacks: StackProps[];
  links: LinkProps[];
  description?: string;
}

export const OpensourceItem = ({
  title,
  stacks,
  description,
  links,
}: OpensourceItemProps) => (
  <li
    className={`flex gap-3 border-zinc-200 dark:border-zinc-800 border-b pb-4 mb-4 last:border-none last:pb-0 last:mb-0 flex-col md:flex-row`}
  >
    <header className="w-56">
      <h4 className="text-xl font-bold">{title}</h4>
      <ul className="flex gap-1 mt-2 mb-5 flex-wrap">
        {stacks?.map(({ name, backgroundColor, blackLogo, logo }) => (
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
    </header>
    <dl className="flex-1">
      {description ? (
        <>
          <dt className="font-bold text-lg mb-1">Description</dt>
          <dd className="text-sm whitespace-pre-wrap">{description}</dd>
        </>
      ) : null}
      {links ? (
        <>
          <dt className="font-bold text-lg mt-2">Link</dt>
          <dd className="border-gray-500 text-xs">
            <ul>
              {links?.map(({ name, href, type = 'blog' }) => (
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
    </dl>
  </li>
);
