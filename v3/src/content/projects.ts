import type { OpenSourceRepo, SmallProject } from '@/content/types'

import rehobothHome from '@/assets/work/rehoboth/home.webp'
import gasuHome from '@/assets/work/gasu/home.webp'
import soccersmHome from '@/assets/work/soccersm/home.webp'

export const smallProjects: Array<SmallProject> = [
	{
		name: 'Soccersm',
		description:
			'An AI tool that gives pre-match predictions and analysis for all major leagues. I worked mainly on the backend at Hurisoft.',
		role: 'Backend engineer',
		stack: ['TypeScript', 'Node.js', 'MongoDB', 'AWS'],
		link: { label: 'soccersm.ai', href: 'https://soccersm.ai' },
		status: 'live',
		shot: {
			image: soccersmHome,
			alt: 'Soccersm predictions page with match cards and confidence scores',
			caption: 'Match predictions with confidence scores.',
		},
	},
	{
		name: 'Rehoboth Immigration Law',
		description:
			'Website for a US-based immigration law firm, where people book a consultation with the principal attorney or contact the firm.',
		role: 'Designer and developer',
		stack: ['TODO(Nat): stack'],
		link: { label: 'rehobothlawus.com', href: 'https://rehobothlawus.com' },
		status: 'live',
		shot: {
			image: rehobothHome,
			alt: 'Rehoboth Law website hero with a client testimonial and a Book a Consultation button',
			caption: 'Home page with consultation booking.',
		},
	},
	{
		name: 'GASU Africa',
		description:
			'Supporters website for the Great African Supporters Union, where new members join the club and follow ongoing and upcoming projects.',
		role: 'Developer',
		stack: ['TypeScript', 'TODO(Nat): framework'],
		link: { label: 'gasu.africa', href: 'https://www.gasu.africa' },
		status: 'live',
		shot: {
			image: gasuHome,
			alt: 'GASU website hero with the headline Great African Supporters Union',
			caption: 'Member onboarding starts here.',
		},
	},
	{
		name: 'Kwantu',
		description:
			'A luxury vehicle and chauffeur booking platform. Python APIs on Frappe for bookings, vehicles, drivers and fleet stats, a Vue operator dashboard with trip tracking and chauffeur assignment, online payments and trip pricing.',
		role: 'Full-stack engineer',
		stack: ['Python', 'Frappe', 'Vue'],
		link: null,
		status: 'discontinued',
		shot: null,
	},
	{
		name: 'Sampeur LMS',
		description:
			'A multilingual learning platform with a GraphQL API, BullMQ job queues and video transcoding.',
		role: 'TODO(Nat): role',
		stack: ['GraphQL', 'BullMQ', 'TypeScript'],
		link: null,
		status: 'private',
		shot: null,
	},
	{
		name: 'Natural language to GraphQL CLI',
		description: 'A command-line tool that turns a plain-English question into a GraphQL query.',
		role: 'Builder',
		stack: ['Bun', 'OpenAI SDK', 'GraphQL'],
		link: null,
		status: 'private',
		shot: null,
	},
	{
		name: 'Ballot Bloc',
		description:
			'A voting app on the Tezos blockchain for transparent, secure voting. I wrote and integrated the APIs and maintain the UI and API.',
		role: 'API developer',
		stack: ['Tezos', 'TODO(Nat): stack'],
		link: { label: 'ballotbloc.com', href: 'https://ballotbloc.com' },
		status: 'offline',
		shot: null,
	},
	{
		name: 'Big Girls Rise NFT & Auction',
		description:
			'Website and NFT auction for a platform that educates, supports and empowers young women through NFTs and Web3.',
		role: 'Designer and developer',
		stack: ['TODO(Nat): stack'],
		link: null,
		status: 'offline',
		shot: null,
	},
	{
		name: 'TechBuzz Africa',
		description:
			"A blog and news platform covering Africa's startup ecosystem and the companies leading technology adoption on the continent.",
		role: 'Developer',
		stack: ['TODO(Nat): stack'],
		link: null,
		status: 'offline',
		shot: null,
	},
	{
		name: 'OCQFund',
		description:
			'Gave traders access to funded trading accounts through a two-step evaluation designed to discover trading talent.',
		role: 'Developer',
		stack: ['JavaScript'],
		link: null,
		status: 'discontinued',
		shot: null,
	},
]

export const openSourceRepos: Array<OpenSourceRepo> = [
	{
		name: 'go-tweet',
		description: 'A small Go CLI for downloading videos from X (Twitter).',
		language: 'Go',
		href: 'https://github.com/onihani/go-tweet',
	},
	{
		name: 'fungible-token-with-near-js-sdk',
		description: 'NEP-141 fungible token on NEAR with the JS SDK. Companion code for my tutorial.',
		language: 'TypeScript',
		href: 'https://github.com/onihani/fungible-token-with-near-js-sdk',
	},
	{
		name: 'buidl-guidl-ctf-solutions',
		description: 'My solutions to the BuidlGuidl capture-the-flag smart contract challenges.',
		language: 'Solidity',
		href: 'https://github.com/onihani/buidl-guidl-ctf-solutions',
	},
	{
		name: 'PeerTrade',
		description: 'An automated peer-to-peer app for trading crypto tokens.',
		language: 'TypeScript',
		href: 'https://github.com/onihani/PeerTrade',
	},
	{
		name: 'filepond-php-server-example',
		description: 'A sample FilePond server implementation in PHP.',
		language: 'PHP',
		href: 'https://github.com/onihani/filepond-php-server-example',
	},
]
