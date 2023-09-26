import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      pc: '1200px',
      tablet: '850px',
    },
    extend: {
      screens: {
        sm: '500px',
        md: [{ min: '668px', max: '767px' }, { min: '868px' }],
        lg: '1100px',
        xl: '1400px',
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
