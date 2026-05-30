import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')

  const handleScroll = (id) => {
    setActiveSection(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const observers = navItems.map((item) => {
      const el = document.getElementById(item.id)
      if (!el) return null
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(item.id)
            }
          })
        },
        {
          rootMargin: '-40% 0px -40% 0px',
          threshold: 0.1
        }
      )
      observer.observe(el)
      return { observer, el }
    })
    
    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el)
        }
      })
    }
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-card-border bg-nav-bg/85 backdrop-blur-md px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
        <button
          onClick={() => handleScroll('home')}
          className="text-xl font-bold font-display text-text-base cursor-pointer tracking-tight flex items-center gap-0.5"
        >
          Dardmaan
          <span className="w-1.5 h-1.5 rounded-full bg-signature-gradient animate-pulse" />
        </button>

        <nav className="hidden md:flex items-center gap-1 font-sans">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                activeSection === item.id ? 'text-text-base' : 'text-text-muted hover:text-text-base'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-signature-gradient"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>

      <div className="flex md:hidden items-center justify-center border-t border-card-border/50 py-2 gap-1 overflow-x-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className={`relative px-3 py-1.5 text-xs font-semibold transition-colors duration-200 cursor-pointer ${
              activeSection === item.id ? 'text-text-base' : 'text-text-muted hover:text-text-base'
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <motion.div
                layoutId="activeUnderlineMobile"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-signature-gradient"
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.header>
  )
}
