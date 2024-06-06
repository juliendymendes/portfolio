<template>
	<NuxtLink
		:to="url"
		class="bg-primary hover:bg-accent py-2 px-8 lg:py-4 lg:px-20 w-fit block rounded-full text-neutral lg:text-xl"
		:target="target"
		>{{ text }}</NuxtLink
	>
</template>

<script setup lang="ts">
defineProps({
	url: {
		type: String,
		default: "",
	},
	text: {
		type: String,
		default: "",
	},
	target: {
		type: String,
		default: "_self",
	},
});
</script>
