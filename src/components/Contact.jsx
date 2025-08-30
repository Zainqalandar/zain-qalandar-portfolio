'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault();
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${msg}`);
  window.location.href = `mailto:bsitf21e68406@gcbskp.edu.pk?subject=Portfolio%20Contact&body=${body}`;
  setSent(true);
};

  return (
    <section id="contact" className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
        <p className="mt-2 text-gray-600">
          Want to work together or ask about a project? Send me a quick message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="p-3 rounded-xl border border-green-200 shadow-sm focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 rounded-xl border border-green-200 shadow-sm focus:ring-2 focus:ring-green-400 outline-none"
          />
          <textarea
            required
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Message"
            rows={5}
            className="p-3 rounded-xl border border-green-200 shadow-sm focus:ring-2 focus:ring-green-400 outline-none md:col-span-2"
          />
          <button
            type="submit"
            className="md:col-span-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>

        {sent && (
          <div className="mt-4 text-sm text-green-600">
            ✅ Mail client opened — complete the message to send.
          </div>
        )}
      </motion.div>
    </section>
  )
}
