'use client'
import Link from 'next/link'
import MoonIcon from '@/assets/moon.svg'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { i18n } from '@/assets/i18n'
import { Sun } from '@phosphor-icons/react'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const pathName = usePathname()
  const lang = pathName.slice(1)
  const content = i18n[lang].nav

  useEffect(() => {
    setMounted(true)

    if (systemTheme === 'dark') {
      setTheme('dark')
      console.log('systemTheme', systemTheme)
    } else if (systemTheme === 'light') {
      setTheme('light')
      console.log('systemTheme', systemTheme)
    } else {
      setTheme('dark')
      console.log('systemTheme', systemTheme)
    }
  }, [setTheme, systemTheme])

  function handleToggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    console.log('theme', theme)
  }

  if (!mounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 m-auto py-10 backdrop-blur-lg">
      <div className="flex flex-col md:hidden">
        <h1 className="text-3xl">João Jardim</h1>
        <h2 className="text-sm font-extralight">{i18n[lang].hero.subtitle}</h2>
      </div>
      <div className="relative hidden h-auto w-screen items-center justify-center md:flex">
        <div className="absolute left-0 flex items-center gap-10 px-10">
          <Link
            href="https://www.linkedin.com/in/joaovfjardim/"
            target="_blank"
          >
            <LinkedInLogoIcon className="h-8 w-8" />
          </Link>
          <Link href="https://github.com/jvfontouraj" target="_blank">
            <GitHubLogoIcon className="h-8 w-8" />
          </Link>
        </div>
        <nav className="flex gap-20 text-lg">
          {content.map((content, index) => (
            <Link key={index} href={`#${content.id}`}>
              <h2 className="capitalize">{content.title}</h2>
            </Link>
          ))}
        </nav>
        <div className="absolute right-0 flex items-center gap-10 px-10">
          <button onClick={handleToggleTheme}>
            {theme === 'light' ? (
              <MoonIcon className="h-8 w-8" />
            ) : (
              <Sun className="h-8 w-8" />
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
