import { i18n } from '@/assets/i18n'
import { Badge } from './Badge'

export function Skills({ lang }: { lang: string }) {
  const skills = i18n[lang].skills

  return (
    <section id="skills" className="flex flex-col justify-center gap-10">
      <h2 className="text-center text-3xl md:text-4xl">{skills.title}</h2>
      <div className="mx-auto flex h-auto w-full flex-wrap items-center justify-center gap-5 md:max-w-[75rem] md:gap-10">
        {skills.content.map((content, index) => (
          <div key={index}>
            <Badge>{content}</Badge>
          </div>
        ))}
      </div>
    </section>
  )
}
