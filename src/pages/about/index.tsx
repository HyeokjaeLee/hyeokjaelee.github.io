import { AboutHeader } from '@components/AboutHeader';
import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';
import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';
import React, { useEffect } from 'react';

export const Head = () => <Meta title="About" />;

const About = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const isPortfolio = searchParams.get('portfolio') !== null;

  useEffect(() => {
    if (isPortfolio) navigate('/portfolio');
  }, [isPortfolio]);

  return (
    <article className="md:mt-14 mt-8 flex break-keep p-4 font-nanum-square leading-relaxed">
      <div className="mx-auto flex max-w-3xl flex-col gap-12">
        <AboutHeader />
        <footer className="py-12">
          <Bio />
        </footer>
      </div>
    </article>
  );
};

export default About;
