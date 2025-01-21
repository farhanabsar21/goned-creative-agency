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
        gonedSoil: "#ebe3da",
        fade: "#9fa09b",
        icon: "#f6742b",
      },
      letterSpacing: {
        "extra-wide": "0.5em",
      },
    },
  },
  plugins: [],
};
