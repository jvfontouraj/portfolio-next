import { Contact } from '../components/Contact'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Hero } from '../components/Hero'
import { Project } from '../components/Projects'
import { Skills } from '../components/Skills'

export default function Home() {
  return (
    <main className="mx-40 flex flex-col">
      <Hero />
      <Project />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}
