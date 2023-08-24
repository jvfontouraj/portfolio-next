import { i18n } from '@/assets/i18n'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export function Contact({ lang }: { lang: string }) {
  const contact = i18n[lang].contact
  const content = contact.content

  return (
    <section
      id="contact"
      className="mx-auto flex h-auto w-full flex-col items-center justify-center gap-10 md:max-w-[75rem]"
    >
      <h2 className="text-center text-4xl">{contact.title}</h2>
      <form className="mx-auto flex w-full max-w-[830px] flex-col justify-center gap-5">
        <div className="flex w-full flex-col gap-3 md:flex-row">
          <div className="flex w-full flex-col">
            <h3>{content.name}</h3>
            <input
              type="text"
              placeholder={content.namePlaceholder}
              className="h-12 rounded-[4px] bg-neutral-300 p-3 placeholder-neutral-500 dark:bg-neutral-700"
            />
          </div>
          <div className="flex w-full flex-col">
            <h3>{content.email}</h3>
            <input
              type="text"
              placeholder={content.emailPlaceholder}
              className="h-12 rounded-[4px] bg-neutral-300 p-3 placeholder-neutral-500 dark:bg-neutral-700"
            />
          </div>
        </div>
        <div className="flex w-full flex-col">
          <h3>{content.message}</h3>
          <textarea
            placeholder={content.messagePlaceholder}
            className="h-40 resize-none rounded-[4px] bg-neutral-300 p-3 placeholder-neutral-500 dark:bg-neutral-700"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <Link
              href="https://www.linkedin.com/in/joaovfjardim/"
              target="_blank"
            >
              <LinkedInLogoIcon className="h-8 w-8" />
            </Link>
            <Link href="https://github.com/jvfontouraj" target="_blank">
              <GitHubLogoIcon className="h-8 w-8" />
            </Link>
          </div>
          <button
            type="submit"
            className="rounded-[10px] border border-neutral-600 bg-white px-6 py-3 text-neutral-800 shadow-[0px_4px_4px_0px_#0000007f] dark:bg-neutral-800 dark:text-neutral-50"
          >
            {content.send}
          </button>
        </div>
      </form>
    </section>
  )
}
