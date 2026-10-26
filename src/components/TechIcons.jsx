// Authentic brand SVG logos for technologies
export function ReactIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  )
}

export function NextjsIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 180 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#next-mask)">
        <circle cx="90" cy="90" r="90" fill="currentColor" />
        <path d="M149.508 157.438L69.1478 54H54V125.979H66.6973V69.4797L139.563 164.846C143.08 162.602 146.409 160.12 149.508 157.438Z" fill="var(--bg-color, #10131f)" />
        <rect x="115" y="54" width="12.7" height="71.9789" fill="var(--bg-color, #10131f)" />
      </g>
    </svg>
  )
}

export function TypeScriptIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="16" fill="#3178C6" />
      <path d="M68.88 56.55h15.93V104h11.96V56.55h15.93V46H68.88v10.55zm-15.14 15.3c0-4.04-1.42-7.14-4.26-9.3-2.84-2.15-7.15-3.69-12.92-4.61-4.14-.65-7.1-1.63-8.87-2.94-1.78-1.3-2.67-3.08-2.67-5.32 0-2.42 1.05-4.32 3.16-5.7 2.1-1.39 5.09-2.08 8.95-2.08 3.73 0 6.94.75 9.63 2.25 2.69 1.5 4.41 3.71 5.17 6.64l10.9-4.35c-1.38-4.52-4.22-8.08-8.52-10.68-4.3-2.6-9.87-3.9-16.71-3.9-7.39 0-13.43 1.63-18.11 4.9-4.68 3.27-7.02 7.84-7.02 13.71 0 4.79 1.48 8.49 4.44 11.11 2.96 2.62 7.54 4.44 13.73 5.46 4.3.71 7.42 1.76 9.35 3.16 1.93 1.4 2.89 3.32 2.89 5.76 0 2.54-1.12 4.54-3.37 6-2.25 1.46-5.55 2.19-9.9 2.19-4.79 0-8.8-1.07-12.03-3.21-3.23-2.14-5.32-5.46-6.27-9.96l-11.23 4.21c1.55 6.27 4.96 10.96 10.22 14.07 5.27 3.11 11.83 4.67 19.69 4.67 7.97 0 14.39-1.69 19.26-5.07 4.87-3.37 7.3-8.15 7.3-14.33z" fill="#FFFFFF" />
    </svg>
  )
}

export function JavaScriptIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="16" fill="#F7DF1E" />
      <path d="M68.88 56.55h15.93V104h11.96V56.55h15.93V46H68.88v10.55zm-15.14 15.3c0-4.04-1.42-7.14-4.26-9.3-2.84-2.15-7.15-3.69-12.92-4.61-4.14-.65-7.1-1.63-8.87-2.94-1.78-1.3-2.67-3.08-2.67-5.32 0-2.42 1.05-4.32 3.16-5.7 2.1-1.39 5.09-2.08 8.95-2.08 3.73 0 6.94.75 9.63 2.25 2.69 1.5 4.41 3.71 5.17 6.64l10.9-4.35c-1.38-4.52-4.22-8.08-8.52-10.68-4.3-2.6-9.87-3.9-16.71-3.9-7.39 0-13.43 1.63-18.11 4.9-4.68 3.27-7.02 7.84-7.02 13.71 0 4.79 1.48 8.49 4.44 11.11 2.96 2.62 7.54 4.44 13.73 5.46 4.3.71 7.42 1.76 9.35 3.16 1.93 1.4 2.89 3.32 2.89 5.76 0 2.54-1.12 4.54-3.37 6-2.25 1.46-5.55 2.19-9.9 2.19-4.79 0-8.8-1.07-12.03-3.21-3.23-2.14-5.32-5.46-6.27-9.96l-11.23 4.21c1.55 6.27 4.96 10.96 10.22 14.07 5.27 3.11 11.83 4.67 19.69 4.67 7.97 0 14.39-1.69 19.26-5.07 4.87-3.37 7.3-8.15 7.3-14.33z" fill="#000000" />
      <path d="M26.35 104V46h12.5v47.28c0 3.21.72 5.51 2.16 6.91 1.44 1.4 3.7 2.1 6.77 2.1 2.8 0 5.03-.66 6.68-1.99 1.65-1.33 2.54-3.24 2.66-5.74V46h12.5v48.24c0 6.65-2.22 11.75-6.66 15.3-4.44 3.55-10.74 5.33-18.9 5.33-7.79 0-13.77-1.74-17.94-5.23-4.17-3.49-6.26-8.5-6.26-15.04z" fill="#000000" />
    </svg>
  )
}

export function TailwindIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8" />
    </svg>
  )
}

export function ThreejsIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 12L116 102H12L64 12Z" stroke="currentColor" strokeWidth="10" strokeLinejoin="round" fill="none" />
      <path d="M64 42L92 90H36L64 42Z" fill="#a855f7" />
    </svg>
  )
}

export function Html5Icon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.234-2.625h11.203L19.75 4.5H4.25l.68 7.875h10.422l-.375 4.125-3.031.844-3.031-.844-.188-2.25H6.125l.375 4.125L11.977 20l5.477-1.594.75-8.656H8.531z" fill="#E34F26" />
    </svg>
  )
}

export function Css3Icon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.5H5.41l.24 2.625h11.98l-.24 2.625H6.13l.24 2.625h9.54l-.45 4.969-3.483.969-3.484-.969-.225-2.531H6.125l.406 4.594 5.446 1.516 5.445-1.516.906-10.25.24-2.625.212-2.008z" fill="#1572B6" />
    </svg>
  )
}

export function NodejsIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L3 9.5V22.5L16 30L29 22.5V9.5L16 2Z" fill="#539E43" />
      <path d="M16 4.3L5 10.6V21.4L16 27.7L27 21.4V10.6L16 4.3Z" fill="#333333" />
      <path d="M16 11C13.2 11 11 13.2 11 16C11 18.8 13.2 21 16 21C18.8 21 21 18.8 21 16C21 13.2 18.8 11 16 11ZM16 19C14.3 19 13 17.7 13 16C13 14.3 14.3 13 16 13C17.7 13 19 14.3 19 16C19 17.7 17.7 19 16 19Z" fill="#539E43" />
    </svg>
  )
}

export function ExpressIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="16" fill="currentColor" fillOpacity="0.1" />
      <text x="64" y="78" fontSize="42" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" fill="currentColor">
        ex
      </text>
    </svg>
  )
}

export function MongodbIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C12 0 5 7.5 5 14.5C5 18.64 8.13 22 12 24C15.87 22 19 18.64 19 14.5C19 7.5 12 0 12 0ZM12 21.8C9.35 20.15 7.2 17.47 7.2 14.5C7.2 9.5 12 4.1 12 4.1C12 4.1 16.8 9.5 16.8 14.5C16.8 17.47 14.65 20.15 12 21.8Z" fill="#47A248" />
      <path d="M12 4.1V21.8C12 21.8 12 14 12 4.1Z" fill="#3FA037" />
    </svg>
  )
}

export function PostgresqlIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="60" fill="#336791" />
      <path d="M64 24c-19.8 0-36 15.2-36 34 0 13.5 8.2 25.2 20.4 30.6.7 1.8 1.6 3.7 2.8 5.4-2.8 1-5.7 1.7-8.8 2.2l1.6 4.8c4.6-.7 9-1.8 13-3.3 2.2 1 4.6 1.7 7 2.1V94c-1.8-.3-3.6-.8-5.2-1.5 2.1-2.9 3.5-6.3 4.2-10 1.3-.1 2.6-.1 3.9-.1 17.7 0 32-13.4 32-30S83.8 24 64 24zm-6 26c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm16 0c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z" fill="#FFFFFF" />
    </svg>
  )
}

export function CppIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 128 128" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M116.5 33.7L67.7 5.5c-2.3-1.3-5.1-1.3-7.4 0L11.5 33.7C9.2 35 7.8 37.4 7.8 40v56.5c0 2.6 1.4 5 3.7 6.3l48.8 28.2c2.3 1.3 5.1 1.3 7.4 0l48.8-28.2c2.3-1.3 3.7-3.7 3.7-6.3V40c0-2.6-1.4-5-3.7-6.3z" fill="#00599C" />
      <path d="M64 25.5C42.8 25.5 25.5 42.8 25.5 64s17.3 38.5 38.5 38.5c15.2 0 28.4-8.8 34.6-21.7l-15.6-9c-3.6 7.4-11.2 12.5-20.1 12.5-12.3 0-22.3-10-22.3-22.3s10-22.3 22.3-22.3c8.9 0 16.5 5.1 20.1 12.5l15.6-9C92.4 34.3 79.2 25.5 64 25.5z" fill="#FFFFFF" />
      <path d="M89 59h5v-5h4v5h5v4h-5v5h-4v-5h-5v-4zm18 0h5v-5h4v5h5v4h-5v5h-4v-5h-5v-4z" fill="#004482" />
    </svg>
  )
}

export function GitIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l3.088 3.09c.642-.218 1.385-.077 1.901.438.779.779.779 2.05 0 2.829-.779.779-2.05.779-2.829 0-.54-.539-.672-1.32-.399-1.981l-2.88-2.88v6.78c.218.106.418.255.578.416.78.78.78 2.051 0 2.83-.78.78-2.05.78-2.83 0-.78-.779-.78-2.05 0-2.83.18-.18.39-.319.62-.42v-6.84c-.23-.1-.44-.24-.62-.42-.54-.54-.67-1.32-.4-1.98L7.02 4.316.454 10.88c-.604.604-.604 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.187 0l10.425-10.424c.604-.604.604-1.582 0-2.188z" fill="#F05032" />
    </svg>
  )
}

export function FigmaIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" />
      <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" />
      <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" />
      <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262" />
      <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" />
    </svg>
  )
}

export function VscodeIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472.013a1.45 1.45 0 0 0-.962.378L7.85 8.163 3.69 4.978a1.05 1.05 0 0 0-1.18-.088 1.05 1.05 0 0 0-.51.916v12.388c0 .384.195.738.51.916.315.178.706.147 1.18-.088l4.16-3.185 8.66 7.772c.48.43 1.18.52 1.75.22.58-.3.94-.89.94-1.54V1.53c0-.65-.36-1.24-.94-1.54a1.8 1.8 0 0 0-.788-.023zM16.5 5.5l-6 6.5 6 6.5V5.5z" fill="#007ACC" />
    </svg>
  )
}

export function CodeforcesIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 9.5C4.5 8.67 5.17 8 6 8H7C7.83 8 8.5 8.67 8.5 9.5V20H4.5V9.5Z" fill="#FFD400" />
      <path d="M10 4.5C10 3.67 10.67 3 11.5 3H12.5C13.33 3 14 3.67 14 4.5V20H10V4.5Z" fill="#188EE9" />
      <path d="M15.5 13.5C15.5 12.67 16.17 12 17 12H18C18.83 12 19.5 12.67 19.5 13.5V20H15.5V13.5Z" fill="#EC1C24" />
    </svg>
  )
}

export function RestApiIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  )
}

export function DsaIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="5" r="3" />
      <circle cx="6" cy="19" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.5" y1="17" x2="10.5" y2="7.5" />
      <line x1="15.5" y1="17" x2="13.5" y2="7.5" />
    </svg>
  )
}

