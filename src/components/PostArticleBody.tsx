import parse from 'html-react-parser';

import React from 'react';

interface PostArticleBodyProps {
  html: string;
}

export const PostArticleBody = ({ html }: PostArticleBodyProps) => (
  <section itemProp="post-article-body">{parse(html)}</section>
);
