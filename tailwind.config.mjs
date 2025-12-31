import typography from "@tailwindcss/typography";
import { proseConfig } from "./tailwind/typography.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],

  theme: {
    extend: {
      typography: proseConfig,
    },
  },

  plugins: [typography],
};
