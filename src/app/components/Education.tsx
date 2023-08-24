import { i18n } from '@/assets/i18n'

export function Education({ lang }: { lang: string }) {
  const education = i18n[lang].education

  return (
    <section
      id="education"
      className="mx-auto flex h-auto w-full flex-col items-center justify-center gap-10 md:max-w-[75rem]"
    >
      <h2 className="text-center text-4xl">{education.title}</h2>
      <div className="flex w-full flex-col gap-5 md:flex-row md:justify-between md:gap-2">
        {education.content.map((content, index) => (
          <div
            key={index}
            className="flex w-full flex-col gap-1 border border-neutral-700 p-12 md:max-w-[540px]"
          >
            <h3 className="text-2xl font-semibold">{content.title}</h3>
            <span>{content.institution}</span>
            <span>{content.date}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
