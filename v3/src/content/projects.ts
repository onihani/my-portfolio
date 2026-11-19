import type { EarlierProject, Project } from '@/content/types'

import wayasendLanding from '@/assets/work/wayasend/landing.webp'
import wayasendDashboard from '@/assets/work/wayasend/dashboard.webp'
import wayasendCards from '@/assets/work/wayasend/cards.webp'
import wayasendSend from '@/assets/work/wayasend/send.webp'
import gtaHome from '@/assets/work/gta/home.webp'
import gtaLookup from '@/assets/work/gta/lookup.webp'
import gtaLicence from '@/assets/work/gta/licence.webp'
import rendevuHome from '@/assets/work/rendevu/home.webp'
import rendevuAiSearch from '@/assets/work/rendevu/ai-search.webp'
import kendalHome from '@/assets/work/kendal/home.webp'
import medtrackHome from '@/assets/work/medtrack/home.webp'
import medtrackApp from '@/assets/work/medtrack/app.webp'
import soccersmHome from '@/assets/work/soccersm/home.webp'
import rehobothHome from '@/assets/work/rehoboth/home.webp'
import gasuHome from '@/assets/work/gasu/home.webp'

import wayasendLogo from '@/assets/logos/wayasend.png'
import gtaLogo from '@/assets/logos/gta.png'
import rendevuLogo from '@/assets/logos/rendevu.png'
import kendalLogo from '@/assets/logos/kendal.png'
import medtrackLogo from '@/assets/logos/medtrack.png'
import soccersmLogo from '@/assets/logos/soccersm.png'
import rehobothLogo from '@/assets/logos/rehoboth.png'
import gasuLogo from '@/assets/logos/gasu.png'
import bashtechLogo from '@/assets/logos/bashtech.png'
import hurisoftLogo from '@/assets/logos/hurisoft.png'

export const projects: Array<Project> = [
	{
		slug: 'wayasend',
		name: 'WayaSend',
		description:
			'USD virtual cards and money transfers for people across Africa. Pay for things online and send money between countries.',
		link: { label: 'usewayasend.com', href: 'https://usewayasend.com' },
		logo: wayasendLogo,
		color: '#67e55d',
		shots: [
			{ image: wayasendLanding, alt: 'WayaSend landing page' },
			{
				image: wayasendDashboard,
				alt: 'WayaSend dashboard with wallet balance, a virtual card and transactions',
			},
			{ image: wayasendCards, alt: 'WayaSend cards page with card funding history' },
			{ image: wayasendSend, alt: 'WayaSend send money flow' },
		],
		note: null,
	},
	{
		slug: 'gta',
		name: 'Ghana Tourism Authority',
		description:
			'The national licensing portal for tourism businesses in Ghana. Hotels, restaurants and tour operators apply for licences, and anyone can check that a business is licensed.',
		link: { label: 'gta.gov.gh', href: 'https://gta.gov.gh' },
		logo: gtaLogo,
		color: '#f2b01e',
		shots: [
			{ image: gtaHome, alt: 'Ghana Tourism Authority portal home page' },
			{ image: gtaLookup, alt: 'Licence search suggesting a business while typing' },
			{ image: gtaLicence, alt: 'A verified licence record on the Ghana Tourism Authority portal' },
		],
		note: null,
	},
	{
		slug: 'rendevu',
		name: 'Rendevu',
		description:
			'Onchain events: tickets, check-ins and proof of attendance, with an event search you can ask in plain English.',
		link: { label: 'GitHub', href: 'https://github.com/rendevu-dapp' },
		logo: rendevuLogo,
		color: '#d81848',
		shots: [
			{ image: rendevuHome, alt: 'Rendevu home page' },
			{ image: rendevuAiSearch, alt: 'Rendevu explore page with a natural-language search' },
		],
		note: 'Explore is shown with sample events.',
	},
	{
		slug: 'kendal',
		name: 'Kendal AI',
		description:
			'A CRM for real estate agents that handles lead follow-ups, listings and WhatsApp conversations, so agents can spend their time closing.',
		link: { label: 'kendal.ai', href: 'https://www.kendal.ai' },
		logo: kendalLogo,
		color: '#2f5bff',
		shots: [{ image: kendalHome, alt: 'Kendal AI website' }],
		note: null,
	},
	{
		slug: 'soccersm',
		name: 'Soccersm',
		description: 'AI predictions and pre-match analysis for the major football leagues.',
		link: { label: 'soccersm.ai', href: 'https://soccersm.ai' },
		logo: soccersmLogo,
		color: '#1f9d5c',
		shots: [{ image: soccersmHome, alt: 'Soccersm predictions page' }],
		note: null,
	},
	{
		slug: 'medtrack',
		name: 'Medtrack',
		description: 'Health records for Africa that connect patient data to national biometric IDs.',
		link: { label: 'medtrack.africa', href: 'https://medtrack.africa' },
		logo: medtrackLogo,
		color: '#3657d4',
		shots: [
			{ image: medtrackHome, alt: 'Medtrack website' },
			{ image: medtrackApp, alt: 'Medtrack facility app with a list of patients' },
		],
		note: null,
	},
	{
		slug: 'rehoboth',
		name: 'Rehoboth Law',
		description:
			'A US immigration law firm. Clients read about its services and book a consultation online.',
		link: { label: 'rehobothlawus.com', href: 'https://rehobothlawus.com' },
		logo: rehobothLogo,
		color: '#652d90',
		shots: [{ image: rehobothHome, alt: 'Rehoboth Law website' }],
		note: null,
	},
	{
		slug: 'gasu',
		name: 'GASU',
		description:
			'The Great African Supporters Union, a pan-African movement for fans of African sport, arts and culture.',
		link: { label: 'gasu.africa', href: 'https://www.gasu.africa' },
		logo: gasuLogo,
		color: '#1c1c1e',
		shots: [{ image: gasuHome, alt: 'GASU website' }],
		note: null,
	},
]

export const earlierProjects: Array<EarlierProject> = [
	{
		name: 'Jodi Drilling ERP',
		context: 'Bashtech',
		description: 'Safety, HR and payroll for a drilling services company.',
		link: null,
		logo: bashtechLogo,
	},
	{
		name: 'Kwantu',
		context: 'Bashtech',
		description: 'Luxury vehicle and chauffeur booking.',
		link: null,
		logo: bashtechLogo,
	},
	{
		name: 'Ballot Bloc',
		context: 'Hurisoft',
		description: 'Transparent onchain voting on Tezos.',
		link: null,
		logo: hurisoftLogo,
	},
	{
		name: 'go-tweet',
		context: 'Open source',
		description: 'A command-line tool for downloading videos from X.',
		link: { label: 'GitHub', href: 'https://github.com/onihani/go-tweet' },
		logo: null,
	},
]
