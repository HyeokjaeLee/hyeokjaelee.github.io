import type { Config } from 'tailwindcss';

import { SCREEN_BREAKPOINTS } from './src/constants';
const NAV_HEIGHT = '3em';

const PAGE_HEIGHT = `calc(100% - ${NAV_HEIGHT})`;

const config = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './gatsby-config.ts',
    './gatsby-ssr.ts',
  ],
  plugins: [
    ({ addUtilities }) => {
      const utilities = {
        '.hide-scrollbar': {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.scroll-touch': {
          '-webkit-overflow-scrolling': 'touch',
        },
      };

      addUtilities(utilities, ['responsive', 'hover']);
    },
    require('tailwindcss-animated'),
  ],
  theme: {
    extend: {
      screens: {
        'toast-break-point': {
          max: '480px',
        },
        phone: { max: `${SCREEN_BREAKPOINTS.PHONE_MAX}px` },
        tablet: {
          min: `${SCREEN_BREAKPOINTS.TABLET_MIN}px`,
          max: `${SCREEN_BREAKPOINTS.TABLET_MAX}px`,
        },
      },
      fontFamily: {
        pretendard: [
          'Pretendard Variable',
          'Pretendard',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Open Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
        firacode: ['Fira Code', 'monospace'],
        'nanum-square': ['나눔스퀘어', 'nanum-square'],
      },

      minHeight: {
        page: PAGE_HEIGHT,
      },

      height: {
        nav: NAV_HEIGHT,
        page: PAGE_HEIGHT,
      },

      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
      },

      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
} satisfies Config;

export default config;
