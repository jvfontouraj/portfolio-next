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
      <div className="flex w-full justify-around">
        <Link
          href={'https://github.com/jvfontouraj'}
          className="flex w-fit items-center gap-3 rounded-[10px] border border-white bg-neutral-800 px-6 py-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-white"
        >
          <GitHubLogoIcon className="h-9 w-9" />
          <div className="text-xl">/jvfontouraj</div>
        </Link>
        <Link
          target="_blank"
          href={
            'https://mail.google.com/mail/?view=cm&fs=1&to=jvfjardim@gmail.com&su=Contato%20atrav%C3%A9s%20do%20site%20&body=Ol%C3%A1%2C'
          }
          className="flex w-fit items-center gap-3 rounded-[10px] border border-white bg-neutral-800 px-6 py-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-white"
        >
          <EnvelopeClosedIcon className="h-9 w-9" />
          <div className="text-xl">jvfjardim@gmail.com</div>
        </Link>
        <Link
          href={'https://www.linkedin.com/in/joaovfjardim/'}
          className="flex w-fit items-center gap-3 rounded-[10px] border border-white bg-neutral-800 px-6 py-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)] transition-shadow duration-300 hover:shadow-white"
        >
          <LinkedInLogoIcon className="h-9 w-9" />
          <div className="text-xl">/joaovfjardim</div>
        </Link>
      </div>
    </section>
  )
}
