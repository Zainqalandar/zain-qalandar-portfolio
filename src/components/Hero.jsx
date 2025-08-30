'use client';
import Image from 'next/image';
import { Linkedin, Mail, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center  max-w-6xl mx-auto"
		>
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
				className="space-y-6"
			>
				<div className="bg-gradient-to-r from-green-100 via-white to-green-50 rounded-2xl p-3 md:p-8 shadow-xl backdrop-blur-lg border border-green-200">
					<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
						<div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-green-400 shadow-lg hover:scale-105 transition-transform">
							<Image
								src="/images/profile.png"
								alt="Zain"
								width={112}
								height={112}
							/>
						</div>
						<div>
							<h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
								Syed Zain Qalandar
							</h1>
							<p className="text-sm text-gray-600 mt-2">
								Full-Stack (MERN) Developer · Front-end focused
							</p>
						</div>
					</div>

					<p className="mt-6 text-gray-700 leading-relaxed text-sm sm:text-base">
						I build responsive, accessible web applications using{' '}
						<span className="font-semibold text-green-600">
							React
						</span>
						,{' '}
						<span className="font-semibold text-green-600">
							Next.js
						</span>{' '}
						and{' '}
						<span className="font-semibold text-green-600">
							Tailwind
						</span>
						. I love turning designs into polished interfaces and
						linking them with reliable backends (Node, Express,
						MongoDB).
					</p>

					<div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-3">
						<a
							href="mailto:bsitf21e68406@gcbskp.edu.pk"
							className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow hover:shadow-lg hover:scale-105 transition"
						>
							<Mail size={16} /> Email
						</a>
						<a
							href="https://github.com/Zainqalandar"
							target="_blank"
							className="flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-300 bg-white shadow hover:bg-gray-50 hover:scale-105 transition"
						>
							<Github size={16} /> GitHub
						</a>
						<a
							href="https://www.linkedin.com/in/zainqalandar"
							target="_blank"
							className="flex items-center gap-2 px-5 py-2 rounded-lg border border-blue-300 bg-blue-600 text-white shadow hover:shadow-lg hover:scale-105 transition"
						>
							<Linkedin size={16} /> LinkedIn
						</a>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="p-3 md:p-8 rounded-2xl bg-white/80 backdrop-blur shadow-xl border border-gray-100"
			>
				<h3 className="text-lg font-semibold text-gray-800 text-center md:text-left">
					Quick Stats
				</h3>
				<ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
					<li className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition">
						<div className="text-sm text-gray-500">Experience</div>
						<div className="font-bold text-gray-800 text-lg">
							1+ year
						</div>
					</li>
					<li className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition">
						<div className="text-sm text-gray-500">Followers</div>
						<div className="font-bold text-gray-800 text-lg">
							30k+
						</div>
					</li>
					<li className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition">
						<div className="text-sm text-gray-500">Tools</div>
						<div className="font-bold text-gray-800 text-lg">
							React · Next.js
						</div>
					</li>
					<li className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition">
						<div className="text-sm text-gray-500">Open to</div>
						<div className="font-bold text-gray-800 text-lg">
							Remote / Hybrid
						</div>
					</li>
				</ul>
			</motion.div>
		</section>
	);
}
