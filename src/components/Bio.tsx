import { useStaticQuery, graphql } from 'gatsby';

import React from 'react';
import { GitHub, Linkedin, Mail } from 'react-feather';

import { useLayoutStore } from '@stores';

import { Logo } from './Logo';

interface Data {
  site: {
    siteMetadata: {
      author: {
        name: string;
        summary: string;
      };
      social: {
        github: string;
        linkedin: string;
        email: string;
      };
    };
  };
}

const BioStaticQuery = graphql`
  query BioQuery {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          github
          linkedin
          email
        }
      }
    }
  }
`;

export const Bio = () => {
  const { siteMetadata } = useStaticQuery<Data>(BioStaticQuery).site;

  const social = siteMetadata?.social;

  const linkInfo = [
    {
      name: 'GitHub',
      href: `https://github.com/${social.github}`,
      logo: GitHub,
      target: '_blank',
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/in/${social.linkedin}`,
      logo: Linkedin,
      target: '_blank',
    },
    {
      name: 'Email',
      href: `mailto:${social.email}`,
      logo: Mail,
    },
  ];

  const darkMode = useLayoutStore((state) => state.darkMode);

  return (
    <div className="flex items-center gap-7 flex-wrap pb-10 mb-10">
      <div className="bg-dark-1 dark:bg-light-1 rounded-container p-5 w-[100px] h-[100px]">
        <Logo width="100%" height="100%" fill={darkMode ? 'black' : 'white'} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">덕업일치 개발자</h2>
        <div className="flex pt-1">
          {linkInfo.map(({ logo: Logo, name, ...linkProps }) => (
            <a
              key={name}
              {...linkProps}
              className="relative group flex justify-center items-center rounded-[100%] w-[2.2em] h-[2.2em] hover:transition-all duration-100 ease-in-out hover:bg-zinc-600  hover:text-zinc-200"
            >
              <Logo size="1.2em" />
              <span className="hidden absolute group-hover:block top-10 text-xs text-light-1 dark:text-dark-1">
                {name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
