<template>
	<main id="topo" class="relative overflow-x-hidden">
		<section
			class="pt-44 pb-20 flex flex-col gap-8 md:pt-52.5 md:pb-24 md:flex-row md:items-center md:justify-between md:gap-10 border-b border-border">
			<div class="flex flex-col gap-5 w-full md:max-w-[55%]">
				<div
					class="bg-surface text-ink border border-border rounded-full w-fit px-4 py-1.5 font-jetbrains text-xs font-medium">
					<div class="inline-grid *:[grid-area:1/1]">
						<div class="status status-accent animate-ping"></div>
						<div class="status status-accent"></div>
					</div>
					Disponível para novos projetos
				</div>
				<h1
					class="m-0 font-sora font-semibold leading-[0.95] tracking-[-0.055em] text-ink text-[clamp(80px,7vw,152px)] md:text-[clamp(70px,8vw,152px)] lg:text-[clamp(80px,10.5vw,152px)] 2xl:text-[clamp(100px,7vw,190px)] 3xl:text-[clamp(110px,6vw,220px)]">
					Juliendy<br /><span class="text-primary">Mendes</span
					><span class="text-accent">.</span>
				</h1>
				<div class="mt-[clamp(40px,6vw,72px)] flex flex-col gap-10">
					<p
						class="m-0 text-[clamp(16px,1.8vw,23px)] leading-normal max-w-[40ch] text-pretty text-ink 2xl:text-[28px] 3xl:text-[32px]">
						Engenheira de software construindo produtos digitais
						<span class="font-sora text-primary font-semibold"
							>claros, rápidos e bem pensados</span
						>
						— do back-end à interface.
					</p>
					<div class="flex flex-col lg:flex-row gap-3 justify-start">
						<NuxtLink
							to="#projetos"
							class="px-5.5 py-3.5 rounded-full bg-primary text-canvas font-semibold text-[15px] hover:bg-ink text-center 2xl:text-[17px] 2xl:px-6 2xl:py-4 3xl:text-[18px] 3xl:px-7 3xl:py-4.5"
							>Ver projetos →</NuxtLink
						>
						<NuxtLink
							href="#contato"
							class="px-5.5 py-3.5 rounded-full border border-ink text-ink font-semibold text-[15px] hover:bg-ink hover:text-canvas text-center 2xl:text-[17px] 2xl:px-6 2xl:py-4 3xl:text-[18px] 3xl:px-7 3xl:py-4.5"
							>Entrar em contato</NuxtLink
						>
					</div>
				</div>
			</div>

			<div
				v-if="!isMobile"
				class="mockup-code bg-gray-900 text-gray-300 shadow-xl w-full lg:h-87 2xl:h-[500px] 3xl:h-[560px] mx-auto self-baseline">
				<pre
					data-prefix="➜"
					class="text-success"><code>~ ./juliendy --info</code></pre>

				<pre
					data-prefix=">"
					class="text-warning"><code>Loading developer profile... [OK]</code></pre>

				<pre data-prefix=""><code> </code></pre>

				<pre data-prefix=""><code>{</code></pre>
				<pre
					data-prefix=""><code>  <span class="text-muted">"nome"</span>: <span class="text-green-400">"Juliendy Mendes"</span>,</code></pre>
				<pre
					data-prefix=""><code>  <span class="text-muted">"foco"</span>: <span class="text-green-400">"Do back-end à interface"</span>,</code></pre>
				<pre
					data-prefix=""><code>  <span class="text-muted">"stack"</span>: [<span class="text-green-400">"Vue.js"</span>, <span class="text-green-400">"TypeScript"</span>, <span class="text-green-400">"Spring Boot"</span>],</code></pre>
				<pre
					data-prefix=""><code>  <span class="text-muted">"combustivel"</span>: <span class="text-green-400">"Café e desafios complexos"</span>,</code></pre>
				<pre
					data-prefix=""><code>  <span class="text-muted">"status"</span>: <span class="text-green-400">"Disponível para novos projetos 🚀"</span></code></pre>
				<pre data-prefix=""><code>}</code></pre>
			</div>
		</section>

		<section
			id="sobre"
			data-screen-label="Sobre"
			class="py-[clamp(72px,10vw,128px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-[clamp(32px,5vw,72px)] border-b border-border">
			<div>
				<div
					class="font-jetbrains text-xs tracking-[0.08em] uppercase text-[#6b6f6a]">
					01 — Sobre mim
				</div>
				<h2
					class="mt-4 font-sora font-semibold text-[clamp(34px,4.2vw,52px)] leading-[1.05] tracking-[-0.04em]">
					Um pouco <span class="text-primary">sobre mim</span>
				</h2>
			</div>
			<div class="col-span-2 min-w-0 flex flex-col gap-8">
				<p
					class="m-0 font-sora text-[clamp(22px,2.4vw,30px)] leading-[1.4] tracking-[-0.02em] text-ink text-pretty">
					Sou engenheira de software e gosto de transformar problemas complexos
					em
					<span class="text-primary">soluções simples de usar</span>.
				</p>
				<div
					class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-x-10 gap-y-6 text-base leading-[1.75] text-ink text-pretty pt-8 border-t border-border">
					<p class="m-0">
						Ao longo da minha trajetória, trabalhei tanto na construção de APIs
						e sistemas distribuídos quanto em interfaces que as pessoas usam
						todos os dias. O que me move é o cuidado com os detalhes: código
						legível, decisões bem documentadas e produtos que respeitam o tempo
						de quem os utiliza.
					</p>
					<p class="m-0">
						Acredito que boa engenharia é, antes de tudo, colaboração — por isso
						valorizo times que conversam, revisam e aprendem juntos. Fora do
						código, estou sempre estudando algo novo.
					</p>
				</div>
			</div>
		</section>

		<section
			id="projetos"
			data-screen-label="Projetos"
			class="py-[clamp(72px,10vw,128px)] border-b border-border">
			<div class="flex justify-between items-end gap-6 flex-wrap mb-14">
				<div>
					<div
						class="font-jetbrains text-xs tracking-[0.08em] uppercase text-ink/60">
						02 — Projetos
					</div>
					<h2
						class="mt-4 font-sora font-semibold text-[clamp(34px,4.2vw,52px)] leading-[1.05] tracking-[-0.04em]">
						Trabalhos <span class="text-primary">selecionados</span>
					</h2>
				</div>
				<p class="m-0 max-w-[36ch] text-ink/60 text-[15px] leading-relaxed">
					Uma seleção de projetos em que atuei do planejamento à entrega.
				</p>
			</div>

			<div
				class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-6">
				<NuxtLink
					v-for="project in projectsStore.getProjects"
					:key="project.id"
					target="_blank"
					:to="project.websiteLink || project.githubLink || '#'"
					class="flex flex-col gap-5 text-ink hover:text-primary">
					<div
						class="w-full aspect-500/580 max-h-75 shrink-0 overflow-hidden rounded-[10px]">
						<NuxtImg
							v-if="project.imageUrl"
							:src="project.imageUrl"
							class="w-full h-full object-cover" />

						<div
							v-else
							class="w-full h-full grid place-items-center border border-border bg-[repeating-linear-gradient(135deg,#fcfbf8_0_10px,#efece5_10px_11px)] font-jetbrains text-xs text-ink/60">
							captura do projeto
						</div>
					</div>

					<div class="flex justify-between gap-4 items-baseline">
						<h3
							class="m-0 font-sora font-semibold text-[26px] tracking-[-0.03em]">
							{{ project.name }}
						</h3>

						<span class="font-jetbrains text-xs text-ink/60">
							{{ project.year }}
						</span>
					</div>

					<p class="m-0 text-ink text-base leading-[1.6] max-w-[52ch]">
						{{ project.description }}
					</p>

					<div class="flex gap-2 flex-wrap font-jetbrains text-xs">
						<span
							v-for="tech in project.stack"
							:key="tech.name"
							class="px-2.5 py-1.25 border border-border rounded-full text-ink">
							{{ tech.name }}
						</span>
					</div>
				</NuxtLink>
			</div>
		</section>

		<section
			id="experiencia"
			data-screen-label="Experiência"
			class="py-[clamp(72px,10vw,128px)] border-b border-border">
			<div
				class="font-jetbrains text-xs tracking-[0.08em] uppercase text-ink/60">
				03 — Experiência
			</div>
			<h2
				class="mt-4 mb-14 font-sora font-semibold text-[clamp(34px,4.2vw,52px)] leading-[1.05] tracking-[-0.04em]">
				Trajetória <span class="text-primary">profissional</span>
			</h2>

			<div class="flex flex-col border-t border-ink">
				<div
					v-for="experience in experiences"
					:key="experience.companyName"
					class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-10 gap-y-4 py-8 border-b border-border last:border-b-0">
					<div
						class="font-jetbrains text-[13px] text-ink/60 flex flex-col gap-2">
						<span
							>{{ experience.startDate }} —
							{{
								experience.stillWorkHere ? "Atual" : experience.endDate
							}}</span
						>

						<span
							v-if="experience.stillWorkHere"
							class="self-start px-2 py-0.75 rounded-full bg-primary text-canvas text-[11px]"
							>Atual</span
						>
					</div>
					<div>
						<div class="text-[21px] font-semibold tracking-[-0.01em]">
							{{ experience.role }}
						</div>
						<div class="font-sora text-[17px] font-medium text-primary mt-1">
							{{ experience.companyName }}
						</div>
					</div>
					<p class="m-0 text-base leading-[1.65] text-ink text-pretty">
						{{ experience.shortDescription }}
					</p>
				</div>
			</div>
		</section>

		<section
			id="habilidades"
			data-screen-label="Habilidades"
			class="py-[clamp(72px,10vw,128px)]">
			<div
				class="font-jetbrains text-xs tracking-[0.08em] uppercase text-ink/60">
				04 — Habilidades
			</div>
			<h2
				class="mt-4 mb-14 font-sora font-semibold text-[clamp(34px,4.2vw,52px)] leading-[1.05] tracking-[-0.04em]">
				Ferramentas <span class="text-primary">&amp; práticas</span>
			</h2>

			<div
				class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-[clamp(24px,3vw,40px)]">
				<div class="border-t border-ink pt-6 flex flex-col gap-4.5">
					<div class="flex justify-between items-center">
						<span class="font-semibold text-[17px]">Linguagens</span>
						<span class="size-2 bg-accent rotate-45"></span>
					</div>
					<div class="flex flex-col gap-2.5 text-[15px]">
						<span v-for="language in skills.linguagens" :key="language">
							{{ language }}
						</span>
					</div>
				</div>

				<div class="border-t border-ink pt-6 flex flex-col gap-4.5">
					<div class="flex justify-between items-center">
						<span class="font-semibold text-[17px]">Front-end</span>
						<span class="size-2 bg-accent rotate-45"></span>
					</div>
					<div class="flex flex-col gap-2.5 text-[15px]">
						<span v-for="framework in skills['frontend']" :key="framework">
							{{ framework }}
						</span>
					</div>
				</div>

				<div class="border-t border-ink pt-6 flex flex-col gap-4.5">
					<div class="flex justify-between items-center">
						<span class="font-semibold text-[17px]">Back-end &amp; Cloud</span>
						<span class="size-2 bg-accent rotate-45"></span>
					</div>
					<div class="flex flex-col gap-2.5 text-[15px]">
						<span v-for="tool in skills['backend']" :key="tool">
							{{ tool }}
						</span>
					</div>
				</div>

				<div class="border-t border-ink pt-6 flex flex-col gap-4.5">
					<div class="flex justify-between items-center">
						<span class="font-semibold text-[17px]">Práticas</span>
						<span class="size-2 bg-accent rotate-45"></span>
					</div>
					<div class="flex flex-col gap-2.5 text-[15px]">
						<span v-for="practice in skills.praticas" :key="practice">
							{{ practice }}
						</span>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
const projectsStore = useProjectsStore();
const { width } = useWindowSize();

const isMobile = computed(() => width.value < 768);
const experiences = [
	{
		startDate: "julho de 2025",
		endDate: "Atual",
		stillWorkHere: true,
		role: "Desenvolvedora de Software",
		companyName: "Inferência TI",
		shortDescription:
			"Desenvolvimento full-stack de aplicações web, migração de banco de dados em larga escala e otimização de performance em dashboards de tempo real.",
	},
	{
		startDate: "março de 2025",
		endDate: "julho de 2025",
		stillWorkHere: false,
		role: "Desenvolvedora full stack",
		companyName: "ClinicDesk",
		shortDescription:
			"Desenvolvimento full-stack de soluções integradas, garantia de consistência de dados entre plataformas web e sistema integrado e melhoria de performance em recursos de tempo real.",
	},
	{
		startDate: "julho de 2024",
		endDate: "fevereiro de 2025",
		stillWorkHere: false,
		role: "Desenvolvedora full stack",
		companyName: "Jera",
		shortDescription:
			"Desenvolvimento full-stack de plataforma omnichannel, criação de soluções para demandas específicas de clientes e otimização de responsividade em cenários de alto tráfego.",
	},

	{
		startDate: "abril de 2022",
		endDate: "abril de 2024",
		stillWorkHere: false,
		role: "Estagiária de engenharia de software",
		companyName: "Startup Sistema FIEMS",
		shortDescription:
			"Desenvolvimento front-end com foco em usabilidade e performance, aplicação de integração contínua para agilidade de times e garantia de estabilidade de código.",
	},
];

const skills = {
	linguagens: ["TypeScript", "JavaScript (ES6)", "Java", "Ruby", "SQL"],
	frontend: [
		"Vue.js",
		"Nuxt.js",
		"React.js & Next.js",
		"TailwindCSS",
		"Figma",
		"HTML",
		"CSS",
	],
	backend: [
		"Spring Boot",
		"Node.js",
		"PostgreSQL",
		"Ruby on Rails",
		"Redis",
		"Docker",
		"AWS",
	],
	praticas: [
		"Arquitetura de Microsserviços",
		"Testes automatizados e TDD(Test-Driven Development)",
		"CI/CD",
		"Metodologias Ágeis (Scrum, Kanban)",
		"Integração de APIs REST",
		"Comunicação em tempo real (WebSockets)",
		"UX/UI Design e Design System",
	],
};
</script>
