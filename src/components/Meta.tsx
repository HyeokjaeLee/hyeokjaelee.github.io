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
        name="google-site-verification"
        content="6KHb8V0fAsVjI-k0fZfovmdLDrfikkgwpVMCsfSmvrw"
      />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="theme-color" content="#000000" />
      <GoogleAnalytics />
      {children}
    </>
  );
};
