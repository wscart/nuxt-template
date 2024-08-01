// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  typescript: { typeCheck: true },
  srcDir: "./src",
  css: ["~/assets/styles/main.css"],
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],
  icon: {
    customCollections: [
      // 通用icon
      {
        prefix: "common",
        dir: "./src/assets/icons/common",
      },
      // 黑暗模式icon
      {
        prefix: "dark",
        dir: "./src/assets/icons/dark",
      },
      // 明亮模式icon
      {
        prefix: "light",
        dir: "./src/assets/icons/light",
      },
    ],
  },
  colorMode: {
    preference: "light", // 初始值
    fallback: "light", // 未找到系统默认值返回该值
    classSuffix: "", // 设置class前缀
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/default.scss";',
        },
      },
    },
  },
});
