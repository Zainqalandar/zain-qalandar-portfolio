'use client'
import { motion } from 'framer-motion'
import skills from '@/data/skills.json'

export default function Skills() {
  return (
    <section id="skills" className="mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-800 mb-6"
      >
        Technical Skills
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08 }
          }
        }}
        className="flex flex-wrap gap-3"
      >
        {skills.map(skill => (
          <motion.span
            key={skill}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-green-50 border shadow-sm hover:shadow-md transition cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
