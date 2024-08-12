import parse from 'html-react-parser';

import React from 'react';

interface PostArticleBodyProps {
  html: string;
}

export const PostArticleBody = ({ html }: PostArticleBodyProps) => (
  <section
    className="post-body mx-auto w-full max-w-3xl"
    itemProp="post-article-body"
  >
    {parse(html)}
  </section>
);
