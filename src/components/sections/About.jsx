'use client';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { profile } from '@/data/profile';

export default function About() {
	const { about } = profile;

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.12,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { type: 'spring', stiffness: 100, damping: 15 },
		},
	};

	return (
		<section
			id="about"
			className="relative mt-20 rounded-2xl overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10" />

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="relative z-10 p-6 md:p-12 max-w-5xl mx-auto"
			>
				<motion.h2 
					className="section-title mb-6"
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					{about.title}
				</motion.h2>
				{about.intro ? (
					<motion.p 
						className="text-green-700 dark:text-green-300 leading-relaxed text-lg mb-8 font-inter"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
					>
						{about.intro.prefix}
						<span className="gradient-text font-bold">
							{about.intro.highlight}
						</span>
						{about.intro.suffix}
					</motion.p>
				) : (
					<motion.p 
						className="text-green-700 dark:text-green-300 leading-relaxed text-lg mb-8 font-inter"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
					>
						{about.longBio}
					</motion.p>
				)}
				{about.paragraphs.map((paragraph, idx) => (
					<motion.p
						key={idx}
						className="text-green-700 dark:text-green-300 leading-relaxed text-lg mb-10 font-inter"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
						viewport={{ once: true }}
					>
						{paragraph}
					</motion.p>
				))}
			<motion.div 
				className="mt-10 grid gap-6 md:grid-cols-3"
				initial="hidden"
				whileInView="visible"
				variants={containerVariants}
				viewport={{ once: true }}
			>
					{about.summaryCards.map((card) => {
						const Icon = card.icon || Award;
						return (
							<motion.div
								key={card.title}
								variants={itemVariants}
								className="glass-effect rounded-2xl p-6 card-hover group relative overflow-hidden"
								whileHover={{ 
									y: -8,
									boxShadow: '0 20px 50px rgba(34, 197, 94, 0.2)'
								}}
								transition={{ type: 'spring', stiffness: 300, damping: 30 }}
							>
								{/* Animated background */}
								<div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								
								<div className="relative z-10 flex items-center gap-4">
									<motion.div 
										className="p-3 rounded-lg bg-gradient-to-br from-green-400/30 to-emerald-400/30"
										whileHover={{ scale: 1.1, rotate: 5 }}
										transition={{ type: 'spring', stiffness: 300, damping: 30 }}
									>
										<Icon className="w-6 h-6 text-green-700 dark:text-green-400 group-hover:text-green-300 transition-colors" size={24} />
									</motion.div>
									<div>
										<div className="text-sm text-green-600 dark:text-green-400 font-inter font-medium uppercase tracking-wide">
											{card.title}
										</div>
										<motion.div 
											className="font-poppins font-bold text-green-800 dark:text-green-100 text-lg"
											whileHover={{ color: '#4ade80' }}
										>
											{card.value}
										</motion.div>
									</div>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</section>
	);
}
