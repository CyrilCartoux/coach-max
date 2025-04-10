/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00FF66",
        secondary: "#FF3D00",
        accent: "#00A3FF",
        dark: {
          100: "#383838",
          200: "#282828",
          300: "#202020",
          400: "#181818",
          500: "#121212",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
} 