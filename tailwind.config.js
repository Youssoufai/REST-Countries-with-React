/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"

  ],
  theme: {
    extend: {
      colors: {
        DarkBlueDarkModeElements: ' hsla(208, 23%, 22%, 0.895)',
        DarkModeElements: "hsl(209, 23%, 22%)",
        DarkModeBackground: "hsl(207, 26%, 17%)",
        VeryDarkBlueLightTexts: "hsl(200, 15%, 8%)",
        DarkGrayLightModeInput: "hsl(0, 0%, 52%)",
        VeryLightGrayBackground: "hsl(0, 0%, 98%)",
        WhiteDarkModeText: "hsl(0, 0%, 100%)",
        DarkModeText: "hsl(0, 0%, 100%)",
        DarkWhite: "hsla(0, 0%, 98%, 0.74)"
      },
    },
  },
  plugins: [],
}

