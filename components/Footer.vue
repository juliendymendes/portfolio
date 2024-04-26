<template>
  <footer
    class="mt-20 mb-5 flex justify-between w-[87%] xl:w-[78%] bg-neutral absolute bottom-0"
  >
    <div class="flex flex-col mb-6">
      <ul
        class="flex flex-wrap gap-3 md:gap-9 text-dark text-sm md:text-lg font-medium items-center"
      >
        <li class="cursor-pointer rounded-full hover:text-primary">
          <NuxtLink to="/">Home</NuxtLink>
        </li>

        <li class="cursor-pointer hover:text-primary">
          <NuxtLink to="/about">Sobre mim </NuxtLink>
        </li>

        <li class="cursor-pointer hover:text-primary">
          <NuxtLink to="/projects">Projetos</NuxtLink>
        </li>

        <li class="cursor-pointer hover:text-primary">
          <NuxtLink to="/contact">Contato</NuxtLink>
        </li>
      </ul>
      <div>
        <p class="text-dark text-sm md:text-base mt-4">
          &#169;2024 All Rights Reserved<br />
          Made with ❤️ by Juliendy Mendes
        </p>
      </div>
    </div>
    <div class="flex gap-x-2">
      <NuxtImg src="/github.svg" class="cursor-pointer" width="32" />
      <NuxtImg src="/linkedin.svg" class="cursor-pointer" width="32" />
    </div>
  </footer>
</template>
