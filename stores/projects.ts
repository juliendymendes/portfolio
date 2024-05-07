export const useProjectsStore = defineStore("projectsStore", {
	state: () => ({
		projects: [
			{
				id: 1,
				name: "IP Address Tracker",
				description:
					"Projeto que permite a busca da localização, timezone e ISP de um endereço IP ou domínio. Além de exibir essas informações, o projeto exibe um mapa da localização do endereço IP ou domínio inserido.",
				githubLink: "https://github.com/juliendymendes/ip-address-tracker",
				websiteLink: "https://tracki.vercel.app/",
				imageUrl: "/projects/ip-address-tracker.png",
			},
			{
				id: 2,
				name: "API de Certificações",
				description:
					"API desenvolvida durante o NLW 14 da Rocketseat que oferece interfaces para buscar questões, um ranking de Top 10 notas e cadastrar a resposta de um aluno em uma certificação.",
				githubLink: "https://github.com/juliendymendes/nlw_java",
				websiteLink: null,
				imageUrl:
					"https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			},
		],
	}),
	getters: {
		getProjects(state) {
			return state.projects;
		},
	},
});
