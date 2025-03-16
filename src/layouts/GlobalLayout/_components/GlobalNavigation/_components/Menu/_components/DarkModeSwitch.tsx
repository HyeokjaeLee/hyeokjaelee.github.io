import type { DotLottieType } from '@components/atoms/DotLottie';
import { DotLottie } from '@components/atoms/DotLottie';
import { useLayoutStore } from '@stores/useLayoutStore';
import { debounce } from 'lodash-es';
import { useMemo, useRef, useState } from 'react';
import { useShallow } from 'zustand/shallow';

export const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useLayoutStore(
    useShallow((state) => [state.isDarkMode, state.setIsDarkMode]),
  );

  const [dotLottie, setDotLottie] = useState<DotLottieType | null>(null);

  // 리스너 클린업을 위한 ref
  const animationCompleteRef = useRef<(() => void) | null>(null);

  const handleChange = useMemo(
    () =>
      debounce(() => {
        if (!dotLottie) return;

        const newIsDarkMode = !isDarkMode;
        // 기존 리스너가 있다면 제거
        if (animationCompleteRef.current) {
          dotLottie.removeEventListener(
            'complete',
            animationCompleteRef.current,
          );
        }

        // 새 핸들러 생성 및 저장
        const handleComplete = () => {
          setIsDarkMode(newIsDarkMode);
          dotLottie.removeEventListener('complete', handleComplete);
          animationCompleteRef.current = null;
        };

        // 새 핸들러 참조 저장 및 등록
        animationCompleteRef.current = handleComplete;
        dotLottie.addEventListener('complete', handleComplete);

        dotLottie.play();
      }, 300),
    [dotLottie, isDarkMode, setIsDarkMode],
  );

  return (
    <label className="w-15 cursor-pointer" aria-label="Dark mode switch">
      <DotLottie
        key={String(isDarkMode)}
        src="/lotties/dark-mode-switch.lottie"
        loop={false}
        speed={3}
        autoplay={false}
        mode={isDarkMode ? 'reverse' : 'forward'}
        dotLottieRefCallback={setDotLottie}
      />
      <input
        type="checkbox"
        className="hidden"
        checked={isDarkMode}
        onChange={handleChange}
      />
    </label>
  );
};
