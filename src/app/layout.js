import { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider, ThemeWidget } from '@/components';

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata = {
	title: 'Syed Zain Qalandar — Full-Stack (MERN) Developer | React & Next.js',
	description:
		'Full-Stack (MERN) developer specializing in React, Next.js, and Tailwind CSS. Expertise in building modern, responsive web applications.',
	keywords: 'MERN stack, React developer, Next.js, Full-stack, Web developer, Tailwind CSS',
	openGraph: {
		title: 'Syed Zain Qalandar — Full-Stack Developer',
		description: 'Building beautiful, responsive web applications with React and Next.js',
		image: '/images/profile.png',
	},
	icons: {
		icon: '/images/profile.png',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${inter.variable}`}>
			<head>
				<meta name="theme-color" content="#10b981" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body>
				<ThemeProvider>
					<ThemeWidget />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
