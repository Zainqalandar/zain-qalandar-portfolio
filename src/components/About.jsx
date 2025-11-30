'use client';
import { motion } from 'framer-motion';
import education from '@/data/education.json';
import { Award, MapPin, Briefcase } from 'lucide-react';

export default function About() {
	const iconMap = {
		'Education': Award,
		'Location': MapPin,
		'Availability': Briefcase
	};

	return (
		<section
			id="about"
			className="relative mt-20 rounded-2xl overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-r from-green-100/40 via-white to-green-50/40" />

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="relative z-10 p-6 md:p-12 max-w-5xl mx-auto"
			>
				<h2 className="section-title mb-6">
					About Me
				</h2>
				<p className="text-gray-300 leading-relaxed text-lg mb-8 font-inter">
					I'm a passionate{' '}
					<span className="gradient-text font-bold">
						Full-Stack Developer (MERN)
					</span>
					, front-end focused with strong experience in building responsive user interfaces using React, Next.js and Tailwind CSS. I'm also familiar with Node.js, Express and MongoDB for APIs and data management. I love translating Figma designs into production-ready code while optimizing performance and user experience.
				</p>

				<p className="text-gray-300 leading-relaxed text-lg mb-10 font-inter">
					Beyond coding, I'm passionate about open-source contributions, mentoring junior developers, and staying updated with the latest web technologies. I believe in writing clean, maintainable code and delivering solutions that exceed expectations.
				</p>

				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{education.map((edu, idx) => {
						const Icon = iconMap[edu.title] || Award;
						return (
							<motion.div
								key={edu.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: idx * 0.1 }}
								viewport={{ once: true }}
								className="glass-effect rounded-2xl p-6 card-hover flex items-center gap-4"
							>
								<div className="p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
									<Icon className="icon-primary" size={24} />
								</div>
								<div>
									<div className="text-sm text-gray-400 font-inter font-medium">
										{edu.title}
									</div>
									<div className="font-poppins font-bold text-gray-200 text-lg">
										{edu.content}
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</motion.div>
		</section>
	);
}
