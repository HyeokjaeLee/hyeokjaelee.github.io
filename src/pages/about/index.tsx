import React, { useEffect } from 'react';

import { AboutHeader } from '@components/AboutHeader';
import { AboutNavigation } from '@components/AboutNavigation';
import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';
import { OpensourceSection } from '@components/OpensourceSection';
import { OtherExperienceSection } from '@components/OtherExperienceSection';
import { SkillSection } from '@components/SkillSection';
import { WorkExperienceSection } from '@components/WorkExperienceSection';
import { useLocation } from '@reach/router';
import { useGlobalStore } from '@stores/useGlobalStore';

export const Head = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const portfolioTarget = searchParams.get('portfolio');
  const portfolioPreview = searchParams.get('preview');

  const isPortfolio = !!(portfolioTarget || portfolioPreview !== null);

  return <Meta title={isPortfolio ? 'Portfolio' : 'About'} />;
};

const About = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const portfolioTarget = searchParams.get('portfolio');
  const portfolioPreview = searchParams.get('preview');

  const isPortfolio = !!(portfolioTarget || portfolioPreview !== null);

  const setHelloTarget = useGlobalStore((state) => state.setHelloTarget);

  useEffect(() => {
    if (portfolioTarget) return setHelloTarget(portfolioTarget);
  }, [portfolioTarget, setHelloTarget]);

  return (
    <article className="leading-relaxed mt-8 md:mt-14 p-4 font-nanum-square break-keep flex">
      {isPortfolio ? <div className="flex-1 hidden lg:block" /> : null}
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        <AboutHeader />
        {isPortfolio ? (
          <>
            <WorkExperienceSection />
            <OpensourceSection />
            <OtherExperienceSection />
            <SkillSection />
          </>
        ) : null}
        <footer className="py-12">
          <Bio />
        </footer>
      </div>
      {isPortfolio ? <AboutNavigation /> : null}
    </article>
  );
};

export default About;
