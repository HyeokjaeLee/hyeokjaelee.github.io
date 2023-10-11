import React, { useEffect } from 'react';

import { AboutHeader } from '@components/AboutHeader';
import { AboutItem } from '@components/AboutItem';
import { ABOUT_TITLE_ID, AboutNavigation } from '@components/AboutNavigation';
import { Bio } from '@components/Bio';
import { CodestatesWorkExperience } from '@components/CodestatesWorkExperience';
import { CoupangWorkExperience } from '@components/CoupangWorkExperience';
import { Meta } from '@components/Meta';
import { SideProjectSection } from '@components/SideProjectSection';
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
            <section>
              <h2
                className="font-bold text-3xl mb-6"
                id={ABOUT_TITLE_ID.WORK_EXPERIENCE}
              >
                👨‍💻 Work experience
              </h2>
              <dl className="mb-4">
                <CodestatesWorkExperience />
                <CoupangWorkExperience />
              </dl>
            </section>
            <SideProjectSection />
            <section>
              <h2 className="font-bold text-3xl mb-6" id={ABOUT_TITLE_ID.ETC}>
                🗃️ Etc
              </h2>
              <ul>
                <AboutItem
                  title="정보처리기사 자격증"
                  period="2021.06"
                  summaries={['정보처리기사 자격증 취득']}
                />
                <AboutItem
                  title="프로그램 저작권 등록 - Webtoon Hub"
                  period="2021.02"
                  summaries={['등록번호: C-2021-020527']}
                />
                <AboutItem
                  title="공주대학교 개발 창업 동아리 - Primitive"
                  period="2016.05"
                  summaries={[
                    '재학 중: Android 개발 강의',
                    '졸업 후: 취업 멘토링 활동',
                  ]}
                />
              </ul>
            </section>
            <section>
              <h2 className="font-bold text-3xl mb-6" id={ABOUT_TITLE_ID.EDU}>
                🎓 Education
              </h2>
              <ul>
                <AboutItem
                  title="공주대학교"
                  period="2016.04 - 2022.08"
                  summaries={['컴퓨터 공학 학사']}
                />
              </ul>
            </section>
          </>
        ) : null}
        <footer className="py-12 border-t">
          <Bio />
        </footer>
      </div>
      {isPortfolio ? <AboutNavigation /> : null}
    </article>
  );
};

export default About;
