import React from 'react';

import { StackBadge, type StackBadgeProps } from '../atoms/StackBadge';

interface LinkProps {
  name: string;
  href: string;
  type?: 'github' | 'blog' | 'storybook' | 'product';
}

interface SideProjectItemProps {
  title: string;
  stacks: StackBadgeProps[];
  links: LinkProps[];
  description?: string;
  id?: string;
  list?: string[];
}

export const SideProjectItem = ({
  title,
  stacks,
  description,
  links,
  id,
  list,
}: SideProjectItemProps) => (
  <li className="border-border mb-4 flex flex-col gap-3 border-b pb-4 last:mb-0 last:border-none last:pb-0 md:flex-row">
    <header className="md:w-56">
      <h4 className="text-xl font-bold" id={id}>
        {title}
      </h4>
      <ul className="mb-5 mt-2 flex flex-wrap gap-1">
        {stacks?.map((props) => (
          <li key={props.name}>
            <StackBadge {...props} />
          </li>
        ))}
      </ul>
    </header>
    <dl className="flex-1">
      {description ? (
        <>
          <dt className="mb-1 text-lg font-bold">Description</dt>
          <dd className="whitespace-pre-wrap text-sm">{description}</dd>
        </>
      ) : null}
      {list ? (
        <ul className="my-4 ml-4 list-disc">
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {links ? (
        <>
          <dt className="mt-2 text-lg font-bold">Link</dt>
          <dd className="border-gray-500 text-xs">
            <ul>
              {links?.map(({ name, href, type = 'blog' }) => (
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
    </dl>
  </li>
);
