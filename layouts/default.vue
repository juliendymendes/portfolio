<template>
  <div class="bg-neutral font-poppins overflow-y-hidden px-16 wide:px-52">
    <nav class="bg-neutral py-8 flex justify-between relative z-50">
      <NuxtLink to="/">
        <NuxtImg src="/logo.svg" width="20" class="cursor-pointer" />
      </NuxtLink>

      <ul class="flex gap-9 text-dark text-lg font-medium items-center">
        <NuxtLink to="/">
          <li class="cursor-pointer rounded-full hover:text-primary">Home</li>
        </NuxtLink>
        <NuxtLink to="/about">
          <li class="cursor-pointer hover:text-primary">Sobre mim</li>
        </NuxtLink>
        <NuxtLink to="/projects">
          <li class="cursor-pointer hover:text-primary">Projetos</li>
        </NuxtLink>
        <NuxtLink to="/contact">
          <li class="cursor-pointer hover:text-primary">Contato</li>
        </NuxtLink>
      </ul>
    </nav>
    <slot />
    <footer class="mt-20 mb-5 bg-neutral">
      <div class="flex justify-between mb-6">
        <ul class="flex gap-9 text-dark text-lg font-medium items-center">
          <NuxtLink to="/">
            <li class="cursor-pointer rounded-full hover:text-primary">Home</li>
          </NuxtLink>
          <NuxtLink to="/about">
            <li class="cursor-pointer hover:text-primary">Sobre mim</li>
          </NuxtLink>
          <NuxtLink to="/projects">
            <li class="cursor-pointer hover:text-primary">Projetos</li>
          </NuxtLink>
          <NuxtLink to="/contact">
            <li class="cursor-pointer hover:text-primary">Contato</li>
          </NuxtLink>
        </ul>

        <div class="flex gap-x-2">
          <NuxtImg src="/github.svg" class="cursor-pointer" />
          <NuxtImg src="/linkedin.svg" class="cursor-pointer" />
        </div>
      </div>
      <div>
        <p class="text-dark">
          &#169;2024 All Rights Reserved<br />
          Made with ❤️ by Juliendy Mendes
        </p>
      </div>
    </footer>
  </div>
</template>
