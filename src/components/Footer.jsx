'use client'
import { Github, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 bg-white/70 backdrop-blur-md border-t shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} Syed Zain Qalandar
        </div>

        <div className="flex gap-5 text-sm items-center">
          <a
            href="https://instagram.com/zainqalandar.brand"
            target="_blank"
            className="flex items-center gap-1 hover:text-pink-500 transition-colors"
          >
            <Instagram size={16} /> Instagram
          </a>
          <a
            href="https://github.com/Zainqalandar"
            target="_blank"
            className="flex items-center gap-1 hover:text-gray-900 transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
