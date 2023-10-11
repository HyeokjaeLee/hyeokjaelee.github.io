import { shallow } from 'zustand/shallow';

import { useEffect } from 'react';

import { useToast } from '@hyeokjaelee/pastime-ui';
import { useGlobalStore } from '@stores/useGlobalStore';

export const GlobalHelloToast = () => {
  const { toast } = useToast();

  const [helloTarget, setHelloTarget] = useGlobalStore(
    (state) => [state.helloTarget, state.setHelloTarget],
    shallow,
  );

  useEffect(() => {
    if (helloTarget !== undefined) {
      toast({
        message: `👋 ${
          helloTarget && helloTarget !== 'common' ? `${helloTarget}님 ` : ''
        }안녕하세요! 방문해주셔서 감사해요!`,
        type: 'info',
      });
    } else setHelloTarget('');
  }, [toast, helloTarget, setHelloTarget]);
  return null;
};
