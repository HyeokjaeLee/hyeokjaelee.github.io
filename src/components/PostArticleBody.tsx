import parse from 'html-react-parser';

import React from 'react';

interface PostArticleBodyProps {
  html: string;
}

export const PostArticleBody = ({ html }: PostArticleBodyProps) => (
  <section
    itemProp="post-article-body"
    className="max-w-3xl mx-auto w-full post-body"
  >
    {parse(html)}
  </section>
);
