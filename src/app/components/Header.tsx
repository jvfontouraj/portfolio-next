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
import { ScrollToSection } from '@/utils/scrollToSection'
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
        'fixed md:sticky w-screen overflow-hidden top-0 z-50 m-auto scroll-smooth transition-all px-5 md:px-0 py-3 md:py-10 md:h-fit md:shadow-none shadow-2xl backdrop-blur-lg',
        open ? 'h-screen' : 'h-[80px]',
        theme === 'dark' ? 'bg-neutral-800/80' : 'bg-white/80',
      )}
    >
      <div className="flex justify-between items-center md:hidden">
        <div className="flex flex-col">
          <h1 className="text-3xl">João Jardim</h1>
          <h2 className="text-sm font-extralight">
            {i18n[lang].hero.subtitle}
          </h2>
        </div>
        <button onClick={handleToggleMenu} className="relative h-8 w-8">
          <HamburgerMenuIcon
            className={cs(
              'h-full w-auto absolute top-0 transition-opacity',
              open ? 'opacity-0' : 'opacity-100',
            )}
          />
          <Cross1Icon
            className={cs(
              'h-full w-auto absolute top-0 transition-opacity',
              !open ? 'opacity-0' : 'opacity-100',
            )}
          />
        </button>
      </div>
      <div
        className={cs(
          'relative flex flex-col overflow-hidden md:overflow-visible my-auto md:[&>*]:h-auto md:h-auto transition-all w-full md:w-screen items-center justify-center md:flex md:flex-row md:opacity-100 md:[&>*]:opacity-100',
          open
            ? 'h-full [&>*]:h-auto [&>*]:opacity-100'
            : 'h-0 [&>*]:h-0 [&>*]:opacity-0',
        )}
      >
        <div className="md:absolute left-0 flex items-center gap-6 md:gap-10 px-10">
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
        <nav className="flex flex-col gap-5 mt-16 mb-8 md:my-0 md:gap-20 text-lg md:flex-row">
          {content.map((content, index) => (
            <button key={index} onClick={() => handleNavClick(content.id)}>
              <h2 className="capitalize">{content.title}</h2>
            </button>
          ))}
        </nav>
        <div className="md:absolute right-0 flex flex-col md:flex-row items-center gap-10 px-10">
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
