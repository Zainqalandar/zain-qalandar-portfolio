'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';

export default function CTA() {
	const { ctaSection } = profile;

	return (
		<section className="mt-24 mb-8 relative z-10">
			<motion.div
				initial={{ opacity: 0, y: 40, scale: 0.95 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
				viewport={{ once: true }}
				className="relative overflow-hidden rounded-3xl"
			>
				{/* Animated background gradients */}
				<div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600" />
				<motion.div
					animate={{ scale: [1, 1.1, 1] }}
					transition={{ duration: 4, repeat: Infinity }}
					className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"
				/>

				{/* Floating gradient orbs */}
				<motion.div
					animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
					transition={{ duration: 8, repeat: Infinity }}
					className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
				/>
				<motion.div
					animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
					transition={{ duration: 10, repeat: Infinity, delay: 1 }}
					className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"
				/>

				{/* Content */}
				<div className="relative z-10 px-6 md:px-16 py-20 md:py-28 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6"
					>
						<Sparkles size={16} className="text-yellow-300 animate-pulse" />
						<span className="text-sm font-semibold text-white">
							{ctaSection.badge}
						</span>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
					>
						{ctaSection.title}{' '}
						<motion.span
							animate={{ color: ['#fbbf24', '#60a5fa', '#34d399'] }}
							transition={{ duration: 3, repeat: Infinity }}
							className="inline-block"
						>
							{ctaSection.highlightWord}
						</motion.span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
						className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
					>
						{ctaSection.description}
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
						className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
					>
						<motion.a
							href={ctaSection.primaryAction.href}
							whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(255,255,255,0.3)' }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-green-600 font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
						>
							<Mail size={20} />
							{ctaSection.primaryAction.label}
						</motion.a>

						{ctaSection.secondaryAction && (
							<motion.a
								href={ctaSection.secondaryAction.href}
								target={ctaSection.secondaryAction.href.startsWith('http') ? '_blank' : undefined}
								rel={ctaSection.secondaryAction.href.startsWith('http') ? 'noreferrer' : undefined}
								whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(255,255,255,0.2)' }}
								whileTap={{ scale: 0.95 }}
								className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/20 backdrop-blur-md text-white font-bold border-2 border-white/50 hover:border-white hover:bg-white/30 transition-all duration-300"
							>
								<Github size={20} />
								{ctaSection.secondaryAction.label}
								<motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
									<ArrowRight size={20} />
								</motion.div>
							</motion.a>
						)}
					</motion.div>

					{/* Floating elements */}
					<motion.div
						animate={{ y: [0, -10, 0] }}
						transition={{ duration: 3, repeat: Infinity }}
						className="mt-12 inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
					>
						{ctaSection.note && (
							<p className="text-sm text-white/70">{ctaSection.note}</p>
						)}
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
