import Link from 'next/link'
import React from 'react'

const Resume = () => {
  return (
    <div className="m-auto flex aspect-[0.70695553] h-screen flex-col justify-center gap-10 border p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold leading-none 2xl:text-xl">
          João Vitor Fontoura Jardim
        </h1>
        <h2 className="text-lg  leading-none">Desenvolvedor Front-End</h2>
      </div>
      <p className="text-xs">
        Sou um desenvolvedor front-end focado em criar aplicações para web,
        transformando ideias em projetos criativos e performáticos para que o
        usuário tenha a melhor experiência possível. Iniciei minha jornada na
        programação em 2020 por diversão até que em 2022 decidi fazer uma
        transição de carreira e me dedicar exclusivamente a trabalhar na área.
        Desde 2022 venho atuando como freelancer e na mesma época entrei para a
        graduação de Sistmas de Informação, em 2023 consegui minha primeira
        oportunidade profissional na Allnftlab e hoje atuo como desenvolvedor
        Front-End na No Match.
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
        <ul className="flex flex-col gap-2">
          <li>
            <h4 className="text-sm font-semibold">No Match</h4>
            <h5 className="text-xs">
              Desenvolvedor Front-End | Setembro 2023 - Atualmente
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
              Atualmente atuo como desenvolvedor front-end no estúdio No Match,
              focando no desenvolvimento de landing pages criativas de alta
              conversão com foco no uso de técnicas avançadas de estilização
              interativas. As principais ferramentas utilizadas são Astro,
              React, Tailwind e Javascript.
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
              No período de Março a Agosto de 2023, ocupei o cargo de
              desenvolvedor front-end na Allnftlab, laboratório criativo de
              tecnologias em blockchain localizado no Rio de Janeiro. Minhas
              principais responsabilidades eram desenvolver lading pages e
              processos de checkout utilizando tecnologias como Next.js,
              Typescript e Tailwind, o que envolvia consumo de APIs e integração
              com o backend e rede blockchain. Colaborei estreitamente com time
              de tecnologia e design, atuando em projetos inovadores focados na
              criatividade, segurança e conversão.
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
              visões em soluções práticas e eficazes. Minha jornada tem sido
              marcada por desafios técnicos estimulantes e um compromisso sólido
              em entregar resultados que superem as expectativas.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold uppercase">Habilidades e Ferramentas</h3>
        <p className="text-xs">
          React, Next, Javascript, Typescript, Tailwind, Stitches,
          Styled-Components, Astro, Git / Github, Figma, Inglês, Métodos Ágeis,
          Scrum.
        </p>
      </div>
      <div>
        <h3 className="font-semibold uppercase">Educação</h3>
        <ul className="flex flex-col gap-2 text-xs">
          <li>
            <h4 className="font-semibold">Sistemas de Informação | UNESA</h4>
            <h4>2022 - Atualmente</h4>
          </li>
          <li>
            <h4 className="font-semibold">Ensino Médio | Escola Parque</h4>
            <h4>2012 - 2014</h4>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Resume
