import {
	Award,
	Briefcase,
	Code,
	Code2,
	Github,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Palette,
	Phone,
	Smartphone,
	Trophy,
	Twitter,
	Users,
	Zap,
} from 'lucide-react';
import type { Profile } from '@/types/profile';

export const profile = {
	basic: {
		fullName: 'Syed Zain Qalandar',
		displayName: 'Syed Zain.',
		brandName: 'Zain Qalandar',
		headline: 'Full-Stack Developer',
		shortBio:
			"I'm a Front-end focused Full-Stack (MERN) developer building accessible, performant interfaces and solid backends.",
		location: 'Sheikhupura, Pakistan',
	},
	images: {
		avatar: '/images/profile.png',
		avatarAlt: 'Syed Zain Qalandar',
	},
	contact: {
		email: 'bsitf21e68406@gcbskp.edu.pk',
		website: 'https://zainqalandar.com',
	},
	socials: {
		github: 'https://github.com/Zainqalandar',
		linkedin: 'https://www.linkedin.com/in/zainqalandar-online',
		twitter: 'https://twitter.com/zainqalandar',
		instagram: 'https://instagram.com/zainqalandar.brand',
		facebook: '#',
	},
	resume: {
		resumeUrl: '/cv/ZainQalandar-FullStack(Mern)-CV-1.pdf',
		label: 'Resume',
		ariaLabel: 'Open resume in a new tab',
	},
	primaryCta: {
		label: 'Download CV',
		href: '/cv/ZainQalandar-FullStack(Mern)-CV-1.pdf',
		download: 'ZainQalandar-CV.pdf',
	},
	secondaryCta: {
		label: 'See my work',
		href: '#projects',
	},
	sections: [
		{ id: 'hero', label: 'Hero', href: '#hero', showInNav: false, showInHighlight: true },
		{ id: 'about', label: 'About', href: '#about', showInNav: true, showInHighlight: true },
		{ id: 'services', label: 'Services', href: '#services', showInNav: true, showInHighlight: true },
		{ id: 'experience', label: 'Experience', href: '#experience', showInNav: true, showInHighlight: true },
		{ id: 'skills', label: 'Skills', href: '#skills', showInNav: true, showInHighlight: true },
		{ id: 'projects', label: 'Projects', href: '#projects', showInNav: true, showInHighlight: true },
		{ id: 'testimonials', label: 'Testimonials', href: '#testimonials', showInNav: true, showInHighlight: true },
		{ id: 'faq', label: 'FAQ', href: '#faq', showInNav: true, showInHighlight: true },
		{ id: 'contact', label: 'Contact', href: '#contact', showInNav: true, showInHighlight: true },
	],
	hero: {
		welcome: 'Welcome to my portfolio',
		greetingPrefix: "Hello, my name's",
		subheading:
			"I'm a Front-end focused Full-Stack (MERN) developer building accessible, performant interfaces and solid backends.",
		scrollHint: 'Scroll down',
		socialLinks: [
			{
				label: 'GitHub',
				href: 'https://github.com/Zainqalandar',
				icon: Github,
				className:
					'w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/30 border border-green-500/20 text-green-300 hover:bg-green-600/10 transition',
			},
			{
				label: 'LinkedIn',
				href: 'https://www.linkedin.com/in/zainqalandar-online',
				icon: Linkedin,
				className:
					'w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/30 border border-blue-500/10 text-blue-300 hover:bg-blue-600/10 transition',
			},
			{
				label: 'Email',
				href: 'mailto:bsitf21e68406@gcbskp.edu.pk',
				icon: Mail,
				className:
					'w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/30 border border-emerald-500/10 text-emerald-300 hover:bg-emerald-600/10 transition',
			},
		],
	},
	stats: [
		{
			icon: Code2,
			label: 'Projects Completed',
			value: 15,
			suffix: '+',
			colorClass: 'from-blue-500 to-cyan-500',
		},
		{
			icon: Users,
			label: 'Clients Worked With',
			value: 8,
			suffix: '+',
			colorClass: 'from-purple-500 to-pink-500',
		},
		{
			icon: Trophy,
			label: 'Years Experience',
			value: 2,
			suffix: '+',
			colorClass: 'from-yellow-500 to-orange-500',
		},
		{
			icon: Zap,
			label: 'Performance Score',
			value: 98,
			suffix: '%',
			colorClass: 'from-green-500 to-emerald-500',
		},
	],
	about: {
		title: 'About Me',
		longBio:
			"I'm a passionate Full-Stack Developer (MERN), front-end focused with strong experience in building responsive user interfaces using React, Next.js and Tailwind CSS. I'm also familiar with Node.js, Express and MongoDB for APIs and data management. I love translating Figma designs into production-ready code while optimizing performance and user experience.",
		intro: {
			prefix: "I'm a passionate ",
			highlight: 'Full-Stack Developer (MERN)',
			suffix:
				', front-end focused with strong experience in building responsive user interfaces using React, Next.js and Tailwind CSS. I\'m also familiar with Node.js, Express and MongoDB for APIs and data management. I love translating Figma designs into production-ready code while optimizing performance and user experience.',
		},
		paragraphs: [
			"Beyond coding, I'm passionate about open-source contributions, mentoring junior developers, and staying updated with the latest web technologies. I believe in writing clean, maintainable code and delivering solutions that exceed expectations.",
		],
		highlights: [
			'Front-end focused MERN developer with a love for polished UI work.',
			'Experienced with Node.js, Express, and MongoDB for full-stack delivery.',
			'Enjoys turning Figma designs into production-ready experiences.',
			'Passionate about open-source, mentoring, and modern web tech.',
		],
		summaryCards: [
			{ title: 'Education', value: 'BSIT (In progress)', icon: Award },
			{ title: 'Location', value: 'Sheikhupura, Pakistan', icon: MapPin },
			{ title: 'Availability', value: 'Remote / Hybrid', icon: Briefcase },
		],
	},
	services: {
		title: 'Services & Expertise',
		items: [
			{
				icon: Code,
				title: 'Full-Stack Development',
				description:
					'End-to-end web application development using MERN stack with scalable architecture and best practices.',
			},
			{
				icon: Palette,
				title: 'UI/UX Implementation',
				description:
					'Converting Figma designs into responsive, pixel-perfect React and Next.js components with smooth animations.',
			},
			{
				icon: Smartphone,
				title: 'Responsive Design',
				description:
					'Mobile-first approach ensuring your application looks and functions beautifully on all devices and screen sizes.',
			},
			{
				icon: Zap,
				title: 'Performance Optimization',
				description:
					'Optimizing applications for speed and efficiency through code splitting, lazy loading, and caching strategies.',
			},
		],
	},
	experienceSection: {
		title: 'Professional Experience',
		rangeSeparator: ' - ',
		locationSeparator: ' · ',
	},
	experience: [
		{
			role: 'Frontend Developer',
			company: 'KodeStudio',
			start: '2024',
			end: 'Present',
			bullets: [
				'Building responsive web interfaces with Next.js and Tailwind CSS. Collaborating with design team to convert Figma designs into production-ready components.',
			],
			tech: ['Next.js', 'React', 'Tailwind CSS', 'Figma'],
		},
		{
			role: 'MERN Stack Developer',
			company: 'Freelance',
			start: '2023',
			end: '2024',
			bullets: [
				'Developed full-stack web applications using MongoDB, Express, React, and Node.js. Implemented JWT authentication, REST APIs, and responsive UI designs.',
			],
			tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
		},
	],
	skills: {
		title: 'Technical Skills',
		categories: [
			{
				title: 'Frontend',
				items: ['JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS', 'MUI'],
			},
			{
				title: 'Backend',
				items: ['Node.js', 'Express', 'MongoDB', 'Appwrite'],
			},
			{
				title: 'Tools & Others',
				items: ['Redux Toolkit', 'Git', 'Vercel'],
			},
		],
		itemPrefix: '✓',
		proficiency: {
			title: 'Proficiency Level',
			items: [
				{ name: 'React & Next.js', level: 95 },
				{ name: 'Tailwind CSS', level: 95 },
				{ name: 'JavaScript/ES6+', level: 90 },
				{ name: 'Node.js & Express', level: 85 },
				{ name: 'MongoDB', level: 85 },
			],
		},
	},
	projectsSection: {
		title: 'Featured Projects',
		cardSymbol: '#',
		primaryActionLabel: 'View Project',
		secondaryActionLabel: 'Code',
		fallbackLink: '#',
	},
	projects: [
		{
			title: 'MERN E-Commerce Platform',
			description:
				'Full-featured e-commerce platform with product CRUD operations, JWT authentication, order management, and Redux state management.',
			tech: ['MongoDB', 'Express', 'React', 'Node', 'Tailwind', 'Redux'],
			links: {
				live: '#',
			},
		},
		{
			title: 'Web-Kayana (Frontend)',
			description:
				'Converted Figma designs to responsive Next.js and Chakra UI components for a professional web agency.',
			tech: ['Next.js', 'Chakra UI', 'Axios', 'Responsive Design'],
			links: {
				live: 'https://hirekayana.com',
				repo: 'https://hirekayana.com',
			},
		},
		{
			title: 'Task Management Dashboard',
			description:
				'Interactive task management application with real-time updates, user authentication, and beautiful UI. Features drag-and-drop functionality.',
			tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind'],
			links: {
				live: '#',
			},
		},
		{
			title: 'Social Media Analytics Tool',
			description:
				'Analytics dashboard for tracking social media performance with charts, real-time data visualization, and detailed insights.',
			tech: ['Next.js', 'Chart.js', 'API Integration', 'Tailwind CSS'],
			links: {
				live: '#',
			},
		},
		{
			title: 'Portfolio Website',
			description:
				'Modern, responsive portfolio showcasing projects with smooth animations, contact form, and optimized performance.',
			tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive'],
			links: {
				live: 'https://zainqalandar.com',
				repo: 'https://zainqalandar.com',
			},
		},
		{
			title: 'Blog Platform with CMS',
			description:
				'Full-featured blogging platform with content management, categories, comments, and beautiful markdown rendering.',
			tech: ['Next.js', 'Strapi CMS', 'React', 'MongoDB', 'Tailwind'],
			links: {
				live: '#',
			},
		},
	],
	testimonialsSection: {
		title: 'What People Say',
		roleConnector: 'at',
	},
	testimonials: [
		{
			name: 'Ahmed Hassan',
			role: 'Project Manager',
			company: 'KodeStudio',
			quote:
				'Zain is an excellent developer with strong attention to detail. He consistently delivers high-quality code and is a pleasure to work with. His ability to convert designs into responsive interfaces is remarkable.',
			rating: 5,
		},
		{
			name: 'Fatima Khan',
			role: 'UI/UX Designer',
			company: 'Tech Innovations',
			quote:
				'Working with Zain was amazing. He understood the design vision perfectly and implemented it flawlessly. Very professional and communicative throughout the project.',
			rating: 5,
		},
		{
			name: 'Mustafa Ali',
			role: 'CTO',
			company: 'StartUp Pro',
			quote:
				'Zain demonstrates strong technical skills and problem-solving abilities. His experience with MERN stack is evident, and he brings fresh perspectives to development challenges.',
			rating: 5,
		},
	],
	articlesSection: {
		title: 'Latest Articles',
		readLabel: 'Read Article',
		ctaLabel: 'View All Articles',
		ctaHref: '#',
	},
	articles: [
		{
			title: 'Building Scalable React Applications',
			excerpt:
				'Learn how to structure your React projects for scalability, manage state effectively, and implement best practices for large-scale applications.',
			author: 'Zain Qalandar',
			date: 'Nov 28, 2024',
			readTime: '8 min read',
			category: 'React',
			href: '#',
		},
		{
			title: 'Next.js 15 Performance Optimization Tips',
			excerpt:
				'Discover the latest Next.js features and techniques to optimize your application for faster load times and better user experience.',
			author: 'Zain Qalandar',
			date: 'Nov 20, 2024',
			readTime: '12 min read',
			category: 'Next.js',
			href: '#',
		},
		{
			title: 'Tailwind CSS Best Practices',
			excerpt:
				'Master advanced Tailwind CSS techniques, utility-first workflow, and create consistent design systems using Tailwind components.',
			author: 'Zain Qalandar',
			date: 'Nov 10, 2024',
			readTime: '10 min read',
			category: 'Tailwind',
			href: '#',
		},
	],
	faqSection: {
		title: 'Frequently Asked Questions',
		intro: 'Find answers to common questions about my services, process, and expertise.',
		ctaLabel: 'Get In Touch',
		ctaHref: '#contact',
		ctaHelper: 'Still have questions? Feel free to reach out!',
	},
	faq: [
		{
			question: 'What is your typical project timeline?',
			answer:
				'Project timelines vary depending on complexity and scope. A simple landing page might take 1-2 weeks, while a full-featured web application can take 2-3 months. I provide realistic estimates after understanding your requirements.',
		},
		{
			question: 'Do you offer maintenance and support?',
			answer:
				'Yes! I offer post-launch support and maintenance packages. This includes bug fixes, updates, performance optimization, and feature enhancements to keep your application running smoothly.',
		},
		{
			question: 'What technologies do you specialize in?',
			answer:
				"I specialize in the MERN stack (MongoDB, Express, React, Node.js) and modern tools like Next.js, Tailwind CSS, and Framer Motion. I'm always learning new technologies to provide the best solutions.",
		},
		{
			question: 'Can you work with existing codebases?',
			answer:
				"Absolutely! I can integrate with existing projects, refactor code, improve performance, or add new features to existing applications. I'm comfortable working with legacy code and modernizing it.",
		},
		{
			question: 'Do you sign NDAs?',
			answer:
				"Yes, I'm happy to sign NDAs and confidentiality agreements to protect your project information and intellectual property.",
		},
		{
			question: "What's your communication style?",
			answer:
				'I believe in clear and transparent communication. I provide regular updates, welcome feedback, and am available for meetings via video call, email, or messaging platforms as needed.',
		},
	],
	ctaSection: {
		badge: 'Ready to work together?',
		title: "Let's Build Something",
		highlightWord: 'Awesome',
		description:
			"Transform your ideas into extraordinary digital experiences. Let's collaborate and create solutions that stand out.",
		primaryAction: {
			label: 'Start a Conversation',
			href: 'mailto:bsitf21e68406@gcbskp.edu.pk',
		},
		secondaryAction: {
			label: 'View My Work',
			href: 'https://github.com/Zainqalandar',
		},
		note: '💡 Available for freelance & full-time opportunities',
	},
	contactSection: {
		title: 'Get In Touch',
		description:
			"Have a question or proposal? I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.",
		infoCards: [
			{
				title: 'Email',
				value: 'bsitf21e68406@gcbskp.edu.pk',
				href: 'mailto:bsitf21e68406@gcbskp.edu.pk',
				icon: Mail,
			},
			{
				title: 'Location',
				value: 'Sheikhupura, Pakistan',
				icon: MapPin,
			},
			{
				title: 'Response Time',
				value: '24-48 hours',
				icon: Phone,
			},
		],
		form: {
			title: 'Send me a message',
			description:
				"I'd love to hear about your project. Feel free to reach out and let's discuss how I can help.",
			labels: {
				name: 'Full Name',
				email: 'Email Address',
				subject: 'Subject',
				message: 'Message',
			},
			emailBody: {
				nameLabel: 'Name',
				emailLabel: 'Email',
				subjectLabel: 'Subject',
				messageLabel: 'Message',
			},
			placeholders: {
				name: 'John Doe',
				email: 'john@example.com',
				subject: 'What is this about?',
				message: 'Tell me more about your project or inquiry...',
			},
			requiredIndicator: '*',
			submitLabel: 'Send Message',
			successMessage: "Message sent successfully! I'll get back to you soon.",
			validation: {
				required: 'Please fill in all fields',
				invalidEmail: 'Please enter a valid email address',
			},
			defaultSubject: 'Portfolio Contact',
		},
		socialTitle: 'Connect With Me',
		socialLinks: [
			{
				label: 'GitHub',
				href: 'https://github.com/Zainqalandar',
				icon: Github,
				className: 'hover:text-white hover:bg-black/50',
			},
			{
				label: 'LinkedIn',
				href: 'https://linkedin.com/in/zain-qalandar',
				icon: Linkedin,
				className: 'hover:text-blue-400 hover:bg-blue-500/10',
			},
			{
				label: 'Twitter',
				href: 'https://twitter.com/zainqalandar',
				icon: Twitter,
				className: 'hover:text-blue-300 hover:bg-blue-500/10',
			},
		],
	},
	footer: {
		brandName: 'Syed Zain Qalandar',
		tagline: 'Full Stack Developer & Creative Builder',
		quickLinksTitle: 'Quick Links',
		quickLinks: [
			{ label: 'About', href: '#about' },
			{ label: 'Projects', href: '#projects' },
			{ label: 'Contact', href: '#contact' },
		],
		socialTitle: 'Follow',
		socialLinks: [
			{
				label: 'Email',
				href: 'mailto:bsitf21e68406@gcbskp.edu.pk',
				icon: Mail,
				className:
					'p-3 rounded-lg border border-white/20 text-gray-400 hover:text-green-400 hover:border-green-500/50 transition-all duration-300',
			},
			{
				label: 'Instagram',
				href: 'https://instagram.com/zainqalandar.brand',
				icon: Instagram,
				className:
					'p-3 rounded-lg border border-white/20 text-gray-400 hover:text-pink-400 hover:border-pink-500/50 transition-all duration-300',
			},
			{
				label: 'GitHub',
				href: 'https://github.com/Zainqalandar',
				icon: Github,
				className:
					'p-3 rounded-lg border border-white/20 text-gray-400 hover:text-white hover:border-white/50 transition-all duration-300',
			},
		],
		copyrightTemplate:
			'© {year} Syed Zain Qalandar. All rights reserved.',
		madeWithPrefix: 'Made with',
		madeWithSuffix: 'using Next.js & Framer Motion',
		backToTopLabel: 'Back to top',
	},
	ui: {
		scrollToTopLabel: 'Scroll to top',
		menuAriaLabel: 'menu',
		closeMenuLabel: 'Close menu',
		resumeAriaLabel: 'Open resume in a new tab',
		resumeIndicator: '→',
		themeWidget: {
			label: 'Theme',
			toggleAriaLabel: 'Open theme switcher',
			options: [
				{
					id: 'dark',
					title: 'Dark',
					colors: ['#0f172a', '#064e3b', '#0d3d2c'],
				},
				{
					id: 'midnight',
					title: 'Midnight',
					colors: ['#0b1020', '#071229', '#00121a'],
				},
			],
		},
		themeSwitcher: {
			label: 'Theme',
			titleSeparator: ' — ',
			options: [
				{ id: 'dark', title: 'Dark', hint: 'Default', colors: ['#0f172a', '#064e3b', '#0d3d2c'] },
				{ id: 'light', title: 'Light', hint: 'Bright', colors: ['#f8fafc', '#eef2ff', '#f0f9ff'] },
				{ id: 'solar', title: 'Solar', hint: 'Warm', colors: ['#fff7ed', '#ffedd5', '#fff1e0'] },
				{ id: 'midnight', title: 'Midnight', hint: 'Violet', colors: ['#0b1020', '#071229', '#00121a'] },
			],
		},
	},
	seo: {
		siteTitle: 'Syed Zain Qalandar — Full-Stack (MERN) Developer | React & Next.js',
		siteDescription:
			'Full-Stack (MERN) developer specializing in React, Next.js, and Tailwind CSS. Expertise in building modern, responsive web applications.',
		openGraphTitle: 'Syed Zain Qalandar — Full-Stack Developer',
		openGraphDescription:
			'Building beautiful, responsive web applications with React and Next.js',
		ogImage: '/images/profile.png',
		keywords: [
			'MERN stack',
			'React developer',
			'Next.js',
			'Full-stack',
			'Web developer',
			'Tailwind CSS',
		],
	},
	education: [
		{
			institute: 'GCB Sheikhupura',
			degree: 'BSIT (In progress)',
			start: '2021',
			end: 'Present',
		},
	],
} as const satisfies Profile;
