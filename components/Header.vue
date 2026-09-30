<template>
	<header
		ref="headerElement"
		class="fixed inset-x-0 top-0 z-10 bg-canvas/90 backdrop-blur-[10px] border-b border-border">
		<nav
			class="px-[clamp(20px,5vw,56px)] py-4.5 flex items-center justify-between gap-6 flex-wrap">
			<NuxtLink href="#topo" class="flex items-center gap-2.5 text-ink">
				<span
					class="size-8.5 rounded-full bg-primary text-canvas grid place-items-center font-sora text-[13px] font-bold tracking-[-0.02em]"
					>jm</span
				>
				<span class="font-semibold text-[15px] tracking-[-0.01em]"
					>Juliendy Mendes</span
				>
			</NuxtLink>
			<div
				class="flex gap-[clamp(14px,2.4vw,32px)] flex-wrap text-sm font-medium">
				<NuxtLink
					v-for="item in menuItems"
					:key="item.name"
					:href="item.link"
					class="text-ink hover:text-primary"
					:class="{
						'border-b border-accent': activeSection === item.link.slice(1),
					}"
					>{{ item.name }}</NuxtLink
				>
			</div>
		</nav>
	</header>
</template>
<script setup lang="ts">
const headerElement = ref<HTMLElement | null>(null);
const activeSection = ref("");

const menuItems = reactive([
	{ name: "Sobre", link: "#sobre" },
	{ name: "Projetos", link: "#projetos" },
	{ name: "Experiência", link: "#experiencia" },
	{ name: "Habilidades", link: "#habilidades" },
	{ name: "Contato", link: "#contato" },
]);

const updateActiveSection = () => {
	const activationOffset = headerElement.value?.offsetHeight ?? 0;

	const sections = menuItems
		.map(({ link }) => document.getElementById(link.slice(1)))
		.filter((section): section is HTMLElement => section !== null);

	activeSection.value = "";
	for (const section of sections) {
		if (section.getBoundingClientRect().top <= activationOffset) {
			activeSection.value = section.id;
		}
	}

	const isAtPageBottom =
		window.innerHeight + window.scrollY >=
		document.documentElement.scrollHeight - 1;
	if (isAtPageBottom) {
		activeSection.value = sections.at(-1)?.id ?? activeSection.value;
	}

	const hash = activeSection.value ? `#${activeSection.value}` : "";
	if (window.location.hash !== hash) {
		window.history.replaceState(
			window.history.state,
			"",
			`${window.location.pathname}${window.location.search}${hash}`,
		);
	}
};

onMounted(() => {
	updateActiveSection();
	window.addEventListener("scroll", updateActiveSection, { passive: true });
	window.addEventListener("resize", updateActiveSection);
});

onUnmounted(() => {
	window.removeEventListener("scroll", updateActiveSection);
	window.removeEventListener("resize", updateActiveSection);
});
</script>
