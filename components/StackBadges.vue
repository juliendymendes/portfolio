<template>
	<div class="flex gap-4">
		<div
			v-for="stack in stacks"
			:key="stack.name"
			class="badge badge-primary text-slate-100">
			{{ stack.name }}
		</div>
	</div>
</template>
<script setup lang="ts">
import type { Stack } from "~/types/Stack";
defineProps<{
	stacks: Stack[];
}>();
</script>
