import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        mont: ["var(--font-mont)"],
        dm: ["var(--font-dm)"],
      },

      screens: {
        mob: { max: "768px" },
        tab: { max: "991px" },
      },
      colors: {
        primary: "#171636",
        secondary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
