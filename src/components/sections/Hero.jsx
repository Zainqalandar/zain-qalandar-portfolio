'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export default function Hero() {
	const { hero, basic, images, primaryCta, secondaryCta } = profile;
	const displayName = basic.displayName ?? basic.fullName;
	const isExternal = (href) => /^https?:\/\//.test(href);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 100 },
		},
	};

	return (
		<section id="hero" className="w-full min-h-screen flex items-center justify-center py-12">
			<div className="relative max-w-6xl w-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/80 border border-green-700/10">
				{/* Decorative blurred corners */}
				<motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -left-24 -top-24 w-56 h-56 bg-gradient-to-r from-emerald-500/10 to-teal-400/6 rounded-full blur-3xl" />
				<motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 7, repeat: Infinity, delay: 1 }} className="absolute -right-24 -bottom-24 w-56 h-56 bg-gradient-to-r from-green-500/8 to-emerald-500/6 rounded-full blur-3xl" />

				<div className="relative z-10 px-6 md:px-12 py-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						{/* Left - text block */}
						<motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-6">
							<motion.span variants={itemVariants} className="text-sm text-emerald-300 font-medium">
								{hero.welcome}
							</motion.span>
							<motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-poppins font-extrabold leading-tight text-white">
								{hero.greetingPrefix}{' '}
								<motion.span
									className="inline-block"
									style={{
										backgroundImage: 'linear-gradient(90deg, #34D399, #06B6D4, #60A5FA)',
										backgroundSize: '200% 200%',
										backgroundPosition: '0% 50%',
										WebkitBackgroundClip: 'text',
										backgroundClip: 'text',
										color: 'transparent',
										display: 'inline-block'
									}}
									animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
									transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
									whileHover={{ scale: 1.04 }}
								>
									{displayName}
								</motion.span>
							</motion.h1>
							<motion.p variants={itemVariants} className="text-gray-300 max-w-lg mt-2 font-inter">
								{hero.subheading}
							</motion.p>

							<motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-6">
								{primaryCta && (
									<a
										href={primaryCta.href}
										download={primaryCta.download}
										className="btn-primary px-5 py-3 rounded-full font-poppins font-semibold flex items-center gap-3 bg-green-500 hover:bg-emerald-500 transition-colors text-white"
										aria-label={primaryCta.label}
									>
										{primaryCta.label}
									</a>
								)}
								{secondaryCta && (
									<a href={secondaryCta.href} className="flex items-center gap-3 border border-green-500/30 text-green-200 px-5 py-3 rounded-full font-poppins hover:bg-green-600/10 transition">
										{secondaryCta.label} <ArrowRight size={14} />
									</a>
								)}
							</motion.div>

							{/* Small footer note and scroll indicator */}
							<div className="mt-8 flex items-center gap-6">
								<div className="text-xs text-gray-400">{hero.scrollHint}</div>
								<div className="w-6 h-10 border-2 border-green-600 rounded-full flex items-start justify-center p-1">
									<div className="w-1 h-1 bg-green-400 rounded-full animate-bounce" />
								</div>
							</div>
						</motion.div>

						{/* Right - portrait + socials */}
						<motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative flex items-center justify-center">
							<div className="relative">
								{/* Decorative ring */}
								<div className="absolute -inset-2 rounded-full bg-gradient-to-r from-green-400/10 to-emerald-300/10 blur-lg" />
								<div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full ring-8 ring-emerald-700/30 overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800/60 to-slate-700/40">
									<Image src={images.avatar} alt={images.avatarAlt} width={320} height={320} className="object-cover w-full h-full" priority />
								</div>
								{/* Floating accents */}
								<motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -right-6 -top-6 w-12 h-12 bg-emerald-400/20 rounded-lg blur-sm" />
								{/* Social vertical */}
								<div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 pr-4">
									{hero.socialLinks.map((link) => {
										const Icon = link.icon;
										const external = isExternal(link.href);
										return (
											<a
												key={link.label}
												href={link.href}
												target={external ? '_blank' : undefined}
												rel={external ? 'noreferrer' : undefined}
												className={link.className}
												aria-label={link.label}
											>
												<Icon size={16} />
											</a>
										);
									})}
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
