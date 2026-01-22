'use client';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { profile } from '@/data/profile';

export default function FAQ() {
	const [activeIdx, setActiveIdx] = useState(null);

	const { faq, faqSection } = profile;

	if (!faq || faq.length === 0) return null;

	return (
		<section className="py-20 relative z-10" id="faq">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="max-w-4xl mx-auto px-4"
			>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<div className="flex items-center justify-center gap-3 mb-4">
						<motion.div
							animate={{ rotate: 360 }}
							transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
						>
							<HelpCircle className="text-green-500" size={32} />
						</motion.div>
						<h2 className="section-title text-4xl md:text-5xl font-bold">
							{faqSection?.title}
						</h2>
					</div>
					<p className="text-gray-300 text-lg max-w-2xl mx-auto font-inter">
						{faqSection?.intro}
					</p>
				</motion.div>

				{/* FAQ Items */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={{
						hidden: {},
						visible: {
							transition: { staggerChildren: 0.1, delayChildren: 0.2 },
						},
					}}
					className="space-y-4"
				>
					{faq.map((item, idx) => (
						<motion.div
							key={idx}
							variants={{
								hidden: { opacity: 0, y: 20, scale: 0.95 },
								visible: {
									opacity: 1,
									y: 0,
									scale: 1,
									transition: {
										type: 'spring',
										stiffness: 100,
										damping: 15,
									},
								},
							}}
							className="group"
						>
							<motion.button
								onClick={() =>
									setActiveIdx(activeIdx === idx ? null : idx)
								}
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								className="w-full relative"
							>
								{/* Background gradient on hover */}
								<motion.div
									className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									animate={{
										backgroundPosition: activeIdx === idx ? ['0%', '100%', '0%'] : '0%',
									}}
									transition={{
										duration: 3,
										repeat: activeIdx === idx ? Infinity : 0,
										ease: 'linear',
									}}
								/>

								<div className="relative px-6 py-5 rounded-xl border border-white/20 group-hover:border-green-500/50 transition-all duration-300 bg-white/5 group-hover:bg-white/10">
									<div className="flex items-center justify-between">
										<span className="text-left font-poppins font-semibold text-white text-lg group-hover:text-green-300 transition-colors duration-300">
											{item.question}
										</span>
										<motion.div
											animate={{
												rotate: activeIdx === idx ? 180 : 0,
											}}
											transition={{ duration: 0.4, ease: 'easeInOut' }}
											className="flex-shrink-0 ml-4"
										>
											<ChevronDown
												className="text-green-500 group-hover:text-green-400 transition-colors"
												size={24}
											/>
										</motion.div>
									</div>
								</div>
							</motion.button>

							{/* Answer Section */}
							<motion.div
								initial={false}
								animate={{
									height: activeIdx === idx ? 'auto' : 0,
									opacity: activeIdx === idx ? 1 : 0,
									marginTop: activeIdx === idx ? 12 : 0,
								}}
								transition={{
									height: { duration: 0.4, ease: 'easeInOut' },
									opacity: { duration: 0.3, ease: 'easeInOut' },
									marginTop: { duration: 0.3 },
								}}
								className="overflow-hidden"
							>
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 }}
									className="px-6 py-5 rounded-xl bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent border border-green-500/30 shadow-lg"
								>
									<p className="text-gray-200 leading-relaxed font-inter text-base">
										{item.answer}
									</p>
								</motion.div>
							</motion.div>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					viewport={{ once: true }}
					className="mt-16 text-center"
				>
					<p className="text-gray-300 mb-4 font-inter">{faqSection?.ctaHelper}</p>
					<motion.a
						href={faqSection?.ctaHref}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-poppins font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
					>
						{faqSection?.ctaLabel}
					</motion.a>
				</motion.div>
			</motion.div>
		</section>
	);
}
