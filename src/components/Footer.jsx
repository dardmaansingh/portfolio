import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-card-border px-6 py-12 bg-nav-bg/20 backdrop-blur-sm mt-24 text-text-muted">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p className="m-0 text-sm font-medium text-text-base">
            &copy; {year} Dardmaan Singh. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/dardmaansingh"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl border border-card-border bg-card-bg hover:bg-white/10 dark:hover:bg-white/5 text-text-muted hover:text-text-base hover:scale-110 transition-all duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/dardmaan-singh-13a3aa318"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-xl border border-card-border bg-card-bg hover:bg-white/10 dark:hover:bg-white/5 text-text-muted hover:text-text-base hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:dmaanwork@gmail.com"
            className="p-2 rounded-xl border border-card-border bg-card-bg hover:bg-white/10 dark:hover:bg-white/5 text-text-muted hover:text-text-base hover:scale-110 transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
