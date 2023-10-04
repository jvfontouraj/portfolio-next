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
          'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
        websiteTitle: 'zicolegacy.com',
        websiteLink: 'https://www.zicolegacy.com/',
        tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
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
        tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
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
        githubTitle: '/images/jvfontouraj/kizomba-dos-saberes',
        githubLink: 'https://github.com/jvfontouraj/kizomba-dos-saberes',
        websiteTitle: 'kizombadossaberes.com.br',
        websiteLink: 'https://kizombadossaberes.com.br',
        figmaTitle: 'protótipo do projeto',
        figmaLink: 'https://site-do-projeto.com',
        tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
        tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
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
        tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
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
        tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
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
        githubTitle: '/images/jvfontouraj/kizomba-dos-saberes',
        githubLink: 'https://github.com/jvfontouraj/kizomba-dos-saberes',
        websiteTitle: 'kizombadossaberes.com.br',
        websiteLink: 'https://kizombadossaberes.com.br',
        figmaTitle: 'protótipo do projeto',
        figmaLink: 'https://site-do-projeto.com',
        tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
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
    githubTitle: '/images/jvfontouraj/portfolio-next',
    githubLink: 'https://github.com/jvfontouraj/portfolio-next',
    websiteTitle: 'joaojardim.dev',
    websiteLink: 'https://joaojardim.dev',
    figmaTitle: 'Protótipo do projeto',
    figmaLink:
      'https://www.figma.com/file/DmykHLRUptXr6qlknhMCbQ/Portf%C3%B3lio?type=design&node-id=243-1028&mode=design&t=dJjbhsbx1zWG9Nxr-0',
    tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
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
    githubTitle: '/images/jvfontouraj/portfolio-next',
    githubLink: 'https://github.com/jvfontouraj/portfolio-next',
    websiteTitle: 'joaojardim.dev',
    websiteLink: 'https://joaojardim.dev',
    figmaTitle: 'Protótipo do projeto',
    figmaLink:
      'https://www.figma.com/file/DmykHLRUptXr6qlknhMCbQ/Portf%C3%B3lio?type=design&node-id=243-1028&mode=design&t=dJjbhsbx1zWG9Nxr-0',
    tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
    tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
    images: {
      desktop: '/images/portfolio-desktop.png',
      mobile: '/images/portfolio-desktop.png',
    },
  },
}
