export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-card-border/60 px-6 py-8 bg-nav-bg/30 backdrop-blur-sm text-text-muted mt-20 text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 font-medium">
          <span className="font-bold text-text-base">Dardmaan</span>
          <span className="w-1.5 h-1.5 rounded-full bg-signature-gradient" />
          <span className="text-text-muted">© {year}</span>
        </div>

        <div className="text-text-muted/80 text-xs font-sans">
          Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  )
}
