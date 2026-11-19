import type { CaseStudy } from '@/content/types'

import wayasendLanding from '@/assets/work/wayasend/landing.webp'
import wayasendDashboard from '@/assets/work/wayasend/dashboard.webp'
import wayasendCards from '@/assets/work/wayasend/cards.webp'
import wayasendSend from '@/assets/work/wayasend/send.webp'
import gtaHome from '@/assets/work/gta/home.webp'
import gtaLookup from '@/assets/work/gta/lookup.webp'
import gtaLicence from '@/assets/work/gta/licence.webp'
import rendevuHome from '@/assets/work/rendevu/home.webp'
import rendevuExplore from '@/assets/work/rendevu/explore.webp'
import rendevuAiSearch from '@/assets/work/rendevu/ai-search.webp'
import kendalHome from '@/assets/work/kendal/home.webp'
import jodiLogin from '@/assets/work/jodi/login.webp'
import medtrackApp from '@/assets/work/medtrack/app.webp'
import medtrackHome from '@/assets/work/medtrack/home.webp'

export const caseStudies: Array<CaseStudy> = [
	{
		slug: 'wayasend',
		title: 'WayaSend',
		tagline: 'USD virtual cards and cross-border payments for Africa.',
		summary:
			'A fintech I founded after struggling to get a reliable USD card and to send money to other African countries. I built the backend, the web app and the compliance groundwork.',
		role: 'Founder & Lead Developer',
		organisation: 'WayaSend',
		period: 'Jan 2026 to present',
		domain: 'Fintech',
		address: 'usewayasend.com',
		stack: [
			'Go',
			'Fiber',
			'GORM',
			'PostgreSQL',
			'Asynq',
			'Redis',
			'React',
			'Tailwind',
			'React Native / Expo',
		],
		links: [{ label: 'usewayasend.com', href: 'https://usewayasend.com' }],
		cover: {
			image: wayasendDashboard,
			alt: 'WayaSend dashboard showing a wallet balance, a virtual card and recent transactions',
			caption: 'Dashboard on staging: wallet, cards and recent activity in one view.',
		},
		gallery: [
			{
				image: wayasendLanding,
				alt: 'WayaSend landing page with the headline Go virtual and send money easily',
				caption: 'Landing page. Top up with mobile money, a bank transfer or crypto.',
			},
			{
				image: wayasendCards,
				alt: 'WayaSend cards page with a virtual card and its funding transactions',
				caption: 'Cards: issue a virtual card and see every funding event.',
			},
			{
				image: wayasendSend,
				alt: 'WayaSend send money flow, step one of three: amount',
				caption: 'Send money in three steps: amount, recipient, review and pay.',
			},
		],
		sections: {
			problem: [
				'As a Ghanaian, getting a USD card that works for online payments was frustrating, and so was sending money to other African countries. Most people around me had the same problem.',
				'WayaSend makes moving money simple and gives mobile money wallets like MoMo and M-Pesa more reach.',
			],
			role: [
				'I founded WayaSend and lead all engineering. I built the Go backend, the React web app, and chose React Native with Expo for mobile so the whole client side shares one TypeScript stack.',
				'I also ran compliance onboarding with payment partners: AML/CFT policy drafting and KYB due diligence.',
			],
			architecture: {
				diagram: 'wayasend-flow',
				notes: [
					'Clients talk to a Go API built on Fiber and GORM, backed by PostgreSQL.',
					'Anything slow or retryable runs as an Asynq job on Redis: card issuing calls, verification checks and notifications.',
					'Card and verification events arrive as webhooks. Each one is HMAC-verified before it is accepted and processed in the background.',
					'Identity checks run through a KYC flow, with OTP verification over SMS and WhatsApp.',
				],
			},
			hardParts: [
				{
					title: 'Webhooks you can trust',
					body: 'Card and verification events change what a user can do with their money, so every webhook is HMAC-verified before it is accepted, then handed to a background job instead of being processed inline.',
				},
				{
					title: 'A KYC flow people finish',
					body: 'I designed the identity and OTP flow over SMS and WhatsApp so verification is clear for users who live on their phones, not just on email.',
				},
				{
					title: 'Building inside regulation',
					body: 'Bank of Ghana rules constrain which card models are possible. I shaped the product around them, with a roadmap toward a PSP licence, multi-currency virtual accounts and in-app money requests.',
				},
			],
			outcome: [
				'USD virtual cards launched for Ghanaian users.',
				'A partnership to power cross-border remittances across Africa is secured and in API integration.',
				'TODO(Nat): add any numbers you are comfortable sharing, for example cards issued or countries live.',
			],
		},
		featured: true,
	},
	{
		slug: 'ghana-tourism-authority',
		title: 'Ghana Tourism Authority Portal',
		tagline: 'The national licensing platform for tourism businesses in Ghana.',
		summary:
			'GTIS replaces a largely manual process with one online system where tourism businesses register, get inspected and receive their licences, and where regulators review them.',
		role: 'Full-Stack Engineer',
		organisation: 'Bashtech Solutions',
		period: 'Oct 2025 to Mar 2026',
		domain: 'Government',
		address: 'gta.gov.gh',
		stack: ['Vue', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Redis', 'pdf-lib', 'bwip-js'],
		links: [{ label: 'gta.gov.gh', href: 'https://gta.gov.gh' }],
		cover: {
			image: gtaLicence,
			alt: 'A verified licence record on the Ghana Tourism Authority portal showing status, category, issue and expiry dates',
			caption: 'A public licence record: status, category, issue date and expiry.',
		},
		gallery: [
			{
				image: gtaHome,
				alt: 'Ghana Tourism Authority portal home page with a licence verification search',
				caption: 'The public portal at gta.gov.gh.',
			},
			{
				image: gtaLookup,
				alt: 'Licence verification search suggesting a hotel while typing, above counts of licensed businesses',
				caption:
					'Licence lookup suggests businesses as you type. The public registry listed 7,031 licensed businesses in November 2026.',
			},
		],
		sections: {
			problem: [
				'Registering a tourism business in Ghana, getting it inspected and receiving a licence was largely a manual process, spread across paperwork and offices.',
				'The portal brings operators and regulators into one online system.',
			],
			role: [
				'I contributed across the frontend and backend as part of the Bashtech team.',
				'On the client side I built the flows where tourism operators register their businesses, submit licence applications and track their status.',
				'On the admin side I built role-based access control and a multi-level approval workflow.',
				'I also built a levy audit management system with PDF and barcode generation.',
			],
			architecture: {
				diagram: 'gta-approval-chain',
				notes: [
					'Applications move through five levels of review, from Inspector up to the CEO. Each level sees only what its role allows.',
					'Vue and Tailwind on the frontend, Node.js and Express on the backend, MongoDB for records and Redis alongside it.',
					'Levy audit documents are generated server-side with pdf-lib, with barcodes rendered by bwip-js.',
				],
			},
			hardParts: [
				{
					title: 'Five levels of sign-off',
					body: 'An application passes from Inspectors through Regional Directors, SQAs and DEDOPs up to the CEO. The workflow has to make it obvious who holds an application at any moment, and the access rules have to hold at every level.',
				},
				{
					title: 'Documents that stand up to an audit',
					body: 'Levy audits need documents that can be printed, scanned and checked. PDFs and barcodes are generated server-side so every copy is consistent.',
				},
			],
			outcome: [
				'The portal is live at gta.gov.gh and used by operators and regulators.',
				'TODO(Nat): confirm whether you worked on the public licence verification search shown in the screenshots.',
			],
		},
		featured: true,
	},
	{
		slug: 'rendevu',
		title: 'Rendevu',
		tagline: 'An onchain events platform with natural-language search.',
		summary:
			'Rendevu puts events, registration, ticketing, check-ins and POAP attendance proofs onchain, then makes them easy to find with search you can ask in plain English.',
		role: 'TODO(Nat): your role',
		organisation: 'Rendevu',
		period: '2025',
		domain: 'Web3',
		address: 'rendevu-web.vercel.app',
		stack: [
			'Solidity',
			'Foundry',
			'Base',
			'Subsquid',
			'PostgreSQL',
			'Typesense',
			'Thirdweb',
			'Next.js',
			'GraphQL',
		],
		links: [
			{ label: 'GitHub', href: 'https://github.com/rendevu-dapp' },
			{
				label: 'Contract on Basescan',
				href: 'https://basescan.org/address/0x0551c568a3fabdc2b0259d82893f41f31c041328',
			},
		],
		cover: {
			image: rendevuAiSearch,
			alt: 'Rendevu explore page with a natural-language search for free web3 events in Accra next month',
			caption:
				'Natural-language search on Explore. Shown with sample events because the search backend is offline.',
		},
		gallery: [
			{
				image: rendevuHome,
				alt: 'Rendevu home page with the headline Reimagining events for the onchain era',
				caption: 'Home page.',
			},
			{
				image: rendevuExplore,
				alt: 'Rendevu explore page with a grid of free and paid events',
				caption: 'Explore, with free and paid events. Sample data.',
			},
		],
		sections: {
			problem: [
				'Event platforms keep tickets, attendance and payments in their own databases. Rendevu moves those records onchain so organisers and attendees own them, with POAP NFTs as proof of attendance.',
			],
			role: ['TODO(Nat): describe your role and who else worked on Rendevu.'],
			architecture: {
				diagram: 'rendevu-pipeline',
				notes: [
					'An EventPlatform contract on Base handles events, registration with optional approval, paid tickets in whitelisted tokens, refunds, bulk check-in and signed self check-in.',
					'A Subsquid indexer reads contract events into PostgreSQL and exposes them over GraphQL.',
					'Events are synced to Typesense for fast search. Natural-language queries use Typesense natural-language search with gpt-4.1-mini, which turns a question into filters.',
					'Thirdweb handles wallets and token balances in the Next.js app.',
				],
			},
			hardParts: [
				{
					title: 'Search over onchain data',
					body: 'Chain data is slow to query directly. Indexing into PostgreSQL and syncing to Typesense gives the app fast, typo-tolerant search, while the contract stays the source of truth.',
				},
				{
					title: 'Asking in plain English',
					body: 'Typing "free web3 events in Accra next month" is easier than picking filters. Typesense natural-language search turns the question into structured filters on date, price and location.',
				},
				{
					title: 'Check-in without a scanner queue',
					body: 'Besides organiser bulk check-in, attendees can check themselves in with a signed, expiring message that the contract verifies.',
				},
			],
			outcome: [
				'Contracts are deployed on Base and the code is public on GitHub.',
				'TODO(Nat): add what happened next, for example a hackathon result, events run or why it paused.',
			],
		},
		featured: true,
	},
	{
		slug: 'kendal-ai',
		title: 'Kendal AI',
		tagline: 'An AI-powered CRM for real estate agencies and brokers.',
		summary:
			'At CrowdPad I worked on Kendal AI, a CRM that helps agents with lead conversion, marketing and client management. I rebuilt listing management and connected listings to search, feeds and WhatsApp.',
		role: 'Full-Stack Engineer',
		organisation: 'CrowdPad',
		period: 'Aug 2024 to Nov 2024',
		domain: 'Proptech',
		address: 'kendal.ai',
		stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Firebase', 'Elasticsearch', 'Tailwind'],
		links: [{ label: 'kendal.ai', href: 'https://www.kendal.ai' }],
		cover: {
			image: kendalHome,
			alt: 'Kendal AI marketing site with the headline Real estate agents are closers, not admin assistants',
			caption: "Kendal's current site. The product itself sits behind a login.",
		},
		gallery: [],
		sections: {
			problem: [
				'Agents and brokerages needed one place to create and update property listings, share them with the portals buyers actually use, and follow up with leads quickly.',
			],
			role: [
				'I revamped the listing management system so agents and brokerages can create and update listings for their websites.',
				'I built XML feeds of listings for external real estate portals and a WhatsApp integration.',
				'I moved listing filters to Elasticsearch.',
			],
			architecture: {
				diagram: null,
				notes: [
					'Next.js, React and TypeScript on the frontend, Node.js services and Firebase behind them.',
					'Listings are indexed in Elasticsearch, which powers filtering and search.',
					'XML feeds are generated from the same listing data, so portals always see what the agent sees.',
				],
			},
			hardParts: [
				{
					title: 'Filters that keep up',
					body: 'Moving listing filters to Elasticsearch made property search faster, more flexible and more accurate than querying the primary store.',
				},
				{
					title: 'One listing, many destinations',
					body: 'The same listing has to appear correctly on the agent website, in partner portal feeds and in WhatsApp conversations.',
				},
			],
			outcome: [
				'Faster, more accurate property search and listing feeds that agents can share with external portals.',
			],
		},
		featured: false,
	},
	{
		slug: 'jodi-drilling-erp',
		title: 'Jodi Drilling Services ERP',
		tagline: 'A custom ERP for safety, people and payroll.',
		summary:
			'A custom ERP built on Frappe that brings Jodi Drilling Services safety, people and payroll processes into a single system.',
		role: 'Full-Stack Engineer',
		organisation: 'Bashtech Solutions',
		period: 'Oct 2025 to Mar 2026',
		domain: 'Enterprise',
		address: 'erp.jodidrilling.com',
		stack: ['Python', 'Frappe', 'ERPNext'],
		links: [{ label: 'erp.jodidrilling.com', href: 'https://erp.jodidrilling.com' }],
		cover: {
			image: jodiLogin,
			alt: 'Jodi Drilling Services ERP sign-in page with a photo of the drilling crew',
			caption: 'The ERP sign-in page. Everything else is internal.',
		},
		gallery: [],
		sections: {
			problem: [
				'Safety reporting, HR and payroll lived in separate processes. The company wanted them in one system its staff could use every day.',
			],
			role: [
				'I built custom Frappe modules and workflows in Python for EHS (Environment, Health and Safety), Employee Self Service, HR and Payroll.',
			],
			architecture: {
				diagram: null,
				notes: [
					'Custom Frappe apps on top of ERPNext, so the company gets standard ERP foundations plus modules shaped to how a drilling services company works.',
				],
			},
			hardParts: [
				{
					title: 'Four modules, one system',
					body: 'EHS, Employee Self Service, HR and Payroll each have their own records and workflows, and they all share the same employees. Building them as Frappe modules keeps that data in one place.',
				},
			],
			outcome: ['Safety, people and payroll processes now run in one system.'],
		},
		featured: false,
	},
	{
		slug: 'medtrack',
		title: 'Medtrack',
		tagline: "Building Africa's health information system.",
		summary:
			'Medtrack builds infrastructure that connects patient health data to national biometric IDs. I built product features across React frontends and NestJS services.',
		role: 'Full-Stack Engineer',
		organisation: 'Medtrack',
		period: 'Sep 2023 to 2025',
		domain: 'Health',
		address: 'medtrack.africa',
		stack: ['React', 'NestJS', 'Node.js', 'GraphQL', 'REST', 'AWS'],
		links: [{ label: 'medtrack.africa', href: 'https://medtrack.africa' }],
		cover: {
			image: medtrackApp,
			alt: 'Medtrack facility app showing a searchable list of patients with admission statuses',
			caption: 'Facility app: a searchable patient list with admission statuses.',
		},
		gallery: [
			{
				image: medtrackHome,
				alt: 'Medtrack website with the headline Health records for all',
				caption: 'medtrack.africa today.',
			},
		],
		sections: {
			problem: [
				'Patient records in many African health systems are scattered across facilities. Medtrack links them to national biometric IDs so care can follow the patient.',
			],
			role: [
				'I turned UI designs into reusable React components and integrated REST and GraphQL APIs.',
				'I built new features in NodeJS and NestJS, and set up product monitoring and analytics on AWS so the team could use activity data to guide decisions.',
				'I planned timelines with operations, design and engineering.',
			],
			architecture: {
				diagram: null,
				notes: [
					'React frontends on top of REST and GraphQL APIs, NestJS services, and monitoring and analytics on AWS.',
				],
			},
			hardParts: [
				{
					title: 'Components that scale with the product',
					body: 'Turning designs into reusable components meant new screens could be assembled quickly and consistently.',
				},
			],
			outcome: ['Product decisions backed by monitoring and analytics data.'],
		},
		featured: false,
	},
]

export const featuredCaseStudies = caseStudies.filter((caseStudy) => caseStudy.featured)

export const getCaseStudy = (slug: string) =>
	caseStudies.find((caseStudy) => caseStudy.slug === slug) ?? null

export const getNextCaseStudy = (slug: string) => {
	const index = caseStudies.findIndex((caseStudy) => caseStudy.slug === slug)
	return caseStudies[(index + 1) % caseStudies.length]
}
