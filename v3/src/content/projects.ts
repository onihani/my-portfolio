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
import jodiLogin from '@/assets/work/jodi/login.webp'

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
import jodiLogo from '@/assets/logos/jodi.png'

export const projects: Array<Project> = [
	{
		slug: 'wayasend',
		name: 'WayaSend',
		description:
			'USD virtual cards and cross-border transfers for people in Africa. Get a dollar card for paying online, top it up from your wallet, and send money to other African countries.',
		link: { label: 'usewayasend.com', href: 'https://usewayasend.com' },
		logo: wayasendLogo,
		color: '#67e55d',
		textTone: 'dark',
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
			"Ghana's national licensing portal for tourism businesses. Hotels, restaurants and tour operators apply for a licence and follow its progress online, and anyone can check that a business is licensed.",
		link: { label: 'gta.gov.gh', href: 'https://gta.gov.gh' },
		logo: gtaLogo,
		color: '#f2b01e',
		textTone: 'dark',
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
			'Events on the blockchain. Organisers sell tickets and check guests in, attendees keep proof they were there, and anyone can search for events in plain English.',
		link: { label: 'GitHub', href: 'https://github.com/rendevu-dapp' },
		logo: rendevuLogo,
		color: '#d81848',
		textTone: 'light',
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
			'A CRM for real estate agents. Listings, leads and WhatsApp conversations live in one place, and listings are published to property portals automatically.',
		link: { label: 'kendal.ai', href: 'https://www.kendal.ai' },
		logo: kendalLogo,
		color: '#2f5bff',
		textTone: 'light',
		shots: [{ image: kendalHome, alt: 'Kendal AI website' }],
		note: null,
	},
	{
		slug: 'jodi',
		name: 'Jodi Drilling ERP',
		description:
			'The company system for Jodi Drilling Services, a mineral exploration driller in Ghana. Safety reporting, HR and payroll run in one place, with a self-service portal for staff.',
		link: { label: 'jodidrilling.com', href: 'https://jodidrilling.com' },
		logo: jodiLogo,
		color: '#e02726',
		textTone: 'light',
		shots: [{ image: jodiLogin, alt: 'Jodi Drilling ERP sign-in page' }],
		note: 'The system is private to staff, so only the sign-in page is shown.',
	},
	{
		slug: 'soccersm',
		name: 'Soccersm',
		description:
			'Football predictions made by AI. Matches in the major leagues come with a prediction and the pre-match analysis behind it.',
		link: { label: 'soccersm.ai', href: 'https://soccersm.ai' },
		logo: soccersmLogo,
		color: '#15804a',
		textTone: 'light',
		shots: [{ image: soccersmHome, alt: 'Soccersm predictions page' }],
		note: null,
	},
	{
		slug: 'medtrack',
		name: 'Medtrack',
		description:
			"Health records for Africa, linked to national biometric IDs, so a clinic can find a patient's history from their ID.",
		link: { label: 'medtrack.africa', href: 'https://medtrack.africa' },
		logo: medtrackLogo,
		color: '#3657d4',
		textTone: 'light',
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
			'The website of a US immigration law firm. Clients read about its services and book a consultation online.',
		link: { label: 'rehobothlawus.com', href: 'https://rehobothlawus.com' },
		logo: rehobothLogo,
		color: '#652d90',
		textTone: 'light',
		shots: [{ image: rehobothHome, alt: 'Rehoboth Law website' }],
		note: null,
	},
	{
		slug: 'gasu',
		name: 'GASU',
		description:
			'The Great African Supporters Union, a pan-African movement that brings together fans of African sport, arts and culture.',
		link: { label: 'gasu.africa', href: 'https://www.gasu.africa' },
		logo: gasuLogo,
		color: '#1c1c1e',
		textTone: 'light',
		shots: [{ image: gasuHome, alt: 'GASU website' }],
		note: null,
	},
]

export const earlierProjects: Array<EarlierProject> = [
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
