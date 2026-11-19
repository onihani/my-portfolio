import type { StaticImageData } from 'next/image'

export type ExternalLink = {
	label: string
	href: string
}

export type ProjectShot = {
	image: StaticImageData
	alt: string
}

/** Text colour that reads on a project's panel: white on deep colours, near-black on bright ones */
export type PanelTextTone = 'light' | 'dark'

export type Project = {
	slug: string
	name: string
	description: string
	link: ExternalLink
	logo: StaticImageData
	/** The project's own brand colour, used for the panel behind its screenshots */
	color: string
	textTone: PanelTextTone
	/** Ordered from the public landing page through to the signed-in app */
	shots: Array<ProjectShot>
	note: string | null
}

export type EarlierProject = {
	name: string
	/** Where it was built: a company, or open source */
	context: string
	description: string
	link: ExternalLink | null
	/** The logo of the company it was built at; null shows the GitHub mark */
	logo: StaticImageData | null
}

export type ExperienceEntry = {
	company: string
	role: string
	period: string
	logo: StaticImageData
	href: string | null
}

export type WritingPost = {
	slug: string
	title: string
	description: string
	publishedAt: string
	readingMinutes: number
	cover: string
	originalUrl: string
	sourceFile: string
}
