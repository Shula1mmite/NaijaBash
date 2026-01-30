/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1A1D",
        neon: "#39FF14",
        magenta: "#FF00FF",
        electric: "#00FFFF",
        light: "#F5F5F5",
        alert: "#FF6F00",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      // --- ADDED FOR THE LOOP ---
      animation: {
        scroll: "scroll 40s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      // --------------------------
    },
  },
  plugins: [],
};