import { graphql, useStaticQuery } from 'gatsby';
import type { SiteMetaDataQuery } from 'types/graphql-types';

export const useGetSiteMetaData = () => {
  const { site } = useStaticQuery<SiteMetaDataQuery>(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { title, description } = site?.siteMetadata ?? {};

  if (!title || !description) throw Error('사이트 기본정보 설정이 필요합니다.');

  return { title, description };
};
