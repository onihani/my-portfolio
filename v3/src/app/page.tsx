import Image from 'next/image'
import Link from 'next/link'

import { ButtonLink } from '@/components/button-link'
import { CaseStudyCard } from '@/components/case-study-card'
import { CopyEmailButton } from '@/components/copy-email-button'
import { ExperienceLedger } from '@/components/experience-ledger'
import { ArrowRightIcon, ArrowUpRightIcon, DownloadIcon } from '@/components/icons'
import { LocalTime } from '@/components/local-time'
import { SectionHeading } from '@/components/section-heading'
import { SkillsTable } from '@/components/skills-table'
import { featuredCaseStudies } from '@/content/case-studies'
import { experience } from '@/content/experience'
import { site, skillGroups, socials } from '@/content/site'
import { writingPosts } from '@/content/writing'
import { formatLongDate } from '@/lib/dates'
import portrait from '../../public/images/me-1-1.jpeg'

const HomePage = () => {
	const [lead, ...rest] = featuredCaseStudies

	return (
		<>
			<section aria-labelledby="intro" className="container-page pt-16 pb-20 md:pt-28 md:pb-28">
				<div
					className="enter flex items-center gap-3"
					style={{ '--enter-delay': '0ms' } as React.CSSProperties}
				>
					<Image
						src={portrait}
						alt="Portrait of Nathaniel Quansah"
						width={44}
						height={44}
						priority
						className="size-11 rounded-full border border-line object-cover"
					/>
					<div className="grid leading-tight">
						<span className="font-semibold tracking-[-0.015em]">{site.name}</span>
						<span className="text-[0.875rem] text-ink-3">Nat · {site.location}</span>
					</div>
				</div>

				<h1
					id="intro"
					className="type-display enter mt-8 max-w-[18ch] md:mt-10"
					style={{ '--enter-delay': '70ms' } as React.CSSProperties}
				>
					Full-stack engineer building <span className="type-emphasis">payments</span>, fintech and
					production web platforms for Africa and beyond.
				</h1>

				<div
					className="enter mt-8 grid gap-6 md:mt-10"
					style={{ '--enter-delay': '160ms' } as React.CSSProperties}
				>
					<p className="type-lede max-w-[36rem]">
						About six years shipping production software, mostly in Go and TypeScript. I founded{' '}
						<Link href="/work/wayasend" className="link-inline">
							WayaSend
						</Link>
						, and before that I built Ghana&apos;s national tourism licensing portal, health records
						tools and real estate software.
					</p>

					<ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.9375rem] text-ink-2">
						<li className="inline-flex items-center gap-2">
							<span
								aria-hidden="true"
								className="size-2 rounded-full bg-success ring-4 ring-success/15"
							/>
							{site.availability}
						</li>
						<li className="text-ink-3">
							Accra · <LocalTime />
						</li>
					</ul>

					<div className="flex flex-wrap items-center gap-2.5">
						<ButtonLink href={`mailto:${site.email}`}>Email me</ButtonLink>
						<ButtonLink href={site.resumePdf} variant="secondary" download>
							<DownloadIcon />
							Download CV
						</ButtonLink>
						<CopyEmailButton variant="icon" />
					</div>
				</div>
			</section>

			<section aria-labelledby="selected-work" className="container-page">
				<SectionHeading
					id="selected-work"
					title="Selected work"
					action={{ label: 'All work', href: '/work' }}
				/>
				<div className="grid gap-14 md:gap-16">
					{lead ? <CaseStudyCard caseStudy={lead} size="large" priority /> : null}
					<div className="grid gap-14 md:grid-cols-2 md:gap-8">
						{rest.map((caseStudy) => (
							<CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
						))}
					</div>
				</div>
			</section>

			<section aria-labelledby="toolkit" className="container-page reveal mt-28 md:mt-36">
				<SectionHeading
					id="toolkit"
					title="What I work with"
					description="Strongest in Go and TypeScript. Comfortable from the database to the pixel."
				/>
				<SkillsTable groups={skillGroups} />
			</section>

			<section aria-labelledby="experience" className="container-page reveal mt-28 md:mt-36">
				<SectionHeading
					id="experience"
					title="Experience"
					action={{ label: 'Full timeline', href: '/about#experience' }}
				/>
				<ExperienceLedger entries={experience.slice(0, 5)} />
			</section>

			{writingPosts.length > 0 ? (
				<section aria-labelledby="writing" className="container-page reveal mt-28 md:mt-36">
					<SectionHeading
						id="writing"
						title="Writing"
						action={{ label: 'All writing', href: '/writing' }}
					/>
					<ul className="border-t border-line">
						{writingPosts.map((post) => (
							<li key={post.slug} className="border-b border-line">
								<Link
									href={`/writing/${post.slug}`}
									className="group grid gap-1 py-5 md:grid-cols-[11rem_1fr_auto] md:items-baseline md:gap-8"
								>
									<span className="font-mono text-[0.8125rem] text-ink-3 tabular-nums">
										{formatLongDate(post.publishedAt)}
									</span>
									<span className="font-medium tracking-[-0.01em] group-hover:text-accent-ink">
										{post.title}
									</span>
									<span className="text-[0.875rem] text-ink-3">{post.readingMinutes} min read</span>
								</Link>
							</li>
						))}
					</ul>
				</section>
			) : null}

			<section aria-labelledby="contact-cta" className="container-page reveal mt-28 md:mt-36">
				<div className="rounded-[calc(var(--radius-card)+6px)] border border-line bg-surface px-6 py-12 md:px-14 md:py-16">
					<p className="type-eyebrow">Contact</p>
					<h2 id="contact-cta" className="type-title mt-4 max-w-[20ch]">
						Building something in payments or fintech?{' '}
						<span className="type-emphasis">Let&apos;s talk.</span>
					</h2>
					<p className="mt-4 max-w-xl text-ink-2">{site.openTo}</p>
					<div className="mt-8 flex flex-wrap items-center gap-2.5">
						<ButtonLink href={`mailto:${site.email}`}>{site.email}</ButtonLink>
						<CopyEmailButton />
					</div>
					<ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
						{socials.map((social) => (
							<li key={social.href}>
								<a
									href={social.href}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-1 text-ink-2 hover:text-ink"
								>
									{social.label}
									<ArrowUpRightIcon className="size-3.5 text-ink-3" />
								</a>
							</li>
						))}
						<li>
							<Link
								href="/contact"
								className="inline-flex items-center gap-1 text-ink-2 hover:text-ink"
							>
								More ways to reach me
								<ArrowRightIcon className="size-3.5 text-ink-3" />
							</Link>
						</li>
					</ul>
				</div>
			</section>
		</>
	)
}

export default HomePage
