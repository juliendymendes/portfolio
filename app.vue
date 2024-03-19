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

      <div class="relative z-50 flex flex-col gap-20 h-full items-center justify-center">
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
            class="bg-neutral text-base-100 px-10 py-2 rounded-[10px] font-semibold  block mx-auto"
          >
            Ver meu currículo
          </button>
        </div>
        <NuxtImg src="/arrow-down.svg" class="mx-auto" width="60" />
      </div>
    </section>

    <section class="bg-[#05012D] relative z-50 grid grid-cols-2 place-items-center px-12 py-20">
      <div>
        <NuxtImg src="/about-me.png" />
      </div>

      <div>
        <h3 class="font-semibold text-2xl text-base-100">Sobre <span
              class="bg-gradient-to-r from-neutral to-accent text-transparent bg-clip-text"
              >mim</span></h3>
        <p class="text-base-100 text-base w-[500px]">
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

    <section>
      <div>
        <div>
          <h4>Formação acadêmica</h4>
          <p>Bacharelado em Engenharia de Software</p>
          <p>Universidade Federal de Mato Grosso do Sul (2020-2024)</p>
        </div>

        <div>
          <p>Projetos acadêmicos</p>
          <p>Destacom</p>
          <p>
            Projeto de extensão - Faculdade de Computação Universidade Federal
            de Mato Grosso do Sul - 2022
          </p>
          <p>Detalhes</p>
          <p>
            Projeto de extensão que tem como objetivo desenvolver ações que
            levem aos alunos do ensino básico informações sobre os cursos de
            graduação da Faculdade de Computação da UFMS por meio de cursos de
            formação na área de tecnologia e, assim, atrair estes alunos. O
            Destacom – Despertando Talentos em Computação, é um projeto que,
            desde 2010 desenvolve ações com a comunidade externa em colaboração
            com docentes e acadêmicos da Faculdade de Computação Facom/UFMS.
          </p>
        </div>
      </div>

      <div>
        <h5>Experiência profissional</h5>
        <div>
          <p>Estagiária de desenvolvimento front-end</p>
          <p>Startup Sesi Fiems (Abr/2022 - Abr/2024)</p>
          <p>
            Atuação no desenvolvimento front-end de aplicações web com Vue.js,
            Bootstrap 5, Next.js e no desenvolvimento mobile utilizando React
            Native além de participar das decisões de projeto e levantamento de
            requisitos.
          </p>
        </div>
        <div>
          <p>Engenheira de software</p>
          <p>
            Núcleo de Práticas em Engenharia de Software - FACOM/UFMS (Ago/2023
            - Dez/2023)
          </p>
          <p>
            Continuação de projeto focado em melhorias, refatorações e adição de
            novas funcionalidades, seguindo estritamente práticas de engenharia
            de software com supervisão de doutores da Faculdade de Computação da
            UFMS.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h6>Meu portfólio</h6>
      <p>Projetos pessoais que desenvolvi para praticar novas habilidades.</p>

      <div>
        <!-- carrossel-->
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
