import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "880px",
      lg: "1120px",
      xl: "1520px",
    },
    colors: {
      // main
      black: "#212121",
      white: "#fff",
      // yellow
      "yellow-50": "#FFFBF4",
      "yellow-100": "#F0E0C4",
      "yellow-200": "#FBCC31",
      "yellow-300": "#EEBA0E",
      "yellow-400": "#E3B100",
      // grey
      "grey-100": "#9e9c99",
      "grey-200": "#5e5d5b",
      "grey-700": "#303030",
      // blue
      blue: "#62CCEF",
    },
    extend: {
      spacing: {
        "1": "1rem",
        "2": "2rem",
        "3": "3rem",
        "4": "4rem",
        "5": "5rem",
        "6": "6rem",
        "7": "7rem",
        "8": "8rem",
        "9": "9rem",
        "10": "10rem",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
