import { HTML_PROPS } from './src/components/Meta';

import type { GatsbySSR } from 'gatsby';
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHtmlAttributes,
}) => {
  setHtmlAttributes(HTML_PROPS);
};
