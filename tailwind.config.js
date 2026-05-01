/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#08275f",
        "navy-dark": "#03183d",
        gold: "#f5b51b",
        "gold-soft": "#fff4d2",
        ivory: "#fffaf0",
        ink: "#071833",
        accent: "#d9342b",
      },
      fontFamily: {
        display: ["Poppins", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 22px 60px rgba(8, 39, 95, 0.15)",
        glow: "0 18px 45px rgba(245, 181, 27, 0.25)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.04)", opacity: "0.88" },
        },
      },
    },
  },
  plugins: [],
};
