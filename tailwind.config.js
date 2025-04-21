/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx, mdx}"],
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
          600: "#1D94F0",
        },
        violet: {
          100: "#EDE9FE",
          500: "#A78BFA",
        },
      },
      screens: {
        "lg-custom": "912px",
        "md-custom": "853px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
