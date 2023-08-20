'use client'
import Link from 'next/link'
import MoonIcon from '@/assets/moon.svg'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { i18n } from '@/data/i18n'
import { Sun } from '@phosphor-icons/react'
import cs from 'classnames'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathName = usePathname()
  const lang = pathName.slice(1)
  const content = i18n[lang].nav

  useEffect(() => {
    setMounted(true)
  }, [])

  function handleToggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return (
    <header className="sticky top-0 m-auto py-10 backdrop-blur-lg">
      <div className="relative flex h-auto w-screen items-center justify-center">
        <div className="absolute left-0 flex items-center gap-10 px-10">
          <Link href={content.linkedin}>
            <LinkedInLogoIcon className="h-8 w-8 fill-neutral-800" />
          </Link>
          <GitHubLogoIcon className="h-8 w-8 fill-neutral-800" />
        </div>
        <nav className="flex gap-20 text-lg">
          {content.headings.map((content, index) => (
            <Link key={index} href={`#${content}`}>
              <h2 className="capitalize">{content}</h2>
            </Link>
          ))}
        </nav>
        <div className="absolute right-0 flex items-center gap-10 px-10">
          <button onClick={handleToggleTheme}>
            {theme === 'light' ? (
              <MoonIcon
                className={cs(
                  'h-8 w-8 fill-neutral-800 transition-opacity duration-300',
                  theme === 'light' ? 'opacity-100' : 'opacity-0',
                )}
              />
            ) : (
              <Sun
                className={cs(
                  'h-8 w-8 fill-white transition-opacity duration-300',
                  theme === 'dark' ? 'opacity-100' : 'opacity-0',
                )}
              />
            )}
          </button>

          <Link href={pathName === '/pt' ? '/en' : '/pt'}>
            <button className="h-12 w-16 rounded-lg border border-neutral-800 text-xl uppercase dark:border-white">
              {pathName === '/pt' ? 'en' : 'pt'}
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
