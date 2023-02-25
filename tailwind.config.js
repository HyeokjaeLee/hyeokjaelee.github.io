/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      pc: "1200px",
      tablet: "850px",
    },
    extend: {
      borderRadius: {
        container: "6px",
      },
      borderColor: {
        "light-mode": "#e1e4e8",
        "dark-mode": "#38383d",
      },
      textColor: {
        "light-mode-main": "#24292e",
        "light-mode-sub": "#586069",
        "light-mode-third": "#898e93",
        "dark-mode-main": "#d7d7db",
        "dark-mode-sub": "#ededf0",
        "dark-mode-third": "#82949e",
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
  plugins: [require("@tailwindcss/line-clamp")],
};
