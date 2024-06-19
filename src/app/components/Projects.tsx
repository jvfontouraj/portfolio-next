import { projects, portfolio, intranet } from '@/assets/projects'
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
  const intranetContent = intranet[lang]

  return (
    <section id="projects" className="flex flex-col justify-center gap-10">
      <h2 className="text-center text-3xl 2xl:text-4xl">{project.title}</h2>
      <div className="mx-auto flex h-auto w-full flex-col items-center justify-center gap-10 md:max-w-[75rem]">
        {project.content.map((content, index) => (
          <div
            key={index}
            id={content.id}
            className="flex h-auto w-full flex-col rounded-[4px] border border-neutral-500 bg-white/10 transition-shadow duration-500 hover:shadow-white md:flex-row"
          >
            <div className="flex h-full w-full flex-col gap-7 border-r border-neutral-500 p-6 md:max-h-[575px] md:p-12">
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold md:text-2xl 2xl:text-xl">
                  {content.title}
                </h3>
                <p className="w-full text-sm md:max-w-[40ch] md:text-base">
                  {content.description}
                </p>
              </div>

              <div className="flex h-fit flex-col justify-center gap-3 text-xs md:h-28 md:text-base">
                {content.websiteLink && (
                  <Link
                    href={content.websiteLink}
                    target="_blank"
                    className="flex w-fit items-center gap-1"
                  >
                    <GlobeIcon className="mr-2 h-5 w-5 md:h-7 md:w-7" />
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
                    <GitHubLogoIcon className="mr-2 h-5 w-5 md:h-7 md:w-7" />
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
                    <FigmaLogoIcon className="mr-2 h-5 w-5 md:h-7 md:w-7" />
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
              <div className="flex flex-col text-sm md:text-base">
                <span className="font-semibold">{project.toolsTitle}</span>
                <span>{content.tools}</span>
              </div>
            </div>
            <div className="flex h-full max-h-[575px] w-full items-start justify-center overflow-y-scroll">
              <Image
                src={content.images.desktop}
                alt={'project screenshot'}
                width="1000"
                height="1000"
                loading="lazy"
              />
            </div>
          </div>
        ))}

        <div
          id={intranetContent.id}
          className="flex h-fit w-full flex-col gap-7 rounded-[4px] border border-neutral-500 bg-white/10 p-6 transition-shadow duration-300 hover:shadow-white md:h-full md:max-h-[575px] md:w-fit md:p-12"
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold md:text-2xl 2xl:text-xl">
              {intranetContent.title}
            </h3>
            <p className="w-full text-sm md:max-w-[40ch] md:text-base">
              {intranetContent.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {intranetContent.tags.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>
          <div className="flex flex-col text-sm md:text-base">
            <span className="font-semibold">{project.toolsTitle}</span>
            <span>{intranetContent.tools}</span>
          </div>
        </div>

        <div className="flex h-fit w-full flex-col gap-7 rounded-[4px] border border-neutral-500 bg-white/10 p-6 transition-shadow duration-300 hover:shadow-white md:h-full md:max-h-[575px] md:w-fit md:p-12">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold md:text-2xl 2xl:text-xl">
              {portfolioContent.title}
            </h3>
            <p className="w-full text-sm md:max-w-[40ch] md:text-base">
              {portfolioContent.description}
            </p>
          </div>

          <div className="flex h-28 flex-col justify-center gap-3 text-xs md:text-base">
            {portfolioContent.websiteLink && (
              <Link
                href={portfolioContent.websiteLink}
                target="_blank"
                className="flex w-fit items-center gap-1"
              >
                <GlobeIcon className="mr-2 h-5 w-5 md:h-7 md:w-7" />
                <span className="border-b border-b-transparent font-light transition-colors duration-300 hover:border-b-white">
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
                <GitHubLogoIcon className="mr-2 h-5 w-5 md:h-7 md:w-7" />
                <span className="border-b border-b-transparent font-light transition-colors duration-300 hover:border-b-white">
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
                <FigmaLogoIcon className="mr-2 h-5 w-5 md:h-7 md:w-7" />
                <span className="border-b border-b-transparent font-light transition-colors duration-300 hover:border-b-white">
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
          <div className="flex flex-col text-sm md:text-base">
            <span className="font-semibold">{project.toolsTitle}</span>
            <span>{portfolioContent.tools}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
