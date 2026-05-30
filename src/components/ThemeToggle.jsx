import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    const resolved = stored === 'light' ? 'light' : 'dark'
    setTheme(resolved)
    
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(resolved)
    document.documentElement.setAttribute('data-theme', resolved)
    document.documentElement.style.colorScheme = resolved
  }, [])

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    document.documentElement.style.colorScheme = nextTheme
    window.localStorage.setItem('theme', nextTheme)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-xl border border-card-border bg-card-bg hover:bg-white/10 dark:hover:bg-white/5 text-text-base transition-all hover:scale-105 duration-200 cursor-pointer flex items-center justify-center shadow-sm"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5.5 h-5.5 text-slate-800 transition-all duration-300" />
      ) : (
        <Sun className="w-5.5 h-5.5 text-amber-400 transition-all duration-300" />
      )}
    </button>
  )
}
