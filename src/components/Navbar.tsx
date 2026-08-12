import { useEffect, useState } from 'react'
import { navItems, profile } from '../data/site'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently occupying the upper half of the viewport.
  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-20% 0px -65% 0px' },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-line bg-surface/85 backdrop-blur-md' : 'border-transparent bg-surface'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 sm:px-8 lg:px-10"
      >
        <a
          href="#top"
          className="font-serif text-[1.0625rem] tracking-[-0.01em] text-ink transition-colors duration-200 hover:text-accent"
        >
          {profile.shortName}
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-current={active === href ? 'true' : undefined}
                  className={`rounded-full px-3 py-1.5 text-[0.875rem] transition-colors duration-200 hover:text-ink ${
                    active === href ? 'text-ink' : 'text-muted'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile: a quiet scrollable strip instead of a hamburger overlay. */}
      <ul className="flex gap-1 overflow-x-auto px-4 pb-2 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
        {navItems.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              aria-current={active === href ? 'true' : undefined}
              className={`block rounded-full px-3 py-1 text-[0.8125rem] whitespace-nowrap transition-colors duration-200 ${
                active === href ? 'bg-accent-soft text-accent' : 'text-muted'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
