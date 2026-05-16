import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Tomorrow depends on tonight — sleep now',
	description:
		'Tomorrow’s version of you is being built tonight. A concise, science-backed intervention to help you sleep on schedule.',
	openGraph: {
		title: 'Tomorrow depends on tonight — sleep now',
		description:
			'Tomorrow’s version of you is being built tonight. A concise, science-backed intervention to help you sleep on schedule.',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: 'Tomorrow depends on tonight — sleep now',
		description:
			'Tomorrow’s version of you is being built tonight. A concise, science-backed intervention to help you sleep on schedule.',
	},
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html
			lang='en'
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className='min-h-full flex flex-col bg-black'>{children}</body>
		</html>
	);
};

export default RootLayout;
