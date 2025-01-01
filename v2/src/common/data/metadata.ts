// next
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nathaniel Quansah • Software Engineer",
  description: "I specialize in building innovative digital experiences and non-custodial apps with a focus on scalability and user experience.",
  openGraph: {
    title: 'Nathaniel Quansah • Software Engineer',
		description: 'I bring ideas to life and help them scale, crafting innovative digital experiences and non-custodial apps with a focus on usability, scalability, and impact.',
		url: 'https://nathanielquansah.com',
		type: 'website',
		images: [
			{
				url: 'https://www.nathanielquansah.com/images/me-1-1.jpeg',
				width: 1200,
				height: 630,
				alt: 'Nathaniel Quansah • Software Engineer',
			},
		],
  },
  twitter: {
		card: 'summary_large_image',
		title: 'Nathaniel Quansah • Software Engineer',
		description: 'I bring ideas to life and help them scale, crafting innovative digital experiences and non-custodial apps with a focus on usability, scalability, and impact.',
		images: ['https://www.nathanielquansah.com/images/me-1-1.jpeg'],
		site: '@onihani', 
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: {
			url: '/favicon.ico',
			type: 'image/x-icon',
		},
		apple: {
			url: '/apple-touch-icon.png',
			type: 'image/png',
		},
	},
};