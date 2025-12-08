'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import projects from '@/data/projects.json'

export default function Projects() {
  return (
    <section id="projects" className="mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-title mb-12"
      >
        Featured Projects
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } }
        }}
        className="grid gap-8 md:grid-cols-2 mt-8"
      >
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="glass-effect rounded-2xl overflow-hidden card-hover group"
          >
            {/* Project header */}
            <div className="h-40 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-teal-500/20 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/5 to-transparent" />
              <div className="text-5xl opacity-30 group-hover:scale-110 transition-transform">#</div>
            </div>

            {/* Project content */}
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-poppins font-bold text-white mb-2">{p.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6 font-inter">{p.desc}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 font-inter font-semibold border border-green-400/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={p.link}
                  target={p.link !== '#' ? '_blank' : undefined}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-poppins font-semibold hover:shadow-lg transition-all text-sm"
                >
                  <ExternalLink size={16} /> View Project
                </a>
                {p.link !== '#' && (
                  <a
                    href={p.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-green-400/30 text-gray-300 font-poppins font-semibold hover:border-green-400/60 hover:text-white transition-all text-sm"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
