'use client'
import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

export default function Skills() {
  const { skills } = profile

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  }

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -10 },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
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
        {skills.title}
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid gap-8 md:grid-cols-3"
      >
        {skills.categories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="glass-effect rounded-2xl p-6 md:p-8 card-hover group relative overflow-hidden"
            whileHover={{ 
              y: -8,
              boxShadow: '0 20px 50px rgba(34, 197, 94, 0.2)'
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Animated background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <motion.h3 
              className="text-lg font-poppins font-bold text-white mb-4 flex items-center gap-2 relative z-10"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400"
                whileHover={{ scale: 1.5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
              {category.title}
            </motion.h3>
            <motion.div 
              className="space-y-2 relative z-10"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 }
                }
              }}
              viewport={{ once: true }}
            >
              {category.items.map(skill => (
                <motion.div
                  key={skill}
                  variants={skillItemVariants}
                  className="text-sm px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 text-gray-300 hover:border-green-400/60 transition-all flex items-center gap-2 font-inter group/skill cursor-default"
                  whileHover={{
                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                    borderColor: 'rgba(34, 197, 94, 0.8)',
                    x: 4
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <motion.span 
                    className="text-green-400 font-bold"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    {skills.itemPrefix}
                  </motion.span>
                  <motion.span whileHover={{ color: '#86efac' }}>
                    {skill}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Proficiency Bars */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 glass-effect rounded-2xl p-8 hover:shadow-lg transition-shadow"
      >
        <motion.h3 
          className="text-lg font-poppins font-bold text-white mb-6"
          whileInView={{ x: 0 }}
          initial={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {skills.proficiency.title}
        </motion.h3>
        <div className="space-y-6">
          {skills.proficiency.items.map((skill, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-default"
            >
              <div className="flex justify-between mb-2">
                <motion.span 
                  className="font-inter font-medium text-gray-300 group-hover:text-green-300 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {skill.name}
                </motion.span>
                <motion.span 
                  className="text-green-400 font-poppins font-semibold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden relative group-hover:shadow-md transition-shadow">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-500/50"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
