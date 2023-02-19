/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dohyeon: ["배달의민족 도현", "배달의민족도현", "bm-dohyeon"],
      },
      borderRadius: {
        container: "6px",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        "light-mode": "#e1e4e8",
        "dark-mode": "#38383d",
      },
      textColor: {
        "light-mode-main": "#24292e",
        "light-mode-sub": "#586069",
        "dark-mode-main": "#d7d7db",
        "dark-mode-sub": "#ededf0",
        link: "#0366d6",
        nav: "#f0f6fc",
      },
      backgroundColor: {
        "light-mode-main": "#fff",
        "light-mode-sub": "#f6f8fa",
        "dark-mode-main": "#232326",
        "dark-mode-sub": "#2a2a2e",
        link: "#0366d6",
        nav: "#15191F",
      },
    },
  },
  plugins: [],
};
