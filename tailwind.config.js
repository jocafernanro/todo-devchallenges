module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        blue: "#2F80ED",
        red: "#EB5757"
      },
      borderRadius: {
        xl: "0.7rem"
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
