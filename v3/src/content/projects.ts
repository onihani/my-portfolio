import type { PastProject, SelectedProject } from '@/content/types'

import wayasendDashboard from '@/assets/work/wayasend/dashboard.webp'
import wayasendCards from '@/assets/work/wayasend/cards.webp'
import wayasendSend from '@/assets/work/wayasend/send.webp'
import wayasendLanding from '@/assets/work/wayasend/landing.webp'
import gtaLicence from '@/assets/work/gta/licence.webp'
import gtaLookup from '@/assets/work/gta/lookup.webp'
import gtaHome from '@/assets/work/gta/home.webp'
import rendevuAiSearch from '@/assets/work/rendevu/ai-search.webp'
import rendevuHome from '@/assets/work/rendevu/home.webp'
import kendalHome from '@/assets/work/kendal/home.webp'
import medtrackApp from '@/assets/work/medtrack/app.webp'
import medtrackHome from '@/assets/work/medtrack/home.webp'
import soccersmHome from '@/assets/work/soccersm/home.webp'
import rehobothHome from '@/assets/work/rehoboth/home.webp'
import gasuHome from '@/assets/work/gasu/home.webp'

export const selectedProjects: Array<SelectedProject> = [
	{
		name: 'WayaSend',
		role: 'Founder',
		description:
			'USD virtual cards and money transfers across Africa. I built the Go backend, the web app and the KYC flow.',
		link: { label: 'usewayasend.com', href: 'https://usewayasend.com' },
		shots: [
			{
				image: wayasendDashboard,
				alt: 'WayaSend dashboard with wallet balance, a virtual card and transactions',
			},
			{ image: wayasendCards, alt: 'WayaSend cards page with card funding history' },
			{ image: wayasendSend, alt: 'WayaSend send money flow' },
			{ image: wayasendLanding, alt: 'WayaSend landing page' },
		],
		note: null,
	},
	{
		name: 'Ghana Tourism Authority',
		role: 'Full-stack engineer, Bashtech',
		description:
			'The national licensing portal for tourism businesses in Ghana. Registration, licence applications and a five-level approval workflow.',
		link: { label: 'gta.gov.gh', href: 'https://gta.gov.gh' },
		shots: [
			{ image: gtaLicence, alt: 'A verified licence record on the Ghana Tourism Authority portal' },
			{ image: gtaLookup, alt: 'Licence search suggesting a business while typing' },
			{ image: gtaHome, alt: 'Ghana Tourism Authority portal home page' },
		],
		note: null,
	},
	{
		name: 'Rendevu',
		role: 'Web3',
		description:
			'Onchain events on Base: tickets, check-ins and attendance proofs, with search you can ask in plain English.',
		link: { label: 'GitHub', href: 'https://github.com/rendevu-dapp' },
		shots: [
			{ image: rendevuAiSearch, alt: 'Rendevu explore page with a natural-language search' },
			{ image: rendevuHome, alt: 'Rendevu home page' },
		],
		note: 'Explore is shown with sample events.',
	},
	{
		name: 'Kendal AI',
		role: 'Full-stack engineer, CrowdPad',
		description:
			'An AI-powered CRM for real estate agents. I rebuilt listing management, search, portal feeds and the WhatsApp integration.',
		link: { label: 'kendal.ai', href: 'https://www.kendal.ai' },
		shots: [{ image: kendalHome, alt: 'Kendal AI website' }],
		note: null,
	},
	{
		name: 'Medtrack',
		role: 'Full-stack engineer',
		description: 'Health records for Africa, linked to national biometric IDs.',
		link: { label: 'medtrack.africa', href: 'https://medtrack.africa' },
		shots: [
			{ image: medtrackApp, alt: 'Medtrack facility app with a list of patients' },
			{ image: medtrackHome, alt: 'Medtrack website' },
		],
		note: null,
	},
	{
		name: 'Soccersm',
		role: 'Backend engineer, Hurisoft',
		description: 'AI pre-match predictions and analysis for the major football leagues.',
		link: { label: 'soccersm.ai', href: 'https://soccersm.ai' },
		shots: [{ image: soccersmHome, alt: 'Soccersm predictions page' }],
		note: null,
	},
	{
		name: 'Rehoboth Immigration Law',
		role: 'Design and development',
		description: 'Website for a US immigration law firm, with consultation booking.',
		link: { label: 'rehobothlawus.com', href: 'https://rehobothlawus.com' },
		shots: [{ image: rehobothHome, alt: 'Rehoboth Law website' }],
		note: null,
	},
	{
		name: 'GASU',
		role: 'Development',
		description: 'Supporters club website for the Great African Supporters Union.',
		link: { label: 'gasu.africa', href: 'https://www.gasu.africa' },
		shots: [{ image: gasuHome, alt: 'GASU website' }],
		note: null,
	},
]

export const pastProjects: Array<PastProject> = [
	{
		name: 'Jodi Drilling ERP',
		context: 'Bashtech',
		description: 'Custom Frappe ERP for safety, HR and payroll',
		link: null,
	},
	{
		name: 'Kwantu',
		context: 'Bashtech',
		description: 'Luxury vehicle and chauffeur booking',
		link: null,
	},
	{ name: 'Ballot Bloc', context: 'Tezos', description: 'Transparent onchain voting', link: null },
	{
		name: 'go-tweet',
		context: 'Open source',
		description: 'Go CLI for downloading videos from X',
		link: { label: 'GitHub', href: 'https://github.com/onihani/go-tweet' },
	},
]
