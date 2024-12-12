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
        primary: "#216B15",
        secondary: "#FE5621",
        warning: "#FFC107",
        danger: "#DC3545",
        info: "#2F3A49",
        light: "#0DCAF0",
        dark: "#212529",
      },
      fontFamily: {
        sans: ["Metropolis", "Arial", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      },
    },
  },
  plugins: [],
} satisfies Config;
