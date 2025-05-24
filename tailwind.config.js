/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        secondary: "#1d3151",
        primary: "#fafafa",
      },
      fontFamily: {
        "c-light": "BarlowSemiCondensed_300Light",
        "c-regular": "BarlowSemiCondensed_400Regular",
        "c-medium": "BarlowSemiCondensed_500Medium",
        "c-semibold": "BarlowSemiCondensed_600SemiBold",
        "c-bold": "BarlowSemiCondensed_700Bold",
        "c-black": "BarlowSemiCondensed_900Black",
        default: "BarlowSemiCondensed_400Regular",
      },
    },
  },
  plugins: [],
};
