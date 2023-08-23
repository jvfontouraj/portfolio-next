import { i18n } from '@/assets/i18n'
import {
  ExternalLinkIcon,
  FigmaLogoIcon,
  GitHubLogoIcon,
  GlobeIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { Badge } from './Badge'

export function Projects({ lang }: { lang: string }) {
  const projects = i18n[lang].projects

  return (
    <section id="projects" className="flex flex-col justify-center gap-10">
      <h2 className="text-center text-4xl">{projects.title}</h2>
      <div className="mx-auto flex h-auto w-full flex-col items-center justify-center gap-10 md:max-w-[75rem]">
        {projects.content.map((content, index) => (
          <div
            key={index}
            className="flex h-auto w-full rounded-[4px] border border-neutral-700"
          >
            <div className="flex w-full flex-col gap-7 border-r border-neutral-700 p-12">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold">{content.title}</h3>
                <p className="max-w-[40ch] text-base">{content.description}</p>
              </div>

              <div className="flex h-28 flex-col justify-center gap-3">
                {content.websiteLink && (
                  <Link
                    href={content.websiteLink}
                    target="_blank"
                    className="flex w-fit items-center gap-1"
                  >
                    <GlobeIcon className="mr-2 h-7 w-7" />
                    <span className="font-light">{content.websiteTitle}</span>
                    <ExternalLinkIcon />
                  </Link>
                )}
                {content.githubLink && (
                  <Link
                    href={content.githubLink}
                    target="_blank"
                    className="flex w-fit items-center gap-1"
                  >
                    <GitHubLogoIcon className="mr-2 h-7 w-7" />
                    <span className="font-light">{content.githubTitle}</span>
                    <ExternalLinkIcon />
                  </Link>
                )}
                {content.figmaLink && (
                  <Link
                    href={content.figmaLink}
                    target="_blank"
                    className="flex w-fit items-center gap-1"
                  >
                    <FigmaLogoIcon className="mr-2 h-7 w-7" />
                    <span className="font-light">{content.figmaTitle}</span>
                    <ExternalLinkIcon />
                  </Link>
                )}
              </div>

              <div className="flex gap-3">
                {content.tags.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">{projects.toolsTitle}</span>
                <span>{content.tools}</span>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              Mídia do Proejto
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
