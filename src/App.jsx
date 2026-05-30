import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowRight,
  Trophy,
  GraduationCap,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Copy,
  Check,
  Send,
  Terminal,
  Server,
  Wrench,
  Download
} from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastProvider, useToast } from './components/CustomToast'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function PortfolioContent() {
  const { showToast } = useToast()
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('dmaanwork@gmail.com')
    setCopied(true)
    showToast('Email copied to clipboard!', 'success')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all fields.', 'error')
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
      showToast('Message sent successfully!', 'success')
    }, 1500)
  }

  const handleProjectClick = (projectName) => {
    showToast(`${projectName} is currently under active development. Coming soon!`, 'info')
  }

  return (
    <div className="relative min-h-screen">
      <div className="halo-glow w-[350px] h-[350px] top-[15%] right-[10%] opacity-45 dark:opacity-30 pointer-events-none" />
      <div className="halo-glow w-[300px] h-[300px] top-[50%] left-[5%] opacity-35 dark:opacity-20 pointer-events-none" />
      <div className="halo-glow w-[400px] h-[400px] bottom-[10%] right-[20%] opacity-45 dark:opacity-25 pointer-events-none" />

      <div className="hidden xl:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col gap-4 text-text-muted"
        >
          <a
            href="https://github.com/dardmaansingh"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors hover:scale-110 duration-200"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/dardmaan-singh-13a3aa318"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors hover:scale-110 duration-200"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:dmaanwork@gmail.com"
            className="hover:text-primary transition-colors hover:scale-110 duration-200"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 120 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-[1px] bg-card-border"
        />
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 flex flex-col gap-20 sm:gap-28">
        
        <section id="home" className="min-h-[75vh] flex flex-col justify-center py-6 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full border border-badge-border bg-badge-bg text-primary text-xs font-semibold tracking-wide mb-6"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-primary mr-2 animate-pulse-glow" />
                Available for work
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-7xl font-bold font-display tracking-tight text-text-base mb-3 leading-[1.1]"
              >
                Dardmaan <br />
                <span className="text-gradient">Singh</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl font-bold font-sans text-text-base mb-6"
              >
                I'm a <span className="text-primary font-display font-bold">Web Developer</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-sm sm:text-base md:text-lg text-text-muted mb-8 max-w-lg leading-relaxed font-sans"
              >
                A frontend web developer expanding into backend frameworks, constantly learning, and always up for tricky competitive programming challenges.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start w-full sm:w-auto"
              >
                <button
                  onClick={() => {
                    const el = document.getElementById('projects')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white rounded-full bg-signature-gradient hover:opacity-90 shadow-lg hover:shadow-primary/20 shadow-glow-hover cursor-pointer duration-200 text-sm sm:text-base"
                >
                  My Works
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-6 py-3 font-semibold text-text-base rounded-full border border-card-border bg-card-bg hover:bg-white/10 dark:hover:bg-white/5 cursor-pointer transition-colors duration-200 text-sm sm:text-base"
                >
                  Let's talk
                </button>
              </motion.div>
            </div>

            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
                className="relative"
              >
                <div className="absolute inset-0 bg-signature-gradient opacity-35 blur-2xl rounded-full scale-105 animate-pulse" />
                
                <div className="organic-blob animate-float-portrait w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 border-[3px] border-primary/20 shadow-xl overflow-hidden relative">
                  <img
                    src="/dard.png"
                    alt="Dardmaan Singh portrait"
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="flex flex-col gap-10 scroll-mt-20"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-primary font-sans mb-1">About</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-base relative pb-2 inline-block">
              A bit about me
              <span className="absolute bottom-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-16 h-[3px] bg-signature-gradient rounded-full" />
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left text-text-muted text-sm sm:text-base md:text-lg leading-relaxed font-sans">
              <p>
                I'm <strong className="text-text-base font-semibold">Dardmaan Singh</strong>, a developer who enjoys building clean, fast, and accessible interfaces on the web. I started with frontend and I'm now expanding deeper into backend frameworks.
              </p>
              <p>
                Outside of building products, I spend time solving algorithmic problems and participating in competitive programming contests — it keeps my problem-solving sharp and brings discipline to how I write code.
              </p>
              <p>
                I love turning ideas into pixel-perfect experiences. If it can be designed and shipped, I want to be involved.
              </p>
              
              <div className="mt-2 flex justify-center lg:justify-start">
                <a
                  href="/assets/Dardmaan_Singh_Resume (1).docx"
                  download="Dardmaan_Singh_Resume.docx"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-card-border bg-card-bg hover:bg-white/10 dark:hover:bg-white/5 text-text-base text-xs sm:text-sm font-semibold transition-all hover:scale-105 cursor-pointer duration-200 shadow-sm"
                >
                  <Download className="w-4 h-4 text-primary" />
                  Download Resume (.docx)
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4 w-full">
              {[
                {
                  icon: Trophy,
                  value: '200+',
                  label: 'CP Problems Solved'
                },
                {
                  icon: GraduationCap,
                  value: '3+',
                  label: 'Years Coding'
                }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-card-border bg-card-bg/40 hover:bg-card-bg transition-all duration-300 shadow-sm shadow-glow-hover"
                >
                  <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 text-primary">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold font-display text-text-base leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-text-muted font-sans font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="flex flex-col gap-10 scroll-mt-20"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-primary font-sans mb-1">Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-base relative pb-2 inline-block">
              Things I work with
              <span className="absolute bottom-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-16 h-[3px] bg-signature-gradient rounded-full" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {[
              {
                title: 'Frontend',
                icon: Terminal,
                skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Next.js']
              },
              {
                title: 'Backend',
                icon: Server,
                skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL']
              },
              {
                title: 'Tools & CP',
                icon: Wrench,
                skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'C++', 'DSA', 'Codeforces']
              }
            ].map((category, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-5 p-6 rounded-2xl border border-card-border bg-card-bg/30 hover:bg-card-bg/60 transition-all duration-300"
              >
                <div className="flex items-center gap-3 border-b border-card-border/50 pb-3">
                  <category.icon className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold font-display text-text-base text-left">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-start">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-full border border-card-border bg-card-bg text-xs font-semibold text-text-muted hover:text-text-base hover:border-primary/40 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="flex flex-col gap-10 scroll-mt-20"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-primary font-sans mb-1">Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-base relative pb-2 inline-block">
              Selected work
              <span className="absolute bottom-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-16 h-[3px] bg-signature-gradient rounded-full" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
            {[
              { num: '01', type: 'Frontend Application' },
              { num: '02', type: 'Fullstack Platform' },
              { num: '03', type: 'Algorithmic Tool' },
              { num: '04', type: 'System Integration' }
            ].map((proj, idx) => (
              <div
                key={idx}
                onClick={() => handleProjectClick(`Project ${proj.num}`)}
                className="group relative flex flex-col justify-between p-8 rounded-2xl border border-dashed border-card-border bg-card-bg/20 hover:bg-card-bg/40 hover:border-primary/40 transition-all duration-300 cursor-pointer shadow-sm min-h-[190px] overflow-hidden"
              >
                <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex justify-between items-start">
                  <span className="font-display text-4xl font-extrabold text-text-muted/10 group-hover:text-primary/20 transition-colors">
                    {proj.num}
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase font-extrabold tracking-widest px-2.5 py-1 rounded-md border border-primary/25 bg-primary/5 text-primary">
                    Coming Soon
                  </span>
                </div>
                
                <div className="text-left mt-6 z-10">
                  <h3 className="text-lg font-bold font-display text-text-base mb-1.5 group-hover:text-primary transition-colors">
                    {proj.type}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-sm">
                    This project space is currently reserved. Details and code repository will be revealed upon release.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="flex flex-col gap-10 scroll-mt-20"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-primary font-sans mb-1">Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-base relative pb-2 inline-block">
              Let's talk
              <span className="absolute bottom-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-16 h-[3px] bg-signature-gradient rounded-full" />
            </h2>
            <p className="text-text-muted mt-4 text-sm sm:text-base md:text-lg">
              Got an idea, a role, or just want to say hi? Drop a message — I reply quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-sans">
            
            <div className="lg:col-span-5 flex flex-col justify-between gap-8">
              
              <div
                onClick={copyEmail}
                className="group flex items-center justify-between p-5 rounded-2xl border border-card-border bg-card-bg/30 hover:bg-card-bg transition-all duration-300 cursor-pointer text-left shadow-sm shadow-glow-hover"
                title="Click to copy email address"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-0.5">
                      Email Address
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-text-base break-all">
                      dmaanwork@gmail.com
                    </div>
                  </div>
                </div>
                <div className="p-2 text-text-muted group-hover:text-text-base transition-colors flex-shrink-0">
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </div>
              </div>

              <div className="flex flex-col gap-4 text-center lg:text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Connect on Socials</span>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  {[
                    {
                      icon: Linkedin,
                      href: 'https://www.linkedin.com/in/dardmaan-singh-13a3aa318',
                      label: 'LinkedIn'
                    },
                    {
                      icon: Github,
                      href: 'https://github.com/dardmaansingh',
                      label: 'GitHub'
                    },
                    {
                      icon: Instagram,
                      href: 'https://instagram.com',
                      label: 'Instagram'
                    }
                  ].map((soc, i) => (
                    <a
                      key={i}
                      href={soc.href}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3.5 rounded-xl border border-card-border bg-card-bg hover:bg-white/10 dark:hover:bg-white/5 text-text-muted hover:text-text-base hover:scale-110 transition-all duration-200 shadow-sm"
                      aria-label={soc.label}
                      title={soc.label}
                    >
                      <soc.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 rounded-2xl border border-card-border bg-card-bg/25">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col items-start gap-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-text-muted">
                          Your name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          required
                          disabled={isSubmitting}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-input-border bg-input-bg text-text-base placeholder-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm font-medium"
                        />
                      </div>
                      
                      <div className="flex flex-col items-start gap-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-text-muted">
                          Your email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          required
                          disabled={isSubmitting}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-input-border bg-input-bg text-text-base placeholder-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm font-medium"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-text-muted">
                        Tell me about your project...
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        required
                        disabled={isSubmitting}
                        rows={5}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-3 rounded-xl border border-input-border bg-input-bg text-text-base placeholder-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm font-medium resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white rounded-full bg-signature-gradient hover:opacity-90 transition-all hover:scale-105 duration-200 cursor-pointer shadow-md hover:shadow-primary/20 w-full sm:w-auto self-start mt-2 disabled:opacity-50 text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="form-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-8 gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-2">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-text-base">
                      Thank you, {formData.name}!
                    </h3>
                    <p className="text-text-muted max-w-sm text-sm sm:text-base">
                      Your message has been sent successfully. I will review it and get back to you at <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false)
                        setFormData({ name: '', email: '', message: '' })
                      }}
                      className="mt-4 px-5 py-2 rounded-full border border-card-border bg-card-bg hover:bg-white/10 dark:hover:bg-white/5 text-xs font-semibold text-text-base cursor-pointer transition-all duration-200"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>
        </motion.section>

      </main>
    </div>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <Header />
      <PortfolioContent />
      <Footer />
    </ToastProvider>
  )
}
