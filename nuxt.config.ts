// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "radix-vue/nuxt",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
  ],

  tailwindcss: {
    editorSupport: true,
  },

  app: {
    head: {
      title: "Warframe Builder - DevBuild",
      viewport: "width=device-width,initial-scale=1",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
})
