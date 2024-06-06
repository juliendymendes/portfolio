import type { Project } from "~/types/Project";

const data: Project[] = [
	{
		id: 1,
		name: "Centro de Memória de Enfermagem de Mato Grosso do Sul - MemoEnf",
		description:
			"Projeto realizado dentro do Núcleo de Práticas em Engenharia de software da UFMS que fornece um meio para o público realizar doações de objetos históricos da área da Enfermagem por meio de um formulário de simples compreensão e fácil usabilidade, e também permitir o armazenamento e gerenciamento das informações desses objetos e seus doadores em um acervo digital por meio de um ambiente administrativo onde é possível visualizar e gerir, itens históricos, doações e doadores.",
		githubLink: null,
		websiteLink:
			"https://nes.facom.ufms.br/projeto/centro-de-memoria-de-enfermagem-de-mato-grosso-do-sul-memoenf",
		imageUrl:
			"https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		stack: [{ name: "Vue.js" }, { name: "JavaScript" }, { name: "Bootstrap" }],
	},
	{
		id: 5,
		name: "Sieven - Sistema de Gestão de Eventos",
		description:
			"Projeto realizado dentro do Núcleo de Práticas em Engenharia de software da UFMS e é um software de gerenciamento de eventos educacionais que oferece uma ampla gama de funcionalidades para simplificar a organização e coordenação de atividades acadêmicas. Com uma interface intuitiva, o Sieven promove a colaboração e a comunicação entre os usuários, fornecendo informações relevantes sobre programação, atividades e histórico de participação. Em suma, o Sieven é uma ferramenta essencial para o sucesso e eficiência dos eventos educacionais, melhorando a experiência de coordenadores e participantes",
		githubLink: null,
		websiteLink:
			"https://nes.facom.ufms.br/projeto/sieven-sistema-de-gestao-de-eventos",
		imageUrl:
			"https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		stack: [{ name: "Vue.js" }, { name: "JavaScript" }, { name: "Vuetify" }],
	},
	{
		id: 2,
		name: "IP Address Tracker",
		description:
			"Projeto que permite a busca da localização, timezone e ISP de um endereço IP ou domínio. Além de exibir essas informações, o projeto exibe um mapa da localização do endereço IP ou domínio inserido.",
		githubLink: "https://github.com/juliendymendes/ip-address-tracker",
		websiteLink: "https://tracki.vercel.app/",
		imageUrl: "/projects/ip-address-tracker.png",
		stack: [{ name: "Vue.js" }, { name: "JavaScript" }, { name: "SASS" }],
	},
	{
		id: 3,
		name: "API de Certificações",
		description:
			"API desenvolvida durante o NLW 14 da Rocketseat que oferece interfaces para buscar questões, um ranking de Top 10 notas e cadastrar a resposta de um aluno em uma certificação.",
		githubLink: "https://github.com/juliendymendes/nlw_java",
		websiteLink: null,
		imageUrl:
			"https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		stack: [{ name: "Java" }, { name: "PostgreSQL" }],
	},
	{
		id: 4,
		name: "Space Tourism",
		description:
			"Permite a visualização de destinos espaciais, tripulações e tecnologias de lançamento para viagens ao espaço.",
		githubLink: "https://github.com/juliendymendes/space-tourism",
		websiteLink:
			"https://space-tourism-b58k2c2xw-juliendymendes-projects.vercel.app/",
		imageUrl: "/projects/space-tourism.png",
		stack: [{ name: "Nuxt" }, { name: "TypeScript" }, { name: "TailwindCSS" }],
	},
];
export const useProjectsStore = defineStore("projectsStore", {
	state: () => ({
		/**@type { Project[] } */
		projects: data,
	}),
	getters: {
		getProjects(state): Project[] {
			return state.projects;
		},
	},
});
