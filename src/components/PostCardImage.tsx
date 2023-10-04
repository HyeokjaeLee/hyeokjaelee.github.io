import { StaticImage } from 'gatsby-plugin-image';

import React from 'react';

import { Skeleton } from '@hyeokjaelee/pastime-ui';

interface PostCardImageProps {
  src: string;
  alt: string;
}

export const PostCardImage = ({ src, alt }: PostCardImageProps) => {
  switch (src) {
    case 'issues':
      return (
        <div className="relative w-full h-0 pb-[50%] rounded-t-md overflow-hidden">
          <StaticImage
            src="../images/issues.jpg"
            alt={alt}
            className="absolute w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      );

    default:
      return (
        <div className="relative w-full h-0 pb-[50%] rounded-t-md overflow-hidden">
          <Skeleton className="absolute w-full h-full object-cover" />
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="absolute w-full h-full object-cover"
          />
        </div>
      );
  }
};
