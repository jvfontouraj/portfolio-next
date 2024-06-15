import { i18n } from '@/assets/i18n'
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

export function Contact({ lang }: { lang: string }) {
  const contact = i18n[lang].contact

  return (
    <section
      id="contact"
      className="mx-auto flex h-auto w-full flex-col items-center justify-center gap-10 md:max-w-[75rem]"
    >
      <h2 className="text-center text-3xl 2xl:text-4xl">{contact.title}</h2>
      <div className="flex w-full flex-col items-center justify-around gap-7 md:flex-row md:gap-0">
        <Link
          href={'https://www.linkedin.com/in/joaovfjardim/'}
          className="flex w-fit items-center gap-3 rounded-[10px] border border-neutral-500 px-6 py-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-white dark:border-white dark:bg-neutral-800"
        >
          <LinkedInLogoIcon className="h-5 w-5 md:h-9 md:w-9" />
          <div className="text-lg md:text-xl">/joaovfjardim</div>
        </Link>
        <Link
          target="_blank"
          href={
            'https://mail.google.com/mail/?view=cm&fs=1&to=jvfjardim@gmail.com&su=Contato%20atrav%C3%A9s%20do%20site%20&body=Ol%C3%A1%2C'
          }
          className="flex w-fit items-center gap-3 rounded-[10px] border border-neutral-500 px-6 py-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-white dark:border-white dark:bg-neutral-800"
        >
          <EnvelopeClosedIcon className="h-5 w-5 md:h-9 md:w-9" />
          <div className="text-lg md:text-xl">jvfjardim@gmail.com</div>
        </Link>

        <Link
          href={'https://github.com/jvfontouraj'}
          className="flex w-fit items-center gap-3 rounded-[10px] border border-neutral-500 px-6 py-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-white dark:border-white dark:bg-neutral-800"
        >
          <GitHubLogoIcon className="h-5 w-5 md:h-9 md:w-9" />
          <div className="text-lg md:text-xl">/jvfontouraj</div>
        </Link>
      </div>
    </section>
  )
}
