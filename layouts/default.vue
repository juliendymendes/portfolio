<template>
	<div
		class="bg-canvas font-manrope overflow-y-hidden overflow-x-hidden relative min-h-screen">
		<Header />
		<div class="mb-40 px-4 md:px-10 lg:px-20 wide:px-60">
			<slot />
		</div>
		<Footer />
	</div>
</template>
