'use client'

import Image, { type StaticImageData } from 'next/image'
import { useEffect, useRef, useState, type FocusEvent, type ReactNode } from 'react'

export type WorkRailItem = {
	slug: string
	name: string
	logo: StaticImageData
	color: string
}

type WorkRailProps = {
	items: Array<WorkRailItem>
	/** The project cards, rendered on the server */
	children: ReactNode
}

type RailGeometry = {
	top: number
	hold: number
	travel: number
}

/*
 * Must match the rail block in globals.css. There, the page's own scroll drives the cards
 * sideways with a scroll-linked animation, so the motion needs no script at all. This
 * component only adds the logo row that jumps between cards and keeps keyboard focus on screen.
 */
const RAIL_QUERY =
	'(min-width: 1024px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)'

/** The rail holds still for a quarter of a screen before the first card moves and after the last arrives */
const HOLD = 0.25

const supportsRail = () => typeof CSS !== 'undefined' && CSS.supports('animation-timeline: view()')

export const WorkRail = ({ items, children }: WorkRailProps) => {
	const sectionRef = useRef<HTMLElement>(null)
	const [isRail, setIsRail] = useState(false)
	const [active, setActive] = useState(0)
	const count = items.length

	useEffect(() => {
		if (!supportsRail()) return
		const media = window.matchMedia(RAIL_QUERY)
		const sync = () => setIsRail(media.matches)
		sync()
		media.addEventListener('change', sync)
		return () => media.removeEventListener('change', sync)
	}, [])

	const measure = (): RailGeometry | null => {
		const section = sectionRef.current
		if (!section) return null
		const hold = window.innerHeight * HOLD
		return {
			top: section.getBoundingClientRect().top + window.scrollY,
			hold,
			travel: Math.max(1, section.offsetHeight - window.innerHeight - hold * 2),
		}
	}

	// Follow the scroll to light up the card in view; only re-renders when that card changes
	useEffect(() => {
		if (!isRail) return
		let frame = 0
		const update = () => {
			frame = 0
			const rail = measure()
			if (!rail) return
			const progress = Math.min(
				1,
				Math.max(0, (window.scrollY - rail.top - rail.hold) / rail.travel),
			)
			setActive(Math.round(progress * (count - 1)))
		}
		const schedule = () => {
			if (!frame) frame = window.requestAnimationFrame(update)
		}
		update()
		window.addEventListener('scroll', schedule, { passive: true })
		window.addEventListener('resize', schedule)
		return () => {
			window.cancelAnimationFrame(frame)
			window.removeEventListener('scroll', schedule)
			window.removeEventListener('resize', schedule)
		}
	}, [isRail, count])

	const scrollToCard = (index: number) => {
		const rail = measure()
		if (!rail) return
		window.scrollTo({
			top: rail.top + rail.hold + (index / Math.max(1, count - 1)) * rail.travel,
			behavior: 'smooth',
		})
	}

	// Cards off to the side cannot scroll into view by themselves, so tabbing into one brings it over
	const onFocus = (event: FocusEvent<HTMLDivElement>) => {
		if (!isRail) return
		const card = (event.target as HTMLElement).closest<HTMLElement>('[data-rail-index]')
		const index = Number(card?.dataset.railIndex)
		if (card && index !== active) scrollToCard(index)
	}

	return (
		<section
			ref={sectionRef}
			aria-labelledby="work"
			className="work layout col-[full]!"
			style={{ '--n': count }}
		>
			<div className="work-frame">
				<div className="work-head">
					<h2 id="work" className="enter text-[1.25rem] font-medium" style={{ '--i': 4 }}>
						Selected work
					</h2>
					<nav aria-label="Jump to a project" className="work-nav">
						<ul>
							{items.map((item, index) => (
								<li key={item.slug}>
									<button
										type="button"
										onClick={() => scrollToCard(index)}
										aria-label={item.name}
										aria-current={index === active ? 'true' : undefined}
										title={item.name}
										style={{ '--glow': item.color }}
									>
										<Image src={item.logo} alt="" width={28} height={28} />
									</button>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className="work-track" onFocus={onFocus}>
					{children}
				</div>
			</div>
		</section>
	)
}
