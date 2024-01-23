import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        100: "#F5F6F8",
        200: "#DFDFE0",
        600: "#333333",
      },
      primary: "#2F5DF1",
    },
    extend: {
      keyframes: {
        "fade-right": {
          "0%": { transform: "translateX(80px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        "fade-left": {
          "0%": { transform: "translateX(-80px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        "fade-bottom": {
          "0%": { transform: "translateY(-80px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        "fade-top": {
          "0%": { transform: "translateY(80px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "splash-screen": {
          "0%": { height: "100vh" },
          "100%": { height: "0" },
        },
      },
      animation: {
        "fade-right": "fade-right .5s ease-in-out",
        "fade-left": "fade-left .5s ease-in-out",
        "fade-bottom": "fade-bottom .5s ease-in-out",
        "fade-top": "fade-top .5s ease-in-out",
        "fade-in": "fade-in .5s ease-in-out",
        "splash-screen": "splash-screen .5s 3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
