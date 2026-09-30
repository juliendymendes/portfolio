<template>
	<section
		id="contato"
		data-screen-label="Contato"
		class="bg-primary text-canvas">
		<div class="px-4 md:px-20 wide:px-60 pt-[clamp(80px,11vw,140px)] pb-12">
			<div
				class="font-jetbrains text-xs tracking-[0.08em] uppercase text-accent">
				05 — Contato
			</div>
			<h2
				class="mt-5 mb-0 font-sora font-semibold text-[clamp(44px,7.5vw,104px)] leading-none tracking-[-0.045em]">
				Vamos criar algo<br /><span class="text-accent">juntos?</span>
			</h2>

			<div class="mt-14 flex items-center gap-4 flex-wrap">
				<NuxtLink
					:href="`mailto:${contactEmail}`"
					class="text-[clamp(20px,2.6vw,32px)] text-canvas border-b border-canvas/40 pb-1 break-all hover:text-accent hover:border-accent">
					{{ contactEmail }}
				</NuxtLink>
				<button
					class="font-jetbrains text-xs px-3.5 py-2 rounded-full border border-canvas/40 bg-transparent text-canvas cursor-pointer hover:bg-canvas hover:text-primary"
					@click="copyEmail">
					Copiar e-mail
				</button>
			</div>

			<div
				class="mt-18 grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-px bg-canvas/20 border-y border-canvas/20">
				<NuxtLink
					href="https://www.linkedin.com/in/"
					target="_blank"
					class="bg-primary px-6 py-7 flex justify-between items-center gap-4 text-canvas hover:text-accent">
					<span class="flex flex-col gap-1.5">
						<span class="font-jetbrains text-xs opacity-75">LinkedIn</span>
						<span class="text-[19px]">/in/juliendymendes</span>
					</span>
					<span class="text-[22px]">↗</span>
				</NuxtLink>
				<NuxtLink
					href="https://github.com/juliendymendes"
					target="_blank"
					class="bg-primary px-6 py-7 flex justify-between items-center gap-4 text-canvas hover:text-accent">
					<span class="flex flex-col gap-1.5">
						<span class="font-jetbrains text-xs opacity-75">GitHub</span>
						<span class="text-[19px]">@juliendymendes</span>
					</span>
					<span class="text-[22px]">↗</span>
				</NuxtLink>
				<NuxtLink
					:href="`mailto:${contactEmail}`"
					class="bg-primary px-6 py-7 flex justify-between items-center gap-4 text-canvas hover:text-accent">
					<span class="flex flex-col gap-1.5">
						<span class="font-jetbrains text-xs opacity-75">E-mail</span>
						<span class="text-[19px]">Enviar mensagem</span>
					</span>
					<span class="text-[22px]">↗</span>
				</NuxtLink>
			</div>

			<footer
				class="mt-12 flex justify-between gap-4 flex-wrap font-jetbrains text-xs text-canvas/75">
				<span>© {{ new Date().getFullYear() }} Juliendy Mendes</span>
				<NuxtLink href="#topo" class="text-canvas/75 hover:text-accent"
					>Voltar ao topo ↑</NuxtLink
				>
			</footer>
		</div>
		<div v-if="toastMessage" class="toast toast-center">
			<div class="alert alert-accent">
				<span>{{ toastMessage }}</span>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const contactEmail = "juliendymendes.dev@gmail.com";
const toastMessage = ref("");

const copyEmail = () => {
	navigator.clipboard.writeText(contactEmail);

	toastMessage.value = "E-mail copiado para a área de transferência!";
	setTimeout(() => {
		toastMessage.value = "";
	}, 3000);
};
</script>
