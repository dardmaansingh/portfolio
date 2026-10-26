import { ExternalLink, Globe, Github } from 'lucide-react'

export function BrowserHeader({ url }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-[#0e111c]/90 rounded-t-2xl">
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <span className="w-3 h-3 rounded-full bg-[#ef4444]/90" />
        <span className="w-3 h-3 rounded-full bg-[#eab308]/90" />
        <span className="w-3 h-3 rounded-full bg-[#22c55e]/90" />
      </div>
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/5 text-[11px] font-mono text-text-muted/80 w-fit max-w-[220px] sm:max-w-[260px] truncate select-none">
        <Globe className="w-3 h-3 text-text-muted/70 flex-shrink-0" />
        <span className="truncate">{url}</span>
      </div>
    </div>
  )
}

// Crisp, authentic mini-preview for Personal Portfolio
export function PortfolioPreview() {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#10131f] text-white overflow-hidden p-4 sm:p-5 select-none font-sans flex flex-col justify-between">
      {/* Background glow matching the real site */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-36 h-36 bg-purple-600/30 rounded-full blur-2xl pointer-events-none" />

      {/* Mini navbar */}
      <div className="flex items-center justify-between text-[8px] sm:text-[9px] text-gray-400 border-b border-white/5 pb-2 relative z-10">
        <div className="font-bold text-white flex items-center gap-0.5 tracking-tight">
          Dardmaan<span className="w-1 h-1 rounded-full bg-purple-500 inline-block" />
        </div>
        <div className="flex items-center gap-2 font-medium">
          <span className="text-white">Home</span>
          <span>About</span>
          <span>Skills</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
      </div>

      {/* Mini Hero Body */}
      <div className="grid grid-cols-12 items-center gap-2 my-auto relative z-10">
        <div className="col-span-8 flex flex-col items-start gap-1">
          <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[6.5px] sm:text-[7.5px] font-semibold">
            <span className="w-1 h-1 rounded-full bg-purple-400 animate-pulse" />
            Available for work
          </div>

          <h4 className="text-xs sm:text-base font-bold font-display leading-tight tracking-tight mt-0.5">
            Dardmaan <br />
            <span className="text-purple-400">Singh</span>
          </h4>

          <p className="text-[7px] sm:text-[8px] text-purple-300 font-semibold leading-none">
            I'm a MERN Stack Developer
          </p>

          <p className="text-[6px] sm:text-[7px] text-gray-400 line-clamp-2 max-w-[200px] leading-tight mt-0.5">
            A MERN stack developer building full-stack web apps with MongoDB, Express, React, and Node.js.
          </p>

          <div className="flex items-center gap-1.5 mt-1">
            <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[6.5px] font-semibold">
              My Works →
            </span>
            <span className="px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-[6.5px]">
              Let's talk
            </span>
          </div>
        </div>

        {/* Mini Portrait Blob */}
        <div className="col-span-4 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/40 rounded-full blur-md scale-110" />
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-[45%_55%_60%_40%/50%_60%_40%_50%] border-2 border-purple-400/40 overflow-hidden relative shadow-md bg-purple-900/50">
              <img
                src="/dard.png"
                alt="Mini Dardmaan portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[7px] text-gray-500 pt-1">
        <span>⚡ Portfolio v2.0</span>
      </div>
    </div>
  )
}

// Crisp, authentic mini-preview for Neuzy News platform (matching screenshot 1)
export function NeuzyPreview() {
  return (
    <div className="relative w-full aspect-[16/10] bg-white text-gray-900 overflow-hidden select-none font-sans flex flex-col justify-between">
      {/* Top News Header */}
      <div className="px-3 py-1.5 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-red-600 font-serif font-black text-xs sm:text-sm tracking-tight">Neuzy</span>
          <div className="hidden sm:flex items-center gap-1.5 text-[6.5px] font-bold text-gray-500 tracking-wider">
            <span>GENERAL</span>
            <span>BUSINESS</span>
            <span>TECH</span>
            <span>SPORTS</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[7px] text-gray-400">
          <span className="bg-gray-100 px-1.5 py-0.5 rounded text-[6px]">Search news...</span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
        </div>
      </div>

      {/* News Content Body */}
      <div className="p-3 grid grid-cols-12 gap-2 my-auto">
        {/* Main Article */}
        <div className="col-span-8 flex flex-col gap-1 text-left">
          <div className="relative w-full h-16 sm:h-20 bg-gray-200 rounded overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=500&auto=format&fit=crop&q=60"
              alt="News article preview"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-1 left-1 bg-red-600 text-white font-bold text-[5.5px] px-1 py-0.5 rounded-sm">
              BREAKING NEWS
            </span>
          </div>

          <h5 className="font-serif font-bold text-[7.5px] sm:text-[9.5px] leading-tight text-gray-900 line-clamp-2 mt-0.5">
            Letter from Thomas Markle Sr. to ex-wife reportedly confessed he went to the Far East
          </h5>
          <p className="text-[6px] text-gray-500 line-clamp-1 leading-none">
            The legal age of consent in the Philippines was 12 years old in 2019...
          </p>
          <span className="text-[6px] text-red-600 font-bold">Read Full Story →</span>
        </div>

        {/* Sidebar */}
        <div className="col-span-4 border-l border-gray-100 pl-2 flex flex-col gap-1 text-left">
          <div className="flex items-center justify-between border-b border-gray-100 pb-0.5">
            <span className="font-bold text-[6.5px] text-gray-800">Trending</span>
            <span className="text-[5.5px] text-red-500 font-bold">LIVE</span>
          </div>

          <div className="flex items-center gap-1 bg-gray-50 p-1 rounded">
            <div className="w-4 h-4 bg-gray-300 rounded flex-shrink-0" />
            <div className="text-[5.5px] text-gray-700 leading-tight line-clamp-2 font-medium">
              Coast Edge Texas in Overtime Thriller
            </div>
          </div>

          <div className="flex items-center gap-1 bg-gray-50 p-1 rounded">
            <div className="w-4 h-4 bg-gray-300 rounded flex-shrink-0" />
            <div className="text-[5.5px] text-gray-700 leading-tight line-clamp-2 font-medium">
              10 tech things you’ll get a kick out of this week
            </div>
          </div>

          <div className="text-[5px] text-gray-400 mt-auto">AP News Summary at 3:00 PM EDT</div>
        </div>
      </div>

      <div className="px-3 py-1 bg-gray-50 border-t border-gray-100 text-[6px] text-gray-400 flex justify-between">
        <span>Editor's Pick: World & Markets</span>
        <span>Updated 2m ago</span>
      </div>
    </div>
  )
}

// Crisp mini-preview for OrbitBoard — 3D Habit Tracker
export function OrbitBoardPreview() {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#070814] text-white overflow-hidden select-none font-sans flex flex-col justify-between p-3 sm:p-4">
      {/* Starry background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/30 via-[#070814] to-[#04050a] pointer-events-none" />
      
      {/* Tiny stars */}
      <div className="absolute top-2 left-6 w-1 h-1 bg-white/70 rounded-full animate-ping" />
      <div className="absolute top-10 right-10 w-1 h-1 bg-cyan-300/60 rounded-full" />
      <div className="absolute bottom-8 left-14 w-1.5 h-1.5 bg-purple-300/60 rounded-full" />
      <div className="absolute top-6 left-1/2 w-1 h-1 bg-yellow-200/50 rounded-full" />

      {/* Orbit Board HUD Header */}
      <div className="flex items-center justify-between text-[7.5px] border-b border-white/10 pb-1.5 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="font-bold tracking-wider text-cyan-300">ORBITBOARD 3D</span>
        </div>
        <div className="flex items-center gap-2 text-[6.5px] text-gray-400 font-mono">
          <span className="text-emerald-400">● 18 Day Streak</span>
          <span>4 Habit Orbits</span>
        </div>
      </div>

      {/* 3D Solar System habit tracker visual */}
      <div className="relative flex items-center justify-center my-auto h-24 sm:h-28 z-10">
        {/* Orbit ring 3 */}
        <div className="absolute w-44 sm:w-56 h-14 sm:h-18 rounded-[50%] border border-cyan-500/20 transform -rotate-12 flex items-center justify-start">
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] -ml-1" />
        </div>

        {/* Orbit ring 2 */}
        <div className="absolute w-32 sm:w-40 h-10 sm:h-14 rounded-[50%] border border-purple-500/30 transform -rotate-12 flex items-center justify-end">
          <div className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc] -mr-1" />
        </div>

        {/* Orbit ring 1 */}
        <div className="absolute w-20 sm:w-26 h-7 sm:h-9 rounded-[50%] border border-emerald-500/30 transform -rotate-12 flex items-center justify-start">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] -ml-0.5" />
        </div>

        {/* Center Glowing Sun */}
        <div className="relative flex items-center justify-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-amber-400 to-yellow-200 shadow-[0_0_20px_#f59e0b] animate-pulse" />
          <div className="absolute text-[6px] font-bold text-amber-950">HABIT</div>
        </div>
      </div>

      {/* OrbitBoard status cards */}
      <div className="flex items-center justify-between text-[6.5px] text-gray-400 relative z-10 border-t border-white/5 pt-1">
        <span className="text-cyan-400">Three.js Solar Visualization</span>
        <span className="font-mono">Sync: Active</span>
      </div>
    </div>
  )
}
