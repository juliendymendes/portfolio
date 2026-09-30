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
		imageUrl: null,
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
		imageUrl: null,
		stack: [{ name: "Vue.js" }, { name: "JavaScript" }, { name: "Vuetify" }],
	},
	{
		id: 2,
		name: "IP Address Tracker",
		description:
			"Projeto que permite a busca da localização, timezone e ISP de um endereço IP ou domínio. Além de exibir essas informações, o projeto exibe um mapa da localização do endereço IP ou domínio inserido.",
		githubLink: "https://github.com/juliendymendes/ip-address-tracker",
		websiteLink: null,
		imageUrl: "/projects/ip-address-tracker.png",
		stack: [{ name: "Vue.js" }, { name: "JavaScript" }, { name: "SASS" }],
	},
	{
		id: 4,
		name: "Space Tourism",
		description:
			"Permite a visualização de destinos espaciais, tripulações e tecnologias de lançamento para viagens ao espaço.",
		githubLink: "https://github.com/juliendymendes/space-tourism",
		websiteLink: "https://space-tourism-mission.vercel.app/",
		imageUrl: "/projects/space-tourism.png",
		stack: [{ name: "Nuxt" }, { name: "TypeScript" }, { name: "TailwindCSS" }],
	},
	{
		id: 5,
		name: "plann.er",
		description:
			"Permite a criação de uma viagem com destino e data, convite por e-mail de convidados e criação de atividades.",
		githubLink: "https://github.com/juliendymendes/planner",
		websiteLink: null,
		imageUrl: "/projects/planner.png",
		stack: [{ name: "React" }, { name: "TypeScript" }, { name: "TailwindCSS" }],
	},
	{
		id: 6,
		name: "API do projeto plann.er",
		description:
			"API do projeto plann.er que permite a criação de uma viagem, o envio de convite para os convidados e a criação de atividades. A api salva todos os dados no banco de dados.",
		githubLink: "https://github.com/juliendymendes/planner-api",
		websiteLink: null,
		imageUrl: null,
		stack: [{ name: "Java" }, { name: "Spring Boot" }],
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
