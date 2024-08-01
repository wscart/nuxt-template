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
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    'dayjs-nuxt',
    '@nuxt/icon'
  ],
  runtimeConfig: {
    apiSecret: "", // 可以由 NUXT_API_SECRET 环境变量覆盖
    public: {
      apiBase: "", // 可以由 NUXT_PUBLIC_API_BASE 环境变量覆盖
    },
  },
  app: {
    head: {
      title: "Dream Site",
      meta: [
        { name: "keywords", content: "Nuxt.js,导航,网站" },
        { name: "description", content: "致力于打造程序员的梦中情站" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
      style: [],
      script: [],
      noscript: [],
    },
  },
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
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English" },
      { code: "zh-CN", iso: "zh-CN", name: "简体中文" },
    ],
    defaultLocale: "zh-CN",
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
  sitemap: {
    cacheMaxAgeSeconds: 3600, // 1 hour
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