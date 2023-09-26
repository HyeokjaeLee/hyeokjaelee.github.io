import React from 'react';

import type { PageProps } from 'gatsby';

const GlobalLayout = ({ location: { pathname }, children }: PageProps) => (
  <>
    {children}
    {pathname}
  </>
);

export default GlobalLayout;
