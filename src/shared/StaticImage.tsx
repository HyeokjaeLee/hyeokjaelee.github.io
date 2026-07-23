import type { ImgHTMLAttributes } from 'react';

// Eagerly resolve every image under src/images/portfolio to its built asset URL.
const portfolioImages = import.meta.glob('../images/portfolio/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function resolve(src: string): string {
  const name = src.split('/').pop() ?? src;

  return (
    Object.entries(portfolioImages).find(([key]) =>
      key.endsWith(`/${name}`),
    )?.[1] ?? src
  );
}

interface StaticImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  /** Relative path as written in the original Gatsby source, e.g. "../../images/portfolio/gititle.png" */
  src: string;
}

/**
 * Drop-in replacement for `gatsby-plugin-image`'s `<StaticImage>` so the existing
 * JSX in ProjectSection / WorkExperienceSection does not need to change.
 */
export const StaticImage = ({ src, alt = '', ...rest }: StaticImageProps) => {
  return <img alt={alt} loading="lazy" src={resolve(src)} {...rest} />;
};
