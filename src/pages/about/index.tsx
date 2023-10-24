import { navigate } from 'gatsby';

import React, { useEffect } from 'react';

import { AboutHeader } from '@components/AboutHeader';
import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';
import { useLocation } from '@reach/router';

export const Head = () => <Meta title="About" />;

const About = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const isPortfolio = searchParams.get('portfolio') !== null;

  useEffect(() => {
    if (isPortfolio) navigate('/portfolio');
  }, [isPortfolio]);

  return (
    <article className="leading-relaxed mt-8 md:mt-14 p-4 font-nanum-square break-keep flex">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        <AboutHeader />
        <footer className="py-12">
          <Bio />
        </footer>
      </div>
    </article>
  );
};

export default About;
