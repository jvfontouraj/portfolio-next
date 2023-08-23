interface ContactProps {
  title: string
  content: {
    name: string
    namePlaceholder: string
    email: string
    emailPlaceholder: string
    message: string
    messagePlaceholder: string
    send: string
  }
}

interface EducationContentProps {
  title: string
  institution: string
  date: string
}

interface EducationProps {
  title: string
  content: EducationContentProps[]
}

interface JobsProps {
  title: string
  role?: string
  date: string
  description: string
}

interface ExperienceProps {
  title: string
  content: JobsProps[]
}

interface SkillsProps {
  title: string
  content: string[]
}

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
}

interface ProjectsProps {
  title: string
  toolsTitle: string
  content: ProjectProps[]
}

interface HeroProps {
  subtitle: string
  text: string
  cta1: string
  cta2: string
  imgAlt: string
}

interface NavProps {
  title: string
  id: string
}

interface I18nProps {
  [key: string]: {
    nav: NavProps[]
    hero: HeroProps
    projects: ProjectsProps
    skills: SkillsProps
    experience: ExperienceProps
    education: EducationProps
    contact: ContactProps
  }
}

export const i18n: I18nProps = {
  pt: {
    nav: [
      { title: 'projetos', id: 'projects' },
      { title: 'habilidades', id: 'skills' },
      { title: 'experiência', id: 'experience' },
      { title: 'formação', id: 'education' },
      { title: 'contato', id: 'contact' },
    ],
    hero: {
      subtitle: 'Desenvolvedor Front-End',
      text: 'Texto sobre mim, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
      cta1: 'Currículo.pdf',
      cta2: 'Vamos conversar?',
      imgAlt: 'Foto de perfil',
    },
    projects: {
      title: 'Projetos',
      toolsTitle: 'Principais ferramentas',
      content: [
        {
          title: 'Nome do Projeto 1',
          description:
            'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
          githubTitle: '/jvfontouraj/nome-projeto',
          githubLink: 'https://github.com/jvfontouraj/nome-projeto',
          websiteTitle: 'site-do-projeto.com',
          websiteLink: 'https://site-do-projeto.com',
          figmaTitle: 'protótipo do projeto',
          figmaLink: 'https://site-do-projeto.com',
          tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
          tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
        },
        {
          title: 'Nome do Projeto 1',
          description:
            'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
          githubTitle: '/jvfontouraj/nome-projeto',
          githubLink: 'https://github.com/jvfontouraj/nome-projeto',
          websiteTitle: 'site-do-projeto.com',
          websiteLink: 'https://site-do-projeto.com',
          figmaTitle: 'protótipo do projeto',
          figmaLink: 'https://site-do-projeto.com',
          tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
          tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
        },
        {
          title: 'Nome do Projeto 1',
          description:
            'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
          githubTitle: '/jvfontouraj/nome-projeto',
          githubLink: 'https://github.com/jvfontouraj/nome-projeto',
          websiteTitle: 'site-do-projeto.com',
          websiteLink: 'https://site-do-projeto.com',
          figmaTitle: 'protótipo do projeto',
          figmaLink: 'https://site-do-projeto.com',
          tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
          tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
        },
      ],
    },
    skills: {
      title: 'Habilidades e Ferramentas',
      content: [
        'Typescript',
        'Javascript',
        'React',
        'Next.js',
        'Tailwind',
        'Styled-Components',
        'CSS',
        'HTML',
        'Figma',
        'Git',
        'Node.js',
        'Express',
        'MongoDB',
        'MySQL',
        'PostgreSQL',
        'Docker',
      ],
    },
    experience: {
      title: 'Experiência',
      content: [
        {
          title: 'Allnft{lab}',
          role: 'Desenvolvedor Front-End',
          date: 'Mar 2023 - Ago 2023',
          description:
            'Descrição da experiência, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
        },
        {
          title: 'Freelancer',
          date: 'Out 2022 - Atualmente',
          description:
            'Descrição da experiência, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
        },
      ],
    },
    education: {
      title: 'Formação Acadêmica',
      content: [
        {
          title: 'Sistemas de Informação',
          institution: 'UNESA',
          date: 'Out 2022 - Atualmente',
        },
        {
          title: 'Ensino Médio',
          institution: 'Escola Parque',
          date: '2012-2014',
        },
      ],
    },
    contact: {
      title: 'Vamos conversar?',
      content: {
        name: 'Nome',
        namePlaceholder: 'João das Neves',
        email: 'Email',
        emailPlaceholder: 'exemplo@email.com',
        message: 'Mensagem',
        messagePlaceholder: 'Escreva aqui sua mensagem...',
        send: 'Enviar',
      },
    },
  },
  en: {
    nav: [
      { title: 'projects', id: 'projects' },
      { title: 'skills', id: 'skills' },
      { title: 'experience', id: 'experience' },
      { title: 'education', id: 'education' },
      { title: 'contact', id: 'contact' },
    ],
    hero: {
      subtitle: 'Front-End Developer',
      text: 'Texto sobre mim, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
      cta1: 'Resume.pdf',
      cta2: "Let's talk?",
      imgAlt: 'Profile picture',
    },
    projects: {
      title: 'Projects',
      toolsTitle: 'Main tools',
      content: [
        {
          title: 'Nome do Projeto 1',
          description:
            'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
          githubTitle: '/jvfontouraj/nome-projeto',
          githubLink: 'https://github.com/jvfontouraj/nome-projeto',
          websiteTitle: 'site-do-projeto.com',
          websiteLink: 'https://site-do-projeto.com',
          figmaTitle: 'protótipo do projeto',
          figmaLink: 'https://site-do-projeto.com',
          tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
          tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
        },
        {
          title: 'Nome do Projeto 1',
          description:
            'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
          githubTitle: '/jvfontouraj/nome-projeto',
          githubLink: 'https://github.com/jvfontouraj/nome-projeto',
          websiteTitle: 'site-do-projeto.com',
          websiteLink: 'https://site-do-projeto.com',
          figmaTitle: 'protótipo do projeto',
          figmaLink: 'https://site-do-projeto.com',
          tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
          tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
        },
        {
          title: 'Nome do Projeto 1',
          description:
            'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
          githubTitle: '/jvfontouraj/nome-projeto',
          githubLink: 'https://github.com/jvfontouraj/nome-projeto',
          websiteTitle: 'site-do-projeto.com',
          websiteLink: 'https://site-do-projeto.com',
          figmaTitle: 'protótipo do projeto',
          figmaLink: 'https://site-do-projeto.com',
          tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
          tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
        },
      ],
    },
    skills: {
      title: 'Skills and Tools',
      content: [
        'Typescript',
        'Javascript',
        'React',
        'Next.js',
        'Tailwind',
        'Styled-Components',
        'CSS',
        'HTML',
        'Figma',
        'Git',
        'Node.js',
        'Express',
        'MongoDB',
        'MySQL',
        'PostgreSQL',
        'Docker',
      ],
    },
    experience: {
      title: 'Experience',
      content: [
        {
          title: 'Allnft{lab}',
          role: 'Front-End Developer',
          date: 'Mar 2023 - Ago 2023',
          description:
            'Descrição da experiência, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
        },
        {
          title: 'Freelancer',
          date: 'Out 2022 - Currently',
          description:
            'Descrição da experiência, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
        },
      ],
    },
    education: {
      title: 'Education',
      content: [
        {
          title: 'Graduation - Information Systems',
          institution: 'UNESA',
          date: 'Out 2022 - Currently',
        },
        {
          title: 'High School',
          institution: 'Escola Parque',
          date: '2012-2014',
        },
      ],
    },
    contact: {
      title: "Let's talk?",
      content: {
        name: 'Name',
        namePlaceholder: 'John Snow',
        email: 'Email',
        emailPlaceholder: 'example@email.com',
        message: 'Message',
        messagePlaceholder: 'Write your message here...',
        send: 'Send',
      },
    },
  },
}
