/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
    ],
    presets: [require("@relume_io/relume-tailwind")],
};
  