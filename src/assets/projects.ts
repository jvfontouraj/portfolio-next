interface ProjectProps {
  title: string
  id: string
  media?: object
  description: string
  githubTitle?: string
  githubLink?: string
  websiteTitle?: string
  websiteLink?: string
  figmaTitle?: string
  figmaLink?: string
  tags: string[]
  tools: string
  images: { desktop: string; mobile: string }
}

interface ProjectsProps {
  [key: string]: {
    title: string
    toolsTitle: string
    content: ProjectProps[]
  }
}

interface PortfolioProps {
  [key: string]: ProjectProps
}

export const projects: ProjectsProps = {
  pt: {
    title: 'Projetos',
    toolsTitle: 'Principais ferramentas',
    content: [
      {
        title: 'Zico: The Legacy Collection',
        id: 'zico',
        description:
          'Participei da criação desse projeto construindo o front-end, utilizando diferentes APIs e bibliotecas para que a aplicação dialogasse com o backend e rede blockchain. Junto do time da Allnft{lab}, criamos um aplicação completa que tinha como objetivo a venda de tokens exclusivos do Zico, para isso criamos uma lading page com as informações do projeto e um processo de chekout seguro e intuitivo para o usuário.',
        websiteTitle: 'zicolegacy.com',
        websiteLink: 'https://www.zicolegacy.com/',
        tags: ['Next', 'React', 'Typescript', 'Tailwind'],
        tools: 'Next-Auth, i18n, Radix-ui, React Hook Form, Axios, Zod',
        images: {
          desktop: '/images/zico-desktop-comp.webp',
          mobile: '/images/zico-mobile-comp.webp',
        },
      },
      {
        title: 'Museu Flamengo: NFT Pass',
        id: 'museu-flamengo',
        description:
          'Esse também foi um projeto feito pelo time da Allnft{lab} que atuei como desenvolvedor front-end, integrado ao backend e rede blockchain, construímos uma lading page e sistema completo de checkout transparente e intuitivo. O intuito para essa aplicação era criar uma página informativa sobre a reinauguração do Museu do Flamengo e sua campanha de venda de tokens exclusivos para celebração desse momento. ',
        websiteTitle: 'nft.museuflamengo.com',
        websiteLink: 'https://nft.museuflamengo.com/',
        tags: ['Next', 'React', 'Typescript', 'Tailwind'],
        tools: 'Next-Auth, i18n, Radix-ui, React Hook Form, Axios, Zod',
        images: {
          desktop: '/images/museuflamengo-desktop-comp.webp',
          mobile: '/images/museuflamengo-mobile-comp.webp',
        },
      },
      {
        title: 'Robbin',
        id: 'robbin',
        description:
          'O projeto Robbin, idealizado pela No Match Studio, envolveu a elaboração de uma landing page e das páginas institucional, suporte e blog da empresa, contribuí no desenvolvimento do código das páginas e no processo de criação de elementos no Figma. Nosso foco principal foi construir um site que refletisse a essência da empresa, fazendo uso de cores vibrantes e animações criativas para capturar a atenção dos usuários e guiá-los pelo conteúdo de forma cativante.',
        websiteTitle: 'robbin.com.br',
        websiteLink: 'https://robbin.com.br',
        tags: ['Astro', 'React', 'Typescript', 'Tailwind'],
        tools: 'Figma, Radix-ui, React Hook Form, Zod',
        images: {
          desktop: '/images/robbin-desktop1-comp.webp',
          mobile: '/images/robbin-mobile-comp.webp',
        },
      },
      {
        title: 'Kizomba dos Saberes',
        id: 'kizomba',
        description:
          'O Kizomba é um projeto feito em parceria com o designer Guilherme Moura para um projeto de pesquisa da Universidade Federal de Sergipe, que tem como objetivo catalogar manifestações culturais regionais e disponibilizar materiais didáticos sobre o tema para professores e alunos. Além disso, utilizamos ilustrações do artista Edwan e elementos de suas obras na composição do site.',
        githubTitle: '/jvfontouraj/kizomba-dos-saberes',
        githubLink: 'https://github.com/jvfontouraj/kizomba-dos-saberes',
        websiteTitle: 'kizombadossaberes.com.br',
        websiteLink: 'https://kizomba-dos-saberes.vercel.app/',
        // figmaTitle: 'protótipo do projeto',
        // figmaLink: 'https://site-do-projeto.com',
        tags: ['Next', 'React', 'Typescript', 'Tailwind'],
        tools: 'Radix-ui',
        images: {
          desktop: '/images/kizomba-desktop-comp.webp',
          mobile: '/images/kizomba-desktop-comp.webp',
        },
      },
      {
        title: 'Vegano Check BR (em desenvolvimento)',
        id: 'vegano',
        description:
          'Projeto fullstack autoral que tem como objetivo auxiliar veganos brasileiros a consultarem se certos ingredientes são de origem animal ou vegetal. O frontend foi feito com React e o backend com NestJs, integrando banco de dados para sistema de login e API com dados dos ingredientes.',
        githubTitle: '/jvfontouraj/vegano-check-frontend',
        githubLink: 'https://github.com/jvfontouraj/vegano-check-frontend',
        websiteTitle: 'vegano-check',
        websiteLink: 'https://vegano-check.vercel.app',
        tags: ['React', 'Nest', 'Node', 'Typescript'],
        tools: 'MongoDB, Zod, React Hook Form, Axios',
        images: {
          desktop: '/images/vegano-check(1).webp',
          mobile: '',
        },
      },
    ],
  },
  en: {
    title: 'Projects',
    toolsTitle: 'Main tools',
    content: [
      {
        title: 'Zico: The Legacy Collection',
        id: 'zico',
        description:
          'I participated in the creation of this significant project by building the frontend, utilizing various APIs and libraries to enable communication between the application, backend, and blockchain network. Alongside the Allnft{lab} team, we developed a complete application with the goal of selling exclusive Zico tokens. For this purpose, we created a landing page with project information and a secure, user-friendly checkout process.',
        websiteTitle: 'zicolegacy.com',
        websiteLink: 'https://www.zicolegacy.com/',
        tags: ['Next', 'React', 'Typescript', 'Tailwind'],
        tools: 'Next-Auth, i18n, Radix-ui, React Hook Form, Axios, Zod',
        images: {
          desktop: '/images/zico-desktop-comp.webp',
          mobile: '/images/zico-mobile-comp.webp',
        },
      },
      {
        title: 'Museu Flamengo: NFT Pass',
        id: 'museu-flamengo',
        description:
          'This was also a major project undertaken by the Allnft{lab} team, where I worked as a frontend developer integrated with the backend and blockchain network. We built a landing page and a comprehensive, transparent, and intuitive checkout system. The aim of this application was to provide information about the reopening of the Museu do Flamengo and its campaign for the sale of exclusive tokens to celebrate this moment.',
        websiteTitle: 'nft.museuflamengo.com',
        websiteLink: 'https://nft.museuflamengo.com/',
        tags: ['Next', 'React', 'Typescript', 'Tailwind'],
        tools: 'Next-Auth, i18n, Radix-ui, React Hook Form, Axios, Zod',
        images: {
          desktop: '/images/museuflamengo-desktop-comp.webp',
          mobile: '/images/museuflamengo-mobile-comp.webp',
        },
      },
      {
        title: 'Robbin',
        id: 'robbin',
        description:
          "The Robbin project, conceived by No Match Studio, involved the creation of a landing page, an institutional page, and a section dedicated to the company's blog. I contributed to the development of the page's code and the creation of elements in Figma. Our primary focus was to build a website that reflected the company's essence, using vibrant colors and creative animations to capture users' attention and guide them through the content captivatingly.",
        websiteTitle: 'robbin.com.br',
        websiteLink: 'https://robbin.com.br',
        tags: ['Astro', 'React', 'Typescript', 'Tailwind'],
        tools: 'Figma, Radix-ui, React Hook Form, Zod',
        images: {
          desktop: '/images/robbin-desktop1-comp.webp',
          mobile: '/images/robbin-mobile-comp.webp',
        },
      },
      {
        title: 'Kizomba dos Saberes',
        id: 'kizomba',
        description:
          "Kizomba is a project done in partnership with designer Guilherme Moura for a research project at the Federal University of Sergipe. Its objective is to catalog regional cultural manifestations and provide educational materials on the subject for teachers and students. Additionally, we incorporated illustrations from artist Edwan and elements from his works into the website's composition.",
        githubTitle: '/jvfontouraj/kizomba-dos-saberes',
        githubLink: 'https://github.com/jvfontouraj/kizomba-dos-saberes',
        websiteTitle: 'kizombadossaberes.com.br',
        websiteLink: 'https://kizombadossaberes.com.br',
        tags: ['Next', 'React', 'Typescript', 'Tailwind'],
        tools: 'Radix-ui',
        images: {
          desktop: '/images/kizomba-desktop-comp.webp',
          mobile: '/images/kizomba-desktop-comp.webp',
        },
      },
      {
        title: 'Vegano Check BR (under development)',
        id: 'vegano',
        description:
          'Authorial full-stack project designed to assist Brazilian vegans in checking whether certain ingredients are of animal or plant origin. The frontend was developed using React, and the backend using NestJs, integrating a database for the login system and an API with ingredient data.',
        githubTitle: '/jvfontouraj/vegano-check-frontend',
        githubLink: 'https://github.com/jvfontouraj/vegano-check-frontend',
        websiteTitle: 'vegano-check',
        websiteLink: 'https://vegano-check.vercel.app',
        tags: ['React', 'Nest', 'Node', 'Typescript'],
        tools: 'MongoDB, Zod, React Hook Form, Axios',
        images: {
          desktop: '/images/vegano-check(1).webp',
          mobile: '',
        },
      },
    ],
  },
}

export const portfolio: PortfolioProps = {
  pt: {
    title: 'Portfólio (esse aqui!)',
    id: 'portfolio',
    description:
      'Meu objetivo com esse projeto é conseguir expor minha experiência e habilidades de maneira simples e objetiva, dando foco ao conteúdo. O primeiro passo foi dispor minhas ideias de protótipo no Figma e testar diversas formas de chegar no resultado que queria, em seguida, transformei o protótipo em código, utilizando diversas ferramentas.',
    githubTitle: '/jvfontouraj/portfolio-next',
    githubLink: 'https://github.com/jvfontouraj/portfolio-next',
    websiteTitle: 'joaojardim.dev',
    websiteLink: 'https://joaojardim.dev',
    figmaTitle: 'Protótipo do projeto',
    figmaLink:
      'https://www.figma.com/file/DmykHLRUptXr6qlknhMCbQ/Portf%C3%B3lio?type=design&node-id=243-1028&mode=design&t=dJjbhsbx1zWG9Nxr-0',
    tags: ['Next', 'React', 'Typescript', 'Tailwind'],
    tools: 'i18n, Resend, React Hook Form, Axios, Zod, Figma',
    images: {
      desktop: '/images/portfolio-desktop-comp.webp',
      mobile: '/images/portfolio-desktop-comp.webp',
    },
  },

  en: {
    title: 'Portfolio (this one!)',
    id: 'portfolio',
    description:
      'My goal with this project was to showcase my experience and skills in a simple and straightforward manner, placing emphasis on content while exploring styling in the details. The first step was to lay out my prototype ideas in Figma and experiment with various approaches to achieve the desired outcome. Next, I translated the prototype into code, utilizing various tools.',
    githubTitle: '/jvfontouraj/portfolio-next',
    githubLink: 'https://github.com/jvfontouraj/portfolio-next',
    websiteTitle: 'joaojardim.dev',
    websiteLink: 'https://joaojardim.dev',
    figmaTitle: 'Protótipo do projeto',
    figmaLink:
      'https://www.figma.com/file/DmykHLRUptXr6qlknhMCbQ/Portf%C3%B3lio?type=design&node-id=243-1028&mode=design&t=dJjbhsbx1zWG9Nxr-0',
    tags: ['Next', 'React', 'Typescript', 'Tailwind'],
    tools: 'i18n, Resend, React Hook Form, Axios, Zod, Figma',
    images: {
      desktop: '/images/portfolio-desktop-comp.webp',
      mobile: '/images/portfolio-desktop-comp.webp',
    },
  },
}
