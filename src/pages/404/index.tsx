import { graphql } from 'gatsby';

import * as React from 'react';

import type { PageProps } from 'gatsby';

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const NotFoundPage = ({
  data,
  location,
}: PageProps<Queries.NotFoundPageQuery>) => (
  <>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

export default NotFoundPage;

export const NotFoundPageQuery = graphql`
  query NotFoundPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
