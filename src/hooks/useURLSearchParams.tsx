import { useLocation } from '@reach/router';

export const useURLSearchParams = () => {
  const { search } = useLocation();

  return new URLSearchParams(search);
};
