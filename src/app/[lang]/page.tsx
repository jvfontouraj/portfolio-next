'use client'
import { usePathname } from 'next/navigation'
import { Contact } from '../components/Contact'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import cs from 'classnames'

export default function Home() {
  const pathName = usePathname()
  const lang = pathName.slice(1)

  return (
    <main
      className={cs(
        'flex h-full flex-col overflow-hidden px-6 pb-40 pt-28 md:mx-auto md:max-w-7xl md:pt-0',
      )}
    >
      <Hero lang={lang} />
      <div className="flex flex-col gap-40 md:gap-60 [&>section]:scroll-m-40">
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Education lang={lang} />
        <Contact lang={lang} />
      </div>
    </main>
  )
}
