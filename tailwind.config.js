/* eslint-disable no-undef */

import { dark } from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#3730a2",
          secondary: "#7c808d",
          accent: "#3730a2",
          neutral: "#7c808d",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          neutral: "#7c808d",
          secondary: "#324153",
        },
      },
    ],
  },
};
