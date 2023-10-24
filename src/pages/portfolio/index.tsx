import React, { useEffect } from 'react';

import { AboutHeader } from '@components/AboutHeader';
import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';
import { OpensourceSection } from '@components/OpensourceSection';
import { OtherExperienceSection } from '@components/OtherExperienceSection';
import { PortfolioNavigation } from '@components/PortfolioNavigation';
import { SkillSection } from '@components/SkillSection';
import { WorkExperienceSection } from '@components/WorkExperienceSection';
import { useGlobalStore } from '@stores/useGlobalStore';

export const Head = () => <Meta title="Portfolio" />;

const Portfolio = () => {
  const setIsNavVisible = useGlobalStore((state) => state.setIsNavVisible);

  useEffect(() => {
    setIsNavVisible(false);
    return () => setIsNavVisible(true);
  }, [setIsNavVisible]);

  return (
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
      <PortfolioNavigation />
    </article>
  );
};

export default Portfolio;
