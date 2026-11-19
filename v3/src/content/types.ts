import type { StaticImageData } from 'next/image'

export type ExternalLink = {
	label: string
	href: string
}

export type ProjectShot = {
	image: StaticImageData
	alt: string
}

export type SelectedProject = {
	name: string
	role: string
	description: string
	link: ExternalLink
	shots: Array<ProjectShot>
	note: string | null
}

export type PastProject = {
	name: string
	context: string
	description: string
	link: ExternalLink | null
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
