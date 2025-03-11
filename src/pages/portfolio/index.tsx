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
    <article className="my-8 flex break-keep p-4 font-nanum-square leading-relaxed md:my-14">
      <div className="flex-1 phone:hidden tablet:hidden" />
      <div className="mx-auto flex max-w-3xl flex-col gap-12">
        <AboutHeader />
        <WorkExperienceSection />
        <OpensourceSection />
        <OtherExperienceSection />
      </div>
      <PortfolioNavigation />
    </article>
  );
};

export default Portfolio;
