'use client';
import Image from 'next/image';
import { Linkedin, Mail, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
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
		<section
			id="hero"
			className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto z-10 min-h-screen md:min-h-auto flex flex-col md:flex-row md:justify-between"
		>
			{/* Floating background elements */}
			<motion.div
				animate={{ y: [0, -30, 0] }}
				transition={{ duration: 6, repeat: Infinity }}
				className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"
			/>
			<motion.div
				animate={{ y: [0, 30, 0] }}
				transition={{ duration: 8, repeat: Infinity, delay: 1 }}
				className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
			/>

			<motion.div
				initial="hidden"
				animate="visible"
				variants={containerVariants}
				className="space-y-6 relative z-10"
			>
				<motion.div
					variants={itemVariants}
					className="glass-effect rounded-3xl p-6 md:p-10 shadow-2xl border border-green-500/30 overflow-hidden"
				>
					{/* Gradient overlay background */}
					<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5" />

					<div className="relative z-10">
						<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
							<motion.div
								whileHover={{ scale: 1.1, rotate: 5 }}
								transition={{ type: 'spring', stiffness: 200 }}
								className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden ring-4 ring-green-400 shadow-2xl glow-element flex-shrink-0"
							>
								<Image
									src="/images/profile.png"
									alt="Zain"
									width={128}
									height={128}
									className="w-full h-full object-cover"
									priority
								/>
							</motion.div>
							<motion.div variants={itemVariants}>
						<motion.h1
							className="text-4xl sm:text-5xl font-poppins font-black bg-gradient-to-r from-green-200 via-emerald-300 to-green-200 bg-clip-text text-transparent"
							animate={{ textShadow: ['0 0 0px rgba(34,197,94,0)', '0 0 20px rgba(34,197,94,0.5)', '0 0 0px rgba(34,197,94,0)'] }}
							transition={{ duration: 3, repeat: Infinity }}
						>
							Syed Zain Qalandar
						</motion.h1>
						<p className="text-lg text-green-300 mt-3 font-inter font-medium tracking-wide">
									Full-Stack (MERN) Developer · Front-end focused
								</p>
							</motion.div>
						</div>

						<motion.p
							variants={itemVariants}
							className="mt-8 text-gray-200 leading-relaxed text-sm sm:text-base font-inter"
						>
							I build responsive, accessible web applications using{' '}
							<motion.span
								className="font-bold text-green-400 inline-block"
								whileHover={{ scale: 1.1 }}
							>
								React
							</motion.span>
							,{' '}
							<motion.span
								className="font-bold text-emerald-400 inline-block"
								whileHover={{ scale: 1.1 }}
							>
								Next.js
							</motion.span>{' '}
							and{' '}
							<motion.span
								className="font-bold text-teal-400 inline-block"
								whileHover={{ scale: 1.1 }}
							>
								Tailwind
							</motion.span>
							. I love turning designs into polished interfaces and linking them with reliable backends.
						</motion.p>

						<motion.div
							variants={itemVariants}
							className="mt-8 flex flex-wrap justify-center sm:justify-start gap-3"
						>
							<motion.a
								href="mailto:bsitf21e68406@gcbskp.edu.pk"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="btn-primary flex items-center gap-2 font-poppins !text-white hover:!text-white transition-colors"
							>
								<Mail size={16} color="white" className="icon-primary" /> Email Me
							</motion.a>
							<motion.a
								href="https://github.com/Zainqalandar"
								target="_blank"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="glass-effect flex items-center gap-2 px-6 py-3 rounded-lg border border-green-500/50 text-green-300 font-poppins font-semibold hover:border-green-400 hover:text-white transition-all"
							>
								<Github size={18} className="icon-secondary" /> GitHub
								<ArrowRight size={14} />
							</motion.a>
							<motion.a
								href="https://www.linkedin.com/in/zainqalandar"
								target="_blank"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="glass-effect flex items-center gap-2 px-6 py-3 rounded-lg border border-blue-500/50 text-blue-300 font-poppins font-semibold hover:border-blue-400 hover:text-white transition-all"
							>
								<Linkedin size={16} className="icon-accent text-white" /> LinkedIn
							</motion.a>
						</motion.div>
					</div>
				</motion.div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.8, delay: 0.3 }}
				className="p-6 md:p-10 rounded-3xl glass-effect shadow-2xl border border-green-500/30 relative z-10"
			>
				<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 rounded-3xl" />

				<div className="relative z-10">
					<h3 className="text-xl font-poppins font-bold text-white text-center md:text-left mb-2">
						✨ Quick Stats
					</h3>
					<p className="text-gray-300 text-xs text-center md:text-left mb-6 font-inter">Real-time achievements</p>

					<motion.ul
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0"
					>
						{[
							{ label: 'Experience', value: '1+ year' },
							{ label: 'Followers', value: '30k+' },
							{ label: 'Main Stack', value: 'MERN' },
							{ label: 'Status', value: 'Active' }
						].map((item, idx) => (
							<motion.li
								key={idx}
								variants={itemVariants}
								whileHover={{ scale: 1.05, y: -5 }}
								className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-400/30 hover:border-green-400/60 backdrop-blur transition-all"
							>
								<div className="text-xs text-gray-400 font-inter font-medium">{item.label}</div>
								<div className="font-poppins font-bold text-gray-200 text-lg mt-1">
									{item.value}
								</div>
							</motion.li>
						))}
					</motion.ul>
				</div>
			</motion.div>
		</section>
	);
}
