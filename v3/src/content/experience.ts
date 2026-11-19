import type { ExperienceEntry } from '@/content/types'

import wayasendLogo from '@/assets/logos/wayasend.png'
import bashtechLogo from '@/assets/logos/bashtech.png'
import medtrackLogo from '@/assets/logos/medtrack.png'
import hurisoftLogo from '@/assets/logos/hurisoft.png'

export const experience: Array<ExperienceEntry> = [
	{
		company: 'WayaSend',
		role: 'Founder',
		period: '2026 – Now',
		logo: wayasendLogo,
		href: 'https://usewayasend.com',
	},
	{
		company: 'Bashtech Solutions',
		role: 'Full-stack engineer',
		period: '2025 – 2026',
		logo: bashtechLogo,
		href: 'https://bashtech.solutions',
	},
	{
		company: 'CrowdPad',
		role: 'Full-stack engineer',
		period: '2024',
		logo: null,
		href: 'https://www.kendal.ai',
	},
	{
		company: 'Medtrack',
		role: 'Full-stack engineer',
		period: '2023 – 2025',
		logo: medtrackLogo,
		href: 'https://medtrack.africa',
	},
	{
		company: 'Hurisoft',
		role: 'Full-stack engineer',
		period: '2021 – 2023',
		logo: hurisoftLogo,
		href: 'https://hurisoft.com',
	},
	{
		company: 'Developers In Vogue',
		role: 'Lead tutor',
		period: '2022',
		logo: null,
		href: null,
	},
	{
		company: 'Filly Coder',
		role: 'Web developer',
		period: '2020 – 2021',
		logo: null,
		href: null,
	},
]

export const education = [
	{ name: 'Accra Technical University', detail: 'HND, Computer Science', period: '2021 – 2023' },
	{
		name: 'Google Africa Developer Scholarship',
		detail: 'Mobile Web Specialist',
		period: null,
	},
]
