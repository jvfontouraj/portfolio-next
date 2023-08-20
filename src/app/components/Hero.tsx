'use client'
import { i18n } from '@/data/i18n'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PerfilImg from '@/assets/perfil.jpg'
import Image from 'next/image'

export function Hero() {
  const pathName = usePathname()
  const lang = pathName.slice(1)
  const content = i18n[lang].hero

  return (
    <section className="flex h-[calc(100vh-110px)]">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-5xl">João Jardim</h1>
          <h2 className="text-xl font-light">{content.subtitle}</h2>
        </div>
        <p>{content.text}</p>
        <div>
          <Link href="/#contact">{content.cta1}</Link>
          <Link href="/#contact">{content.cta2}</Link>
        </div>
      </div>
      <div>
        <div className="h-96 w-96 overflow-hidden rounded-full">
          <Image
            src={PerfilImg}
            alt={content.imgAlt}
            className="h-auto w-full -translate-y-5 shadow-sm"
          />
        </div>
      </div>
    </section>
  )
}
