/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "rgb(1, 163, 254)",
        "brand-darker": "rgb(29, 78, 216)",
      },
    },
  },
  plugins: [],
};
