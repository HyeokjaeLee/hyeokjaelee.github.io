import React from 'react';

import { ABOUT_TITLE_ID } from './AboutNavigation';
import { Experience } from './Experience';

export const OtherExperienceSection = () => (
  <section id={ABOUT_TITLE_ID.ETC}>
    <h2 className="font-bold text-3xl mb-6">🗃️ Other Experience</h2>
    <Experience
      title="공주대학교"
      period="2016.04 - 2022.08"
      jobTitle="컴퓨터 공학과 졸업"
    >
      <Experience.Item
        title="개발 동아리 - Primitive"
        borderBottom
        description={`학과 개발 동아리 입니다.\n후배들을 대상으로 졸업 전엔 Android 개발 강의를 진행하였으며 졸업 후에는 취업 멘토링 활동을 하였습니다.`}
      />
      <Experience.Item
        title="프로그램 저작권 등록 - Webtoon Hub"
        borderBottom
        description={`여러 웹툰 플랫폼의 정보를 제공하는 앱입니다.\n학교에서 프로그램 저작권 제안을 받아 등록했습니다.\n등록번호: C-2021-020527`}
        links={[
          {
            href: 'https://github.com/HyeokjaeLee/webtoon-hub',
            name: 'webtoon-hub',
            type: 'github',
          },
        ]}
      />
      <Experience.Item
        title="자격증 취득 - 정보처리기사"
        description={`2021년 6월에 정보처리기사 자격증을 취득했습니다.`}
      />
    </Experience>
  </section>
);
