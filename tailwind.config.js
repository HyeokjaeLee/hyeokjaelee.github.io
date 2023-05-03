/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './src/pages/*.{js,jsx,ts,tsx}',
    './src/components/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      pc: '1200px',
      tablet: '850px',
    },
    extend: {
      borderRadius: {
        container: '6px',
      },
      borderColor: {
        'light-1': '#e1e4e8',
        'dark-1': '#38383d',
      },
      textColor: {
        'light-1': '#24292e',
        'light-2': '#586069',
        'light-3': '#898e93',
        'dark-1': '#d7d7db',
        'dark-2': '#ededf0',
        'dark-3': '#82949e',
        link: '#0366d6',
        nav: '#f0f6fc',
      },
      backgroundColor: {
        'light-1': '#fff',
        'light-2': '#f6f8fa',
        'dark-1': '#232326',
        'dark-2': '#2a2a2e',
        link: '#0366d6',
        nav: '#15191F',
      },

      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
      },

      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
