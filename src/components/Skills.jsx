'use client'
import { motion } from 'framer-motion'
import skills from '@/data/skills.json'

export default function Skills() {
  const skillCategories = {
    'Frontend': ['JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS', 'MUI'],
    'Backend': ['Node.js', 'Express', 'MongoDB', 'Appwrite'],
    'Tools & Others': ['Redux Toolkit', 'Git', 'Vercel']
  }

  return (
    <section id="skills" className="mt-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={{ marginBottom: 32 }}
        className="section-title mb-12"
      >
        Technical Skills
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        }}
        className="grid gap-8 md:grid-cols-3"
      >
        {Object.entries(skillCategories).map(([category, categorySkills]) => (
          <motion.div
            key={category}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="glass-effect rounded-2xl p-6 md:p-8 card-hover"
          >
            <h3 className="text-lg font-poppins font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400" />
              {category}
            </h3>
            <div className="space-y-2">
              {categorySkills.map(skill => (
                <div
                  key={skill}
                  className="text-sm px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 text-gray-300 hover:border-green-400/60 transition-colors flex items-center gap-2 font-inter"
                >
                  <span className="text-green-400">✓</span>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Proficiency Bars */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 glass-effect rounded-2xl p-8"
      >
        <h3 className="text-lg font-poppins font-bold text-white mb-6">Proficiency Level</h3>
        <div className="space-y-6">
          {[
            { name: 'React & Next.js', level: 95 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'JavaScript/ES6+', level: 90 },
            { name: 'Node.js & Express', level: 85 },
            { name: 'MongoDB', level: 85 }
          ].map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-2">
                <span className="font-inter font-medium text-gray-300">{skill.name}</span>
                <span className="text-green-400 font-poppins font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
