/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          200: "#34495e",
          100: "#2c3e50"
        },
        light: {
          400: "#7f8c8d",
          300: "#95a5a6",
          200: "#bdc3c7",
          100: "#ecf0f1",
          50: "#f9f9f9"
        },
        blue: {
          200: "#2980b9",
          100: "#3498db"
        },
        red: {
          200: "#c0392b",
          100: "#e74c3c"
        },
        primary: {
          400: "#5F6F65",
          300: "#808D7C",
          200: "#9CA986",
          100: "#C9DABF",
          50: "#E9EED9"
        },
      } ,
      fontFamily: {
      primary: ['Inter', 'sans-serif'],
      secondary: ['Roboto', 'sans-serif'],
      ternary: ['Lora', 'serif'],
    },
    },
   
  },
  plugins: [],
}