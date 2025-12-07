'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [hoveredField, setHoveredField] = useState(null)

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!name.trim() || !email.trim() || !subject.trim() || !msg.trim()) {
      setError('Please fill in all fields')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${msg}`
    )
    window.location.href = `mailto:bsitf21e68406@gcbskp.edu.pk?subject=${encodeURIComponent(
      subject || 'Portfolio Contact'
    )}&body=${body}`
    setSent(true)
    setName('')
    setEmail('')
    setSubject('')
    setMsg('')
    setTimeout(() => setSent(false), 4000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'bsitf21e68406@gcbskp.edu.pk',
      href: 'mailto:bsitf21e68406@gcbskp.edu.pk'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Sheikhupura, Pakistan'
    },
    {
      icon: Phone,
      title: 'Response Time',
      value: '24-48 hours'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      link: 'https://github.com/Zainqalandar',
      color: 'hover:text-white hover:bg-black/50',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      link: 'https://linkedin.com/in/zain-qalandar',
      color: 'hover:text-blue-400 hover:bg-blue-500/10',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      link: 'https://twitter.com/zainqalandar',
      color: 'hover:text-blue-300 hover:bg-blue-500/10',
    },
  ]

  return (
    <section id="contact" className="py-20 relative z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-inter">
            Have a question or proposal? I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group glass-effect rounded-2xl p-8 text-center cursor-pointer hover:border-green-500/50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/30 to-emerald-500/30 flex items-center justify-center mx-auto mb-4 group-hover:from-green-500/50 group-hover:to-emerald-500/50 transition-all duration-300"
                >
                  <Icon className="icon-primary group-hover:text-green-300 transition-colors" size={28} />
                </motion.div>
                <h3 className="font-poppins font-semibold text-white mb-2 text-lg">{info.title}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-green-400 hover:text-green-300 transition-colors break-all text-sm font-inter"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-300 text-sm font-inter">{info.value}</p>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          variants={itemVariants}
          className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10 hover:border-green-500/30 transition-all duration-300"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-3">Send me a message</h3>
            <p className="text-gray-300 mb-8 font-inter">
              I'd love to hear about your project. Feel free to reach out and let's discuss how I can help.
            </p>

            <form onSubmit={(e) => {
              e.preventDefault()
              const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${msg}`
              )
              window.location.href = `mailto:bsitf21e68406@gcbskp.edu.pk?subject=${encodeURIComponent(
                subject || 'Portfolio Contact'
              )}&body=${body}`
              setSent(true)
              setTimeout(() => setSent(false), 3000)
            }} className="space-y-6">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Name Field */}
                <motion.div
                  variants={itemVariants}
                  onHoverStart={() => setHoveredField('name')}
                  onHoverEnd={() => setHoveredField(null)}
                  className="relative"
                >
                  <label className="block text-sm font-poppins font-semibold text-white mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <motion.input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:bg-white/10 focus:ring-1 focus:ring-green-500/30 transition-all duration-300 font-inter text-base"
                    whileFocus={{ scale: 1.01 }}
                  />
                  {(hoveredField === 'name' || name) && (
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/5 to-emerald-500/5 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </motion.div>

                {/* Email Field */}
                <motion.div
                  variants={itemVariants}
                  onHoverStart={() => setHoveredField('email')}
                  onHoverEnd={() => setHoveredField(null)}
                  className="relative"
                >
                  <label className="block text-sm font-poppins font-semibold text-white mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <motion.input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:bg-white/10 focus:ring-1 focus:ring-green-500/30 transition-all duration-300 font-inter text-base"
                    whileFocus={{ scale: 1.01 }}
                  />
                  {(hoveredField === 'email' || email) && (
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/5 to-emerald-500/5 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  )}
                </motion.div>
              </motion.div>

              {/* Subject Field */}
              <motion.div
                variants={itemVariants}
                onHoverStart={() => setHoveredField('subject')}
                onHoverEnd={() => setHoveredField(null)}
                className="relative"
              >
                <label className="block text-sm font-poppins font-semibold text-white mb-2">
                  Subject <span className="text-red-400">*</span>
                </label>
                <motion.input
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:bg-white/10 focus:ring-1 focus:ring-green-500/30 transition-all duration-300 font-inter text-base"
                  whileFocus={{ scale: 1.01 }}
                />
                {(hoveredField === 'subject' || subject) && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/5 to-emerald-500/5 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </motion.div>

              {/* Message Field */}
              <motion.div
                variants={itemVariants}
                onHoverStart={() => setHoveredField('message')}
                onHoverEnd={() => setHoveredField(null)}
                className="relative"
              >
                <label className="block text-sm font-poppins font-semibold text-white mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <motion.textarea
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Tell me more about your project or inquiry..."
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:bg-white/10 focus:ring-1 focus:ring-green-500/30 transition-all duration-300 resize-none font-inter text-base"
                  whileFocus={{ scale: 1.01 }}
                />
                {(hoveredField === 'message' || msg) && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/5 to-emerald-500/5 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </motion.div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 text-center font-semibold flex items-center justify-center gap-2"
                >
                  <AlertCircle size={18} />
                  {error}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-poppins font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                className="mt-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-center font-semibold flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={20} />
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-12 border-t border-white/10 text-center"
        >
          <h3 className="text-2xl font-poppins font-bold text-white mb-8">Connect With Me</h3>
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-xl border border-white/20 text-white transition-all duration-300 ${social.color}`}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
