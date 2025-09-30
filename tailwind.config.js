/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1a1a1d", // gris casi negro
        surface: "#2a2a2d", // gris oscuro para tarjetas/sections
        accent: {
          light: "#3b82f6", // azul claro
          DEFAULT: "#2563eb", // azul medio
          dark: "#1e40af", // azul oscuro
        },
        purpleAccent: {
          light: "#a855f7", // púrpura claro
          DEFAULT: "#9333ea", // púrpura medio
          dark: "#6b21a8", // púrpura oscuro
        },
        text: {
          primary: "#f1f1f1", // casi blanco
          secondary: "#a1a1aa", // gris claro
        },
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
