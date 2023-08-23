import { graphql, useStaticQuery, navigate } from 'gatsby';

import React from 'react';

import { usePostToSearch } from '@hooks';
import { Searchbox } from '@hyeokjaelee/pastime-ui';

export const PostSearchbox = () => {
  usePostToSearch();

  return <Searchbox options={[]} />;
};
