'use client'
import { usePathname } from 'next/navigation'
import { Contact } from '../components/Contact'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export default function Home() {
  const pathName = usePathname()
  const lang = pathName.slice(1)

  return (
    <main className="mx-6 flex flex-col gap-40 pb-40 md:mx-40">
      <Hero lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Experience lang={lang} />
      <Education lang={lang} />
      <Contact lang={lang} />
    </main>
  )
}
