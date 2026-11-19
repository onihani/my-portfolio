import type { StaticImageData } from 'next/image'

export type ExternalLink = {
	label: string
	href: string
}

export type ProjectShot = {
	image: StaticImageData
	alt: string
	caption: string
}

export type ArchitectureDiagramKey = 'wayasend-flow' | 'gta-approval-chain' | 'rendevu-pipeline'

export type CaseStudyHardPart = {
	title: string
	body: string
}

export type CaseStudySections = {
	problem: Array<string>
	role: Array<string>
	architecture: {
		diagram: ArchitectureDiagramKey | null
		notes: Array<string>
	}
	hardParts: Array<CaseStudyHardPart>
	outcome: Array<string>
}

export type CaseStudy = {
	slug: string
	title: string
	tagline: string
	summary: string
	role: string
	organisation: string
	period: string
	domain: string
	address: string
	stack: Array<string>
	links: Array<ExternalLink>
	cover: ProjectShot
	gallery: Array<ProjectShot>
	sections: CaseStudySections
	featured: boolean
}

export type SmallProject = {
	name: string
	description: string
	role: string
	stack: Array<string>
	link: ExternalLink | null
	status: 'live' | 'discontinued' | 'offline' | 'private'
	shot: ProjectShot | null
}

export type OpenSourceRepo = {
	name: string
	description: string
	language: string
	href: string
}

export type ExperienceEntry = {
	company: string
	role: string
	location: string
	start: string
	end: string
	summary: string
	highlights: Array<string>
	caseStudySlug: string | null
}

export type SkillGroup = {
	label: string
	items: Array<string>
}

export type WritingPost = {
	slug: string
	title: string
	description: string
	publishedAt: string
	readingMinutes: number
	tags: Array<string>
	cover: string
	originalUrl: string
	sourceFile: string
}
