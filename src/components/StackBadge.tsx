import React from 'react';

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
}: StackBadgeProps) => (
  <img
    src={`https://img.shields.io/badge/${name}-${backgroundColor.replace(
      '#',
      '',
    )}?style=flat-square&logo=${logo ?? name}&logoColor=${
      blackLogo ? 'black' : 'white'
    }`}
    alt={name}
    loading="lazy"
  />
);
