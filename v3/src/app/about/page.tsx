import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ButtonLink } from '@/components/button-link'
import { ExperienceLedger } from '@/components/experience-ledger'
import { SectionHeading } from '@/components/section-heading'
import { certifications, education, experience } from '@/content/experience'
import { principles, site } from '@/content/site'
import portrait from '../../../public/images/me.jpeg'

export const metadata: Metadata = {
	title: 'About',
	description:
		'Nat is a full-stack and backend engineer in Accra, Ghana, focused on fintech and production web platforms. His story, how he works and his full experience.',
	alternates: { canonical: '/about' },
}

const AboutPage = () => (
	<>
		<header className="container-page grid gap-10 pt-16 md:grid-cols-[1fr_18rem] md:items-end md:gap-16 md:pt-24">
			<div>
				<p className="type-eyebrow enter">About</p>
				<h1
					className="type-display enter mt-4 max-w-[15ch]"
					style={{ '--enter-delay': '60ms' } as React.CSSProperties}
				>
					I build the parts of products that have to{' '}
					<span className="type-emphasis">just work</span>.
				</h1>
			</div>
			<div className="enter" style={{ '--enter-delay': '120ms' } as React.CSSProperties}>
				<Image
					src={portrait}
					alt="Nathaniel Quansah in a light blue shirt"
					sizes="(min-width: 768px) 288px, 70vw"
					priority
					placeholder="blur"
					className="aspect-[4/5] w-full max-w-[18rem] rounded-[var(--radius-card)] border border-line object-cover"
				/>
			</div>
		</header>

		<section aria-labelledby="story" className="container-page mt-16 md:mt-24">
			<h2 id="story" className="sr-only">
				My story
			</h2>
			<div className="grid max-w-[42rem] gap-5 text-[1.0625rem] text-ink-2 md:text-[1.125rem]">
				<p className="text-pretty">
					I&apos;m Nathaniel Quansah, and most people call me Nat. I&apos;m a full-stack and backend
					engineer based in Accra, Ghana, with about six years of production experience. My
					strongest languages are Go and TypeScript.
				</p>
				<p className="text-pretty">
					I started in 2020 building websites and portals for clients, then spent a few years on
					product teams: workflow tools and an AI football predictions backend at Hurisoft, health
					records software at Medtrack, a real estate CRM at CrowdPad, and government and enterprise
					platforms at Bashtech, including the{' '}
					<Link href="/work/ghana-tourism-authority" className="link-inline">
						Ghana Tourism Authority licensing portal
					</Link>
					. Along the way I taught web development fundamentals at a bootcamp, writing the
					curriculum and reviewing student code.
				</p>
				<p className="text-pretty">
					In 2026 I started{' '}
					<Link href="/work/wayasend" className="link-inline">
						WayaSend
					</Link>
					. Getting a reliable USD card and sending money to other African countries were both
					frustrating problems for me personally, so I decided to fix them. Most of my attention now
					goes to payments: card issuing, KYC, webhooks, background jobs and working inside
					regulation.
				</p>
			</div>
		</section>

		<section aria-labelledby="how-i-work" className="container-page reveal mt-24 md:mt-32">
			<SectionHeading id="how-i-work" title="How I work" />
			<ul className="grid gap-4 md:grid-cols-3">
				{principles.map((principle, index) => (
					<li
						key={principle.title}
						className="grid content-start gap-2 rounded-[var(--radius-card)] border border-line bg-surface p-5"
					>
						<span className="font-mono text-[0.75rem] text-accent-ink tabular-nums">
							0{index + 1}
						</span>
						<h3 className="font-semibold tracking-[-0.015em]">{principle.title}</h3>
						<p className="text-[0.9375rem] text-ink-2 text-pretty">{principle.body}</p>
					</li>
				))}
			</ul>
		</section>

		<section aria-labelledby="experience" className="container-page reveal mt-24 md:mt-32">
			<SectionHeading
				id="experience"
				title="Experience"
				action={{ label: 'Web resume', href: '/resume' }}
			/>
			<ExperienceLedger entries={experience} detailed />
		</section>

		<section aria-labelledby="education" className="container-page reveal mt-24 md:mt-32">
			<SectionHeading id="education" title="Education and certification" />
			<dl className="grid border-t border-line">
				<div className="grid gap-1 border-b border-line py-5 md:grid-cols-[11rem_1fr] md:gap-8">
					<dt className="font-mono text-[0.8125rem] leading-7 text-ink-3">{education.period}</dt>
					<dd>
						<span className="font-semibold tracking-[-0.015em]">{education.school}</span>
						<span className="text-ink-2"> · {education.qualification}</span>
					</dd>
				</div>
				{certifications.map((certification) => (
					<div
						key={certification.name}
						className="grid gap-1 border-b border-line py-5 md:grid-cols-[11rem_1fr] md:gap-8"
					>
						<dt className="font-mono text-[0.8125rem] leading-7 text-ink-3">Certification</dt>
						<dd>
							<span className="font-semibold tracking-[-0.015em]">{certification.name}</span>
							<span className="text-ink-2"> · {certification.issuer}</span>
						</dd>
					</div>
				))}
			</dl>
		</section>

		<section className="container-page reveal mt-24 flex flex-wrap items-center justify-between gap-6 md:mt-32">
			<p className="type-heading max-w-[24ch]">{site.openTo}</p>
			<div className="flex flex-wrap gap-2.5">
				<ButtonLink href="/contact">Get in touch</ButtonLink>
				<ButtonLink href={site.resumePdf} variant="secondary" download>
					Download CV
				</ButtonLink>
			</div>
		</section>
	</>
)

export default AboutPage
