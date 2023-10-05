import { StaticImage } from 'gatsby-plugin-image';

import * as React from 'react';

const NotFoundPage = () => (
  <article className="flex flex-col m-auto items-center gap-4 h-full justify-center">
    <h1 className="text-7xl font-black">404 :(</h1>
    <p className="text-lg font-bold">페이지를 찾을 수 없어요!</p>
    <div className="text-9xl animate-bounce mt-6">🤖</div>
  </article>
);

export default NotFoundPage;
