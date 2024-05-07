// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: "utf-8",
			title: "Juliendy Mendes",
			link: [{rel: 'icon', type: 'image/svg+xml', href: '/logo.svg'}] 
		}
	},
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/eslint",
		"@pinia/nuxt"
  ],
  tailwindcss: {
    cssPath: "/assets/css/main.css",
    configPath: "tailwind.config.ts",
  },
  googleFonts: {
    families: {
      Montserrat: {wght: [400, 500, 600, 700]},
			Poppins: {wght: [400, 500, 600, 700]}
    },
  },
});