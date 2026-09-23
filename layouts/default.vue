<template>
	<div
		class="bg-canvas font-poppins overflow-y-hidden overflow-x-hidden relative min-h-screen">
		<Header />
		<div class="mb-40">
			<slot />
		</div>
		<Footer />
	</div>
</template>
