// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts"],
  tailwindcss: {
    cssPath: "/assets/css/main.css",
    configPath: "tailwind.config.ts",
  },
  googleFonts: {
    families: {
      Montserrat: {wght: [400, 500, 600, 700]},
    },
  },
});
