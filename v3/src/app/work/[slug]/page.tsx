import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { shotDomain } from '@/components/case-study-card'
import {
	gtaApprovalSteps,
	PipelineDiagram,
	rendevuPipelineSteps,
} from '@/components/diagrams/pipeline-diagram'
import { WayasendFlowDiagram } from '@/components/diagrams/wayasend-flow-diagram'
import { Gallery } from '@/components/gallery'
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from '@/components/icons'
import { ShotFrame } from '@/components/shot-frame'
import { TodoText } from '@/components/todo-text'
import { caseStudies, getCaseStudy, getNextCaseStudy } from '@/content/case-studies'
import type { ArchitectureDiagramKey } from '@/content/types'

type CaseStudyPageProps = {
	params: Promise<{ slug: string }>
}

export const generateStaticParams = () => caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }))

export const generateMetadata = async ({ params }: CaseStudyPageProps): Promise<Metadata> => {
	const { slug } = await params
	const caseStudy = getCaseStudy(slug)
	if (!caseStudy) return {}
	return {
		title: `${caseStudy.title} case study`,
		description: `${caseStudy.tagline} ${caseStudy.summary}`,
		alternates: { canonical: `/work/${caseStudy.slug}` },
		openGraph: {
			type: 'article',
			title: `${caseStudy.title}: ${caseStudy.tagline}`,
			url: `/work/${caseStudy.slug}`,
		},
	}
}

const Diagram = ({ diagram }: { diagram: ArchitectureDiagramKey }) => {
	switch (diagram) {
		case 'wayasend-flow':
			return <WayasendFlowDiagram />
		case 'gta-approval-chain':
			return (
				<PipelineDiagram
					label="Licence approval chain, five levels from Inspector to CEO"
					steps={gtaApprovalSteps}
				/>
			)
		case 'rendevu-pipeline':
			return (
				<PipelineDiagram
					label="Rendevu data pipeline from contract to app"
					steps={rendevuPipelineSteps}
				/>
			)
	}
}

const Paragraphs = ({ items }: { items: Array<string> }) => (
	<div className="grid gap-4 text-ink-2">
		{items.map((item) => (
			<p key={item} className="text-pretty">
				<TodoText text={item} />
			</p>
		))}
	</div>
)

const CaseStudyPage = async ({ params }: CaseStudyPageProps) => {
	const { slug } = await params
	const caseStudy = getCaseStudy(slug)
	if (!caseStudy) notFound()

	const next = getNextCaseStudy(caseStudy.slug)
	const { sections } = caseStudy
	const toc = [
		{ id: 'problem', label: 'Problem' },
		{ id: 'role', label: 'My role' },
		{ id: 'architecture', label: 'Architecture' },
		{ id: 'hard-parts', label: 'Hard parts' },
		{ id: 'outcome', label: 'Outcome' },
		...(caseStudy.gallery.length > 0 ? [{ id: 'screens', label: 'Screens' }] : []),
	]

	return (
		<article>
			<header className="container-page pt-12 md:pt-20">
				<Link
					href="/work"
					className="group inline-flex items-center gap-1.5 text-[0.875rem] text-ink-3 hover:text-ink"
				>
					<ArrowLeftIcon className="transition-transform duration-200 ease-out group-hover:-translate-x-0.5" />
					Work
				</Link>
				<p className="type-eyebrow enter mt-10">
					{caseStudy.domain} · {caseStudy.organisation}
				</p>
				<h1
					className="type-display enter mt-4 max-w-[18ch]"
					style={{ '--enter-delay': '50ms' } as React.CSSProperties}
				>
					{caseStudy.title}
				</h1>
				<p
					className="type-lede enter mt-5 max-w-[38rem]"
					style={{ '--enter-delay': '100ms' } as React.CSSProperties}
				>
					{caseStudy.summary}
				</p>

				<dl
					className="enter mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 md:grid-cols-4"
					style={{ '--enter-delay': '150ms' } as React.CSSProperties}
				>
					<div className="grid content-start gap-1">
						<dt className="type-eyebrow">Role</dt>
						<dd className="text-[0.9375rem]">
							<TodoText text={caseStudy.role} />
						</dd>
					</div>
					<div className="grid content-start gap-1">
						<dt className="type-eyebrow">Period</dt>
						<dd className="text-[0.9375rem]">{caseStudy.period}</dd>
					</div>
					<div className="col-span-2 grid content-start gap-1 md:col-span-1">
						<dt className="type-eyebrow">Stack</dt>
						<dd className="text-[0.9375rem] text-ink-2">{caseStudy.stack.join(', ')}</dd>
					</div>
					<div className="col-span-2 grid content-start gap-1 md:col-span-1">
						<dt className="type-eyebrow">Links</dt>
						<dd className="grid gap-1 text-[0.9375rem]">
							{caseStudy.links.map((link) => (
								<a
									key={link.href}
									href={link.href}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-1 hover:text-accent-ink"
								>
									{link.label}
									<ArrowUpRightIcon className="size-3.5 text-ink-3" />
								</a>
							))}
						</dd>
					</div>
				</dl>
			</header>

			<figure className="container-page mt-12 grid gap-3 md:mt-16">
				<ShotFrame
					shot={caseStudy.cover}
					domain={shotDomain(caseStudy)}
					sizes="(min-width: 1120px) 1088px, 100vw"
					priority
					morphName={`shot-${caseStudy.slug}`}
				/>
				<figcaption className="text-[0.875rem] text-ink-3">{caseStudy.cover.caption}</figcaption>
			</figure>

			<div className="container-page mt-16 grid gap-12 md:mt-24 lg:grid-cols-[12rem_1fr] lg:gap-16">
				<nav aria-label="On this page" className="hidden lg:block">
					<ul className="sticky top-24 grid gap-2 text-[0.875rem]">
						{toc.map((item) => (
							<li key={item.id}>
								<a href={`#${item.id}`} className="text-ink-3 hover:text-ink">
									{item.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<div className="grid min-w-0 gap-16 md:gap-20">
					<section aria-labelledby="problem" className="grid max-w-[42rem] gap-4">
						<h2 id="problem" className="type-heading">
							Problem
						</h2>
						<Paragraphs items={sections.problem} />
					</section>

					<section aria-labelledby="role" className="grid max-w-[42rem] gap-4">
						<h2 id="role" className="type-heading">
							My role
						</h2>
						<Paragraphs items={sections.role} />
					</section>

					<section aria-labelledby="architecture" className="grid gap-6">
						<h2 id="architecture" className="type-heading">
							Architecture
						</h2>
						{sections.architecture.diagram ? (
							<div className="rounded-[var(--radius-card)] border border-line bg-surface-2/50 p-4 md:p-8">
								<Diagram diagram={sections.architecture.diagram} />
							</div>
						) : null}
						<ul className="grid max-w-[42rem] gap-3 text-ink-2">
							{sections.architecture.notes.map((note) => (
								<li key={note} className="relative pl-5 text-pretty">
									<span
										aria-hidden="true"
										className="absolute top-[0.72em] left-0 h-px w-2.5 bg-ink-3"
									/>
									{note}
								</li>
							))}
						</ul>
					</section>

					<section aria-labelledby="hard-parts" className="grid gap-6">
						<h2 id="hard-parts" className="type-heading">
							Hard parts
						</h2>
						<ol className="grid gap-4 md:grid-cols-2">
							{sections.hardParts.map((part, index) => (
								<li
									key={part.title}
									className="grid content-start gap-2 rounded-[var(--radius-card)] border border-line bg-surface p-5"
								>
									<span className="font-mono text-[0.75rem] text-accent-ink tabular-nums">
										{String(index + 1).padStart(2, '0')}
									</span>
									<h3 className="font-semibold tracking-[-0.015em]">{part.title}</h3>
									<p className="text-[0.9375rem] text-ink-2 text-pretty">{part.body}</p>
								</li>
							))}
						</ol>
					</section>

					<section aria-labelledby="outcome" className="grid max-w-[42rem] gap-4">
						<h2 id="outcome" className="type-heading">
							Outcome
						</h2>
						<ul className="grid gap-3 text-ink-2">
							{sections.outcome.map((item) => (
								<li key={item} className="relative pl-5 text-pretty">
									<span
										aria-hidden="true"
										className="absolute top-[0.6em] left-0 size-1.5 rounded-full bg-accent"
									/>
									<TodoText text={item} />
								</li>
							))}
						</ul>
					</section>

					{caseStudy.gallery.length > 0 ? (
						<section aria-labelledby="screens" className="grid gap-6">
							<h2 id="screens" className="type-heading">
								Screens
							</h2>
							<Gallery shots={caseStudy.gallery} label={caseStudy.title} />
						</section>
					) : null}
				</div>
			</div>

			<nav aria-label="Next case study" className="container-page mt-24 md:mt-32">
				<Link
					href={`/work/${next.slug}`}
					className="group flex items-center justify-between gap-6 rounded-[var(--radius-card)] border border-line bg-surface px-6 py-6 transition-[border-color,transform] duration-200 ease-out hover:border-line-strong active:scale-[0.99] md:px-8"
				>
					<span className="grid gap-1">
						<span className="type-eyebrow">Next case study</span>
						<span className="text-[1.25rem] font-semibold tracking-[-0.02em]">{next.title}</span>
						<span className="text-ink-2">{next.tagline}</span>
					</span>
					<ArrowRightIcon className="size-5 shrink-0 text-ink-3 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-ink" />
				</Link>
			</nav>
		</article>
	)
}

export default CaseStudyPage
