import { projects, portfolio } from '@/assets/projects'
import {
  ExternalLinkIcon,
  FigmaLogoIcon,
  GitHubLogoIcon,
  GlobeIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { Badge } from './Badge'
import Image from 'next/image'

export function Projects({ lang }: { lang: string }) {
  const project = projects[lang]
  const portfolioContent = portfolio[lang]

  return (
    <section id="projects" className="flex flex-col justify-center gap-10">
      <h2 className="text-center text-4xl">{project.title}</h2>
      <div className="mx-auto flex h-auto w-full flex-col items-center justify-center gap-10 md:max-w-[75rem]">
        {project.content.map((content, index) => (
          <div
            key={index}
            className="flex h-auto w-full flex-col rounded-[4px] border border-neutral-700 md:flex-row"
          >
            <div className="flex w-full h-full max-h-[575px] flex-col gap-7 border-r border-neutral-700 p-12">
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

              <div className="flex flex-wrap gap-3">
                {content.tags.map((tag, index) => (
                  <Badge key={index}>{tag}</Badge>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">{project.toolsTitle}</span>
                <span>{content.tools}</span>
              </div>
            </div>
            <div className="flex w-full h-full max-h-[575px] items-start justify-center overflow-y-scroll">
              <Image src={content.images.desktop} alt={'project screenshot'} />
            </div>
          </div>
        ))}

        <div className="flex w-fit h-full max-h-[575px] flex-col rounded-[4px] gap-7 border border-neutral-700 p-12 shadow-white shadow-[0px_0px_5px_1px_gba(255,255,255,0.5)]">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold">{portfolioContent.title}</h3>
            <p className="max-w-[40ch] text-base">
              {portfolioContent.description}
            </p>
          </div>

          <div className="flex h-28 flex-col justify-center gap-3">
            {portfolioContent.websiteLink && (
              <Link
                href={portfolioContent.websiteLink}
                target="_blank"
                className="flex w-fit items-center gap-1"
              >
                <GlobeIcon className="mr-2 h-7 w-7" />
                <span className="font-light">
                  {portfolioContent.websiteTitle}
                </span>
                <ExternalLinkIcon />
              </Link>
            )}
            {portfolioContent.githubLink && (
              <Link
                href={portfolioContent.githubLink}
                target="_blank"
                className="flex w-fit items-center gap-1"
              >
                <GitHubLogoIcon className="mr-2 h-7 w-7" />
                <span className="font-light">
                  {portfolioContent.githubTitle}
                </span>
                <ExternalLinkIcon />
              </Link>
            )}
            {portfolioContent.figmaLink && (
              <Link
                href={portfolioContent.figmaLink}
                target="_blank"
                className="flex w-fit items-center gap-1"
              >
                <FigmaLogoIcon className="mr-2 h-7 w-7" />
                <span className="font-light">
                  {portfolioContent.figmaTitle}
                </span>
                <ExternalLinkIcon />
              </Link>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {portfolioContent.tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{project.toolsTitle}</span>
            <span>{portfolioContent.tools}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
