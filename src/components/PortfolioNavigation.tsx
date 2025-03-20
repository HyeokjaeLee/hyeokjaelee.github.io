import React from 'react';

import { PostArticleNavigation } from './PostArticleNavigation';

export enum ABOUT_TITLE_ID {
  ABOUT_ME = 'about-me',
  WORK_EXPERIENCE = 'work-experience',
  SKILL = 'skill',
  OPEN_SOURCE = 'open-source',
  OTHER_EXPERIENCE = 'other-experience',
}

export const PortfolioNavigation = () => (
  <PostArticleNavigation
    headings={[
      {
        value: 'About me',
        id: ABOUT_TITLE_ID.ABOUT_ME,
        depth: 1,
      },
      {
        value: 'Work experience',
        id: ABOUT_TITLE_ID.WORK_EXPERIENCE,
        depth: 1,
      },
      {
        value: 'Side Projects',
        id: ABOUT_TITLE_ID.OPEN_SOURCE,
        depth: 1,
      },
      {
        value: 'Other experience',
        id: ABOUT_TITLE_ID.OTHER_EXPERIENCE,
        depth: 1,
      },
    ]}
    title="Portfolio"
  />
);
