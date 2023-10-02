import React from 'react';

import { useGetSiteMetaData } from '@hooks/useGetSiteMetaData';

interface MetaProps {
  title?: string | null;
  description?: string | null;
  children?: React.ReactNode;
}

enum DEFAULT_META {
  TITLE = '덕업일치 개발자',
  DESCRIPTION = '덕업일치 개발자의 블로그입니다.',
}

export const HTML_PROPS = {
  lang: 'ko',
  className: 'sm:text-lg w-full h-full font-pretendard',
};

export const Meta = ({ title, description, children }: MetaProps) => {
  const siteMetaData = useGetSiteMetaData();

  const subTitle = title || siteMetaData?.title;
  const metaDescription =
    description || siteMetaData?.description || DEFAULT_META.DESCRIPTION;

  const titleTemplate = subTitle
    ? `${DEFAULT_META.TITLE} | ${subTitle}`
    : DEFAULT_META.TITLE;

  return (
    <>
      <title>{titleTemplate}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={titleTemplate} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={titleTemplate} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  );
};