import type { GatsbySSR } from 'gatsby';
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const HTML_PROPS = {
  lang: 'ko',
  className: 'sm:text-lg w-full h-full font-pretendard',
};

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHtmlAttributes,
}) => {
  setHtmlAttributes(HTML_PROPS);
};
