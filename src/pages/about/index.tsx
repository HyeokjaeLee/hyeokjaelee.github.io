import { Bio } from '@components/molecules/Bio';
import { Meta } from '@components/molecules/Meta';
import { AboutHeader } from '@components/organisms/AboutHeader';
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
    <article className="font-nanum-square mt-8 flex break-keep p-4 leading-relaxed md:mt-14">
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
