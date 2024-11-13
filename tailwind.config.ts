import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-elements': 'hsl(209, 23%, 22%)',
        'dark-background': 'hsl(207, 26%, 17%)',

        // Light mode colors
        'light-text': 'hsl(200, 15%, 8%)',
        'light-input': 'hsl(0, 0%, 52%)',
        'light-background': 'hsl(0, 0%, 98%)',

        // Shared colors
        'white-text': 'hsl(0, 0%, 100%)', // White (Dark Mode Text & Light Mode Elements)
      },
    },
  },
  plugins: [],
} satisfies Config;
