/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,svg}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "dark",
      {
        rajneesh: {
          primary: "#1f2937",
          "primary-content": "#cdd0d3",
          secondary: "#d1d5db",
          "secondary-content": "#101011",
          accent: "#7dd3fc",
          "accent-content": "#051016",
          neutral: "#6b7280",
          "neutral-content": "#e0e1e4",
          "base-100": "#ffffff",
          "base-200": "#dedede",
          "base-300": "#bebebe",
          "base-content": "#161616",
          info: "#a5b4fc",
          "info-content": "#0a0c16",
          success: "#6ee7b7",
          "success-content": "#04130c",
          warning: "#fcd34d",
          "warning-content": "#161002",
          error: "#fca5a5",
          "error-content": "#160a0a",
        },
      },
    ],
  },
};
