import React from 'react';

import { useGetSiteMetaData } from '@hooks/useGetSiteMetaData';

const GoogleAnalytics = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-DEXMW0T0W6"
    />
    <script>
      {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
      
          gtag('config', 'G-DEXMW0T0W6');`}
    </script>
  </>
);

interface MetaProps {
  title?: string | null;
  description?: string | null;
  children?: React.ReactNode;
}

export const Meta = ({ title, description, children }: MetaProps) => {
  const { title: defaultTitle, description: defaultDescription } =
    useGetSiteMetaData();

  const metaTitle = title ? `${defaultTitle} | ${title}` : defaultTitle;
  const metaDescription = description ?? defaultDescription;

  return (
    <>
      <title>{metaTitle}</title>
      <meta
        content="6KHb8V0fAsVjI-k0fZfovmdLDrfikkgwpVMCsfSmvrw"
        name="google-site-verification"
      />
      <meta content={metaDescription} name="description" />
      <meta content={metaTitle} property="og:title" />
      <meta content={metaDescription} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content="summary" name="twitter:card" />
      <meta content={metaTitle} name="twitter:title" />
      <meta content={metaDescription} name="twitter:description" />
      <meta content="#000000" name="theme-color" />
      <GoogleAnalytics />
      {children}
    </>
  );
};
