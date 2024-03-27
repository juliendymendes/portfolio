<template>
  <main class="bg-primary font-montserrat overflow-x-hidden">
    <nav class="bg-primary px-16 py-8 flex justify-between relative z-50">
      <NuxtImg src="/logo.svg" />

      <ul class="flex gap-9 text-base-100 text-xl items-center">
        <li class="cursor-pointer rounded-full hover:text-accent">Sobre mim</li>
        <li class="cursor-pointer hover:text-accent">Experiência</li>
        <li class="cursor-pointer hover:text-accent">Portfolio</li>
        <li
          class="bg-base-100 text-dark font-semibold rounded-[10px] px-5 py-1 cursor-pointer hover:bg-accent hover:text-base-100"
        >
          Contato
        </li>
      </ul>
    </nav>
    <section class="relative h-[500px]">
      <div
        class="w-20 h-20 bg-gradient-to-r from-neutral via-gradient-middle to-accent rounded-full absolute z-50 top-10 -left-8"
      ></div>
      <div
        class="w-32 h-32 bg-gradient-to-tr from-accent via-gradient-middle to-neutral rounded-full absolute z-50 top-5 right-16"
      ></div>
      <div
        class="w-36 h-36 bg-gradient-to-br from-neutral via-gradient-middle to-accent rounded-full absolute z-50 bottom-5 -left-7"
      ></div>
      <div
        class="w-48 h-48 bg-gradient-to-tl from-neutral via-gradient-middle to-accent rounded-full absolute z-10 -bottom-10 -right-10"
      ></div>

      <div
        class="w-[300px] h-[285px] bg-secondary rounded-[20px] absolute -top-10 -left-20 rotate-[28deg]"
      ></div>
      <div
        class="w-64 h-56 bg-secondary rounded-[20px] absolute -bottom-48 left-1/3 z-20 rotate-[28deg]"
      ></div>
      <div
        class="w-64 h-56 bg-secondary rounded-[20px] absolute -right-52 bottom-28 rotate-[38deg]"
      ></div>

      <div
        class="relative z-50 flex flex-col gap-20 h-full items-center justify-center"
      >
        <div class="flex flex-col gap-5">
          <h1 class="font-semibold text-4xl text-base-100 text-center">
            Olá, eu sou a Juliendy!
          </h1>
          <h2 class="font-semibold text-2xl text-base-100 text-center">
            Desenvolvedora
            <span
              class="bg-gradient-to-r from-neutral to-accent text-transparent bg-clip-text"
              >front-end</span
            >
          </h2>
          <button
            class="bg-neutral text-base-100 px-10 py-2 rounded-[10px] font-semibold block mx-auto"
          >
            Ver meu currículo
          </button>
        </div>
        <NuxtImg src="/arrow-down.svg" class="mx-auto" width="60" />
      </div>
    </section>

    <section
      class="bg-[#05012D] relative z-50 grid grid-cols-2 place-items-center px-12 py-20"
    >
      <img
        src="/triangle.svg"
        alt="Triangulo"
        width="40"
        class="absolute left-4"
      />
      <img
        src="/triangle.svg"
        alt="Triangulo"
        width="44"
        class="absolute top-28 right-32"
      />
      <div>
        <NuxtImg src="/about-me.png" />
      </div>

      <div>
        <h3 class="font-semibold text-3xl text-base-100 my-3">
          Sobre
          <span
            class="bg-gradient-to-r from-neutral to-accent text-transparent bg-clip-text"
            >mim</span
          >
        </h3>
        <p class="text-base-100 text-lg w-[90%]">
          Sou apaixonada por desenvolvimento de software, tenho 2 anos de
          experiência em desenvolvimento front-end e sou capaz de criar
          interfaces de usuário atraentes e responsivas, tanto para aplicações
          web quanto para aplicativos móveis. Estou constantemente buscando
          aprender novas tecnologias e aprimorar minhas habilidades. Sou
          proativa, organizada e comprometida com a entrega de produtos de alta
          qualidade.
        </p>
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
