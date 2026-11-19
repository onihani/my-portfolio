import type { Metadata } from 'next'

import { CaseStudyCard } from '@/components/case-study-card'
import { ArrowUpRightIcon } from '@/components/icons'
import { ProjectTile } from '@/components/project-tile'
import { SectionHeading } from '@/components/section-heading'
import { caseStudies } from '@/content/case-studies'
import { openSourceRepos, smallProjects } from '@/content/projects'

export const metadata: Metadata = {
	title: 'Work',
	description:
		'Case studies from WayaSend, the Ghana Tourism Authority portal, Rendevu, Kendal AI, Jodi Drilling Services ERP and Medtrack, plus smaller projects and open source.',
	alternates: { canonical: '/work' },
}

const WorkPage = () => (
	<>
		<header className="container-page pt-16 pb-14 md:pt-24 md:pb-20">
			<p className="type-eyebrow enter">Work</p>
			<h1
				className="type-display enter mt-4 max-w-[16ch]"
				style={{ '--enter-delay': '60ms' } as React.CSSProperties}
			>
				Things I have built and shipped.
			</h1>
			<p
				className="type-lede enter mt-6 max-w-[36rem]"
				style={{ '--enter-delay': '120ms' } as React.CSSProperties}
			>
				Payments, government services, onchain apps, CRMs and ERPs. Each case study covers the
				problem, my role, the architecture and the hard parts.
			</p>
		</header>

		<section aria-labelledby="case-studies" className="container-page">
			<h2 id="case-studies" className="sr-only">
				Case studies
			</h2>
			<div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
				{caseStudies.map((caseStudy, index) => (
					<CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} priority={index < 2} />
				))}
			</div>
		</section>

		<section aria-labelledby="more-projects" className="container-page reveal mt-28 md:mt-36">
			<SectionHeading
				id="more-projects"
				title="More projects"
				description="Client sites, experiments and products that did not need a full write-up."
			/>
			<ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{smallProjects.map((project) => (
					<li key={project.name} className="grid">
						<ProjectTile project={project} />
					</li>
				))}
			</ul>
		</section>

		<section aria-labelledby="open-source" className="container-page reveal mt-28 md:mt-36">
			<SectionHeading
				id="open-source"
				title="Open source"
				description="Small tools and reference code on GitHub."
			/>
			<ul className="border-t border-line">
				{openSourceRepos.map((repo) => (
					<li key={repo.name} className="border-b border-line">
						<a
							href={repo.href}
							target="_blank"
							rel="noreferrer"
							className="group grid gap-1 py-4 md:grid-cols-[18rem_1fr_auto] md:items-baseline md:gap-8"
						>
							<span className="font-mono text-[0.875rem] text-ink group-hover:text-accent-ink">
								{repo.name}
							</span>
							<span className="text-ink-2">{repo.description}</span>
							<span className="inline-flex items-center gap-1 font-mono text-[0.75rem] text-ink-3">
								{repo.language}
								<ArrowUpRightIcon className="size-3.5" />
							</span>
						</a>
					</li>
				))}
			</ul>
		</section>
	</>
)

export default WorkPage
