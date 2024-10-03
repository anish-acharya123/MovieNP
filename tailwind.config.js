/** @type {import('tailwindcss').Config} */
import img from "./src/assets/homeimg.png"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/homeimg.png')",
      },
    },
  },
  plugins: [],
};
