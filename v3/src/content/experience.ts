import type { ExperienceEntry } from '@/content/types'

export const experience: Array<ExperienceEntry> = [
	{
		company: 'WayaSend',
		role: 'Founder & Lead Developer',
		location: 'Remote, Accra',
		start: 'Jan 2026',
		end: 'Present',
		summary: 'Fintech for USD virtual cards and pan-African remittances.',
		highlights: [
			'Built and launched USD virtual cards with a Go and PostgreSQL backend, background jobs and HMAC-verified webhooks.',
			'Designed the KYC flow and OTP verification over SMS and WhatsApp.',
			'Led compliance onboarding with payment partners, including AML/CFT policy drafting and KYB due diligence.',
			'Secured a partnership to power cross-border remittances across Africa, now in API integration.',
			'Built the web app in React and Tailwind and chose React Native for mobile.',
		],
		caseStudySlug: 'wayasend',
	},
	{
		company: 'Bashtech Solutions',
		role: 'Full-Stack Engineer',
		location: 'Accra, hybrid',
		start: 'Oct 2025',
		end: 'Mar 2026',
		summary:
			'Government, enterprise and consumer platforms across tourism, oil and gas services, and mobility.',
		highlights: [
			"Contributed to the Ghana Tourism Authority's national licensing portal, including RBAC and a five-level approval workflow.",
			'Built a custom ERP on Frappe for Jodi Drilling Services covering EHS, Employee Self Service, HR and Payroll.',
			'Built Kwantu, a luxury vehicle booking platform with Frappe APIs and a Vue operator dashboard.',
		],
		caseStudySlug: 'ghana-tourism-authority',
	},
	{
		company: 'Medtrack',
		role: 'Full-Stack Engineer',
		location: 'Accra, hybrid',
		start: 'Sep 2023',
		end: '2025',
		summary:
			"Building Africa's health information system, linking patient data to national biometric IDs.",
		highlights: [
			'Converted UI designs into reusable React components.',
			'Integrated REST and GraphQL APIs and shipped features in NodeJS and NestJS.',
			'Set up product monitoring and analytics on AWS.',
		],
		caseStudySlug: 'medtrack',
	},
	{
		company: 'CrowdPad',
		role: 'Full-Stack Engineer',
		location: 'Remote',
		start: 'Aug 2024',
		end: 'Nov 2024',
		summary: 'Kendal AI, a CRM for real estate agencies and brokers.',
		highlights: [
			'Revamped listing management for agents and brokerages.',
			'Built XML listing feeds for external property portals.',
			'Migrated listing filters to Elasticsearch and built a WhatsApp integration.',
		],
		caseStudySlug: 'kendal-ai',
	},
	{
		company: 'Hurisoft',
		role: 'Full-Stack Engineer',
		location: 'Remote',
		start: 'Aug 2021',
		end: '2023',
		summary: 'Formerly Paperless Softwares. Customer-facing workflow tools and client projects.',
		highlights: [
			'Worked mainly on the backend of Soccersm, an AI tool for pre-match predictions and analysis.',
			'Built with TypeScript, Next.js, MongoDB and AWS, from features to deployment.',
		],
		caseStudySlug: null,
	},
	{
		company: 'Developers In Vogue',
		role: 'Lead Tutor',
		location: 'Accra',
		start: 'Jun 2022',
		end: 'Sep 2022',
		summary: 'Web development bootcamp.',
		highlights: [
			'Wrote and updated the curriculum, assignments and instructional plans.',
			'Taught HTML, CSS and JavaScript, ran code reviews and guided group projects.',
		],
		caseStudySlug: null,
	},
	{
		company: 'Filly Coder',
		role: 'Web Developer',
		location: 'Remote',
		start: 'Jul 2020',
		end: 'Aug 2021',
		summary: 'Websites, portals and web applications for multiple clients.',
		highlights: [
			'Built responsive layouts in HTML5 and CSS3 to client specifications.',
			'Improved performance with NodeJS and Redis, and handled hosting and go-live.',
		],
		caseStudySlug: null,
	},
]

export const education = {
	school: 'Accra Technical University',
	qualification: 'Higher National Diploma, Computer Science',
	period: '2021 to 2023',
}

export const certifications: Array<{ name: string; issuer: string }> = [
	{ name: 'Mobile Web Specialist', issuer: 'Google Africa Developer Scholarship (GADS)' },
]
