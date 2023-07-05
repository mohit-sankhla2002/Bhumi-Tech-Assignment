/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#3187ED",
        lightBlue: "#00C6D7",
        lightGray: "#F8F8F8",
      },
      padding: {
        section: "100px",
      },
    },
  },
  plugins: [],
};

