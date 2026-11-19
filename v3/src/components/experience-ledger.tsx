import Link from 'next/link'

import { ArrowRightIcon } from '@/components/icons'
import type { ExperienceEntry } from '@/content/types'

type ExperienceLedgerProps = {
	entries: Array<ExperienceEntry>
	detailed?: boolean
}

// A quiet ledger: dates in monospace on the left, the work on the right.
export const ExperienceLedger = ({ entries, detailed = false }: ExperienceLedgerProps) => (
	<ol className="border-t border-line">
		{entries.map((entry) => (
			<li
				key={`${entry.company}-${entry.start}`}
				className="grid gap-1 border-b border-line py-5 md:grid-cols-[11rem_1fr] md:gap-8"
			>
				<p className="font-mono text-[0.8125rem] leading-7 text-ink-3 tabular-nums">
					{entry.start} to {entry.end}
				</p>
				<div className="grid gap-1">
					<div className="flex flex-wrap items-baseline justify-between gap-x-4">
						<h3 className="font-semibold tracking-[-0.015em]">
							{entry.company}
							<span className="font-normal text-ink-2"> · {entry.role}</span>
						</h3>
						{entry.caseStudySlug ? (
							<Link
								href={`/work/${entry.caseStudySlug}`}
								className="group inline-flex items-center gap-1 text-[0.875rem] text-ink-3 hover:text-ink"
							>
								Case study
								<ArrowRightIcon className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
							</Link>
						) : null}
					</div>
					<p className="text-ink-2">{entry.summary}</p>
					{detailed ? (
						<ul className="mt-2 grid gap-1.5 text-[0.9375rem] text-ink-2">
							{entry.highlights.map((highlight) => (
								<li key={highlight} className="relative pl-4 text-pretty">
									<span
										aria-hidden="true"
										className="absolute top-[0.7em] left-0 size-1 rounded-full bg-line-strong"
									/>
									{highlight}
								</li>
							))}
						</ul>
					) : null}
				</div>
			</li>
		))}
	</ol>
)
