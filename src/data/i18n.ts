interface HeroProps {
  subtitle: string
  text: string
  cta1: string
  cta2: string
  imgAlt: string
}

interface NavProps {
  headings: string[]
  linkedin: string
  github: string
}

interface I18nProps {
  [key: string]: {
    nav: NavProps
    hero: HeroProps
  }
}

export const i18n: I18nProps = {
  pt: {
    nav: {
      headings: [
        'projetos',
        'habilidades',
        'experiência',
        'formação',
        'contato',
      ],
      linkedin: 'https://www.linkedin.com/in/joaovfjardim/',
      github: 'https://github.com/jvfontouraj',
    },
    hero: {
      subtitle: 'Desenvolvedor Front-End',
      text: 'Texto sobre mim, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
      cta1: 'Currículo.pdf',
      cta2: 'Vamos conversar?',
      imgAlt: 'Foto de perfil',
    },
  },
  en: {
    nav: {
      headings: ['projects', 'skills', 'experience', 'education', 'contact'],
      linkedin: 'https://www.linkedin.com/in/joaovfjardim/?locale=en_US',
      github: 'https://github.com/jvfontouraj',
    },
    hero: {
      subtitle: 'Front-End Developer',
      text: 'Texto sobre mim, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque interdum orci nec commodo. Mauris non lacus sem. Nullam volutpat purus nibh, ut cursus tellus eleifend quis. In et est felis. Vivamus lacinia dui ut consectetur hendrerit. Fusce ac mi sit amet dolor ultrices cursus. Nullam sapien velit, fringilla nec justo nec, ultricies porta arcu.',
      cta1: 'Resume.pdf',
      cta2: "Let's talk?",
      imgAlt: 'Profile picture',
    },
  },
}
