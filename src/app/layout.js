
import { Metadata } from 'next';
import './globals.css';

export const metadata = {
	title: 'Syed Zain Qalandar — Full‑Stack (MERN) Developer',
	description:
		'Full‑Stack (MERN) developer — Frontend focused. React, Next.js, Tailwind, Node, MongoDB.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
