/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "3rem",
      },
    },
    extend: {
      colors: {
        "main-body": "#1a1a1a",
        "text-light": "#f0f0f0",
        "navbar-bg": "#2a2a2a",
        "navbar-text": "#d0d0d0",
        active: "#1ABD9C",
        "hover-bg": "#3a3a3a",
        "section-bg": "#1f1f1f",
        "card-bg": "#2a2a2a",
        "card-border": "#3a3a3a",
        "primary-bg": "#1e40af",
        "primary-text": "#ffffff",
        "secondary-bg": "#3a3a3a",
        "secondary-text": "#d0d0d0",
        "link-text": "#60a5fa",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        istok: ["Istok Web", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  darkMode: "class", // or 'media'
  plugins: [],
};
