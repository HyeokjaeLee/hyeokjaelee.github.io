import type { Config } from 'tailwindcss';

const NAV_HEIGHT = '3em';

const PAGE_HEIGHT = `calc(100% - ${NAV_HEIGHT})`;

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './gatsby-config.ts',
    './gatsby-ssr.ts',
  ],
  theme: {
    extend: {
      screens: {
        sm: '500px',
        md: '700px',
        lg: '1100px',
        xl: '1400px',
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

      borderWidth: {
        1: '1px',
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
};

export default config;
