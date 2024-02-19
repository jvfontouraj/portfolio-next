import Link from 'next/link'
import React from 'react'

const Resume = () => {
  return (
    <div className="m-auto flex aspect-[0.70695553] h-screen flex-col justify-center gap-10 border p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold leading-none">
          João Vitor Fontoura Jardim
        </h1>
        <h2 className="text-lg  leading-none">Desenvolvedor Front-End</h2>
      </div>
      <p className="text-xs">
        Sou um desenvolvedor front-end com mais de um ano e meio de experiência
        na área. Meu foco é criar aplicações para web, transformando ideias em
        projetos criativos e performáticos, tendo sempre em vista uma boa
        experiência do usuário. Minha jornada começou no final de 2022, quando
        iniciei o curso de Sistemas de Informação e passei a trabalhar
        exclusivamente como desenvolvedor, atuando como freelancer. Em 2023
        consegui minha primeira oportunidade profissional como desenvolvedor
        Front-End na Allnftlab, posteriormente atuei na No Match e hoje estou
        estagiando na empresa Wilson, Sons Serviços Marítimos na área de TI RH.
      </p>
      <div>
        <h3 className="font-semibold uppercase">Contato</h3>
        <ul className="grid grid-cols-2 gap-1 text-xs [&>li]:flex [&>li]:gap-1">
          <li>
            <span className="font-semibold ">Portfólio:</span>
            <Link
              href="https://joajardim.dev"
              target="_blank"
              className="underline"
            >
              joaojardim.dev
            </Link>
          </li>
          <li>
            <span className="font-semibold ">Linkedin:</span>
            <Link
              href="https://www.linkedin.com/in/joaovfjardim/"
              target="_blank"
              className="underline"
            >
              /joaovfjardim
            </Link>
          </li>
          <li>
            <span className="font-semibold ">Email:</span>
            <span>jvfjardim@gmail.com</span>
          </li>
          <li>
            <span className="font-semibold ">GitHub:</span>
            <Link
              href="https://github.com/jvfontouraj"
              target="_blank"
              className="underline"
            >
              /jvfontouraj
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold uppercase">Experiência</h3>
        <ul className="flex flex-col gap-5">
          <li>
            <h4 className="text-sm font-semibold">
              Wilson, Sons Serviços Marítimos
            </h4>
            <h5 className="text-xs">
              Estagiário TI RH | Dezembro 2023 - Atualmente
            </h5>
            <p className="mt-1 text-xs">
              No momento estou estagiando na Wilson, Sons Serviços Marítimos,
              onde atuo no desenvolvimento de aplicações web e manutenção de
              sistemas internos da área de Recursos Humanos da empresa. Minhas
              principais responsabilidades envolvem a criação e desnvolvimento
              de interfaces, além de integração com APIs e banco de dados. As
              principais tecnologias utilizadas são Next.js, Typescript, PL/SQL
              e Python.
            </p>
          </li>
          <li>
            <h4 className="text-sm font-semibold">No Match</h4>
            <h5 className="text-xs">
              Desenvolvedor Front-End | Setembro 2023 - Novembro 2023
            </h5>
            <h5 className="text-xs">
              Projetos:{' '}
              <Link
                className="underline"
                href="https://joaojardim.dev/pt#robbin"
                target="_blank"
              >
                Robbin
              </Link>
            </h5>
            <p className="mt-1 text-xs">
              Atuei como desenvolvedor front-end no estúdio No Match, focado no
              desenvolvimento de landing pages criativas de alta conversão com
              foco no uso de técnicas avançadas de estilização interativas. As
              principais ferramentas utilizadas foram Astro, React, Tailwind e
              Javascript.
            </p>
          </li>
          <li>
            <h4 className="text-sm font-semibold">Allnftlab</h4>
            <h5 className="text-xs">
              Desenvolvedor Front-End | Março 2023 - Agosto 2023
            </h5>
            <h5 className="text-xs">
              Projetos:{' '}
              <Link
                className="underline"
                href="https://joaojardim.dev/pt#zico"
                target="_blank"
              >
                Zico: The Legacy Collection
              </Link>
              ,{' '}
              <Link
                className="underline"
                href="https://joaojardim.dev/pt#museu-flamengo"
                target="_blank"
              >
                Museu Flamengo
              </Link>
            </h5>
            <p className="mt-1 text-xs">
              Ocupei o cargo de desenvolvedor front-end na Allnftlab,
              laboratório criativo de tecnologias em blockchain localizado no
              Rio de Janeiro. Minhas principais responsabilidades eram
              desenvolver lading pages e processos de checkout utilizando
              tecnologias como Next.js, Typescript e Tailwind, o que envolvia
              consumo de APIs e integração com o backend e rede blockchain.
            </p>
          </li>
          <li>
            <h4 className="text-sm font-semibold">Freelancer</h4>
            <h5 className="text-xs">Outubro 2022 - Atualmente</h5>
            <h5 className="text-xs">
              Projetos:{' '}
              <Link
                className="underline"
                href="https://joaojardim.dev/pt#kizomba"
                target="_blank"
              >
                Kizomba dos Saberes
              </Link>
            </h5>
            <p className="mt-1 text-xs">
              Desde outubro de 2022, venho atuando como freelancer na área de
              desenvolvimento web, com foco principal em tecnologias como
              Typescript, Next.js e Tailwind. Durante esse período, tive a
              oportunidade de colaborar com diversos clientes, traduzindo suas
              visões em soluções práticas e eficazes.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold uppercase">Habilidades e Ferramentas</h3>
        <p className="text-xs">
          React, Next, Javascript, Typescript, PL/SQL, Banco de Dados Relacional
          e Não Relacional, Python, Tailwind, Stitches, Styled-Components,
          Astro, Git / Github, Figma, Inglês, Métodos Ágeis, Scrum.
        </p>
      </div>
      <div>
        <h3 className="font-semibold uppercase">Educação</h3>
        <ul className="flex gap-2 text-xs">
          <li className="w-full">
            <h4 className="font-semibold">Sistemas de Informação | UNESA</h4>
            <h4>2022 - Atualmente</h4>
          </li>
          <li className="w-full">
            <h4 className="font-semibold">Ensino Médio | Escola Parque</h4>
            <h4>2012 - 2014</h4>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Resume
