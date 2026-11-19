import type { ExternalLink } from '@/content/types'

export const site = {
	name: 'Nathaniel Quansah',
	url: 'https://nathanielquansah.com',
	headline: 'Software engineer in Accra, Ghana.',
	description:
		'Nathaniel Quansah is a software engineer in Accra, Ghana, building payments and web platforms.',
	email: 'n.bongo40@gmail.com',
	building: { name: 'WayaSend', href: 'https://usewayasend.com' },
} as const

export const links: Array<ExternalLink> = [
	{ label: 'Email', href: `mailto:${site.email}` },
	{ label: 'GitHub', href: 'https://github.com/onihani' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/onihani' },
	{ label: 'X', href: 'https://x.com/onihani' },
]

export const navigation: Array<{ label: string; href: string }> = [
	{ label: 'Work', href: '/' },
	{ label: 'Writing', href: '/writing' },
	{ label: 'About', href: '/about' },
]
