/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  screens: {
    sm: "375px",
    md: "960px",
    lg: "1440px",
  },
  theme: {
    extend: {
      colors: {
        p_red: "hsl(0, 91%, 63%)",
        p_orange: "hsl(13, 95%, 66%)",
        p_yellow: "hsl(42, 91%, 68%)",
        p_neon: "hsl(127, 100%, 82%)",
        p_white: "hsl(252, 11%, 91%)",
        p_gray: "hsl(251, 9%, 53%)",
        p_d_gray: "hsl(248, 10%, 15%)",
        p_vd_gray: "hsl(248, 15%, 11%)",
      },
    },
  },
  plugins: [],
};
