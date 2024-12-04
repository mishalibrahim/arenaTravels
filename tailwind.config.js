/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      btngradient: "linear-gradient(to right, #011160 0%, #969DBD 100%)",
      bentograd:
        "linear-gradient(120deg, rgba(255, 255, 255, 1) 25%, rgba(245, 156, 26, 0.2) 100%);",
    },
    boxShadow: {
      innerShadow: "inset 0px 2px 4px #F59C1A",
      btnshadow: "0px 4px 4px rgba(1, 17, 96, 0.29)", // X, Y, Blur, Color
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "2.4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        safiro: ["var(--font-safiro-sans)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#011160",
        secondary: "#F59C1A",
        dark: "#2A2A2A",
        primary_light: "rgba(1, 17, 96, 0.47)",
      },
    },
  },
  plugins: [],
};
