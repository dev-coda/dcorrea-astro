module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        prussian: {
          50: "#ffffff",
          100: "#ccd4d9",
          200: "#b3bec6",
          300: "#99a9b3",
          400: "#8094a0",
          500: "#667f8d",
          600: "#4d6a7a",
          700: "#335567",
          800: "#1a3c55",
          900: "#002642",
        },
      },
    },
  },
};
