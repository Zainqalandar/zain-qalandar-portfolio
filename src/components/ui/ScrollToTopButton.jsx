'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 400) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}

			// Calculate scroll progress
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrolled = window.scrollY;
			const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
			setScrollProgress(progress);
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.8, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.8, y: 20 }}
					whileHover={{ scale: 1.1, boxShadow: '0 20px 50px rgba(34, 197, 94, 0.4)' }}
					whileTap={{ scale: 0.95 }}
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-xl border border-green-400/30 flex items-center justify-center group overflow-hidden"
					aria-label="Scroll to top"
				>
					{/* Circular progress background */}
					<svg
						className="absolute inset-0 w-full h-full"
						viewBox="0 0 100 100"
						style={{ transform: 'rotate(-90deg)' }}
					>
						<circle
							cx="50"
							cy="50"
							r="45"
							fill="none"
							stroke="rgba(34, 197, 94, 0.2)"
							strokeWidth="2"
						/>
						<circle
							cx="50"
							cy="50"
							r="45"
							fill="none"
							stroke="url(#progressGradient)"
							strokeWidth="2"
							strokeDasharray={`${2.83 * 45 * (scrollProgress / 100)} ${2.83 * 45}`}
							style={{ transition: 'stroke-dasharray 0.3s ease' }}
						/>
						<defs>
							<linearGradient
								id="progressGradient"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="100%"
							>
								<stop offset="0%" stopColor="#22c55e" />
								<stop offset="100%" stopColor="#10b981" />
							</linearGradient>
						</defs>
					</svg>

					{/* Icon */}
					<motion.div
						animate={{ y: [0, -4, 0] }}
						transition={{ duration: 1.5, repeat: Infinity }}
						className="relative z-10"
					>
						<ArrowUp size={18} className="text-white" />
					</motion.div>
				</motion.button>
			)}
		</AnimatePresence>
	);
}
