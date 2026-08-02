import { useLayoutStore } from '@stores/useLayoutStore';
import { cn } from '@utils/cn';
import type { CSSProperties } from 'react';
import { useShallow } from 'zustand/shallow';

const RAY_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

const STARS = [
  { top: '20%', left: '14%', size: 3, delay: '0s' },
  { top: '60%', left: '8%', size: 2, delay: '0.6s' },
  { top: '30%', left: '42%', size: 2, delay: '1.1s' },
  { top: '70%', left: '36%', size: 3, delay: '0.3s' },
  { top: '14%', left: '30%', size: 2, delay: '1.6s' },
  { top: '50%', left: '22%', size: 2, delay: '0.9s' },
];

const CLOUDS = [
  { top: '22%', delay: '0s', duration: '9s' },
  { top: '62%', delay: '3.5s', duration: '11s' },
];

export const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useLayoutStore(
    useShallow((state) => [state.isDarkMode, state.setIsDarkMode]),
  );

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDarkMode}
      aria-label="다크 모드 전환"
      className={cn('dms', isDarkMode && 'is-dark')}
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <span className="dms__stars" aria-hidden="true">
        {STARS.map((star) => (
          <span
            key={`${star.top}-${star.left}`}
            className="dms__star"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </span>
      {CLOUDS.map((cloud) => (
        <span
          key={cloud.top}
          className="dms__cloud"
          aria-hidden="true"
          style={{
            top: cloud.top,
            animationDelay: cloud.delay,
            animationDuration: cloud.duration,
          }}
        />
      ))}
      <span className="dms__knob" aria-hidden="true">
        <span className="dms__rays">
          {RAY_ANGLES.map((angle) => (
            <span
              key={angle}
              className="dms__ray"
              style={{ '--a': `${angle}deg` } as CSSProperties}
            />
          ))}
        </span>
        <span className="dms__sun" />
        <span className="dms__moon">
          <span
            className="dms__crater"
            style={{ top: '24%', left: '28%', width: 7, height: 7 }}
          />
          <span
            className="dms__crater"
            style={{ top: '52%', left: '58%', width: 5, height: 5 }}
          />
          <span
            className="dms__crater"
            style={{ top: '40%', left: '18%', width: 4, height: 4 }}
          />
        </span>
      </span>
    </button>
  );
};
