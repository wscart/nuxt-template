import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{js,vue,ts}", "./src/app.vue", "./src/error.vue"],
  theme: {
    extend: {
      colors: {
        title: "var(--primary-title)",
        content: "var(--primary-content)",
        subhead: "var(--primary-subhead)",
        cover: "var(--primary-cover)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config

