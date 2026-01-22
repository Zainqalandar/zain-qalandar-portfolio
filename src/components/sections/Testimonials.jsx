'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { profile } from '@/data/profile';

export default function Testimonials() {
	const { testimonials, testimonialsSection } = profile;

	if (!testimonials || testimonials.length === 0) return null;

	return (
		<section id="testimonials" className="mt-20">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				style={{ marginBottom: 32 }}
				className="section-title mb-12"
			>
				{testimonialsSection?.title}
			</motion.h2>

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={{
					hidden: {},
					visible: {
						transition: { staggerChildren: 0.12 },
					},
				}}
				className="grid gap-8 md:grid-cols-3"
			>
				{testimonials.map((testimonial, idx) => (
					<motion.div
						key={idx}
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: { opacity: 1, y: 0 },
						}}
						className="glass-effect rounded-2xl p-6 md:p-8 card-hover"
					>
						<div className="flex gap-1 mb-4">
							{[...Array(testimonial.rating ?? 5)].map((_, i) => (
								<Star
									key={i}
									size={16}
									className="fill-yellow-400 text-yellow-400"
								/>
							))}
						</div>

						<p className="text-gray-700 mb-6 leading-relaxed italic">
							"{testimonial.quote}"
						</p>

						<div className="flex items-center gap-3 pt-4 border-t border-white/20">
							<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500" />
							<div>
								<p className="font-semibold text-gray-900">
									{testimonial.name}
								</p>
								{(testimonial.role || testimonial.company) && (
									<p className="text-xs text-gray-600">
										{testimonial.role}
										{testimonial.role && testimonial.company
											? ` ${testimonialsSection?.roleConnector ?? 'at'} `
											: ''}
										{testimonial.company}
									</p>
								)}
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
