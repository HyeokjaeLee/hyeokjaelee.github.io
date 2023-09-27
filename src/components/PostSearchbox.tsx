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
      fixedDarkMode="dark"
      size="small"
      className={`w-full text-xs transition-all ${
        isFocused ? 'max-w-xs' : 'max-w-[20em]'
      }`}
      options={[...postMap.keys()]}
      placeholder="찾고 싶은 글이 있나요?"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      value={keyword}
      onChange={(e) => {
        e.preventInnerStateChange();
        setKeyword(e.value);
      }}
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
