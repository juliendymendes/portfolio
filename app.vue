<template>
  <main class="bg-neutral font-poppins overflow-x-hidden">
    <nav class="bg-neutral px-16 py-8 flex justify-between relative z-50">
      <NuxtImg src="/logo.svg" width="20" class="cursor-pointer" />

      <ul class="flex gap-9 text-dark text-lg font-medium items-center">
        <li class="cursor-pointer rounded-full hover:text-primary">Home</li>
        <li class="cursor-pointer hover:text-primary">Sobre mim</li>
        <li class="cursor-pointer hover:text-primary">Projetos</li>
        <li class="cursor-pointer hover:text-primary">Contato</li>
      </ul>
    </nav>
    <section class="h-screen flex items-center justify-between px-16">
      <div class="flex flex-col gap-5 text-dark w-1/2">
        <h1 class="text-2xl">Olá, eu sou a Juliendy :)</h1>
        <h2 class="text-5xl font-semibold">Desenvolvedora de software</h2>
        <p class="text-xl">
          Sou apaixonada por desenvolvimento de software, com 2 anos de
          experiência em desenvolvimento criando interfaces de usuário atraentes
          e responsivas.
        </p>
        <NuxtLink
          to="/"
          class="bg-primary hover:bg-accent py-4 px-20 w-fit inline-block rounded-full text-neutral text-xl"
          >Meus projetos</NuxtLink
        >
      </div>

      <div>
        <NuxtImg src="/about-me.png" width="300" />
      </div>
    </section>

    <section class="px-16">
      <h3 class="text-dark text-3xl font-medium leading-none">
        Meus projetos<span class="text-primary">.</span>
      </h3>
      <div class="h-1 w-20 bg-primary"></div>

      <div class="mt-10 grid grid-cols-2 gap-8 bg-neutral ">
        <div v-for="i in [1, 1, 2, 3]">
          <div class="bg-secondary px-6 py-10 rounded-[20px] ">
            <div
              class="w-32 h-32 rounded-full bg-transparent border-8 border-primary"
            ></div>
            <NuxtImg
              src="/example.png"
              width="300"
              class="m-auto"
            />
						<div
							class="w-32 h-32 rounded-full bg-transparent border-8 border-primary"
						></div>
          </div>
          <div class="mt-4 ms-4">
            <p class="text-dark font-medium text-lg">Projeto 1</p>
            <p class="text-dark text-base relative z-50 whitespace-pre-line">
              Lorem ipsum dolor sit amet consectetur. Congue non aenean dictum
              phasellus.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#05012D] flex px-28 gap-28 pt-14 pb-20 relative">
      <div class="flex flex-col gap-12 basis-1/2">
        <div class="flex flex-col gap-9">
          <div>
            <h4 class="font-semibold text-[26px] text-base-100">
              Formação
              <span
                class="bg-gradient-to-r from-neutral to-accent text-transparent bg-clip-text"
                >acadêmica</span
              >
            </h4>
            <div class="h-1 w-16 bg-neutral"></div>
          </div>
          <div class="border-l-4 border-[#D9D9D9] ps-3 py-1">
            <p class="font-semibold text-lg text-base-100">
              Bacharelado em Engenharia de Software
            </p>
            <p class="font-normal text-base text-base-100">
              Universidade Federal de Mato Grosso do Sul (2020-2024)
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-4">
          <p class="font-semibold text-xl text-base-100">
            Projetos
            <span
              class="bg-gradient-to-r from-neutral to-accent text-transparent bg-clip-text"
              >acadêmicos</span
            >
          </p>
          <div class="flex">
            <div class="bg-[#D9D9D9] h-36 w-8"></div>
            <div class="ps-3">
              <p class="font-semibold text-base-100 text-xl">Destacom</p>
              <p class="font-normal text-lg text-base-100">
                Projeto de extensão - Faculdade de Computação Universidade
                Federal de Mato Grosso do Sul - 2022
              </p>
              <p class="font-semibold text-lg text-base-100 mt-2">Descrição</p>
              <p class="font-normal text-base text-base-100">
                Projeto de extensão que tem como objetivo desenvolver ações que
                levem aos alunos do ensino básico informações sobre os cursos de
                graduação da Faculdade de Computação da UFMS por meio de cursos
                de formação na área de tecnologia e, assim, atrair estes alunos.
                O Destacom – Despertando Talentos em Computação, é um projeto
                que, desde 2010 desenvolve ações com a comunidade externa em
                colaboração com docentes e acadêmicos da Faculdade de Computação
                Facom/UFMS.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="basis-1/2 flex flex-col gap-12">
        <div>
          <h5 class="font-semibold text-[26px] text-base-100">
            Experiência
            <span
              class="bg-gradient-to-r from-neutral to-accent text-transparent bg-clip-text"
              >profissional</span
            >
          </h5>
          <div class="h-1 w-16 bg-neutral"></div>
        </div>
        <div class="flex">
          <div class="bg-[#D9D9D9] h-64 w-4"></div>
          <div class="ps-3 flex flex-col gap-5">
            <div class="flex flex-col gap-[5px]">
              <p class="font-semibold text-lg text-base-100">
                Estagiária de desenvolvimento front-end
              </p>
              <p class="font-medium text-base text-base-100">
                Startup Sesi Fiems (Abr/2022 - Abr/2024)
              </p>
              <p class="font-normal text-base text-base-100">
                Atuação no desenvolvimento front-end de aplicações web com
                Vue.js, Bootstrap 5, Next.js e no desenvolvimento mobile
                utilizando React Native além de participar das decisões de
                projeto e levantamento de requisitos.
              </p>
            </div>
            <div class="flex flex-col gap-[5px]">
              <p class="font-semibold text-lg text-base-100">
                Engenheira de software
              </p>
              <p class="font-medium text-base text-base-100">
                Núcleo de Práticas em Engenharia de Software - FACOM/UFMS
                (Ago/2023 - Dez/2023)
              </p>
              <p class="font-normal text-base text-base-100">
                Continuação de projeto focado em melhorias, refatorações e
                adição de novas funcionalidades, seguindo estritamente práticas
                de engenharia de software com supervisão de doutores da
                Faculdade de Computação da UFMS.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/triangle.svg"
        alt="Triangulo"
        width="50"
        class="absolute bottom-24 right-56"
      />
    </section>

    <section class="text-center">
      <h6 class="font-semibold text-3xl text-base-100 my-3">
        Meu
        <span
          class="bg-gradient-to-r from-neutral to-accent text-transparent bg-clip-text"
          >portfólio</span
        >
      </h6>
      <p class="font-medium text-lg text-base-100">
        Projetos pessoais que desenvolvi para<br />
        praticar novas habilidades.
      </p>

      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full"
            />
            <div
              className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full"
            />
            <div
              className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
            <div
              className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
            <div
              className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h6>Contato</h6>
      <form>
        <input type="text" id="name" placeholder="Nome completo" />
        <input type="text" id="phone" placeholder="E-mail" />
        <input type="email" id="email" placeholder="Telefone" />
        <input type="text" id="message" placeholder="Mensagem" />
        <button>Enviar</button>
      </form>
    </section>
  </main>
</template>
