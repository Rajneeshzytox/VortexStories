/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,svg}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        darkMode: {    
            "primary": "#f3f4f6",
            "primary-content": "#141415",
            "secondary": "#9ca3af",
            "secondary-content": "#090a0b",
            "accent": "#22d3ee", 
            "accent-content": "#001014",   
            "neutral": "#6b7280",
            "neutral-content": "#e0e1e4",
            "base-100": "#111827",  
            "base-200": "#0d1320",  
            "base-300": "#090f1a",
            "base-content": "#c9cbcf",   
            "info": "#3b82f6",   
            "info-content": "#010615",  
            "success": "#22c55e",    
            "success-content": "#000e03",     
            "warning": "#eab308", 
            "warning-content": "#130c00",     
            "error": "#f43f5e",
  
            "error-content": "#140103",
        }
      },
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
