interface ProjectProps {
  title: string
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
        description:
          'Participei da criação desse grande projeto construindo o front-end, utilizando diferentes APIs e bibliotecas para que aplicação dialogasse com o backend e rede blockchain. Junto do time da Allnft{lab}, criamos um aplicação completa que tinha como objetivo a venda de tokens exclusivos do Zico, para isso criamos uma lading page com as informações do projeto e um processo de chekout seguro e intuitivo para o usuário.',
        websiteTitle: 'zicolegacy.com',
        websiteLink: 'https://www.zicolegacy.com/',
        tags: ['Next', 'React', 'Typescript', 'Tailwind'],
        tools: 'Next-Auth, i18n, Radix-ui, React Hook Form, Axios, Zod',
        images: {
          desktop: '/images/zico-desktop.png',
          mobile: '/images/zico-mobile.png',
        },
      },
      {
        title: 'Museu Flamengo: NFT Pass',
        description:
          'Esse também foi um grande projeto feito pelo time da Allnft{lab} que atuei como desenvolvedor front-end integrado ao backend e rede blockchain, construímos uma lading page e sistema completo de checkout transparente e intuitivo. O intuito para essa aplicação era criar uma página informativa sobre a reinauguração do Museu do Flamengo e sua campanha de venda de tokens exclusivos para celebração desse momento. ',
        websiteTitle: 'nft.museuflamengo.com',
        websiteLink: 'https://nft.museuflamengo.com/',
        tags: ['Next', 'React', 'Typescript', 'Tailwind'],
        tools: 'Next-Auth, i18n, Radix-ui, React Hook Form, Axios, Zod',
        images: {
          desktop: '/images/museuflamengo-desktop.png',
          mobile: '/images/museuflamengo-mobile.png',
        },
      },
      {
        title: 'Robbin',
        description:
          'O projeto Robbin, idealizado pela No Match Studio, envolveu a elaboração de uma landing page e das páginas institucional, suporte e blog da empresa, contribuí no desenvolvimento do código das páginas e no processo de criação de elementos no Figma. Nosso foco principal foi construir um site que refletisse a essência da empresa, fazendo uso de cores vibrantes e animações criativas para capturar a atenção dos usuários e guiá-los pelo conteúdo de forma cativante.',
        websiteTitle: 'robbin.com.br',
        websiteLink: 'https://robbin.com.br',
        tags: ['Astro', 'React', 'Typescript', 'Tailwind'],
        tools: 'Figma, Radix-ui, React Hook Form, Zod',
        images: {
          desktop: '/images/robbin-desktop.png',
          mobile: '/images/robbin-mobile.png',
        },
      },
      {
        title: 'Kizomba dos Saberes',
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
          desktop: '/images/kizomba-desktop.png',
          mobile: '/images/kizomba-desktop.png',
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
        description:
          'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
        websiteTitle: 'zicolegacy.com',
        websiteLink: 'https://www.zicolegacy.com/',
        tags: ['Typescript', 'Tailwind', 'Next', 'React'],
        tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
        images: {
          desktop: '/images/zico-desktop.png',
          mobile: '/images/zico-mobile.png',
        },
      },
      {
        title: 'Museu Flamengo: NFT Pass',
        description:
          'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
        websiteTitle: 'nft.museuflamengo.com',
        websiteLink: 'https://nft.museuflamengo.com/',
        tags: ['Typescript', 'Tailwind', 'Next', 'React'],
        tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
        images: {
          desktop: '/images/museuflamengo-desktop.png',
          mobile: '/images/museuflamengo-mobile.png',
        },
      },
      {
        title: 'Robbin',
        description:
          'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
        websiteTitle: 'robbin.com.br',
        websiteLink: 'https://robbin.com.br',
        tags: ['Typescript', 'Tailwind', 'Astro', 'React'],
        tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
        images: {
          desktop: '/images/robbin-desktop.png',
          mobile: '/images/robbin-mobile.png',
        },
      },
      {
        title: 'Kizomba dos Saberes',
        description:
          'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
        githubTitle: '/jvfontouraj/kizomba-dos-saberes',
        githubLink: 'https://github.com/jvfontouraj/kizomba-dos-saberes',
        websiteTitle: 'kizombadossaberes.com.br',
        websiteLink: 'https://kizombadossaberes.com.br',
        figmaTitle: 'protótipo do projeto',
        figmaLink: 'https://site-do-projeto.com',
        tags: ['Typescript', 'Tailwind', 'Next', 'React'],
        tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
        images: {
          desktop: '/images/kizomba-desktop.png',
          mobile: '/images/kizomba-desktop.png',
        },
      },
    ],
  },
}

export const portfolio: PortfolioProps = {
  pt: {
    title: 'Portfólio (esse aqui!)',
    description:
      'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
    githubTitle: '/jvfontouraj/portfolio-next',
    githubLink: 'https://github.com/jvfontouraj/portfolio-next',
    websiteTitle: 'joaojardim.dev',
    websiteLink: 'https://joaojardim.dev',
    figmaTitle: 'Protótipo do projeto',
    figmaLink:
      'https://www.figma.com/file/DmykHLRUptXr6qlknhMCbQ/Portf%C3%B3lio?type=design&node-id=243-1028&mode=design&t=dJjbhsbx1zWG9Nxr-0',
    tags: ['Typescript', 'Tailwind', 'Next', 'React'],
    tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
    images: {
      desktop: '/images/portfolio-desktop.png',
      mobile: '/images/portfolio-desktop.png',
    },
  },

  en: {
    title: 'Portfolio (this one!)',
    description:
      'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
    githubTitle: '/jvfontouraj/portfolio-next',
    githubLink: 'https://github.com/jvfontouraj/portfolio-next',
    websiteTitle: 'joaojardim.dev',
    websiteLink: 'https://joaojardim.dev',
    figmaTitle: 'Protótipo do projeto',
    figmaLink:
      'https://www.figma.com/file/DmykHLRUptXr6qlknhMCbQ/Portf%C3%B3lio?type=design&node-id=243-1028&mode=design&t=dJjbhsbx1zWG9Nxr-0',
    tags: ['Typescript', 'Tailwind', 'Next', 'React'],
    tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
    images: {
      desktop: '/images/portfolio-desktop.png',
      mobile: '/images/portfolio-desktop.png',
    },
  },
}
