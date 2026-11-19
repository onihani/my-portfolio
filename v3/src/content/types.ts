import type { StaticImageData } from 'next/image'

export type ExternalLink = {
	label: string
	href: string
}

export type ProjectShot = {
	image: StaticImageData
	alt: string
	/** A page that can be embedded live in place of the screenshot, on desktop; the screenshot stays as its fallback */
	liveUrl: string | null
}

/** Text colour that reads on a project's panel: white on deep colours, near-black on bright ones */
export type PanelTextTone = 'light' | 'dark'

export type Project = {
	slug: string
	name: string
	description: string
	link: ExternalLink
	/** Shown in the browser bar above the screenshots; null for projects with no public site */
	address: string | null
	logo: StaticImageData
	/** The project's own brand colour, used for the panel behind its screenshots */
	color: string
	textTone: PanelTextTone
	/** Ordered from the public landing page through to the signed-in app */
	shots: Array<ProjectShot>
	note: string | null
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
