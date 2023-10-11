import { i18n } from '@/assets/i18n'
import Link from 'next/link'
import PerfilImg from '@/assets/perfil.jpg'
import Image from 'next/image'
import { DownloadIcon } from '@radix-ui/react-icons'
import { ScrollToSection } from '@/lib/scrollToSection'

export function Hero({ lang }: { lang: string }) {
  const content = i18n[lang].hero

  return (
    <section className="flex w-full flex-col-reverse gap-5 pb-[110px] md:h-[calc(100vh-260px)] md:flex-row md:gap-0">
      <div className="flex w-full items-center justify-center md:w-1/2">
        <div className="m-auto flex w-fit flex-col items-start justify-center gap-5 md:gap-20">
          <div className="hidden flex-col md:flex">
            <h1 className="text-5xl">João Jardim</h1>
            <h2 className="text-xl font-light">{content.subtitle}</h2>
          </div>
          <p className="text-center text-base md:max-w-[36ch] md:text-left md:text-lg">
            {content.text}
          </p>
          <div className="mx-auto flex flex-col items-center gap-5 md:mx-0 md:flex-row md:gap-10">
            <Link
              href="/Curriculo-Desenvolvedor-FrontEnd-Joao-Vitor-Fontoura-Jardim.pdf"
              target="_blank"
              download
              className="flex h-12 w-44 items-center justify-center gap-3 rounded-[10px] border border-neutral-800 bg-white text-base shadow-md transition-colors hover:bg-neutral-200 dark:border-white dark:bg-neutral-800 md:h-14 md:w-56 md:text-lg"
            >
              {content.cta1} <DownloadIcon width={20} height={20} />
            </Link>
            <button
              onClick={() => ScrollToSection('contact')}
              className="flex h-12 w-44 items-center justify-center gap-3 rounded-[10px] border border-neutral-400 bg-neutral-700 text-base text-white shadow-md transition-colors  hover:bg-neutral-800 dark:border-neutral-600 dark:bg-white dark:text-neutral-800 md:h-14 md:w-56 md:text-lg"
            >
              {content.cta2}
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center md:mx-0 md:w-1/2">
        <div className="m-auto aspect-square w-2/3 max-w-[240px] overflow-hidden rounded-full shadow-xl md:h-96 md:w-96 md:max-w-none">
          <Image
            src={PerfilImg}
            alt={content.imgAlt}
            className="h-auto w-full -translate-y-5"
          />
        </div>
      </div>
    </section>
  )
}
