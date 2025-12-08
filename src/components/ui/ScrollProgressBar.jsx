'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgressBar() {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrolled = window.scrollY;
			const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
			setScrollProgress(progress);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.div
			className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 z-50 origin-left"
			style={{
				scaleX: scrollProgress / 100,
				transformOrigin: 'left',
			}}
			initial={{ scaleX: 0 }}
			animate={{ scaleX: scrollProgress / 100 }}
			transition={{ type: 'spring', stiffness: 100, damping: 30, mass: 1 }}
		/>
	);
}
