import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowRight,
  Trophy,
  GraduationCap,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Copy,
  Check,
  Send,
  Terminal,
  Server,
  Wrench,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastProvider, useToast } from './components/CustomToast'
import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  ThreejsIcon,
  Html5Icon,
  Css3Icon,
  NodejsIcon,
  ExpressIcon,
  MongodbIcon,
  PostgresqlIcon,
  CppIcon,
  GitIcon,
  FigmaIcon,
  VscodeIcon,
  CodeforcesIcon,
  RestApiIcon,
  DsaIcon
} from './components/TechIcons'
import {
  BrowserHeader,
  PortfolioPreview,
  NeuzyPreview,
  OrbitBoardPreview
} from './components/ProjectPreviews'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function PortfolioContent() {
  const { showToast } = useToast()
  const [copied, setCopied] = useState(false)
  const [showDirectForm, setShowDirectForm] = useState(false)
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

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill out all fields.', 'error')
      return
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_v54tw5l'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_3qbiw9k'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'hvsQhEA9Bg4pfFZCZ'

    if (!serviceId || !templateId || !publicKey) {
      showToast('Contact form is not configured. Missing credentials.', 'error')
      return
    }

    setIsSubmitting(true)

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        '#contact-form',
        {
          publicKey: publicKey
        }
      )

      if (result.status === 200 || result.text === 'OK') {
        setFormSubmitted(true)
        showToast('Message sent successfully!', 'success')
      } else {
        showToast('Failed to send message. Please try again.', 'error')
      }
    } catch (error) {
      showToast('A network error occurred. Please try again.', 'error')
      console.error('Contact form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Terminal,
      skills: [
        { name: 'React', icon: ReactIcon },
        { name: 'Next.js', icon: NextjsIcon },
        { name: 'JavaScript', icon: JavaScriptIcon },
        { name: 'TypeScript', icon: TypeScriptIcon },
        { name: 'Tailwind CSS', icon: TailwindIcon },
        { name: 'Three.js', icon: ThreejsIcon },
        { name: 'HTML5', icon: Html5Icon },
        { name: 'CSS3', icon: Css3Icon }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', icon: NodejsIcon },
        { name: 'Express', icon: ExpressIcon },
        { name: 'MongoDB', icon: MongodbIcon },
        { name: 'PostgreSQL', icon: PostgresqlIcon },
        { name: 'REST APIs', icon: RestApiIcon }
      ]
    },
    {
      title: 'Tools & CP',
      icon: Wrench,
      skills: [
        { name: 'C++', icon: CppIcon },
        { name: 'DSA', icon: DsaIcon },
        { name: 'Git', icon: GitIcon },
        { name: 'GitHub', icon: Github },
        { name: 'Figma', icon: FigmaIcon },
        { name: 'VS Code', icon: VscodeIcon },
        { name: 'Codeforces', icon: CodeforcesIcon }
      ]
    }
  ]

  return (
    <div className="relative min-h-screen">
      <div className="halo-glow w-[350px] h-[350px] top-[15%] right-[10%] opacity-45 dark:opacity-30 pointer-events-none" />
      <div className="halo-glow w-[300px] h-[300px] top-[50%] left-[5%] opacity-35 dark:opacity-20 pointer-events-none" />
      <div className="halo-glow w-[400px] h-[400px] bottom-[10%] right-[20%] opacity-45 dark:opacity-25 pointer-events-none" />

      {/* Fixed Left Social Bar on Desktop */}
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

        {/* Home / Hero Section */}
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
                I'm a <span className="text-primary font-display font-bold">MERN Stack Developer</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-sm sm:text-base md:text-lg text-text-muted mb-8 max-w-lg leading-relaxed font-sans"
              >
                Building full-stack web apps with MongoDB, Express, React, and Node.js — backed by strong DSA fundamentals and competitive programming experience.
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

        {/* About Section */}
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
                I'm <strong className="text-text-base font-semibold">Dardmaan Singh</strong>, a MERN stack developer who builds full-stack web applications with <strong className="text-text-base font-semibold">MongoDB, Express, React, and Node.js</strong>. I care about clean architecture, fast performance, and accessible interfaces.
              </p>
              <p>
                Outside of shipping products, I spend time solving algorithmic problems on LeetCode and Codeforces — it keeps my problem-solving sharp and brings discipline to how I write code.
              </p>
              <p>
                I love turning ideas into real, working products. If it can be designed, built, and deployed — I want to be the one doing it.
              </p>

              <div className="mt-2 flex flex-wrap justify-center lg:justify-start gap-3">
                <a
                  href="/assets/Resume.docx"
                  download="Resume.docx"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-card-border bg-card-bg hover:bg-white/10 dark:hover:bg-white/5 text-text-base text-xs sm:text-sm font-semibold transition-all hover:scale-105 cursor-pointer duration-200 shadow-sm"
                >
                  <Download className="w-4 h-4 text-primary" />
                  Download Resume
                </a>
                <a
                  href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fdardmaan.vercel.app%2Fassets%2FResume.docx"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary text-xs sm:text-sm font-semibold transition-all hover:scale-105 cursor-pointer duration-200 shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Resume
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4 w-full">
              {[
                {
                  icon: Trophy,
                  value: '300+',
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

        {/* Skills Section - Short, direct, and with authentic brand logos */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="flex flex-col gap-8 scroll-mt-20"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-primary font-sans mb-1">Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-base relative pb-2 inline-block">
              Things I work with
              <span className="absolute bottom-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-16 h-[3px] bg-signature-gradient rounded-full" />
            </h2>
          </div>

          <div className="flex flex-col gap-3 font-sans">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 p-4 sm:p-5 rounded-2xl border border-card-border bg-card-bg/30 hover:bg-card-bg/60 hover:border-primary/30 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-2.5 sm:w-36 flex-shrink-0">
                  <category.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold font-display text-text-base tracking-wide">
                    {category.title}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 items-center flex-grow">
                  {category.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon
                    return (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-card-border/80 bg-card-bg/90 hover:bg-white/10 dark:hover:bg-white/5 hover:border-primary/40 hover:scale-105 transition-all duration-200 cursor-default shadow-xs"
                      >
                        <SkillIcon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs font-semibold text-text-muted hover:text-text-base">
                          {skill.name}
                        </span>
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Selected Work Section - Exact UI Look from Screenshots */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="flex flex-col gap-10 scroll-mt-20"
        >
          {/* Centered Heading: Selected work */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text-base">
              Selected <span className="text-primary text-gradient">work</span>
            </h2>
          </div>

          {/* Featured Live Projects - Top Row from Screenshot 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
            {/* Project 1: Personal Portfolio */}
            <div className="flex flex-col justify-between rounded-3xl border border-card-border bg-[#0e111d]/90 hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-primary/10 overflow-hidden group">
              <div className="overflow-hidden border-b border-card-border/60">
                <BrowserHeader url="dardmaan.vercel.app" />
                <PortfolioPreview />
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow gap-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-text-base mb-2 group-hover:text-primary transition-colors">
                    Personal Portfolio
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    A premium, fully interactive, and responsive portfolio showcasing skills, projects, and competitive programming achievements.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['React', 'Tailwind CSS', 'Vite'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://portfolio-9xljh8dtw-dardmaan-singhs-projects.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-white text-xs sm:text-sm bg-[#8b5cf6] hover:bg-[#7c3aed] transition-all shadow-md hover:shadow-purple-500/25 cursor-pointer"
                  >
                    Live Demo
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/dardmaansingh/portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-text-base text-xs sm:text-sm border border-card-border bg-card-bg hover:bg-white/10 dark:hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: Neuzy */}
            <div className="flex flex-col justify-between rounded-3xl border border-card-border bg-[#0e111d]/90 hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-primary/10 overflow-hidden group">
              <div className="overflow-hidden border-b border-card-border/60">
                <BrowserHeader url="neuzy.vercel.app" />
                <NeuzyPreview />
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow gap-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-text-base mb-2 group-hover:text-primary transition-colors">
                    Neuzy
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    A modern, responsive news platform built with React, presenting users with the latest headlines and articles.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['React', 'REST API', 'Tailwind CSS'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://neuzy.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-white text-xs sm:text-sm bg-[#8b5cf6] hover:bg-[#7c3aed] transition-all shadow-md hover:shadow-purple-500/25 cursor-pointer"
                  >
                    Live Demo
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://github.com/dardmaansingh/Neuzy"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-text-base text-xs sm:text-sm border border-card-border bg-card-bg hover:bg-white/10 dark:hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: OrbitBoard (Live 3D Habit Tracker with Browser Mockup) */}
          <div className="flex flex-col justify-between rounded-3xl border border-card-border bg-[#0e111d]/90 hover:border-primary/40 transition-all duration-300 shadow-xl hover:shadow-primary/10 overflow-hidden group font-sans">
            <div className="overflow-hidden border-b border-card-border/60">
              <BrowserHeader url="orbitbourd.vercel.app" />
              <OrbitBoardPreview />
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow gap-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-text-base mb-2 group-hover:text-primary transition-colors">
                  OrbitBoard — 3D Habit Tracker
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  A habit tracking web app where you track habit status by visualizing planets orbiting the sun in real-time, built using Three.js.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['React', 'Three.js', 'Tailwind CSS'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://orbitbourd.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-white text-xs sm:text-sm bg-[#8b5cf6] hover:bg-[#7c3aed] transition-all shadow-md hover:shadow-purple-500/25 cursor-pointer"
                >
                  Live Demo
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/dardmaansingh/OrbitBoard"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-text-base text-xs sm:text-sm border border-card-border bg-card-bg hover:bg-white/10 dark:hover:bg-white/5 transition-all cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Upcoming Section: Exact 2 Cards from Screenshot 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
            {/* Card 4: Algorithmic Tool */}
            <div className="flex flex-col items-center justify-center text-center p-8 sm:p-14 rounded-3xl border border-card-border bg-[#0e111d]/60 hover:bg-[#0e111d]/90 hover:border-primary/40 transition-all duration-300 min-h-[260px] shadow-lg">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-4">
                <span>✨</span> Coming soon
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-text-base mb-2">
                Algorithmic Tool
              </h3>
              <p className="text-sm text-text-muted max-w-sm mx-auto mb-6 leading-relaxed">
                Details and code repository will be revealed upon release.
              </p>
              <div className="flex items-center justify-center gap-2">
                {['C++', 'DSA'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 5: System Integration */}
            <div className="flex flex-col items-center justify-center text-center p-8 sm:p-14 rounded-3xl border border-card-border bg-[#0e111d]/60 hover:bg-[#0e111d]/90 hover:border-primary/40 transition-all duration-300 min-h-[260px] shadow-lg">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-4">
                <span>✨</span> Coming soon
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-text-base mb-2">
                System Integration
              </h3>
              <p className="text-sm text-text-muted max-w-sm mx-auto mb-6 leading-relaxed">
                Details and code repository will be revealed upon release.
              </p>
              <div className="flex items-center justify-center gap-2">
                {['Node.js', 'MongoDB'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact / Let's talk Section - Exact UI from Screenshot 3 + Enhanced Experience */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="flex flex-col gap-6 scroll-mt-20"
        >
          {/* Subtitle tag: • CONTACT • */}
          <div className="text-xs uppercase font-bold tracking-widest text-primary font-sans text-center">
            • CONTACT •
          </div>

          {/* Heading: Let's talk */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-text-base text-center mb-4">
            Let’s <span className="text-primary text-gradient">talk</span>
          </h2>

          {/* Center Contact Card matching Screenshot 3 */}
          <div className="relative max-w-2xl mx-auto w-full rounded-3xl border border-primary/20 bg-[#0e111d]/90 p-8 sm:p-12 text-center shadow-[0_0_60px_-15px_rgba(168,85,247,0.22)] backdrop-blur-md font-sans">
            <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
              Got an idea, a role, or just want to say hi? Drop a message — I reply quickly.
            </p>

            {/* Big Email Display with Mail Icon */}
            <div className="flex flex-col items-center gap-3 mb-8">
              <div
                onClick={copyEmail}
                className="group inline-flex items-center justify-center gap-3 cursor-pointer py-2 px-4 rounded-2xl hover:bg-white/5 transition-all select-none"
                title="Click to copy email address"
              >
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold font-sans text-text-base group-hover:text-primary transition-colors break-all">
                  dmaanwork@gmail.com
                </span>
              </div>

              {/* Action badges: Copy feedback & Direct Mailto */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-base px-3 py-1 rounded-full bg-card-bg border border-card-border hover:border-primary/40 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy Email'}
                </button>

                <a
                  href="mailto:dmaanwork@gmail.com"
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Compose Mail
                </a>
              </div>
            </div>

            {/* Social Icons row (LinkedIn, GitHub, Twitter) */}
            <div className="flex items-center justify-center gap-4">
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
                  icon: Twitter,
                  href: 'https://x.com/singhdardmaan',
                  label: 'Twitter / X'
                }
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-11 h-11 rounded-full border border-card-border bg-card-bg/60 flex items-center justify-center text-text-muted hover:text-text-base hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-200 shadow-sm cursor-pointer"
                  aria-label={soc.label}
                  title={soc.label}
                >
                  <soc.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Enhanced Experience: Expandable Direct Message Drawer */}
            <div className="mt-8 pt-6 border-t border-card-border/60">
              <button
                type="button"
                onClick={() => setShowDirectForm((prev) => !prev)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted hover:text-primary transition-colors cursor-pointer"
              >
                <span>Prefer to send a direct message here?</span>
                {showDirectForm ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              <AnimatePresence>
                {showDirectForm && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden text-left mt-6"
                  >
                    {!formSubmitted ? (
                      <form
                        id="contact-form"
                        onSubmit={handleFormSubmit}
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
                              className="w-full px-4 py-2.5 rounded-xl border border-input-border bg-input-bg text-text-base placeholder-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm font-medium"
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
                              className="w-full px-4 py-2.5 rounded-xl border border-input-border bg-input-bg text-text-base placeholder-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm font-medium"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col items-start gap-1.5">
                          <label htmlFor="message" className="text-xs font-semibold text-text-muted">
                            Your message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleFormChange}
                            required
                            disabled={isSubmitting}
                            rows={4}
                            placeholder="Tell me about your idea or role..."
                            className="w-full px-4 py-2.5 rounded-xl border border-input-border bg-input-bg text-text-base placeholder-text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all text-sm font-medium resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 font-semibold text-white rounded-full bg-signature-gradient hover:opacity-90 transition-all duration-200 cursor-pointer shadow-md w-full sm:w-auto self-start text-xs sm:text-sm disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5" />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center py-6 gap-3">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                          <Check className="w-6 h-6 stroke-[3]" />
                        </div>
                        <h4 className="text-lg font-bold font-display text-text-base">
                          Thank you, {formData.name}!
                        </h4>
                        <p className="text-xs text-text-muted max-w-sm">
                          Your message has been sent. I will get back to you at <strong>{formData.email}</strong> shortly.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setFormSubmitted(false)
                            setFormData({ name: '', email: '', message: '' })
                          }}
                          className="mt-2 px-4 py-1.5 rounded-full border border-card-border bg-card-bg hover:bg-white/10 text-xs font-semibold text-text-base cursor-pointer"
                        >
                          Send another message
                        </button>
                      </div>
                    )}
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
