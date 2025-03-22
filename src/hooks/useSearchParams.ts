import { useLocation } from '@reach/router';
import { useMemo } from 'react';

let searchParams: URLSearchParams | undefined;

export const useSearchParams = searchParams
  ? () => searchParams
  : () => {
      const { search } = useLocation();
      const searchParams = useMemo(() => new URLSearchParams(search), [search]);

      return searchParams;
    };
