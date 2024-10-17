/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-1": "#101010",
        "grey-2": "#151515",
        "grey-3": "#202020",
        "grey-4": "#252525",
        "grey-5": "#303030",
        "grey-6": "#353535",
        "grey-7": "#404040",
        "grey-8": "#454545",
        "grey-9": "#505050",
        "grey-10": "#555555",
      },
    },
  },
  plugins: [],
};
