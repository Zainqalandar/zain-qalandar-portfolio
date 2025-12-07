'use client';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Articles() {
	const articles = [
		{
			title: 'Building Scalable React Applications',
			excerpt:
				'Learn how to structure your React projects for scalability, manage state effectively, and implement best practices for large-scale applications.',
			author: 'Zain Qalandar',
			date: 'Nov 28, 2024',
			readTime: '8 min read',
			category: 'React',
		},
		{
			title: 'Next.js 15 Performance Optimization Tips',
			excerpt:
				'Discover the latest Next.js features and techniques to optimize your application for faster load times and better user experience.',
			author: 'Zain Qalandar',
			date: 'Nov 20, 2024',
			readTime: '12 min read',
			category: 'Next.js',
		},
		{
			title: 'Tailwind CSS Best Practices',
			excerpt:
				'Master advanced Tailwind CSS techniques, utility-first workflow, and create consistent design systems using Tailwind components.',
			author: 'Zain Qalandar',
			date: 'Nov 10, 2024',
			readTime: '10 min read',
			category: 'Tailwind',
		},
	];

	return (
		<section className="mt-20">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				style={{ marginBottom: 32 }}
				className="section-title mb-12 text-center"
			>
				Latest Articles
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
				{articles.map((article, idx) => (
					<motion.article
						key={idx}
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: { opacity: 1, y: 0 },
						}}
						className="glass-effect rounded-2xl overflow-hidden card-hover flex flex-col group"
					>
						{/* Category badge */}
						<div className="px-6 pt-6 flex items-start justify-between">
							<span
							 style={{ color: 'green',}}
							 className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 text-green-700">
								{article.category}
							</span>
						</div>

						{/* Content */}
						<div className="px-6 py-4 flex-grow">
							<h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
								{article.title}
							</h3>
							<p className="text-gray-700 text-sm leading-relaxed mb-4">
								{article.excerpt}
							</p>
						</div>

						{/* Meta */}
						<div className="px-6 pb-4 pt-2 border-t border-white/20">
							<div className="flex items-center gap-4 text-xs text-green-900 mb-4">
								<div className="flex items-center gap-1">
									<Calendar size={14} />
									{article.date}
								</div>
								<span>{article.readTime}</span>
							</div>

							<a
								href="#"
								className="inline-flex items-center mt-0 gap-2 text-green-600 font-semibold hover:text-green-700 text-sm transition-colors"
							>
								Read Article
								<ArrowRight size={16} />
							</a>
						</div>
					</motion.article>
				))}
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				viewport={{ once: true }}
				className="mt-12 text-center"
			>
				<a
					href="#"
					className="inline-flex items-center gap-2 btn-primary text-white"
				>
					View All Articles
					<ArrowRight size={20} />
				</a>
			</motion.div>
		</section>
	);
}
