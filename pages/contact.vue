<template>
	<section class="flex justify-between py-20">
		<div class="flex flex-col gap-5 justify-center">
			<div>
				<h1 class="text-dark text-3xl font-medium leading-none">
					Contato<span class="text-primary">.</span>
				</h1>
				<div class="h-1 w-20 bg-primary" />
			</div>

			<p class="text-dark">
				Pronto para dar o próximo passo juntos?<br />
				Entre em contato e vamos juntos construir algo incrível!
			</p>

			<div>
				<div class="flex gap-2 items-center mb-4">
					<NuxtImg src="/linkedin.svg" class="w-6 md:w-8" />
					<NuxtLink
						to="https://www.linkedin.com/in/juliendymendes/"
						class="text-dark text-sm md:text-base"
						>https://www.linkedin.com/in/juliendymendes/</NuxtLink
					>
				</div>
				<div class="flex gap-2 items-center">
					<NuxtImg src="/mail.svg" class="w-6 md:w-8" />
					<NuxtLink to="mailto:juliendy0708@gmail.com" class="text-dark"
						>juliendy0708@gmail.com</NuxtLink
					>
				</div>
			</div>
		</div>

		<div class="wide:me-28">
			<NuxtImg src="/contact.png" width="400" class="hidden lg:block" />
		</div>
	</section>
</template>
