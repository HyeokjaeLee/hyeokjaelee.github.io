import { graphql, useStaticQuery } from 'gatsby';

import type { SiteMetaDataQuery } from 'types';

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

  return site?.siteMetadata;
};
