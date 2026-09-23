<template>
	<nav
		class="bg-canvas py-4.5 relative flex justify-between border-b border-border px-4 md:px-16 wide:px-52">
		<NuxtLink to="/">
			<div class="flex gap-3 items-center">
				<span
					class="font-sora font-bold text-surface bg-primary rounded-full w-9 h-9 flex items-center justify-center text-sm cursor-pointer"
					>jm</span
				>
				<span class="font-manrope font-semibold text-lg text-ink"
					>Juliendy Mendes</span
				>
			</div>
		</NuxtLink>
		<NuxtImg
			src="/menu.svg"
			width="24"
			height="24"
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
			<ul
				class="flex gap-9 text-dark text-base font-medium items-center font-manrope">
				<li
					v-for="item in menuItems"
					:key="item.name"
					class="cursor-pointer text-ink hover:text-primary">
					<a :href="item.link">{{ item.name }}</a>
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

const menuItems = reactive([
	{ name: "Sobre", link: "#about" },
	{ name: "Projetos", link: "#projects" },
	{ name: "Experiência", link: "#experience" },
	{ name: "Habilidades", link: "#skills" },
	{ name: "Contato", link: "#contact" },
]);
</script>
