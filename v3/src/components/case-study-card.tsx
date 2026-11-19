import Link from 'next/link'

import { ArrowRightIcon } from '@/components/icons'
import { ShotFrame } from '@/components/shot-frame'
import { TodoText } from '@/components/todo-text'
import type { CaseStudy } from '@/content/types'

type CaseStudyCardProps = {
	caseStudy: CaseStudy
	size?: 'large' | 'regular'
	priority?: boolean
}

export const shotDomain = (caseStudy: CaseStudy) => caseStudy.address

export const CaseStudyCard = ({
	caseStudy,
	size = 'regular',
	priority = false,
}: CaseStudyCardProps) => (
	<article className="group relative">
		<Link
			href={`/work/${caseStudy.slug}`}
			className="block rounded-[var(--radius-card)] focus-visible:outline-offset-8"
		>
			<div className="transition-transform duration-300 ease-out group-hover:-translate-y-1 group-active:scale-[0.99]">
				<ShotFrame
					shot={caseStudy.cover}
					domain={shotDomain(caseStudy)}
					sizes={
						size === 'large'
							? '(min-width: 1120px) 1088px, 100vw'
							: '(min-width: 1120px) 536px, (min-width: 768px) 50vw, 100vw'
					}
					priority={priority}
					morphName={`shot-${caseStudy.slug}`}
				/>
			</div>
			<div
				className={`mt-5 grid gap-1.5 ${size === 'large' ? 'md:grid-cols-[1fr_auto] md:items-end md:gap-8' : ''}`}
			>
				<div className="grid gap-1">
					<p className="type-eyebrow">
						{caseStudy.domain} · {caseStudy.period}
					</p>
					<h3 className="text-[1.25rem] font-semibold tracking-[-0.02em]">
						{caseStudy.title}
						<span className="sr-only">: case study</span>
					</h3>
					<p className="max-w-xl text-ink-2 text-pretty">{caseStudy.tagline}</p>
				</div>
				<p className="flex items-center gap-1.5 text-[0.875rem] text-ink-3">
					<TodoText text={caseStudy.role} />
					<ArrowRightIcon className="text-ink-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:text-ink" />
				</p>
			</div>
		</Link>
	</article>
)
