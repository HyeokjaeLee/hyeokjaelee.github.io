import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children?: ReactNode;
}

/**
 * Drop-in replacement for Gatsby / @reach/router `<Link>`.
 * Renders a plain anchor; Astro's <ClientRouter /> intercepts same-origin
 * clicks for SPA-style navigation automatically.
 */
export const Link = ({ to, children, ...rest }: LinkProps) => {
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  );
};
