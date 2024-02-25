/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js,jsx,md,mdx,ts,tsx}"],
  darkMode: ["class"],
  extend: {
    animation: {
      shine: "shine 8s ease-in-out infinite",
    },
    keyframes: {
      shine: {
        from: { backgroundPosition: "200% 0" },
        to: { backgroundPosition: "-200% 0" },
      },
    },
  },
  presets: [require("./ui.preset.js")],
};
