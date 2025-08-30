'use client';
import { motion } from 'framer-motion';
import education from '@/data/education.json';

export default function About() {
	return (
		<section
			id="about"
			className="relative mt-16 rounded-2xl overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-r from-green-100 via-white to-green-50"></div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="relative z-10 p-3 md:p-8 max-w-5xl mx-auto"
			>
				<h2 className="text-3xl font-bold text-gray-800 mb-4">
					About Me
				</h2>
				<p className="text-gray-700 leading-relaxed text-lg">
					I’m a{' '}
					<span className="font-semibold">
						Full-Stack Developer (MERN)
					</span>
					, front-end focused with strong experience in building
					responsive user interfaces using React, Next.js and Tailwind
					CSS. I’m also familiar with Node.js, Express and MongoDB for
					APIs and data management. I love translating Figma designs
					into production-ready code while optimizing performance and
					user experience.
				</p>

				<div className="mt-8 grid gap-6 md:grid-cols-3">
					{education.map((edu) => (
						<motion.div
							key={edu.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: edu.delay }}
							viewport={{ once: true }}
							className="rounded-xl p-5 bg-white/70 backdrop-blur shadow hover:shadow-lg transition"
						>
							<div className="text-sm text-gray-500">
								{edu.title}
							</div>
							<div className="font-semibold text-gray-800">
								{edu.content}
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}
