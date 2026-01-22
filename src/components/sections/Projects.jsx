'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Projects() {
  const { projects, projectsSection } = profile
  const isExternal = (href = '') => /^https?:\/\//.test(href)

  return (
    <section id="projects" className="mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="section-title mb-12"
      >
        {projectsSection.title}
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
        {projects.map((project) => {
          const primaryLink = project.links.live || project.links.caseStudy || projectsSection.fallbackLink
          const hasRepo = Boolean(project.links.repo)
          return (
            <motion.article
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="glass-effect rounded-2xl overflow-hidden card-hover group"
            >
              {/* Project header */}
              <div className="h-40 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-teal-500/20 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/5 to-transparent" />
                <div className="text-5xl opacity-30 group-hover:scale-110 transition-transform">{projectsSection.cardSymbol}</div>
              </div>

              {/* Project content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-poppins font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6 font-inter">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
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
                    href={primaryLink}
                    target={isExternal(primaryLink) ? '_blank' : undefined}
                    rel={isExternal(primaryLink) ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-poppins font-semibold hover:shadow-lg transition-all text-sm"
                  >
                    <ExternalLink size={16} /> {projectsSection.primaryActionLabel}
                  </a>
                  {hasRepo && (
                    <a
                      href={project.links.repo}
                      target={isExternal(project.links.repo) ? '_blank' : undefined}
                      rel={isExternal(project.links.repo) ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-green-400/30 text-gray-300 font-poppins font-semibold hover:border-green-400/60 hover:text-white transition-all text-sm"
                    >
                      <Github size={16} /> {projectsSection.secondaryActionLabel}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          )
        })}
      </motion.div>
    </section>
  )
}
