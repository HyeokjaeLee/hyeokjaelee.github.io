import * as React from "react";
import { graphql } from "gatsby";
import type { PageProps } from "gatsby";

import { Seo, DefaultLayout } from "../components";

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const NotFoundPage = ({ data, location }: PageProps<DataProps>) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <DefaultLayout location={location} title={siteTitle}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </DefaultLayout>
  );
};

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
