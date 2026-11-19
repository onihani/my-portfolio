import type { ExternalLink } from '@/content/types'

export const site = {
	name: 'Nathaniel Quansah',
	url: 'https://nathanielquansah.com',
	headline: 'Software engineer in Accra, Ghana.',
	description:
		'Nathaniel Quansah is a software engineer in Accra, Ghana, building payments and production web platforms in Go and TypeScript.',
	email: 'n.bongo40@gmail.com',
} as const

export const links: Array<ExternalLink> = [
	{ label: 'GitHub', href: 'https://github.com/onihani' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/onihani' },
	{ label: 'X', href: 'https://x.com/onihani' },
	{ label: 'Email', href: `mailto:${site.email}` },
]
