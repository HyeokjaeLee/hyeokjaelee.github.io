import React, { useState } from 'react';

import { Skeleton } from '@hyeokjaelee/pastime-ui';

export interface StackBadgeProps {
  name: string;
  logo?: string;
  backgroundColor: string;
  blackLogo?: boolean;
}

export const StackBadge = ({
  name,
  backgroundColor,
  blackLogo,
  logo,
}: StackBadgeProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Skeleton className={`h-5 w-12 ${isLoading ? '' : 'hidden'}`} />
      <img
        className={`${isLoading ? 'hidden' : ''}`}
        src={`https://img.shields.io/badge/${name}-${backgroundColor.replace(
          '#',
          '',
        )}?style=flat-square&logo=${logo ?? name}&logoColor=${
          blackLogo ? 'black' : 'white'
        }`}
        alt={name}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};
