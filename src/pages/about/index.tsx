import React, { useEffect } from 'react';

import { useLocation } from '@reach/router';
import { useGlobalStore } from '@stores/useGlobalStore';

const About = () => {
  const { search } = useLocation();
  const portfolioTarget = new URLSearchParams(search).get('portfolio');
  const setHelloTarget = useGlobalStore((state) => state.setHelloTarget);

  useEffect(() => {
    if (portfolioTarget) setHelloTarget(portfolioTarget);
  }, [portfolioTarget, setHelloTarget]);

  return (
    <article>
      <h2 className="text-3xl">덕업일치 개발자, 이혁재입니다.</h2>
      2010년에 스마트폰
    </article>
  );
};

export default About;
