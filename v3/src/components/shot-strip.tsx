'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'

import { ChevronLeftIcon, ChevronRightIcon, LockIcon } from '@/components/icons'
import type { ProjectShot } from '@/content/types'

type ShotStripProps = {
	projectName: string
	address: string | null
	shots: Array<ProjectShot>
	priority: boolean
	/** The project's name and description, shown beside or above the screenshots */
	children: ReactNode
	/** The project's link, shown beside the step controls */
	action: ReactNode
}

type LiveFrameProps = {
	url: string
	title: string
	isInteractive: boolean
}

/** Embedded sites render at this desktop width, then scale down to fit the window */
const LIVE_WIDTH = 1280
const LIVE_HEIGHT = 800

// Live sites load only on large screens with a mouse, once the card is near the screen
// and the page itself has finished loading, so they never slow the first paint
const LiveFrame = ({ url, title, isInteractive }: LiveFrameProps) => {
	const holderRef = useRef<HTMLDivElement>(null)
	const [scale, setScale] = useState(0)
	const [shouldLoad, setShouldLoad] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		const holder = holderRef.current
		if (!holder) return
		const isDesktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches
		const saveData =
			(navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData ===
			true
		if (!isDesktop || saveData) return

		const resize = new ResizeObserver(([entry]) => {
			if (entry) setScale(entry.contentRect.width / LIVE_WIDTH)
		})
		resize.observe(holder)

		// Safari has no requestIdleCallback, so it waits a moment instead
		let timer = 0
		const startWhenIdle = () => {
			const load = () => setShouldLoad(true)
			if (typeof window.requestIdleCallback === 'function') {
				timer = window.requestIdleCallback(load, { timeout: 2000 })
			} else {
				timer = globalThis.setTimeout(load, 300) as unknown as number
			}
		}
		const near = new IntersectionObserver(
			([entry]) => {
				if (!entry?.isIntersecting) return
				near.disconnect()
				if (document.readyState === 'complete') startWhenIdle()
				else window.addEventListener('load', startWhenIdle, { once: true })
			},
			{ rootMargin: '400px 0px' },
		)
		near.observe(holder)

		return () => {
			resize.disconnect()
			near.disconnect()
			window.removeEventListener('load', startWhenIdle)
			if (typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(timer)
			globalThis.clearTimeout(timer)
		}
	}, [])

	// Sites drawn in the browser paint a moment after load, so the screenshot stays up a little longer.
	// Some never fire load at all, so they show after a while anyway; until then the screenshot looks the same.
	useEffect(() => {
		if (!shouldLoad) return
		const timer = window.setTimeout(() => setIsLoaded(true), 12000)
		return () => window.clearTimeout(timer)
	}, [shouldLoad])

	// Pressing Interact asks for the live site, so it loads and shows straight away
	const isLoading = shouldLoad || isInteractive
	const isShown = isLoaded || isInteractive

	return (
		<div ref={holderRef} className="live-holder" aria-hidden={isInteractive ? undefined : true}>
			{isLoading ? (
				<iframe
					src={url}
					title={title}
					width={LIVE_WIDTH}
					height={LIVE_HEIGHT}
					loading="lazy"
					referrerPolicy="strict-origin-when-cross-origin"
					sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
					tabIndex={isInteractive ? 0 : -1}
					className="live-frame"
					data-loaded={isShown}
					data-interactive={isInteractive}
					style={{ '--scale': scale }}
					onLoad={() => window.setTimeout(() => setIsLoaded(true), 700)}
				/>
			) : null}
		</div>
	)
}

export const ShotStrip = ({
	projectName,
	address,
	shots,
	priority,
	children,
	action,
}: ShotStripProps) => {
	const stripRef = useRef<HTMLDivElement>(null)
	const [index, setIndex] = useState(0)
	const [interactiveShot, setInteractiveShot] = useState<number | null>(null)
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
		setInteractiveShot(null)
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
		strip.scrollTo({
			left: target.offsetLeft - first.offsetLeft,
			behavior: reduceMotion ? 'auto' : 'smooth',
		})
	}

	// Arrow keys step through the screenshots once the strip has focus
	const onStripKey = (event: KeyboardEvent<HTMLDivElement>) => {
		if (event.target !== event.currentTarget) return
		if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
		event.preventDefault()
		const next = event.key === 'ArrowLeft' ? index - 1 : index + 1
		if (next >= 0 && next < shots.length) goTo(next)
	}

	return (
		<>
			<div className="panel-head">
				<div className="panel-text">{children}</div>
				<div className="panel-action">{action}</div>
				{hasMany ? (
					<div className="strip-controls">
						<button
							type="button"
							className="strip-step"
							onClick={() => goTo(index - 1)}
							disabled={index === 0}
							aria-label="Previous screenshot"
						>
							<ChevronLeftIcon className="size-4" />
						</button>
						{/* The dots show where you are; the arrows either side do the stepping */}
						<span className="strip-dots" aria-hidden="true">
							{shots.map((shot, shotIndex) => (
								<i key={shot.image.src} className="strip-dot" data-current={shotIndex === index} />
							))}
						</span>
						<button
							type="button"
							className="strip-step"
							onClick={() => goTo(index + 1)}
							disabled={index === shots.length - 1}
							aria-label="Next screenshot"
						>
							<ChevronRightIcon className="size-4" />
						</button>
						<span className="sr-only" aria-live="polite">
							Screenshot {index + 1} of {shots.length}
						</span>
					</div>
				) : null}
			</div>
			<div className="panel-media">
				<div
					ref={stripRef}
					className="strip"
					role={hasMany ? 'region' : undefined}
					aria-label={hasMany ? `${projectName} screenshots` : undefined}
					tabIndex={hasMany ? 0 : undefined}
					onKeyDown={hasMany ? onStripKey : undefined}
				>
					{shots.map((shot, shotIndex) => {
						const isInteractive = interactiveShot === shotIndex
						return (
							<figure key={shot.image.src} data-index={shotIndex} className="shot">
								<div className="shot-bar">
									<span className="shot-lights" aria-hidden="true">
										<i />
										<i />
										<i />
									</span>
									<span className="shot-address">
										{address ? <LockIcon className="size-2.5 shrink-0" /> : null}
										<span className="truncate">{address ?? projectName}</span>
									</span>
									{shot.liveUrl ? (
										<button
											type="button"
											className="shot-interact"
											aria-pressed={isInteractive}
											onClick={() => setInteractiveShot(isInteractive ? null : shotIndex)}
										>
											{isInteractive ? 'Done' : 'Interact'}
										</button>
									) : null}
								</div>
								<div className="shot-view" data-interactive={isInteractive}>
									<a
										href={shot.liveUrl ?? shot.image.src}
										target="_blank"
										rel="noreferrer"
										className="shot-link"
										aria-label={
											shot.liveUrl
												? `Open ${address ?? projectName} in a new tab`
												: `Open full screenshot: ${shot.alt}`
										}
									>
										<Image
											src={shot.image}
											alt={shot.alt}
											fill
											sizes="(min-width: 1088px) 640px, (min-width: 1024px) 60vw, 92vw"
											placeholder="blur"
											priority={priority && shotIndex === 0}
											className="object-cover object-top"
										/>
									</a>
									{shot.liveUrl ? (
										<LiveFrame
											url={shot.liveUrl}
											title={`${projectName}, live`}
											isInteractive={isInteractive}
										/>
									) : null}
								</div>
							</figure>
						)
					})}
				</div>
			</div>
		</>
	)
}
