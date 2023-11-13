import { i18n } from '@/assets/i18n'

export function Education({ lang }: { lang: string }) {
  const education = i18n[lang].education

  return (
    <section
      id="education"
      className="mx-auto flex h-auto w-full flex-col items-center justify-center gap-10 md:max-w-[75rem]"
    >
      <h2 className="text-center text-3xl 2xl:text-4xl">{education.title}</h2>
      <div className="flex w-full flex-col gap-5 md:flex-row md:justify-between md:gap-2">
        {education.content.map((content, index) => (
          <div
            key={index}
            className="flex w-full flex-col gap-1 border border-neutral-700 p-6 md:max-w-[540px] md:p-12"
          >
            <h3 className="text-lg font-semibold md:text-2xl 2xl:text-xl">
              {content.title}
            </h3>
            <span className="text-sm md:text-base">{content.institution}</span>
            <span className="text-sm md:text-base">{content.date}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
