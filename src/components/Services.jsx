'use client';
import { motion } from 'framer-motion';
import { Zap, Palette, Code, Smartphone } from 'lucide-react';

export default function Services() {
	const services = [
		{
			icon: Code,
			title: 'Full-Stack Development',
			description:
				'End-to-end web application development using MERN stack with scalable architecture and best practices.',
		},
		{
			icon: Palette,
			title: 'UI/UX Implementation',
			description:
				'Converting Figma designs into responsive, pixel-perfect React and Next.js components with smooth animations.',
		},
		{
			icon: Smartphone,
			title: 'Responsive Design',
			description:
				'Mobile-first approach ensuring your application looks and functions beautifully on all devices and screen sizes.',
		},
		{
			icon: Zap,
			title: 'Performance Optimization',
			description:
				'Optimizing applications for speed and efficiency through code splitting, lazy loading, and caching strategies.',
		},
	];

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
				Services & Expertise
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
				{services.map((service, idx) => {
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
