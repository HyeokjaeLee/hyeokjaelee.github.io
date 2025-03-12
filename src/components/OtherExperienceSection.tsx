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
    <ul className="list-disc ml-4 text-lg font-bold leading-8">
      <li>2024년 웰로 우수사원 선정 (2024.12)</li>
      <li>Primitive 개발 동아리 활동 / 취업 멘토링 (2022~ )</li>
      <li>정보처리기사 자격증 취득 (2021.06)</li>
      <li>
        Primitive 개발 동아리 활동 / 안드로이드 개발 강의 (2016.04 - 2022.03)
      </li>
      <li>Webtoon Hub 프로그램 저작권 등록 (C-2021-020527)</li>
      <li>공주대학교 컴퓨터 공학 전공 (2016.04 - 2022.08)</li>
    </ul>
  </section>
);
