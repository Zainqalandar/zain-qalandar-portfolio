import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider, ThemeWidget } from '@/components';
import { profile } from '@/data/profile';
import { validateProfile } from '@/lib/validateProfile';

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

validateProfile(profile);

export const metadata = {
	title: profile.seo.siteTitle,
	description: profile.seo.siteDescription,
	keywords: profile.seo.keywords,
	openGraph: {
		title: profile.seo.openGraphTitle ?? profile.seo.siteTitle,
		description: profile.seo.openGraphDescription ?? profile.seo.siteDescription,
		image: profile.seo.ogImage ?? profile.images.avatar,
	},
	icons: {
		icon: profile.seo.ogImage ?? profile.images.avatar,
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
