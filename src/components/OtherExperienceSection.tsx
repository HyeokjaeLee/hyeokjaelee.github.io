import React from 'react';

import { Experience } from './Experience';
import { ABOUT_TITLE_ID } from './PortfolioNavigation';

export const OtherExperienceSection = () => (
  <section>
    <h2
      className="mb-6 text-3xl font-bold"
      id={ABOUT_TITLE_ID.OTHER_EXPERIENCE}
    >
      🗃️ Other Experience
    </h2>
    <Experience
      jobTitle="컴퓨터 공학과 졸업"
      period="2016.04 - 2022.08"
      title="공주대학교"
    >
      <Experience.Item
        borderBottom
        description={`학과 개발 동아리입니다.\n후배들을 대상으로 졸업 전엔 Android 개발 강의를 진행하였으며 졸업 후에는 취업 멘토링 활동을 하였습니다.`}
        title="개발 동아리 - Primitive"
      />
      <Experience.Item
        borderBottom
        description={`여러 웹툰 플랫폼의 정보를 제공하는 앱입니다.\n학교에서 프로그램 저작권 제안을 받아 등록했습니다.\n등록번호: C-2021-020527`}
        links={[
          {
            href: 'https://github.com/HyeokjaeLee/webtoon-hub',
            name: 'webtoon-hub',
            type: 'github',
          },
        ]}
        title="프로그램 저작권 등록 - Webtoon Hub"
      />
      <Experience.Item
        description="2021년 6월에 정보처리기사 자격증을 취득했습니다."
        title="자격증 취득 - 정보처리기사"
      />
    </Experience>
  </section>
);
