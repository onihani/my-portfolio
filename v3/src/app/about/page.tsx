import type { Metadata } from 'next'
import Image from 'next/image'

import { education, experience } from '@/content/experience'
import { site } from '@/content/site'
import portrait from '../../../public/images/me.jpeg'

export const metadata: Metadata = {
	title: 'About',
	description:
		'Nathaniel Quansah is a software engineer in Accra, Ghana. Where he has worked and what he is building now.',
	alternates: { canonical: '/about' },
}

const initials = (name: string) =>
	name
		.split(' ')
		.slice(0, 2)
		.map((word) => word[0])
		.join('')

const AboutPage = () => (
	<>
		<section aria-labelledby="about">
			<h1 id="about" className="enter text-[2rem] leading-tight font-medium tracking-[-0.025em]">
				About
			</h1>
			<Image
				src={portrait}
				alt="Nathaniel Quansah in a light blue shirt"
				sizes="(min-width: 640px) 240px, 55vw"
				placeholder="blur"
				priority
				className="enter mt-10 aspect-[4/5] w-[min(240px,55%)] rounded-2xl object-cover"
				style={{ '--i': 1 }}
			/>
			<div className="enter mt-10 grid gap-5 text-ink-2" style={{ '--i': 2 }}>
				<p>
					I&apos;m Nathaniel, and most people call me Nat. I&apos;m a software engineer in Accra,
					Ghana, and I have been building for the web since 2020.
				</p>
				<p>
					I started out making websites and portals for clients, then spent a few years on product
					teams: football predictions at Hurisoft, health records at Medtrack, a real estate CRM at
					CrowdPad, and government and enterprise platforms at Bashtech, including the Ghana Tourism
					Authority&apos;s licensing portal. Along the way I taught web development at a bootcamp.
				</p>
				<p>
					In 2026 I started{' '}
					<a href={site.building.href} target="_blank" rel="noreferrer" className="link text-ink">
						WayaSend
					</a>
					. Getting a reliable USD card and sending money between African countries were both
					problems I had myself, so I decided to fix them.
				</p>
			</div>
		</section>

		<section aria-labelledby="experience" className="mt-20">
			<h2 id="experience" className="text-[1.25rem] font-medium">
				Experience
			</h2>
			<ul className="mt-6 grid gap-5">
				{experience.map((entry) => (
					<li key={entry.company} className="flex items-center gap-4">
						{entry.logo ? (
							<Image
								src={entry.logo}
								alt=""
								width={36}
								height={36}
								className="logo size-9 rounded-[9px]"
							/>
						) : (
							<span
								aria-hidden="true"
								className="logo grid size-9 place-items-center rounded-[9px] bg-surface text-[0.75rem] font-medium text-muted"
							>
								{initials(entry.company)}
							</span>
						)}
						<div className="min-w-0 flex-1">
							<p className="font-medium">
								{entry.href ? (
									<a href={entry.href} target="_blank" rel="noreferrer" className="hover-link">
										{entry.company}
									</a>
								) : (
									entry.company
								)}
							</p>
							<p className="text-[0.9375rem] text-muted">{entry.role}</p>
						</div>
						<p className="shrink-0 text-[0.9375rem] text-muted tabular-nums">{entry.period}</p>
					</li>
				))}
			</ul>
		</section>

		<section aria-labelledby="education" className="mt-20">
			<h2 id="education" className="text-[1.25rem] font-medium">
				Education
			</h2>
			<ul className="mt-6 grid gap-4">
				{education.map((entry) => (
					<li key={entry.name} className="flex items-baseline justify-between gap-4">
						<div>
							<p className="font-medium">{entry.name}</p>
							<p className="text-[0.9375rem] text-muted">{entry.detail}</p>
						</div>
						{entry.period ? (
							<p className="shrink-0 text-[0.9375rem] text-muted tabular-nums">{entry.period}</p>
						) : null}
					</li>
				))}
			</ul>
		</section>
	</>
)

export default AboutPage
