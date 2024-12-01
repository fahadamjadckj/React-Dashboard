/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#DFECF2",
          fg: "#D0E1E9",
          dark: "#000000",
          postive: "#BEDCD0",
          negative: "#D7BFCD"
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        layout: "100px repeat(5, minmax(0, 1fr))"
      }
    },
  },
  plugins: [],
}

