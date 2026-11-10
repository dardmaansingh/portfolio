import { motion, AnimatePresence } from 'motion/react'
import { X, Download, Printer, ExternalLink } from 'lucide-react'

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#0f1322] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#141829] flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="text-sm sm:text-base font-bold text-white font-display">
                Dardmaan Singh — Resume Preview
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-gray-200 text-xs font-semibold transition-all cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-primary" />
                Print / Save PDF
              </button>

              <a
                href="/assets/Dardmaan_Singh_Resume.docx"
                download="Dardmaan_Singh_Resume.docx"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-all shadow-md cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Download (.docx)
              </a>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Body (Clean ATS Paper Styling) */}
          <div className="overflow-y-auto p-4 sm:p-8 bg-[#0b0e19]">
            <div className="max-w-3xl mx-auto bg-white text-gray-900 rounded-lg shadow-xl p-6 sm:p-10 font-sans text-xs sm:text-[13px] leading-relaxed select-text">
              {/* Header */}
              <div className="text-center border-b border-gray-200 pb-4 mb-4">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-1">
                  DARDMAAN SINGH
                </h1>
                <p className="text-gray-600 text-[11px] sm:text-xs flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                  <span>Jammu, Jammu &amp; Kashmir, India</span>
                  <span>•</span>
                  <span>8492982307</span>
                  <span>•</span>
                  <a href="mailto:dmaanwork@gmail.com" className="text-purple-700 hover:underline">
                    dmaanwork@gmail.com
                  </a>
                  <span>•</span>
                  <a
                    href="https://www.linkedin.com/in/dardmaan-singh-13a3aa318"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-700 hover:underline"
                  >
                    LinkedIn
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/dardmaansingh"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-700 hover:underline"
                  >
                    GitHub
                  </a>
                  <span>•</span>
                  <a
                    href="https://portfolio-9xljh8dtw-dardmaan-singhs-projects.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-700 hover:underline"
                  >
                    Portfolio
                  </a>
                </p>
              </div>

              {/* Summary */}
              <div className="mb-4">
                <h2 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-2">
                  Summary
                </h2>
                <p className="text-gray-700 text-justify">
                  MERN stack developer who builds full-stack apps with <strong>React, Node.js, Express.js, and MongoDB</strong>, including secure <strong>JWT authentication, REST APIs, and Cloudinary file storage</strong>. 300+ DSA problems solved on <strong>LeetCode and Codeforces</strong>, backed by strong C/C++ fundamentals.
                </p>
              </div>

              {/* Education */}
              <div className="mb-4">
                <h2 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-2">
                  Education
                </h2>
                <div className="flex justify-between items-baseline font-bold text-gray-900">
                  <span>KLE Technological University, Hubballi, Karnataka</span>
                  <span className="text-[11px] text-gray-600 font-normal">Aug 2024 – May 2028</span>
                </div>
                <div className="flex justify-between items-baseline text-gray-700">
                  <span>Bachelor of Engineering in Computer Science</span>
                  <span className="font-semibold text-gray-900">CGPA: 8.11</span>
                </div>
                <p className="text-gray-600 text-[11px] mt-0.5">
                  <strong>Relevant Coursework:</strong> Data Structures and Algorithms, OOP, DBMS, Operating Systems
                </p>
              </div>

              {/* Project Experience */}
              <div className="mb-4">
                <h2 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-2">
                  Project Experience
                </h2>

                {/* YuBu */}
                <div className="mb-3.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-gray-900 text-[13px] sm:text-sm">
                      YuBu – Peer Resume Review Platform
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <a
                        href="https://yu-bu-g8nd.vercel.app/login"
                        target="_blank"
                        rel="noreferrer"
                        className="text-purple-700 font-semibold hover:underline inline-flex items-center gap-0.5"
                      >
                        Live Demo
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                      <span className="text-gray-400">|</span>
                      <a
                        href="https://github.com/dardmaansingh/YuBu"
                        target="_blank"
                        rel="noreferrer"
                        className="text-purple-700 font-semibold hover:underline inline-flex items-center gap-0.5"
                      >
                        GitHub
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-[11px] mb-1">
                    Full-stack peer resume review platform built with the MERN stack and Cloudinary, deployed on Vercel.
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-gray-700">
                    <li>
                      Built a full-stack <strong>MERN platform</strong> where developers upload resume PDFs and peers review them through an <strong>embedded PDF preview, 1–5 star ratings</strong>, and <strong>section-wise feedback</strong>.
                    </li>
                    <li>
                      Secured the app with <strong>JWT access/refresh token rotation</strong> in <strong>httpOnly, SameSite=Lax cookies</strong>, bcrypt hashing, and <strong>verifyJWT</strong> route protection.
                    </li>
                    <li>
                      Enforced one review per user per resume with a <strong>compound unique index</strong>, <strong>blocked self-reviews</strong>, and added a <strong>reputation system</strong> (+1 per review via atomic $inc).
                    </li>
                    <li>
                      Built a versioned <strong>REST API (/api/v1)</strong> with <strong>Multer + Cloudinary uploads</strong>, Mongoose schemas, and centralized error handling; deployed on <strong>Vercel</strong>.
                    </li>
                  </ul>
                </div>

                {/* Neuzy */}
                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-gray-900 text-[13px] sm:text-sm">
                      Neuzy
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <a
                        href="https://neuzy.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-purple-700 font-semibold hover:underline inline-flex items-center gap-0.5"
                      >
                        Live Demo
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                      <span className="text-gray-400">|</span>
                      <a
                        href="https://github.com/dardmaansingh/Neuzy"
                        target="_blank"
                        rel="noreferrer"
                        className="text-purple-700 font-semibold hover:underline inline-flex items-center gap-0.5"
                      >
                        GitHub
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                      <span className="text-gray-400">|</span>
                      <span className="text-gray-500 font-normal">Mar 2026</span>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-[11px] mb-1">
                    React 19, Vite, Tailwind CSS v4, Axios, React Router
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-gray-700">
                    <li>
                      Integrated a <strong>dual-API architecture</strong>: <strong>NewsData.io</strong> for real-time global news, category feeds, and search, plus a live weather API for current conditions in the header, fetched in parallel via <strong>Axios</strong>.
                    </li>
                    <li>
                      Built an editorial-style SPA with <strong>React 19, Vite, and Tailwind CSS v4</strong>, with <strong>adaptive dark/light modes</strong> and skeleton loaders.
                    </li>
                    <li>
                      Implemented routing with <strong>React Router v7</strong>: Home, category filters, article detail with state caching, query-based search, bookmarks, and 404 handling.
                    </li>
                    <li>
                      Designed a centralized <strong>Axios service layer</strong>, <strong>custom hooks</strong> (debouncing, localStorage sync, data fetching, infinite scroll), and <strong>Context API</strong> state for bookmarks and theme.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mb-4">
                <h2 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-2">
                  Technical Skills
                </h2>
                <div className="space-y-1 text-gray-700">
                  <p>
                    <strong>Languages:</strong> C, C++, JavaScript, Python (basic)
                  </p>
                  <p>
                    <strong>Frameworks/Libraries:</strong> React.js, Node.js, Express.js, Tailwind CSS, React Router, Axios, HTML, CSS
                  </p>
                  <p>
                    <strong>Backend/Database:</strong> MongoDB, PostgreSQL, Mongoose, REST APIs, JWT Authentication, Multer, Cloudinary, bcrypt
                  </p>
                  <p>
                    <strong>Tools/Concepts:</strong> Git, GitHub, VS Code, Vite, Vercel
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-0.5 mb-2">
                  Achievements
                </h2>
                <ul className="list-disc list-outside pl-4 space-y-1 text-gray-700">
                  <li>
                    Solved <strong>300+ problems across LeetCode and Codeforces</strong>, with regular contest participation and ongoing DSA practice in C++.
                  </li>
                  <li>
                    Attended <strong>3 national-level hackathons</strong>, securing a <strong>top 5 rank</strong> in two of them.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

