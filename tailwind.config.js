/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fefdf5",
        secondary: "#090b0f",
        white: "#ffffff",
        lightGreen: "#e7f2e7",
        fade: "#9fa09b",
        icon: "#f6742b",
      },
    },
  },
  plugins: [],
};
