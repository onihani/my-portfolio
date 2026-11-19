'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from '@/components/icons'
import type { ProjectShot } from '@/content/types'

type GalleryProps = {
	shots: Array<ProjectShot>
	label: string
}

export const Gallery = ({ shots, label }: GalleryProps) => {
	const dialogRef = useRef<HTMLDialogElement>(null)
	const [index, setIndex] = useState(0)
	const [open, setOpen] = useState(false)
	const current = shots[index]

	const show = (next: number) => {
		setIndex(next)
		setOpen(true)
		dialogRef.current?.showModal()
	}

	const step = (delta: number) => setIndex((value) => (value + delta + shots.length) % shots.length)

	const onKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
		if (event.key === 'ArrowRight') step(1)
		if (event.key === 'ArrowLeft') step(-1)
	}

	return (
		<>
			<ul className={`grid gap-5 ${shots.length > 1 ? 'md:grid-cols-2' : ''}`}>
				{shots.map((shot, shotIndex) => (
					<li key={shot.image.src}>
						<figure className="grid gap-3">
							<button
								type="button"
								onClick={() => show(shotIndex)}
								className="group block w-full overflow-hidden rounded-[var(--radius-shot)] border border-line bg-surface text-left shadow-[var(--shadow-shot)] transition-transform duration-200 ease-out active:scale-[0.99]"
								aria-label={`Enlarge screenshot: ${shot.alt}`}
							>
								<Image
									src={shot.image}
									alt=""
									sizes="(min-width: 1120px) 536px, (min-width: 768px) 50vw, 100vw"
									placeholder="blur"
									className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]"
								/>
							</button>
							<figcaption className="text-[0.875rem] text-ink-3 text-pretty">
								{shot.caption}
							</figcaption>
						</figure>
					</li>
				))}
			</ul>

			<dialog
				ref={dialogRef}
				className="lightbox"
				aria-label={`${label} screenshots`}
				onClose={() => setOpen(false)}
				onKeyDown={onKeyDown}
				onClick={(event) => {
					if (event.target === event.currentTarget) dialogRef.current?.close()
				}}
			>
				{open && current ? (
					<div className="grid gap-4">
						<div className="overflow-hidden rounded-[var(--radius-shot)] border border-line bg-surface">
							<Image
								src={current.image}
								alt={current.alt}
								sizes="(min-width: 1280px) 1200px, 94vw"
								className="block h-auto w-full"
							/>
						</div>
						<div className="flex items-center justify-between gap-4">
							<p className="text-[0.9375rem] text-ink-2 text-pretty" aria-live="polite">
								<span className="font-mono text-[0.8125rem] text-ink-3 tabular-nums">
									{index + 1}/{shots.length}
								</span>{' '}
								{current.caption}
							</p>
							<div className="flex shrink-0 gap-1.5">
								{shots.length > 1 ? (
									<>
										<button
											type="button"
											onClick={() => step(-1)}
											aria-label="Previous screenshot"
											className="lightbox-button pressable"
										>
											<ArrowLeftIcon />
										</button>
										<button
											type="button"
											onClick={() => step(1)}
											aria-label="Next screenshot"
											className="lightbox-button pressable"
										>
											<ArrowRightIcon />
										</button>
									</>
								) : null}
								<button
									type="button"
									onClick={() => dialogRef.current?.close()}
									aria-label="Close"
									className="lightbox-button pressable"
								>
									<CloseIcon />
								</button>
							</div>
						</div>
					</div>
				) : null}
			</dialog>
		</>
	)
}
