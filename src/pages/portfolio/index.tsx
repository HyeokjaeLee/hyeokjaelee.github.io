import React from 'react';

import { AboutHeader } from '@components/AboutHeader';
import { AboutNavigation } from '@components/AboutNavigation';
import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';
import { OpensourceSection } from '@components/OpensourceSection';
import { OtherExperienceSection } from '@components/OtherExperienceSection';
import { SkillSection } from '@components/SkillSection';
import { WorkExperienceSection } from '@components/WorkExperienceSection';
import { useLocation } from '@reach/router';

export const Head = () => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const portfolioTarget = searchParams.get('portfolio');
  const portfolioPreview = searchParams.get('preview');

  const isPortfolio = !!(portfolioTarget || portfolioPreview !== null);

  return <Meta title={isPortfolio ? 'Portfolio' : 'About'} />;
};

const Portfolio = () => (
  <article className="leading-relaxed mt-8 md:mt-14 p-4 font-nanum-square break-keep flex">
    <div className="flex-1 hidden lg:block" />
    <div className="max-w-3xl mx-auto flex flex-col gap-12">
      <AboutHeader />
      <WorkExperienceSection />
      <OpensourceSection />
      <OtherExperienceSection />
      <SkillSection />
      <footer className="py-12">
        <Bio />
      </footer>
    </div>
    <AboutNavigation />
  </article>
);

export default Portfolio;
