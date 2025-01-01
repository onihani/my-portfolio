// next
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nathaniel Quansah • Software Engineer",
  description: "I specialize in building innovative digital experiences and non-custodial apps with a focus on scalability and user experience.",
  openGraph: {
    title: 'Nathaniel Quansah • Software Engineer',
		description: 'I bring ideas to life and help them scale, crafting innovative digital experiences and non-custodial apps with a focus on usability, scalability, and impact.',
		url: 'https://yourdomain.com', // Replace with your site URL
		type: 'website',
		images: [
			{
				url: 'https://yourdomain.com/og-image.jpg', // Replace with your OG image URL
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
		images: ['https://yourdomain.com/og-image.jpg'], // Replace with your OG image URL
		site: '@yourTwitterHandle', // Replace with your Twitter username
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png', // Replace with your Apple Touch icon URL
	},
};