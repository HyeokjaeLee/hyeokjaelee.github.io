import React, { useState } from 'react';

import { Searchbox } from '@hyeokjaelee/pastime-ui';

import { usePostOptionsToSearch } from '../_hooks/usePostOptionsToSearch';

export const PostSearchbox = () => {
  const { postOptions, moveToPost } = usePostOptionsToSearch();
  const [keyword, setKeyword] = useState('');

  return (
    <Searchbox
      placeholder="검색어를 입력해주세요."
      fixedDarkMode="dark"
      value={keyword}
      onChange={(e) => {
        e.preventInnerStateChange();
        setKeyword(e.value);
      }}
      options={postOptions}
      onSelect={(e) => {
        e.prventDefault();
        moveToPost(e.value);
      }}
    />
  );
};
