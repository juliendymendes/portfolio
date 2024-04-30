<template>
	<nav class="bg-neutral py-8 relative flex justify-between">
		<NuxtLink to="/">
			<NuxtImg src="/logo.svg" width="20" class="cursor-pointer" />
		</NuxtLink>
		<NuxtImg
			src="/menu.svg"
			width="24"
			class="md:hidden cursor-pointer"
			@click="toggleMenu" />

		<!-- CELL PHONE NAV -->
		<div v-if="menu" class="flex justify-between absolute right-0 top-16 z-50">
			<ul className="menu bg-base-100 text-dark w-56 rounded-box">
				<li class="cursor-pointer rounded-full hover:text-primary">
					<NuxtLink
						to="/"
						class="active:!bg-transparent active:!text-dark focus:text-dark focus:bg-transparent"
						@click="() => (menu = false)"
						>Home
					</NuxtLink>
				</li>

				<li class="cursor-pointer hover:text-primary">
					<NuxtLink
						to="/about"
						class="active:!bg-transparent active:!text-dark focus:text-dark focus:bg-transparent"
						@click="() => (menu = false)"
						>Sobre mim
					</NuxtLink>
				</li>

				<li class="cursor-pointer hover:text-primary">
					<NuxtLink
						to="/projects"
						class="active:!bg-transparent active:!text-dark focus:text-dark focus:bg-transparent"
						@click="() => (menu = false)"
						>Projetos
					</NuxtLink>
				</li>

				<li class="cursor-pointer hover:text-primary">
					<NuxtLink
						to="/contact"
						class="active:!bg-transparent active:!text-dark focus:text-dark focus:bg-transparent"
						@click="() => (menu = false)">
						Contato
					</NuxtLink>
				</li>
			</ul>
		</div>

		<!-- TABLET AND DESKTOP NAV -->
		<div class="md:flex justify-between relative z-50 hidden">
			<ul class="flex gap-9 text-dark text-lg font-medium items-center">
				<li class="cursor-pointer rounded-full hover:text-primary">
					<NuxtLink to="/">Home </NuxtLink>
				</li>

				<li class="cursor-pointer hover:text-primary">
					<NuxtLink to="/about"> Sobre mim </NuxtLink>
				</li>

				<li class="cursor-pointer hover:text-primary">
					<NuxtLink to="/projects">Projetos </NuxtLink>
				</li>

				<li class="cursor-pointer hover:text-primary">
					<NuxtLink to="/contact"> Contato </NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>
<script setup lang="ts">
const menu = ref(false);
function toggleMenu() {
	menu.value = !menu.value;
}
</script>
