'use client';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export default function Services() {
	const { services } = profile;

	return (
		<section id="services" className="mt-20">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				style={{ marginBottom: 32 }}
				className="section-title mb-24 text-center"
			>
				{services.title}
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
				className="grid gap-8 md:grid-cols-2"
			>
				{services.items.map((service, idx) => {
					const Icon = service.icon;
					return (
						<motion.div
							key={idx}
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: { opacity: 1, y: 0 },
							}}
							className="glass-effect rounded-2xl p-8 card-hover group"
						>
							<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
								<Icon className="text-white" size={28} />
							</div>
							<h3 className="text-xl font-bold text-gray-100 dark:text-white mb-3">
								{service.title}
							</h3>
							<p className="text-gray-300 dark:text-gray-400 leading-relaxed">
								{service.description}
							</p>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
}
