import * as React from 'react';

const NotFoundPage = () => (
  <article className="m-auto flex h-full flex-col items-center justify-center gap-4">
    <h1 className="text-7xl font-black">404 :(</h1>
    <p className="text-lg font-bold">페이지를 찾을 수 없어요!</p>
    <div className="mt-6 animate-bounce text-9xl">🤖</div>
  </article>
);

export default NotFoundPage;
