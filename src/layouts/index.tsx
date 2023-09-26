import React from 'react';

import type { PageProps } from 'gatsby';

const Layout = ({ location: { pathname }, children }: PageProps) => (
  <>
    {children}
    {pathname}
  </>
);

export default Layout;
