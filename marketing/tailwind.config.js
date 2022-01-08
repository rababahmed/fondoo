module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wave: "#FBF7EF",
      },
      fontFamily: {
        cal: ["Cal Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "top-wave": "url('/assets/top-wave.svg')",
        "bottom-wave": "url('/assets/bottom-wave.svg')",
      },
    },
  },
  plugins: [],
};
