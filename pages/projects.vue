<template>
  <section class="py-20">
    <div>
      <h1 class="text-dark text-3xl font-medium leading-none">
        Meus projetos<span class="text-primary">.</span>
      </h1>
      <div class="h-1 w-20 bg-primary"></div>
    </div>

    <div class="mt-10 flex flex-col gap-12 md:gap-32">
      <div v-for="(project, index) in projects" :class="{'lg:flex-row-reverse' : index % 2 !== 0}" class="flex flex-wrap-reverse items-center lg:justify-around gap-5 md:gap-10" :key="project.id">
				<div class="md:max-w-[600px] flex flex-col gap-5 mx-3 md:mx-0">
					<p class="font-medium text-dark text-xl">{{project.name}}</p>
					<p class="font-normal text-dark text-base">
						{{project.description}}
					</p>
					<div class="flex gap-2 items-center">
						<NuxtImg src="/github.svg" width="20" />
						<NuxtLink :to="project.githubLink" class="text-dark"
							>{{ project.githubLink}}</NuxtLink
						>
					</div>
					<NuxtLink
						:to="project.websiteLink"
						class="bg-primary hover:bg-accent py-2 px-10 w-fit block rounded-full text-neutral text-base"
						>Visualizar projeto</NuxtLink
					>
				</div>

				<NuxtImg :src="project.imageUrl" class="rounded-[10px] w-[500px] md:w-full lg:w-[500px]" />
      </div>


    </div>
  </section>
</template>

<script setup lang="ts">

const projects = reactive([
  {
    id: 1,
    name: "Project 1",
    description: "This is the first project.",
    githubLink: "https://github.com/",
    websiteLink: "https://www.hostinger.com/tutorials/portfolio-website-examples",
    imageUrl: "https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Project 2",
    description: "This is the second project.",
    githubLink: "https://github.com/",
    websiteLink: "https://www.hostinger.com/tutorials/portfolio-website-examples",
    imageUrl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Project 3",
    description: "This is the third project.",
    githubLink: "https://github.com/",
    websiteLink: "https://www.hostinger.com/tutorials/portfolio-website-examples",
    imageUrl: "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
	{
    id: 4,
    name: "Project 4",
    description: "This is the fouth project.",
    githubLink: "https://github.com/",
    websiteLink: "https://www.hostinger.com/tutorials/portfolio-website-examples",
    imageUrl: "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
])

</script>