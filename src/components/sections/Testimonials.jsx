'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
	const testimonials = [
		{
			name: 'Ahmed Hassan',
			role: 'Project Manager',
			company: 'KodeStudio',
			message:
				'Zain is an excellent developer with strong attention to detail. He consistently delivers high-quality code and is a pleasure to work with. His ability to convert designs into responsive interfaces is remarkable.',
			rating: 5,
		},
		{
			name: 'Fatima Khan',
			role: 'UI/UX Designer',
			company: 'Tech Innovations',
			message:
				'Working with Zain was amazing. He understood the design vision perfectly and implemented it flawlessly. Very professional and communicative throughout the project.',
			rating: 5,
		},
		{
			name: 'Mustafa Ali',
			role: 'CTO',
			company: 'StartUp Pro',
			message:
				'Zain demonstrates strong technical skills and problem-solving abilities. His experience with MERN stack is evident, and he brings fresh perspectives to development challenges.',
			rating: 5,
		},
	];

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
				What People Say
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
							{[...Array(testimonial.rating)].map((_, i) => (
								<Star
									key={i}
									size={16}
									className="fill-yellow-400 text-yellow-400"
								/>
							))}
						</div>

						<p className="text-gray-700 mb-6 leading-relaxed italic">
							"{testimonial.message}"
						</p>

						<div className="flex items-center gap-3 pt-4 border-t border-white/20">
							<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500" />
							<div>
								<p className="font-semibold text-gray-900">
									{testimonial.name}
								</p>
								<p className="text-xs text-gray-600">
									{testimonial.role} at {testimonial.company}
								</p>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
