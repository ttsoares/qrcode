/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "960px",
      xl: "1440px",
    },
    extend: {
      colors: {
        light_gray: "hsl(212, 45%, 89%)",
        grayish_blue: "hsl(220, 15%, 55%)",
        dark_blue: "hsl(218, 44%, 22%)",
      },
    },
    plugins: [],
  },
};
