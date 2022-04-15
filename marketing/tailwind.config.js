module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wave: "#FACC15",
        yellow: "#FACC15",
      },
      fontFamily: {
        cal: ["Cal Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "top-wave": "url('/assets/top-wave.svg')",
        "bottom-wave": "url('/assets/bottom-wave.svg')",
        "curved-line": "url('/assets/curved-line.svg')",
      },
    },
  },
  plugins: [],
};
