'use client'
import { i18n } from '@/data/i18n'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PerfilImg from '@/assets/perfil.jpg'
import Image from 'next/image'
import { DownloadIcon } from '@radix-ui/react-icons'

export function Hero() {
  const pathName = usePathname()
  const lang = pathName.slice(1)
  const content = i18n[lang].hero

  return (
    <section className="flex h-[calc(100vh-110px)] pb-[110px]">
      <div className="flex w-full items-center justify-center md:w-1/2">
        <div className="m-auto flex w-fit flex-col items-start justify-center gap-20">
          <div className="flex flex-col">
            <h1 className="text-5xl">João Jardim</h1>
            <h2 className="text-xl font-light">{content.subtitle}</h2>
          </div>
          <p className="max-w-[45ch] text-lg">{content.text}</p>
          <div className="flex gap-10">
            <Link
              href="/#contact"
              target="_blank"
              className="flex h-14 w-56 items-center justify-center gap-3 rounded-[10px] border border-neutral-800 bg-white text-lg shadow-md transition-colors hover:bg-neutral-200 dark:border-white dark:bg-neutral-800"
            >
              {content.cta1} <DownloadIcon width={20} height={20} />
            </Link>
            <Link
              href="/#contact"
              className="flex h-14 w-56 items-center justify-center gap-3 rounded-[10px] border border-neutral-400 bg-neutral-700 text-lg  text-white shadow-md transition-colors hover:bg-neutral-800 dark:border-neutral-600 dark:bg-white dark:text-neutral-800"
            >
              {content.cta2}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center md:w-1/2">
        <div className="m-auto h-96 w-96 overflow-hidden rounded-full shadow-xl">
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
