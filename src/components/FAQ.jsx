'use client';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
	const [activeIdx, setActiveIdx] = useState(0);

	const faqs = [
		{
			question: 'What is your typical project timeline?',
			answer:
				'Project timelines vary depending on complexity and scope. A simple landing page might take 1-2 weeks, while a full-featured web application can take 2-3 months. I provide realistic estimates after understanding your requirements.',
		},
		{
			question: 'Do you offer maintenance and support?',
			answer:
				'Yes! I offer post-launch support and maintenance packages. This includes bug fixes, updates, performance optimization, and feature enhancements to keep your application running smoothly.',
		},
		{
			question: 'What technologies do you specialize in?',
			answer:
				'I specialize in the MERN stack (MongoDB, Express, React, Node.js) and modern tools like Next.js, Tailwind CSS, and Framer Motion. I\'m always learning new technologies to provide the best solutions.',
		},
		{
			question: 'Can you work with existing codebases?',
			answer:
				'Absolutely! I can integrate with existing projects, refactor code, improve performance, or add new features to existing applications. I\'m comfortable working with legacy code and modernizing it.',
		},
		{
			question: 'Do you sign NDAs?',
			answer:
				'Yes, I\'m happy to sign NDAs and confidentiality agreements to protect your project information and intellectual property.',
		},
		{
			question: 'What\'s your communication style?',
			answer:
				'I believe in clear and transparent communication. I provide regular updates, welcome feedback, and am available for meetings via video call, email, or messaging platforms as needed.',
		},
	];

	return (
		<section className="mt-20 mb-8" id="faq">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className="section-title mb-12 text-center"
			>
				Frequently Asked Questions
			</motion.h2>

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={{
					hidden: {},
					visible: {
						transition: { staggerChildren: 0.08 },
					},
				}}
				className="space-y-3 max-w-3xl mx-auto"
			>
				{faqs.map((faq, idx) => (
					<motion.div
						key={idx}
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
						className="glass-effect rounded-xl overflow-hidden card-hover"
					>
						<button
							onClick={() =>
								setActiveIdx(activeIdx === idx ? -1 : idx)
							}
							className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/20 transition-colors"
						>
							<span className="text-left font-semibold text-gray-900">
								{faq.question}
							</span>
							<motion.div
								animate={{
									rotate: activeIdx === idx ? 180 : 0,
								}}
								transition={{ duration: 0.3 }}
								className="flex-shrink-0 ml-4"
							>
								<ChevronDown className="text-green-600" />
							</motion.div>
						</button>

						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{
								height:
									activeIdx === idx ? 'auto' : 0,
								opacity: activeIdx === idx ? 1 : 0,
							}}
							transition={{ duration: 0.3 }}
							className="overflow-hidden"
						>
							<div className="px-6 pb-4 text-gray-700 border-t border-white/20">
								{faq.answer}
							</div>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
