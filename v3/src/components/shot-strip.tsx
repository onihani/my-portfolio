'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { ChevronLeftIcon, ChevronRightIcon } from '@/components/icons'
import type { ProjectShot } from '@/content/types'

type ShotStripProps = {
	projectName: string
	shots: Array<ProjectShot>
	priority: boolean
}

export const ShotStrip = ({ projectName, shots, priority }: ShotStripProps) => {
	const stripRef = useRef<HTMLDivElement>(null)
	const [index, setIndex] = useState(0)
	const hasMany = shots.length > 1

	// Track which shot is in view, so the counter and buttons follow swipes too
	useEffect(() => {
		const strip = stripRef.current
		if (!strip || !hasMany) return
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setIndex(Number((entry.target as HTMLElement).dataset.index))
					}
				}
			},
			{ root: strip, threshold: 0.6 },
		)
		for (const child of strip.children) observer.observe(child)
		return () => observer.disconnect()
	}, [hasMany])

	const goTo = (next: number) => {
		const strip = stripRef.current
		const first = strip?.children[0] as HTMLElement | undefined
		const target = strip?.children[next] as HTMLElement | undefined
		if (!strip || !first || !target) return
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
		strip.scrollTo({
			left: target.offsetLeft - first.offsetLeft,
			behavior: reduceMotion ? 'auto' : 'smooth',
		})
	}

	return (
		<>
			<div
				ref={stripRef}
				className="strip"
				role={hasMany ? 'region' : undefined}
				aria-label={hasMany ? `${projectName} screenshots` : undefined}
				tabIndex={hasMany ? 0 : undefined}
			>
				{shots.map((shot, shotIndex) => (
					<a
						key={shot.image.src}
						data-index={shotIndex}
						href={shot.image.src}
						target="_blank"
						rel="noreferrer"
						className="shot"
						aria-label={`Open full screenshot: ${shot.alt}`}
					>
						<Image
							src={shot.image}
							alt={shot.alt}
							sizes="(min-width: 1088px) 896px, 92vw"
							placeholder="blur"
							priority={priority && shotIndex === 0}
							className="block h-auto w-full"
						/>
					</a>
				))}
			</div>
			{hasMany ? (
				<div className="strip-controls">
					<button
						type="button"
						onClick={() => goTo(index - 1)}
						disabled={index === 0}
						aria-label="Previous screenshot"
					>
						<ChevronLeftIcon className="size-4" />
					</button>
					<span className="min-w-[2.5rem] text-center" aria-live="polite">
						{index + 1} / {shots.length}
					</span>
					<button
						type="button"
						onClick={() => goTo(index + 1)}
						disabled={index === shots.length - 1}
						aria-label="Next screenshot"
					>
						<ChevronRightIcon className="size-4" />
					</button>
				</div>
			) : null}
		</>
	)
}
