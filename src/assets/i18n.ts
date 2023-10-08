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
      text: 'Seja bem vindo(a) ao meu portfólio! Sou um desenvolvedor front-end focado em criar aplicações para web, transformando ideias em projetos criativos e performáticos para que o usuário tenha a melhor experiência possível.',
      cta1: 'Currículo.pdf',
      cta2: 'Vamos conversar?',
      imgAlt: 'Foto de perfil',
    },

    skills: {
      title: 'Habilidades e Ferramentas',
      content: [
        'HTML',
        'CSS',
        'Javascript',
        'Typescript',
        'React',
        'Next.js',
        'Astro',
        'Tailwind',
        'Stitches',
        'Styled-Components',
        'i18n',
        'Figma',
        'Git',
        'Github',
        'Zod',
        'React Hook-Form',
        'React Email',
        'Resend',
        'CVA',
        'Axios',
        'Scrum',
        'Metodologias Ágeis',
        'Inglês',
      ],
    },
    experience: {
      title: 'Experiência',
      content: [
        {
          title: 'No Match',
          role: 'Desenvolvedor Front-End',
          date: 'Set 2023 - Atualmente',
          description:
            'Atualmente atuo como desenvolvedor front-end no estúdio No Match, focando no desenvolvimento de landing pages criativas de alta conversão com foco no uso de técnicas avançadas de estilização interativas. As principais ferramentas utilizadas são Astro, React, Tailwind e Javascript.',
        },
        {
          title: 'Allnft{lab}',
          role: 'Desenvolvedor Front-End',
          date: 'Mar 2023 - Ago 2023',
          description:
            'No período de Março a Agosto de 2023, ocupei o cargo de desenvolvedor front-end na Allnft{lab}, laboratório criativo de tecnologias em blockchain localizado no Rio de Janeiro. Minhas principais responsabilidades eram desenvolver lading pages e processos de checkout utilizando tecnologias como Next.js, Typescript e Tailwind, o que envolvia consumo de APIs e integração com o backend e rede blockchain.  Colaborei estreitamente com time de tecnologia e design, atuando em projetos inovadores focados na criatividade, segurança e conversão.',
        },
        {
          title: 'Freelancer',
          date: 'Out 2022 - Atualmente',
          description:
            'Desde outubro de 2022, venho atuando como freelancer na área de desenvolvimento web, com foco principal em tecnologias como Typescript, Next.js e Tailwind. Durante esse período, tive a oportunidade de colaborar com diversos clientes, traduzindo suas visões em soluções práticas e eficazes. Minha jornada tem sido marcada por desafios técnicos estimulantes e um compromisso sólido em entregar resultados que superem as expectativas.',
        },
      ],
    },
    education: {
      title: 'Formação Acadêmica',
      content: [
        {
          title: 'Sistemas de Informação',
          institution: 'UNESA',
          date: '2022 - Atualmente',
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
      text: "Welcome to my portfolio! I'm a frontend developer focused on creating web applications, turning ideas into creative and high-performance projects to ensure the best possible user experience.",
      cta1: 'Resume.pdf',
      cta2: "Let's talk?",
      imgAlt: 'Profile picture',
    },

    skills: {
      title: 'Skills and Tools',
      content: [
        'HTML',
        'CSS',
        'Javascript',
        'Typescript',
        'React',
        'Next.js',
        'Astro',
        'Tailwind',
        'Stitches',
        'Styled-Components',
        'i18n',
        'Figma',
        'Git',
        'Github',
        'Zod',
        'React Hook-Form',
        'React Email',
        'Resend',
        'CVA',
        'Axios',
        'English',
      ],
    },
    experience: {
      title: 'Experience',
      content: [
        {
          title: 'No Match',
          role: 'Front-End Developer',
          date: 'Sep 2023 - Currently',
          description:
            'I currently work as a front-end developer at No Match Studio, focusing on the development of highly converting, creative landing pages with an emphasis on the use of advanced interactive styling techniques. The main tools used include Astro, React, Tailwind, and JavaScript. ',
        },
        {
          title: 'Allnft{lab}',
          role: 'Front-End Developer',
          date: 'Mar 2023 - Ago 2023',
          description:
            'From March to August 2023, I held the position of front-end developer at Allnft{lab}, a creative blockchain technology lab located in Rio de Janeiro. My primary responsibilities involved developing landing pages and checkout processes using technologies such as Next.js, React, and Tailwind, a process that required API consumption and integration with the backend and blockchain network. I worked closely with the technology and design teams, contributing to innovative projects focused on creativity, security, and conversion.',
        },
        {
          title: 'Freelancer',
          date: 'Oct 2022 - Currently',
          description:
            'Since October 2022, I have been working as a freelancer in the field of web development, with a primary focus on technologies such as TypeScript, Next.js, and Tailwind. During this period, I have had the opportunity to collaborate with various clients, translating their visions into practical and effective solutions. My journey has been marked by stimulating technical challenges and a strong commitment to delivering results that exceed expectations.',
        },
      ],
    },
    education: {
      title: 'Education',
      content: [
        {
          title: 'Information Systems',
          institution: 'UNESA',
          date: '2022 - Currently',
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

// {
//   title: 'Nome do Projeto 1',
//   description:
//     'Descrição do projeto, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
//   githubTitle: '/jvfontouraj/nome-projeto',
//   githubLink: 'https://github.com/jvfontouraj/nome-projeto',
//   websiteTitle: 'site-do-projeto.com',
//   websiteLink: 'https://site-do-projeto.com',
//   figmaTitle: 'protótipo do projeto',
//   figmaLink: 'https://site-do-projeto.com',
//   tags: ['Typescript', 'Tailwind', 'Next.js', 'React'],
//   tools: 'Next-Auth, i18n, Radix-ui, HookForm, Axios, Zod',
// },
