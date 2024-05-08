<template>
	<section class="py-20">
		<div>
			<h1 class="text-dark text-3xl font-medium leading-none">
				Meus projetos<span class="text-primary">.</span>
			</h1>
			<div class="h-1 w-20 bg-primary" />
		</div>

		<div class="mt-10 flex flex-col gap-12 md:gap-32">
			<div
				v-for="(project, index) in projectsStore.getProjects"
				:key="project.id"
				:class="{ 'lg:flex-row-reverse': index % 2 !== 0 }"
				class="flex flex-wrap-reverse items-center lg:justify-around gap-5 md:gap-10">
				<div class="md:max-w-[600px] flex flex-col gap-5 mx-3 md:mx-0">
					<p class="font-medium text-dark text-xl">{{ project.name }}</p>
					<p class="font-normal text-dark text-base">
						{{ project.description }}
					</p>
					<div class="flex gap-2 items-center">
						<NuxtImg src="/github.svg" width="20" />
						<NuxtLink :to="project.githubLink" class="text-dark">{{
							project.githubLink
						}}</NuxtLink>
					</div>
					<CustomLink
						v-if="project.websiteLink"
						:url="project.websiteLink"
						text="Visualizar projeto" />
				</div>

				<NuxtImg
					:src="project.imageUrl"
					class="rounded-[10px] w-[500px] md:w-full lg:w-[580px]" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const projectsStore = useProjectsStore();
</script>
