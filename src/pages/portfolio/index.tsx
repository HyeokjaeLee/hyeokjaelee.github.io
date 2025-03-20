import { AboutHeader } from '@components/AboutHeader';
import { Meta } from '@components/Meta';
import { OpensourceSection } from '@components/OpensourceSection';
import { OtherExperienceSection } from '@components/OtherExperienceSection';
import { WorkExperienceSection } from '@components/WorkExperienceSection';
import React from 'react';

export const Head = () => <Meta title="Portfolio" />;

const Portfolio = () => {
  return (
    <article className="font-nanum-square my-8 flex break-keep p-4 leading-relaxed md:my-14">
      <div className="mx-auto flex max-w-3xl flex-col gap-12">
        <AboutHeader />
        <WorkExperienceSection />
        <OpensourceSection />
        <OtherExperienceSection />
      </div>
    </article>
  );
};

export default Portfolio;
