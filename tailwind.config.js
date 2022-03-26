module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#023e8a",
        primaryLight: "#0077b6",
        primaryDark: "#03045e",
        secondary: "#ec4884",
        secondaryLight: "#f06196",
        dimSecondary: "rgba(255, 134, 154,1)",
        primaryText: "#e2e2e2",
        secondaryText: "#a0aec0",
        textBright: "#e8fdf9",
        textDim: "#e2e2e29d",

        divider: "rgba(255,255,255,0.12)",
        dividerDark: "rgba(0,0,0,0.12)",

        backgroundV1: "#03045e",
        backgroundV2: "#0f172a",
        backgroundContrast: "#023e8a",
      },
      animation: {
        scaleIn: "scaleIn 0.5s linear 2.5s forwards",
      },
      keyframes: {
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "80%": { opacity: "0.9", transform: "scale(1.05)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
    fontFamily: {
      sans: ["Inter", "Roboto", "sans-serif"],
      heading: ["Inter", "Roboto", "sans-serif"],
      code: ["Fira Code", "monospace"],
    },
  },
  plugins: [],
};
