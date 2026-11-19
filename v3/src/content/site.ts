import type { ExternalLink, SkillGroup } from '@/content/types'

export const site = {
	name: 'Nathaniel Quansah',
	shortName: 'Nat',
	url: 'https://nathanielquansah.com',
	role: 'Full-stack engineer',
	positioning:
		'Full-stack engineer building payments, fintech and production web platforms for Africa and beyond.',
	description:
		'Nathaniel Quansah (Nat) is a full-stack and backend engineer in Accra, Ghana. Go and TypeScript, about six years in production, currently building WayaSend.',
	location: 'Accra, Ghana',
	timeZone: 'Africa/Accra',
	email: 'n.bongo40@gmail.com',
	availability: 'Open to senior full-stack / backend roles',
	openTo:
		'Remote or Accra-based senior full-stack, backend and fintech roles, plus selected contract work.',
	resumePdf: '/Nathaniel_Quansah_Resume.pdf',
	repo: 'https://github.com/onihani/my-portfolio',
} as const

export const socials: Array<ExternalLink> = [
	{ label: 'GitHub', href: 'https://github.com/onihani' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/onihani' },
	{ label: 'X', href: 'https://x.com/onihani' },
]

export const navigation: Array<ExternalLink> = [
	{ label: 'Work', href: '/work' },
	{ label: 'About', href: '/about' },
	{ label: 'Writing', href: '/writing' },
	{ label: 'Resume', href: '/resume' },
	{ label: 'Contact', href: '/contact' },
]

export const skillGroups: Array<SkillGroup> = [
	{ label: 'Languages', items: ['Go', 'TypeScript', 'Python', 'Solidity', 'Dart'] },
	{
		label: 'Frontend',
		items: [
			'React',
			'Next.js',
			'Vue',
			'React Native / Expo',
			'Tailwind',
			'Zustand',
			'React Hook Form',
			'Zod',
		],
	},
	{
		label: 'Backend',
		items: [
			'Fiber',
			'GORM',
			'Asynq',
			'NestJS',
			'Express',
			'Bun',
			'Frappe / ERPNext',
			'REST',
			'GraphQL',
		],
	},
	{
		label: 'Data',
		items: ['PostgreSQL', 'MongoDB', 'MySQL / MariaDB', 'Redis', 'SQLite', 'Prisma'],
	},
	{ label: 'Search', items: ['Typesense', 'Elasticsearch'] },
	{ label: 'Web3', items: ['Solidity', 'Thirdweb', 'Subsquid', 'Foundry / Cast'] },
	{ label: 'Cloud', items: ['AWS', 'Google Cloud', 'Firebase', 'Vercel', 'Railway'] },
]

export const principles: Array<{ title: string; body: string }> = [
	{
		title: 'Ownership',
		body: 'I take a feature from the first conversation to production, and I stay with it after launch.',
	},
	{
		title: 'Reliability',
		body: 'Money and government services do not get to be flaky. I design for retries, verify everything that crosses a boundary, and keep the boring parts boring.',
	},
	{
		title: 'AI-assisted, human-reviewed',
		body: 'I use AI tools every day to move faster, and I read, test and own every line that ships.',
	},
]
