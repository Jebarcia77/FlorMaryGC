module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", {
      mytheme: {
        "primary": "#1c1917",
          
 "secondary": "#3ABFF8",
          
 "accent": "#1e3a8a",
          
 "neutral": "#fffff",
          
 "base-100": "#111827",
          
 "info": "#3ABFF8",
          
 "success": "#36D399",
          
 "warning": "#FBBD23",
          
 "error": "#F87272",
      },
    },],
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
