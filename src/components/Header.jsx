'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import navLinks from '@/data/navLinks.json';

export default function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
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

	return (
		<motion.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
			className={`relative w-full sticky top-0 z-50 transition-all duration-300 ${
				scrolled
					? 'glass-effect border-white/20 shadow-xl'
					: 'bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/80 border-b border-white/10'
			}`}
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
					className="hidden md:flex gap-1 items-center"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{navLinks.map((link) => (
						<motion.a
							key={link.name}
							href={link.href}
							variants={itemVariants}
							className="relative group px-4 py-2 text-sm font-inter font-medium text-gray-300 hover:text-white transition-colors"
							onClick={() => setOpen(false)}
						>
							{link.name}
							<motion.span
								layoutId="underline"
								className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-green-400 to-emerald-400 transition-all"
								initial={{ width: 0 }}
								whileHover={{ width: '100%' }}
								transition={{ duration: 0.3 }}
							/>
						</motion.a>
					))}

					<motion.a
						variants={itemVariants}
						href="/resume.pdf"
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

				{/* Mobile Menu Button */}
				<motion.button
					className="md:hidden p-2 rounded-lg hover:bg-white/10 transition text-white"
					onClick={() => setOpen(!open)}
					aria-label="menu"
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
						initial={{ opacity: 0, y: -20, height: 0 }}
						animate={{ opacity: 1, y: 0, height: 'auto' }}
						exit={{ opacity: 0, y: -20, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-xl overflow-hidden"
					>
						<motion.div
							className="px-6 py-6 flex flex-col gap-3"
							variants={containerVariants}
							initial="hidden"
							animate="visible"
						>
							{navLinks.map((link) => (
								<motion.a
									key={link.name}
									href={link.href}
									variants={itemVariants}
									className="text-gray-300 hover:text-green-400 font-inter font-medium transition-colors px-4 py-2 rounded-lg hover:bg-white/5 text-center"
									onClick={() => setOpen(false)}
								>
									{link.name}
								</motion.a>
							))}
							<motion.a
								variants={itemVariants}
								href="/resume.pdf"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="px-4 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-poppins font-semibold shadow-lg text-center transition-all duration-300"
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
