'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-white/70 via-white/60 to-white/50 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-green-400 shadow-md hover:scale-105 transition-transform">
            <Image src="/images/profile.png" alt="Zain" width={44} height={44} />
          </div>
          <div>
            <div className="text-base font-bold text-gray-800">Syed Zain Qalandar</div>
            <div className="text-xs text-gray-500">Full-Stack (MERN) Developer</div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            className="ml-4 px-4 py-1.5 rounded-md border border-green-400 bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            Resume
          </a>
        </nav>

        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition" 
          onClick={() => setOpen(!open)} 
          aria-label="menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 bg-white/90 backdrop-blur-xl shadow-md"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-700 hover:text-green-600 font-medium transition"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/resume.pdf" 
                className="px-4 py-2 rounded-md border border-green-400 bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow hover:scale-105 transition"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
