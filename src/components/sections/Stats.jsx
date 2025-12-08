'use client';
import { motion, useInView } from 'framer-motion';
import { Code2, Users, Trophy, Zap } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const AnimatedCounter = ({ target, duration = 2, suffix = '' }) => {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return;

		let start = 0;
		const end = typeof target === 'string' ? parseInt(target) : target;
		const increment = end / (duration * 60);
		let timer;

		timer = setInterval(() => {
			start += increment;
			if (start >= end) {
				setCount(end);
				clearInterval(timer);
			} else {
				setCount(Math.floor(start));
			}
		}, 1000 / 60);

		return () => clearInterval(timer);
	}, [isInView, target, duration]);

	return (
		<span ref={ref}>
			{count}
			{suffix}
		</span>
	);
};

export default function Stats() {
	const stats = [
		{
			icon: Code2,
			label: 'Projects Completed',
			value: '15',
			suffix: '+',
			color: 'from-blue-500 to-cyan-500',
		},
		{
			icon: Users,
			label: 'Clients Worked With',
			value: '8',
			suffix: '+',
			color: 'from-purple-500 to-pink-500',
		},
		{
			icon: Trophy,
			label: 'Years Experience',
			value: '2',
			suffix: '+',
			color: 'from-yellow-500 to-orange-500',
		},
		{
			icon: Zap,
			label: 'Performance Score',
			value: '98',
			suffix: '%',
			color: 'from-green-500 to-emerald-500',
		},
	];

	return (
		<section className="py-16 relative z-10">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
				className="grid grid-cols-2 md:grid-cols-4 gap-6"
			>
				{stats.map((stat, idx) => {
					const Icon = stat.icon;
					return (
						<motion.div
							key={idx}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ y: -5, scale: 1.05 }}
							className="glass-effect rounded-2xl p-6 text-center group hover:shadow-lg transition-all"
						>
							<motion.div
								className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
								whileHover={{ rotate: 10 }}
							>
								<Icon className="text-white" size={24} />
							</motion.div>
							<motion.div
								className="text-3xl md:text-4xl font-bold text-white mb-2"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ duration: 0.6 }}
								viewport={{ once: true }}
							>
								<AnimatedCounter target={stat.value} suffix={stat.suffix} />
							</motion.div>
							<p className="text-sm text-gray-400 font-inter">{stat.label}</p>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
}
