import { i18n } from '@/assets/i18n'

export function Experience({ lang }: { lang: string }) {
  const experience = i18n[lang].experience

  return (
    <section
      id="experience"
      className="mx-auto flex h-auto w-full flex-col items-center justify-center gap-10 md:max-w-[75rem]"
    >
      <h2 className="text-center text-3xl 2xl:text-4xl">{experience.title}</h2>
      {experience.content.map((content, index) => (
        <div
          key={index}
          className="flex w-full flex-col gap-4 border border-neutral-700 p-6 md:p-12"
        >
          <div className="flex flex-col ">
            <h3 className="text-lg font-semibold md:text-2xl 2xl:text-xl">
              {content.title}
            </h3>
            {content.role && (
              <span className="text-xs md:text-base">{content.role}</span>
            )}
            <span className="text-xs md:text-base">{content.date}</span>
          </div>
          <p className="text-sm md:text-base">{content.description}</p>
        </div>
      ))}
    </section>
  )
}
