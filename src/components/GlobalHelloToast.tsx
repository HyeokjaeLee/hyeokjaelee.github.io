import { useEffect } from 'react';

import { useToast } from '@hyeokjaelee/pastime-ui';

export const GlobalHelloToast = () => {
  const { toast } = useToast();
  useEffect(
    () =>
      toast({
        message: '👋 안녕하세요! 방문해주셔서 감사해요!',
        type: 'info',
      }),
    [toast],
  );
  return null;
};
