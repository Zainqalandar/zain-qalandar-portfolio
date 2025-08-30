'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'MERN E-Commerce',
    desc: 'Product CRUD, authentication (JWT), order flow, Redux state management.',
    tech: ['MongoDB','Express','React','Node','Tailwind'],
    link: '#'
  },
  {
    title: 'Web-Kayana (Frontend)',
    desc: 'Converted Figma designs to Next.js and Chakra UI components for KodeStudio.',
    tech: ['Next.js','Chakra UI','Axios'],
    link: 'https://hirekayana.com'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-800 mb-8"
      >
        Selected Projects
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur border shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
            <p className="mt-2 text-gray-600">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-green-50 border text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <a
                href={p.link}
                target="_blank"
                className="inline-block text-sm font-medium text-green-700 hover:text-green-900 underline"
              >
                Preview →
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
