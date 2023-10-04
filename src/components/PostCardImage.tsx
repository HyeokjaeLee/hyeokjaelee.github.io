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
        <div className="relative w-full h-0 pb-[50%] rounded-t-md overflow-hidden bg-slate-500">
          <StaticImage
            src="../images/turtle-hole.png"
            alt={alt}
            className="absolute w-2/3 h-full object-cover left-1/2 transform -translate-x-1/2"
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
