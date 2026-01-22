"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/data/profile';

export default function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState(profile.sections[0]?.id || 'hero');
	const navLinks = profile.sections.filter((section) => section.showInNav !== false);
	const trackedSections = profile.sections
		.filter((section) => section.showInHighlight !== false)
		.map((section) => section.id);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			// Update active section
			let current = trackedSections[0] || 'hero';

			for (const section of trackedSections) {
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
					<Link href={profile.sections[0]?.href || '#'} className="flex items-center gap-3 group">
						<motion.div
							whileHover={{ rotate: 360, scale: 1.1 }}
							transition={{ duration: 0.6 }}
							className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-green-400/50 shadow-lg hover:ring-green-400 transition-all relative"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
							<Image
								src={profile.images.avatar}
								alt={profile.images.avatarAlt}
								width={44}
								height={44}
								className="object-cover"
							/>
						</motion.div>
						<div className="flex flex-col">
							<div className="text-lg font-poppins font-bold text-white group-hover:text-green-400 transition-colors">
								{profile.basic.brandName ?? profile.basic.fullName}
							</div>
							<div className="text-xs text-gray-400 group-hover:text-green-300 transition-colors flex items-center gap-1 font-inter">
								<Zap size={10} className="text-yellow-400" />
								{profile.basic.headline}
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
								key={link.label}
								href={link.href}
								variants={itemVariants}
								className={`relative group px-4 py-2 text-sm font-inter font-medium transition-colors ${
									active ? 'text-green-400' : 'text-gray-300 hover:text-white'
								}`}
								onClick={() => setOpen(false)}
							>
								{link.label}
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

					{profile.resume?.resumeUrl && profile.resume?.label && (
						<motion.a
							variants={itemVariants}
							href={profile.resume.resumeUrl}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={profile.resume.ariaLabel ?? profile.ui.resumeAriaLabel}
							whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)' }}
							whileTap={{ scale: 0.95 }}
							className="ml-6 px-6 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-poppins font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
						>
							{profile.resume.label}
							<motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
								{profile.ui.resumeIndicator}
							</motion.div>
						</motion.a>
					)}
				</motion.nav>

					{/* Theme switcher removed from header - global floating widget used instead */}

				{/* Mobile Menu Button (visible up to lg) */}
				<motion.button
					className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition text-white"
					onClick={() => setOpen(!open)}
					aria-label={profile.ui.menuAriaLabel}
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
									aria-label={profile.ui.closeMenuLabel}
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
											key={link.label}
											href={link.href}
											variants={itemVariants}
											className={`font-inter font-medium transition-colors px-4 py-3 rounded-lg text-center ${
												active
													? 'bg-green-500/20 text-green-400 border border-green-500/30'
													: 'text-gray-300 hover:text-green-400 hover:bg-white/5'
											}`}
											onClick={() => setOpen(false)}
										>
											{link.label}
										</motion.a>
									);
								})}
								{profile.resume?.resumeUrl && profile.resume?.label && (
									<motion.a
										variants={itemVariants}
										href={profile.resume.resumeUrl}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={profile.resume.ariaLabel ?? profile.ui.resumeAriaLabel}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-poppins font-semibold shadow-lg text-center transition-all duration-300"
										onClick={() => setOpen(false)}
									>
										{profile.resume.label}
									</motion.a>
								)}
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
		</motion.header>
	);
}
