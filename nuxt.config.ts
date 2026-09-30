import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2026-09-22",
	app: {
		head: {
			charset: "utf-8",
			title: "Juliendy Mendes",
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
			meta: [
				{
					name: "description",
					content: "Perfil profissional de Juliendy Mendes",
				},
				{ property: "og:title", content: "Juliendy Mendes" },
				{
					property: "og:description",
					content: "Perfil profissional de Juliendy Mendes",
				},
				{ property: "og:image", content: "https://juliendy.vercel.app" },
				{ property: "og:type", content: "website" },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:title", content: "Juliendy Mendes" },
				{
					name: "twitter:description",
					content: "Perfil profissional de Juliendy Mendes",
				},
				{ name: "twitter:image", content: "https://juliendy.vercel.app" },
			],
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
			{ name: "JetBrains Mono", provider: "google" },
		],
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
