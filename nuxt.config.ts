// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
	modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
	tailwindcss: {
		cssPath: '/assets/css/main.css',
    configPath: 'tailwind.config.ts',
	}
})