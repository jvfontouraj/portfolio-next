import { i18n } from '@/assets/i18n'

export function Experience({ lang }: { lang: string }) {
  const experience = i18n[lang].experience

  return (
    <section
      id="experience"
      className="mx-auto flex h-auto w-full flex-col items-center justify-center gap-10 md:max-w-[75rem]"
    >
      <h2 className="text-center text-4xl">{experience.title}</h2>
      {experience.content.map((content, index) => (
        <div
          key={index}
          className="flex w-full flex-col gap-4 border border-neutral-700 p-12"
        >
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold">{content.title}</h3>
            {content.role && <span>{content.role}</span>}
            <span>{content.date}</span>
          </div>
          <p className="text-base">{content.description}</p>
        </div>
      ))}
    </section>
  )
}
