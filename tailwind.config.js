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
          400: "#8EC5FF",
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
        "xs-custom": "412px",
        "sm-extended": "540px",
        "sm-custom": "344px",
      },
      keyframes: {
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },

        shadowShrink: {
          "0%, 100%": { transform: "translateX(-50%) scaleX(1)" },
          "50%": { transform: "translateX(-50%) scaleX(0.6)", opacity: "0.15" },
        },
      },
      animation: {
        bounceSoft: "bounceSoft 6s ease-in-out infinite",
        shadowShrink: "shadowShrink 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
