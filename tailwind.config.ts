import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      colors: {
        "accent-dark": "#3d2f1b",
        accent: "#7F623B",
        card: "#E5D9C0",
        light: "#FCF0D9",
        dark: "#1E1E1E",
      },
      fontFamily: {
        display: ['"Outfit Variable"', "sans-serif"],
        body: ['"Source Sans 3 Variable"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
