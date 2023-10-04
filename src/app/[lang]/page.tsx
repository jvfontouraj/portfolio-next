'use client'
import { usePathname } from 'next/navigation'
import { Contact } from '../components/Contact'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { MenuContext } from '@/context/MenuContext'
import { useContext } from 'react'
import cs from 'classnames'

export default function Home() {
  const pathName = usePathname()
  const lang = pathName.slice(1)
  const openMenu = useContext(MenuContext)

  return (
    <main
      className={cs(
        'mx-6 flex flex-col overflow-x-hidden pb-40 pt-32 md:mx-40 md:pt-0',
        openMenu.open ? 'overflow-hidden' : 'overflow-scroll',
      )}
    >
      <Hero lang={lang} />
      <div className="flex flex-col gap-60 [&>section]:scroll-m-40">
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Education lang={lang} />
        <Contact lang={lang} />
      </div>
    </main>
  )
}
