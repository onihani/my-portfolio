import Image from 'next/image'
import { ViewTransition } from 'react'

import type { ProjectShot } from '@/content/types'

type ShotFrameProps = {
	shot: ProjectShot
	domain: string | null
	sizes: string
	priority?: boolean
	morphName?: string
	className?: string
}

/*
 * A screenshot in a quiet window frame. The address strip names the site in
 * monospace, so every shot reads as a real product, not a mockup.
 */
export const ShotFrame = ({
	shot,
	domain,
	sizes,
	priority = false,
	morphName,
	className = '',
}: ShotFrameProps) => {
	const frame = (
		<div
			className={`overflow-hidden rounded-[var(--radius-shot)] border border-line bg-surface shadow-[var(--shadow-shot)] ${className}`}
		>
			<div className="flex h-8 items-center gap-3 border-b border-line bg-surface px-3">
				<span aria-hidden="true" className="flex gap-1.5">
					<span className="size-2 rounded-full bg-line-strong" />
					<span className="size-2 rounded-full bg-line-strong" />
					<span className="size-2 rounded-full bg-line-strong" />
				</span>
				{domain ? (
					<span className="truncate font-mono text-[0.6875rem] text-ink-3">{domain}</span>
				) : null}
			</div>
			<Image
				src={shot.image}
				alt={shot.alt}
				sizes={sizes}
				priority={priority}
				placeholder="blur"
				className="block h-auto w-full"
			/>
		</div>
	)

	return morphName ? (
		<ViewTransition name={morphName} share="shot-morph" default="none">
			{frame}
		</ViewTransition>
	) : (
		frame
	)
}
