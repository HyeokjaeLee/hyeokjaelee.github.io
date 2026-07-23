import { SITE_META } from '@constants/site';

export const useGetSiteMetaData = () => {
  const { title, description } = SITE_META;

  if (!title || !description) {
    throw Error('사이트 기본정보 설정이 필요합니다.');
  }

  return { title, description };
};
