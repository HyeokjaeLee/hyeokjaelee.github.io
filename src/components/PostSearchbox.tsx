import React, { useState } from 'react';

import { Searchbox } from '@hyeokjaelee/pastime-ui';

export const PostSearchbox = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Searchbox
      fixedDarkMode="dark"
      size="small"
      className={`w-full text-xs transition-all ${
        isFocused ? 'max-w-xs' : 'max-w-[20em]'
      }`}
      placeholder="찾고 싶은 글이 있나요?"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};
