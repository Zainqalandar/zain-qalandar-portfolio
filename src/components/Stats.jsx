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
			label: 'Followers',
			value: '30',
			suffix: 'k+',
			color: 'from-purple-500 to-pink-500',
		},
		{
			icon: Trophy,
			label: 'Years Experience',
			value: '1',
			suffix: '+',
			color: 'from-orange-500 to-red-500',
		},
		{
			icon: Zap,
			label: 'Open Source',
			value: '5',
			suffix: '+',
			color: 'from-yellow-500 to-orange-500',
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.8 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 15,
			},
		},
	};

	return (
		<section className="mt-24 py-8 relative z-10">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
				className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
			>
				{stats.map((stat, idx) => {
					const Icon = stat.icon;
					return (
						<motion.div
							key={idx}
							variants={itemVariants}
							className="glass-effect rounded-2xl p-8 text-center card-hover group relative overflow-hidden"
						>
							{/* Animated gradient background */}
							<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

							<div className={`w-14 h-14 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
								<Icon className="text-white" size={28} />
							</div>

							<div className="text-4xl font-bold text-white mb-2 relative z-10">
								<AnimatedCounter target={stat.value} suffix={stat.suffix} />
							</div>

							<p className="text-green-100 text-sm font-medium relative z-10">
								{stat.label}
							</p>

							{/* Floating accent element */}
							<motion.div
								animate={{ y: [0, -10, 0] }}
								transition={{ duration: 3, repeat: Infinity }}
								className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-50 blur-sm"
							/>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
}
