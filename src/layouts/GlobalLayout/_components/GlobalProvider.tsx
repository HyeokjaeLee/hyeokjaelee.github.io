import type { PropsWithChildren } from 'react';
import { CookiesProvider } from 'react-cookie';

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      {children}
    </CookiesProvider>
  );
};
