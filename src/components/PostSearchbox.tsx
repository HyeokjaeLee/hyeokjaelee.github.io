import { navigate } from 'gatsby';

import React, { useState } from 'react';

import { useGetPostMapToSearch } from '@hooks/useGetPostMapToSearch';
import { Searchbox } from '@hyeokjaelee/pastime-ui';

export const PostSearchbox = () => {
  const postMap = useGetPostMapToSearch();
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState('');

  return (
    <Searchbox
      className={`z-20 w-full text-xs transition-all ${
        isFocused ? 'max-w-xs' : 'max-w-[20em]'
      }`}
      fixedDarkMode="dark"
      options={[...postMap.keys()]}
      placeholder="찾고 싶은 글이 있나요?"
      size="small"
      value={keyword}
      onBlur={() => setIsFocused(false)}
      onChange={(e) => {
        e.preventInnerStateChange();
        setKeyword(e.value);
      }}
      onFocus={() => setIsFocused(true)}
      onSelect={(e) => {
        e.prventDefault();
        const slug = postMap.get(e.value);
        if (slug) {
          navigate(slug);
          setKeyword('');
        }
      }}
    />
  );
};
