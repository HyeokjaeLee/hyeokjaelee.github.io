import { Meta } from '@components/molecules/Meta';
import { AboutHeader } from '@components/organisms/AboutHeader';
import { OtherExperienceSection } from '@components/organisms/OtherExperienceSection';
import { ProjectSection } from '@components/organisms/ProjectSection';
import { WorkExperienceSection } from '@components/organisms/WorkExperienceSection';
import React from 'react';

export const Head = () => <Meta title="Portfolio" />;

const Portfolio = () => {
  return (
    <article className="mt-8 flex break-keep p-4 pb-20 leading-relaxed md:my-14">
      <div className="mx-auto flex max-w-3xl flex-col gap-12">
        <AboutHeader />
        <WorkExperienceSection />
        <ProjectSection />
        <OtherExperienceSection />
      </div>
    </article>
  );
};

export default Portfolio;
