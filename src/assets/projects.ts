import ZicoDesktop from '@/assets/zico-desktop.png'
import ZicoMobile from '@/assets/zico-mobile.png'
import MuseuFlamengoDesktop from '@/assets/museuflamengo-desktop.png'
import MuseuFlamengoMobile from '@/assets/museuflamengo-mobile.png'
import RobbinDesktop from '@/assets/robbin-desktop.png'
import RobbinMobile from '@/assets/robbin-mobile.png'
import KizombaDesktop from '@/assets/kizomba-desktop.png'
import PortfolioDesktop from '@/assets/portfolio-desktop.png'

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
  images: { desktop: object; mobile: object }
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
          desktop: ZicoDesktop,
          mobile: ZicoMobile,
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
          desktop: MuseuFlamengoDesktop,
          mobile: MuseuFlamengoMobile,
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
          desktop: RobbinDesktop,
          mobile: RobbinMobile,
        },
      },
      //   {
      //     title: 'Kids of Eden',
      //     description:
      //       'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
      //     websiteTitle: 'kidsofeden.earth',
      //     websiteLink: 'https://kidsofeden.earth/',
      //     tags: ['Shopify', 'Liquid', 'Tailwind', 'React'],
      //     tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
      //   },
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
        tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
        tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
        images: {
          desktop: KizombaDesktop,
          mobile: RobbinMobile,
        },
      },
      //   {
      //     title: 'Vegan Checker',
      //     description:
      //       'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
      //     githubTitle: '/jvfontouraj/nome-projeto',
      //     githubLink: 'https://github.com/jvfontouraj/nome-projeto',
      //     websiteTitle: 'site-do-projeto.com',
      //     websiteLink: 'https://site-do-projeto.com',
      //     figmaTitle: 'protótipo do projeto',
      //     figmaLink: 'https://site-do-projeto.com',
      //     tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
      //     tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
      //   },
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
          desktop: ZicoDesktop,
          mobile: ZicoMobile,
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
          desktop: MuseuFlamengoDesktop,
          mobile: MuseuFlamengoMobile,
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
          desktop: RobbinDesktop,
          mobile: RobbinMobile,
        },
      },
      //   {
      //     title: 'Kids of Eden',
      //     description:
      //       'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
      //     websiteTitle: 'kidsofeden.earth',
      //     websiteLink: 'https://kidsofeden.earth/',
      //     tags: ['Shopify', 'Liquid', 'Tailwind', 'React'],
      //     tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
      //   },
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
        tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
        tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
        images: {
          desktop: KizombaDesktop,
          mobile: RobbinMobile,
        },
      },

      //   {
      //     title: 'Vegan Checker',
      //     description:
      //       'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
      //     githubTitle: '/jvfontouraj/nome-projeto',
      //     githubLink: 'https://github.com/jvfontouraj/nome-projeto',
      //     websiteTitle: 'site-do-projeto.com',
      //     websiteLink: 'https://site-do-projeto.com',
      //     figmaTitle: 'protótipo do projeto',
      //     figmaLink: 'https://site-do-projeto.com',
      //     tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
      //     tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
      //   },
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
    tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
    tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
    images: {
      desktop: PortfolioDesktop,
      mobile: PortfolioDesktop,
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
    tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
    tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
    images: {
      desktop: PortfolioDesktop,
      mobile: PortfolioDesktop,
    },
  },
}
