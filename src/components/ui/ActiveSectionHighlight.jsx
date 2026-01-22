'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export default function ActiveSectionHighlight() {
	const sections = profile.sections.filter((section) => section.showInHighlight !== false);
	const [activeSection, setActiveSection] = useState(sections[0]?.id || 'hero');

	useEffect(() => {
		const handleScroll = () => {
			let current = sections[0]?.id || 'hero';

			for (const section of sections) {
				const element = document.getElementById(section.id);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= window.innerHeight / 2) {
						current = section.id;
					}
				}
			}

			setActiveSection(current);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.div
			className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-4"
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: 0.5, duration: 0.6 }}
		>
			{sections.map((section) => (
				<motion.a
					key={section.id}
					href={section.href}
					className="group relative"
					whileHover={{ x: 4 }}
					transition={{ type: 'spring', stiffness: 300, damping: 30 }}
				>
					{/* Indicator dot */}
					<motion.div
						className={`w-3 h-3 rounded-full border-2 transition-all ${
							activeSection === section.id
								? 'bg-green-500 border-green-400 shadow-lg shadow-green-500/50 scale-125'
								: 'border-green-400/40 bg-green-400/20 hover:bg-green-400/40'
						}`}
						animate={{
							scale: activeSection === section.id ? 1.25 : 1,
						}}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
					/>

					{/* Tooltip */}
					<motion.div
						className="absolute left-12 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-green-400/30 text-xs text-green-300 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
						initial={{ opacity: 0, x: -10 }}
						whileHover={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.2 }}
					>
						{section.label}
					</motion.div>
				</motion.a>
			))}
		</motion.div>
	);
}
