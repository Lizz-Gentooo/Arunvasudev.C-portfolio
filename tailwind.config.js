/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        space: {
          primary: "#0B1220",
          secondary: "#16213E",
          accent: "#4DA8DA",
          highlight: "#7DD3FC",
          white: "#F8FAFC",
        },
        day: {
          bg: "#F8FAFC",
          card: "#FFFFFF",
          text: "#0F172A",
          accent: "#2563EB",
          secondary: "#64748B",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      backgroundImage: {
        "grid-blueprint":
          "linear-gradient(rgba(77,168,218,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(77,168,218,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "orbit-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.75" },
        },
      },
      animation: {
        orbit: "orbit 60s linear infinite",
        "orbit-slow": "orbit 120s linear infinite",
        "orbit-reverse": "orbit-reverse 90s linear infinite",
        drift: "drift 6s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
