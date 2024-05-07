<template>
	<button
		id="scrollToTop"
		class="bg-primary hidden w-16 h-16 rounded-full hover:bg-accent fixed bottom-8 right-14 z-50"
		@click="topFunction">
		<NuxtImg src="/arrow-upward.svg" width="24" class="m-auto" />
	</button>
</template>

<script setup lang="ts">
const scrollToTopBtn = ref<HTMLButtonElement>();

onMounted(async () => {
	scrollToTopBtn.value = document.getElementById(
		"scrollToTop",
	) as HTMLButtonElement;
	window.onscroll = function () {
		scrollFunction();
	};
});

function scrollFunction() {
	if (scrollToTopBtn.value) {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			scrollToTopBtn.value.style.display = "block";
		} else {
			scrollToTopBtn.value.style.display = "none";
		}
	}
}

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
</script>
