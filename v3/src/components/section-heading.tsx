import Link from 'next/link'

import { ArrowRightIcon } from '@/components/icons'

type SectionHeadingProps = {
	id?: string
	title: string
	description?: string
	action?: { label: string; href: string }
}

export const SectionHeading = ({ id, title, description, action }: SectionHeadingProps) => (
	<div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 md:mb-10">
		<div className="grid gap-1.5">
			<h2 id={id} className="type-heading">
				{title}
			</h2>
			{description ? <p className="max-w-xl text-ink-3">{description}</p> : null}
		</div>
		{action ? (
			<Link
				href={action.href}
				className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-ink-2 hover:text-ink"
			>
				{action.label}
				<ArrowRightIcon className="transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
			</Link>
		) : null}
	</div>
)
