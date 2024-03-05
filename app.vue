
<template>
  <main class="bg-primary font-montserrat">
		<nav class="bg-neutral p-5 flex justify-between">
			<NuxtImg src="/logo.svg"/>

			<ul class="flex gap-5">
				<li>Sobre mim</li>
				<li>Experiência</li>
				<li>Portfolio</li>
				<li>Contato</li>
			</ul>
		</nav>
    <section>
      <h1>Olá, eu sou a Juliendy!</h1>
      <h2>Desenvolvedora front-end há 2 anos</h2>
      <button>Ver meu currículo</button>
      <NuxtImg src="/arrow-down.svg" />
    </section>

    <section>
      <div>
        <NuxtImg src="/about-me.png" />
      </div>

      <div>
        <h3>Sobre mim</h3>
        <p>
          Sou apaixonada por desenvolvimento de software, tenho mais de 1 ano de
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
					<p>Startup Sesi Fiems  (Abr/2022 - Abr/2024)</p>
					<p>Atuação no desenvolvimento front-end de aplicações web com Vue.js, Bootstrap 5, Next.js e no desenvolvimento mobile utilizando React Native além de participar das decisões de projeto e levantamento de requisitos.</p>
				</div>
				<div>
					<p>Engenheira de software</p>
					<p>Núcleo de Práticas em Engenharia de Software - FACOM/UFMS (Ago/2023 - Dez/2023)</p>
					<p>Continuação de projeto  focado em melhorias, refatorações e adição de novas funcionalidades, seguindo estritamente práticas de engenharia de software com supervisão de doutores da Faculdade de Computação da UFMS.</p>
				</div>
			</div>
    </section>

		<section>
			<h6>Meu portfólio</h6>
			<p>Projetos pessoais que desenvolvi para
 praticar novas habilidades.</p>
				
 <div>
	<!-- carrossel-->
 </div>
		</section>

		<section>
			<h6>Contato</h6>
			<form>
				<input type="text" id="name" placeholder="Nome completo">
				<input type="text" id="phone" placeholder="E-mail">
				<input type="email" id="email" placeholder="Telefone">
				<input type="text" id="message" placeholder="Mensagem">
				<button>Enviar</button>
			</form>
		</section>
  </main>
</template>
