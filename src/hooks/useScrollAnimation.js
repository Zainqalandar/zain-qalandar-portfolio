'use client';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Custom hook for scroll-based animations
 * Provides scroll progress, parallax effects, and fade-in-on-scroll functionality
 */
export function useScrollAnimation() {
	const { scrollY } = useScroll();

	// Parallax offset
	const parallaxY = useTransform(scrollY, [0, 1000], [0, 300]);

	// Fade opacity based on scroll
	const fadeOpacity = useTransform(scrollY, [0, 500], [0.5, 1]);

	return { scrollY, parallaxY, fadeOpacity };
}

/**
 * Hook to detect when element enters viewport
 */
export function useInViewAnimation(ref, options = {}) {
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsInView(true);
				observer.unobserve(entry.target);
			}
		}, {
			threshold: 0.1,
			...options,
		});

		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref, options]);

	return isInView;
}

/**
 * Predefined animation variants for common use cases
 */
export const scrollAnimationVariants = {
	fadeInUp: {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	},
	fadeInDown: {
		hidden: { opacity: 0, y: -40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	},
	fadeInLeft: {
		hidden: { opacity: 0, x: -40 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	},
	fadeInRight: {
		hidden: { opacity: 0, x: 40 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	},
	scaleIn: {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	},
	slideInUp: {
		hidden: { opacity: 0, y: 60 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
		},
	},
	staggerContainer: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	},
};
