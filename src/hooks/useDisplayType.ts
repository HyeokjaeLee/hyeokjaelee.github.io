import { SEARCH_PARAMS } from '@constants/searchParams';
import { useSearchParams } from '@hooks/useSearchParams';
import { assertEnum } from '@utils/assert';

export enum DISPLAY_TYPE {
  PDF = 'pdf',
  WEB = 'web',
}

export const useDisplayType = () => {
  const searchParams = useSearchParams();
  const displayType =
    searchParams.get(SEARCH_PARAMS.DISPLAY_TYPE) || DISPLAY_TYPE.WEB;

  assertEnum(DISPLAY_TYPE, displayType);

  return displayType;
};
