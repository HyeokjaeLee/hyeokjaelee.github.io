import React, { useEffect } from 'react';

import { AboutHeader } from '@components/AboutHeader';
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
    const isDarkMode = document.documentElement.classList.contains('dark');

    if (!isDarkMode) document.documentElement.classList.add('dark');

    return () => {
      setIsNavVisible(true);

      if (!isDarkMode) document.documentElement.classList.remove('dark');
    };
  }, [setIsNavVisible]);

  return (
    <article className="leading-relaxed my-8 md:my-14 p-4 font-nanum-square break-keep flex">
      <div className="flex-1 hidden lg:block" />
      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        <AboutHeader />
        <WorkExperienceSection />
        <OpensourceSection />
        <OtherExperienceSection />
        <SkillSection />
      </div>
      <PortfolioNavigation />
    </article>
  );
};

export default Portfolio;
