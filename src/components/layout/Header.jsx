"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import navLinks from '@/data/navLinks.json';

export default function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('hero');

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			// Update active section
			const sections = ['hero', 'about', 'services', 'experience', 'skills', 'projects', 'testimonials', 'faq', 'contact'];
			let current = 'hero';

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= window.innerHeight / 3) {
						current = section;
					}
				}
			}

			setActiveSection(current);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 100, damping: 15 },
		},
	};

	const isLinkActive = (href) => {
		const sectionId = href.replace('#', '');
		return activeSection === sectionId;
	};

	return (
		<motion.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
			className={`site-header relative w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-xl' : ''}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
				{/* Logo */}
				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Link href="#" className="flex items-center gap-3 group">
						<motion.div
							whileHover={{ rotate: 360, scale: 1.1 }}
							transition={{ duration: 0.6 }}
							className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-green-400/50 shadow-lg hover:ring-green-400 transition-all relative"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
							<Image
								src="/images/profile.png"
								alt="Zain"
								width={44}
								height={44}
								className="object-cover"
							/>
						</motion.div>
						<div className="flex flex-col">
							<div className="text-lg font-poppins font-bold text-white group-hover:text-green-400 transition-colors">
								Zain Qalandar
							</div>
							<div className="text-xs text-gray-400 group-hover:text-green-300 transition-colors flex items-center gap-1 font-inter">
								<Zap size={10} className="text-yellow-400" />
								Full-Stack Developer
							</div>
						</div>
					</Link>
				</motion.div>

				{/* Desktop Navigation */}
				<motion.nav
					className="hidden lg:flex gap-1 items-center"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{navLinks.map((link) => {
						const active = isLinkActive(link.href);
						return (
							<motion.a
								key={link.name}
								href={link.href}
								variants={itemVariants}
								className={`relative group px-4 py-2 text-sm font-inter font-medium transition-colors ${
									active ? 'text-green-400' : 'text-gray-300 hover:text-white'
								}`}
								onClick={() => setOpen(false)}
							>
								{link.name}
								<motion.span
									layoutId="underline"
									className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-green-400 to-emerald-400"
									initial={{ width: 0 }}
									animate={{ width: active ? '100%' : 0 }}
									whileHover={{ width: '100%' }}
									transition={{ duration: 0.3 }}
								/>
								{active && (
									<motion.div
										layoutId="activeIndicator"
										className="absolute inset-0 rounded-lg bg-green-500/10 -z-10"
										transition={{ duration: 0.3 }}
									/>
								)}
							</motion.a>
						);
					})}

					<motion.a
						variants={itemVariants}
						href="/cv/ZainQalandar-FullStack(Mern)-CV-1.pdf"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open resume in a new tab"
						whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)' }}
						whileTap={{ scale: 0.95 }}
						className="ml-6 px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-poppins font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
					>
						Resume
						<motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
							→
						</motion.div>
					</motion.a>
				</motion.nav>

					{/* Theme switcher removed from header - global floating widget used instead */}

				{/* Mobile Menu Button (visible up to lg) */}
				<motion.button
					className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition text-white"
					onClick={() => setOpen(!open)}
					aria-label="menu"
					aria-controls="mobile-nav"
					aria-expanded={open}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
				>
					<motion.div
						animate={{ rotate: open ? 90 : 0 }}
						transition={{ duration: 0.3 }}
					>
						{open ? <X size={24} /> : <Menu size={24} />}
					</motion.div>
				</motion.button>
			</div>

				{/* Mobile Navigation */}
				<AnimatePresence>
					{open && (
						<motion.div
							id="mobile-nav"
							role="dialog"
							aria-modal="true"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.25 }}
								className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-[9999] nav-overlay overflow-auto"
						>
							<motion.div
								className="px-6 py-6 flex flex-col gap-3 relative max-w-3xl mx-auto"
								variants={containerVariants}
								initial="hidden"
								animate="visible"
							>
								{/* Close button inside overlay for easier access on tablets */}
								<button
									aria-label="Close menu"
									className="absolute right-4 top-4 p-2 rounded-md text-white hover:bg-white/5"
									onClick={() => setOpen(false)}
								>
									<X size={20} />
								</button>

								{/* Mobile theme picker removed from header - global floating widget used instead */}

								{navLinks.map((link) => {
									const active = isLinkActive(link.href);
									return (
										<motion.a
											key={link.name}
											href={link.href}
											variants={itemVariants}
											className={`font-inter font-medium transition-colors px-4 py-3 rounded-lg text-center ${
												active
													? 'bg-green-500/20 text-green-400 border border-green-500/30'
													: 'text-gray-300 hover:text-green-400 hover:bg-white/5'
											}`}
											onClick={() => setOpen(false)}
										>
											{link.name}
										</motion.a>
									);
								})}
								<motion.a
									variants={itemVariants}
									href="/cv/ZainQalandar-FullStack(Mern)-CV-1.pdf"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Open resume in a new tab"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-poppins font-semibold shadow-lg text-center transition-all duration-300"
									onClick={() => setOpen(false)}
								>
									Resume
								</motion.a>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
		</motion.header>
	);
}
