/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      colors: {
        slate: {
          900: "#0F172A",
        },
        blue: {
          300: "#00C2FF",
          500: "#39A0ED",
        },
        violet: {
          100: "#EDE9FE",
          500: "#A78BFA",
        },
      },
    },
  },
  plugins: [],
};
