import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2026-09-22",
	app: {
		head: {
			charset: "utf-8",
			title: "Juliendy Mendes",
			link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
		},
	},
	devtools: { enabled: false },
	modules: ["@nuxt/image", "@nuxt/eslint", "@pinia/nuxt", "@nuxt/fonts"],
	css: ["~/assets/css/main.css"],
	fonts: {
		families: [
			{ name: "Sora", provider: "google" },
			{
				name: "Manrope",
				provider: "google",
				weights: ["400", "500", "600", "700"],
			},
		],
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
