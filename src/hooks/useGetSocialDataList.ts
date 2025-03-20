import { graphql, useStaticQuery } from 'gatsby';
import type { Icon } from 'react-feather';
import { GitHub, Linkedin, Mail } from 'react-feather';
import type { SocialDataQuery } from 'types/graphql-types';

interface SocialData {
  name: string;
  icon: Icon;
  href: string;
  target?: string;
}

export const useGetSocialDataList = (): SocialData[] => {
  const { site } = useStaticQuery<SocialDataQuery>(graphql`
    query SocialData {
      site {
        siteMetadata {
          social {
            github
            linkedin
            email
          }
        }
      }
    }
  `);

  const { github, linkedin, email } = site?.siteMetadata?.social ?? {};

  if (!github || !linkedin || !email)
    throw new Error('Social 정보가 없습니다.');

  return [
    {
      name: 'Github',
      icon: GitHub,
      href: `https://github.com/${github}`,
      target: '_blank',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/in/${linkedin}`,
      target: '_blank',
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${email}`,
    },
  ];
};
