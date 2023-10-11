'use client'
import Link from 'next/link'
import MoonIcon from '@/assets/moon.svg'
import { useContext, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { i18n } from '@/assets/i18n'
import { Sun } from '@phosphor-icons/react'
import {
  Cross1Icon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import cs from 'classnames'
import { ScrollToSection } from '@/lib/scrollToSection'
import { MenuContext } from '@/context/MenuContext'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const pathName = usePathname()
  const lang = pathName.slice(1)
  const content = i18n[lang].nav
  const { open, handleToggleMenu } = useContext(MenuContext)

  useEffect(() => {
    setMounted(true)

    if (systemTheme === 'dark') {
      setTheme('dark')
    } else if (systemTheme === 'light') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }, [setTheme, systemTheme])

  function handleToggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  function handleNavClick(id: string) {
    handleToggleMenu()
    setTimeout(() => {
      ScrollToSection(id)
    }, 100)
  }

  return (
    <header
      className={cs(
        'fixed top-0 z-50 m-auto w-screen overflow-hidden scroll-smooth px-5 py-3 shadow-2xl backdrop-blur-lg transition-all md:sticky md:h-fit md:px-0 md:py-10 md:shadow-none',
        open ? 'h-screen' : 'h-[80px]',
        theme === 'dark' ? 'bg-neutral-800/80' : 'bg-white/80',
      )}
    >
      <div className="flex items-center justify-between md:hidden">
        <div className="flex flex-col">
          <h1 className="text-2xl">João Jardim</h1>
          <h2 className="text-sm font-extralight">
            {i18n[lang].hero.subtitle}
          </h2>
        </div>
        <button onClick={handleToggleMenu} className="relative h-8 w-8">
          <HamburgerMenuIcon
            className={cs(
              'absolute top-0 h-full w-auto transition-opacity',
              open ? 'opacity-0' : 'opacity-100',
            )}
          />
          <Cross1Icon
            className={cs(
              'absolute top-0 h-full w-auto transition-opacity',
              !open ? 'opacity-0' : 'opacity-100',
            )}
          />
        </button>
      </div>
      <div
        className={cs(
          'relative my-auto flex w-full flex-col items-center justify-center overflow-hidden transition-all md:flex md:h-auto md:w-screen md:flex-row md:overflow-visible md:opacity-100 md:[&>*]:h-auto md:[&>*]:opacity-100',
          open
            ? 'h-full [&>*]:h-auto [&>*]:opacity-100'
            : 'h-0 [&>*]:h-0 [&>*]:opacity-0',
        )}
      >
        <div className="left-0 flex items-center gap-6 px-10 md:absolute md:gap-10">
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
        <nav className="mb-8 mt-16 flex flex-col gap-5 text-lg md:my-0 md:flex-row md:text-base lg:gap-16 xl:gap-20 xl:text-lg">
          {content.map((content, index) => (
            <button key={index} onClick={() => handleNavClick(content.id)}>
              <h2 className="capitalize">{content.title}</h2>
            </button>
          ))}
        </nav>
        <div className="right-0 flex flex-col items-center gap-10 px-10 md:absolute md:flex-row">
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
