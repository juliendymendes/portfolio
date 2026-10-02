<template>
	<header
		ref="headerElement"
		class="fixed inset-x-0 top-0 z-10 bg-canvas/90 backdrop-blur-[10px] border-b border-border px-4 md:px-10 lg:px-20 wide:px-60">
		<nav class="py-4.5 flex items-center justify-between gap-4">
			<NuxtLink
				href="#topo"
				class="flex items-center gap-2.5 text-ink min-w-0"
				@click="isMenuOpen = false">
				<span
					class="size-8.5 rounded-full bg-primary text-canvas grid place-items-center font-sora text-[13px] font-bold tracking-[-0.02em] shrink-0"
					>jm</span
				>
				<span class="font-semibold text-[15px] tracking-[-0.01em] truncate"
					>Juliendy Mendes</span
				>
			</NuxtLink>

			<button
				type="button"
				class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink"
				:aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
				@click="isMenuOpen = !isMenuOpen">
				<Icon
					:name="
						isMenuOpen
							? 'material-symbols:close-rounded'
							: 'material-symbols:menu-rounded'
					"
					class="size-5" />
			</button>

			<div
				class="hidden md:flex gap-[clamp(14px,2.4vw,32px)] flex-wrap text-sm font-medium">
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

		<div v-if="isMenuOpen" class="md:hidden border-t border-border pb-4 pt-3">
			<div class="flex flex-col gap-2 text-sm font-medium">
				<NuxtLink
					v-for="item in menuItems"
					:key="item.name"
					:href="item.link"
					class="rounded-md px-2 py-2 text-ink hover:bg-surface hover:text-primary"
					:class="{
						'bg-surface text-primary': activeSection === item.link.slice(1),
					}"
					@click="isMenuOpen = false"
					>{{ item.name }}</NuxtLink
				>
			</div>
		</div>
	</header>
</template>
<script setup lang="ts">
const headerElement = ref<HTMLElement | null>(null);
const activeSection = ref("");
const isMenuOpen = ref(false);

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

const { width } = useWindowSize();
const handleResize = () => {
	updateActiveSection();
	if (width.value >= 768) {
		isMenuOpen.value = false;
	}
};

watch(width, handleResize);

onMounted(() => {
	updateActiveSection();
	window.addEventListener("scroll", updateActiveSection, { passive: true });
});

onUnmounted(() => {
	window.removeEventListener("scroll", updateActiveSection);
});
</script>
