import React, { useEffect } from 'react';

import { AboutHeader } from '@components/AboutHeader';
import { AboutItem } from '@components/AboutItem';
import { ABOUT_TITLE_ID, AboutNavigation } from '@components/AboutNavigation';
import { Bio } from '@components/Bio';
import { Meta } from '@components/Meta';
import { OpensourceSection } from '@components/OpensourceSection';
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
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        <AboutHeader />
        {isPortfolio ? (
          <>
            <WorkExperienceSection />
            <OpensourceSection />
            <section>
              <h2 className="font-bold text-3xl mb-6" id={ABOUT_TITLE_ID.ETC}>
                🗃️ Other Experiences
              </h2>
              <ul>
                <AboutItem
                  title="정보처리기사 자격증 취득"
                  period="2021.06"
                  titleAlign="left"
                />
                <AboutItem
                  title="프로그램 저작권 등록 - Webtoon Hub (C-2021-020527)"
                  period="2021.02"
                  titleAlign="left"
                />
                <AboutItem
                  title="공주대학교"
                  period="2016.04 - 2022.08"
                  titleAlign="left"
                  description={``}
                />
                <AboutItem
                  title="공주대학교 개발 동아리 - Primitive"
                  period="2016.05"
                  titleAlign="left"
                  description="후배들을 대상으로 졸업 전엔 Android 개발 강의를 진행하였으며 졸업 후에는 취업 멘토링 활동을 하였습니다."
                />
              </ul>
            </section>
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
