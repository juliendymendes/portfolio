<template>
	<main class="overflow-x-hidden overflow-y-hidden relative">
		<section
			class="pt-16 pb-24 xl:py-0 xl:h-screen flex items-center justify-between">
			<div class="flex flex-col gap-5 text-dark lg:w-1/2">
				<h1 class="text-lg">Olá, eu sou a Juliendy :)</h1>
				<h2 class="text-3xl lg:text-5xl font-semibold">
					Desenvolvedora de software
				</h2>
				<p class="text-lg">
					Sou apaixonada por desenvolvimento de software, com 2 anos de
					experiência em desenvolvimento criando interfaces de usuário atraentes
					e responsivas.
				</p>
				<CustomLink url="/" text="Meus projetos" />
			</div>

			<div>
				<NuxtImg src="/about-me.png" class="hidden lg:block lg:w-96" />
			</div>
		</section>

		<section>
			<div>
				<h3 class="text-dark text-3xl font-medium leading-none">
					Meus projetos<span class="text-primary">.</span>
				</h3>
				<div class="h-1 w-20 bg-primary" />
			</div>

			<div class="mt-10 grid md:grid-cols-2 gap-9 bg-neutral">
				<div v-for="project in projectsStore.getProjects" :key="project.id">
					<div
						class="rounded-[20px] flex p-10 w-full h-[350px] bg-[url('/background.png')] bg-center bg-cover bg-no-repeat">
						<NuxtImg
							:src="project.imageUrl || '/example.png'"
							width="400"
							class="m-auto" />
					</div>
					<div class="mt-4 ms-4">
						<p class="text-dark font-medium text-lg">{{ project.name }}</p>
						<p class="text-dark text-base relative z-50 whitespace-pre-line">
							{{ project.description }}
						</p>
					</div>
				</div>
			</div>
			<CustomLink url="/projects" text="Ver todos" class="mx-auto my-16" />
		</section>

		<section class="mb-24">
			<div>
				<h4 class="text-dark text-3xl font-medium leading-none">
					Skills<span class="text-primary">.</span>
				</h4>
				<div class="h-1 w-12 bg-primary" />
			</div>

			<div
				class="grid md:grid-cols-4 gap-14 md:gap-10 w-full my-10 overflow-x-hidden">
				<div>
					<p class="font-semibold text-xl text-dark">Front-end</p>
					<ul class="text-lg text-dark">
						<li>TypeScript</li>
						<li>ReactJS/NextJS</li>
						<li>VueJS/NuxtJS</li>
						<li>TailwindCss</li>
						<li>Bootstrap</li>
						<li>Vuetify</li>
					</ul>
				</div>

				<div>
					<p class="font-semibold text-xl text-dark">Back-end</p>
					<ul class="text-lg text-dark">
						<li>NodeJS</li>
						<li>Java</li>
						<li>Kotlin</li>
						<li>Spring Boot</li>
						<li>PostgreSQL</li>
						<li>Docker</li>
					</ul>
				</div>

				<div>
					<p class="font-semibold text-xl text-dark">Projeto</p>
					<ul class="text-lg text-dark">
						<li>Scrum</li>
						<li>Kanban</li>
						<li>Clean Code</li>
						<li>Gerência de projetos</li>
						<li>Análise de requisitos</li>
					</ul>
				</div>

				<div>
					<p class="font-semibold text-xl text-dark">Web Design</p>
					<ul class="text-lg text-dark">
						<li>UX/UI Design</li>
						<li>Wireframe</li>
						<li>Figma</li>
						<li>Responsividade</li>
					</ul>
				</div>
			</div>
		</section>

		<ScrollTopButton />
	</main>
</template>

<script setup lang="ts">
const projectsStore = useProjectsStore();
</script>
