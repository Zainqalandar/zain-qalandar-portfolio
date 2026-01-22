'use client'
import { Heart, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

export default function Footer() {
  const { footer } = profile
  const year = new Date().getFullYear()
  const copyright = footer.copyrightTemplate.replace('{year}', `${year}`)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <footer className="relative z-10 mt-20">
      {/* Gradient divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent origin-left"
      />

      <div className="glass-effect border-t border-white/10 backdrop-blur-xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 py-12 md:py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-poppins font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                {footer.brandName}
              </h3>
              <p className="text-gray-300 text-sm font-inter">
                {footer.tagline}
              </p>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mt-3 text-green-400"
              >
                <Heart size={16} fill="currentColor" />
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <h4 className="text-white font-poppins font-semibold mb-4">{footer.quickLinksTitle}</h4>
              <div className="space-y-2 text-center">
                {footer.quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-300 hover:text-green-400 transition-colors text-sm font-inter"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end">
              <h4 className="text-white font-poppins font-semibold mb-4">{footer.socialTitle}</h4>
              <motion.div
                className="flex gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {footer.socialLinks.map((social) => {
                  const Icon = social.icon
                  const isExternal = social.href.startsWith('http')
                  return (
                    <motion.a
                      key={social.label}
                      variants={itemVariants}
                      href={social.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className={social.className}
                      title={social.label}
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-gray-300 font-inter"
            >
              {copyright}
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-xs text-gray-400 font-inter"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span>{footer.madeWithPrefix}</span>
              <Heart size={14} className="text-green-400" fill="currentColor" />
              <span>{footer.madeWithSuffix}</span>
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg border border-white/20 text-gray-300 hover:text-green-400 hover:border-green-500/50 transition-all duration-300"
              title={footer.backToTopLabel}
              aria-label={footer.backToTopLabel}
            >
              <ArrowUp size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating background elements */}
      <motion.div
        animate={{ opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -z-10"
      />
    </footer>
  )
}
