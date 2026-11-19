import type { Metadata } from 'next'
import Image from 'next/image'

import { experience } from '@/content/experience'
import { site } from '@/content/site'
import portrait from '../../../public/images/me.jpeg'

export const metadata: Metadata = {
	title: 'About',
	description:
		'Nathaniel Quansah is a software engineer in Accra, Ghana. Where he has worked and what he is building now.',
	alternates: { canonical: '/about' },
}

const AboutPage = () => (
	<>
		<section aria-labelledby="about">
			<h1 id="about" className="enter text-[2rem] leading-tight font-medium tracking-[-0.025em]">
				About
			</h1>
			<div
				className="enter ambient mt-10 w-[min(240px,55%)] rounded-2xl"
				style={{
					'--i': 1,
					'--ambient': `url(${portrait.blurDataURL})`,
					'--ambient-blur': '32px',
					'--ambient-y': '20px',
				}}
			>
				<Image
					src={portrait}
					alt="Nathaniel Quansah in a light blue shirt"
					sizes="(min-width: 640px) 240px, 55vw"
					placeholder="blur"
					priority
					className="aspect-[4/5] w-full rounded-2xl object-cover"
				/>
			</div>
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
						<span
							className="ambient shrink-0 rounded-[9px]"
							style={{
								'--ambient': `url(${entry.logo.blurDataURL})`,
								'--ambient-blur': '10px',
								'--ambient-y': '5px',
							}}
						>
							<Image
								src={entry.logo}
								alt=""
								width={36}
								height={36}
								className="logo block size-9 rounded-[9px]"
							/>
						</span>
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
	</>
)

export default AboutPage
