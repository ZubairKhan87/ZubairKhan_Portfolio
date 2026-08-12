import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './Icons'

type Theme = 'light' | 'dark'

/** Reads the theme the inline boot script already resolved, then persists changes. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.dataset.theme as Theme) ?? 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:bg-accent-soft hover:text-accent"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
