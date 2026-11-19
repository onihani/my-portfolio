import type { Metadata } from 'next'
import Link from 'next/link'

import { ButtonLink } from '@/components/button-link'
import { DownloadIcon } from '@/components/icons'
import { caseStudies } from '@/content/case-studies'
import { certifications, education, experience } from '@/content/experience'
import { site, skillGroups, socials } from '@/content/site'

export const metadata: Metadata = {
	title: 'Resume',
	description:
		'Web resume for Nathaniel Quansah, full-stack and backend engineer in Accra, Ghana. Download the PDF.',
	alternates: { canonical: '/resume' },
}

const ResumeSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
	<section className="grid gap-4 border-t border-line pt-6 md:grid-cols-[11rem_1fr] md:gap-8 print:break-inside-avoid-page">
		<h2 className="type-eyebrow leading-7">{title}</h2>
		<div className="min-w-0">{children}</div>
	</section>
)

const ResumePage = () => (
	<div className="container-page pt-16 md:pt-24">
		<header className="flex flex-wrap items-end justify-between gap-6">
			<div className="grid gap-2">
				<p className="type-eyebrow enter no-print">Resume</p>
				<h1 className="type-title enter" style={{ '--enter-delay': '60ms' } as React.CSSProperties}>
					{site.name}
				</h1>
				<p className="text-ink-2">
					{site.role} · {site.location} ·{' '}
					<a href={`mailto:${site.email}`} className="link-inline">
						{site.email}
					</a>
				</p>
				<p className="text-[0.9375rem] text-ink-3">
					{socials.map((social, index) => (
						<span key={social.href}>
							<a href={social.href} className="hover:text-ink">
								{social.href.replace('https://', '').replace('www.', '')}
							</a>
							{index < socials.length - 1 ? ' · ' : null}
						</span>
					))}
				</p>
			</div>
			<div className="no-print flex flex-wrap gap-2.5">
				<ButtonLink href={site.resumePdf} download>
					<DownloadIcon />
					Download CV (PDF)
				</ButtonLink>
			</div>
		</header>

		<div className="mt-12 grid gap-10">
			<ResumeSection title="Summary">
				<p className="max-w-[42rem] text-ink-2 text-pretty">
					Full-stack and backend engineer with about six years of production experience, strongest
					in Go and TypeScript. Founded WayaSend and built its USD virtual cards with a Go and
					PostgreSQL backend, KYC and OTP verification, and HMAC-verified webhooks. Contributed to
					Ghana&apos;s national tourism licensing portal and custom ERP systems, and integrated REST
					and GraphQL APIs for health and real estate products. {site.openTo}
				</p>
			</ResumeSection>

			<ResumeSection title="Experience">
				<ol className="grid gap-8">
					{experience.map((entry) => (
						<li
							key={`${entry.company}-${entry.start}`}
							className="grid gap-2 print:break-inside-avoid"
						>
							<div className="flex flex-wrap items-baseline justify-between gap-x-4">
								<h3 className="font-semibold tracking-[-0.015em]">
									{entry.role}, {entry.company}
								</h3>
								<p className="font-mono text-[0.8125rem] text-ink-3 tabular-nums">
									{entry.start} to {entry.end} · {entry.location}
								</p>
							</div>
							<ul className="grid gap-1.5 text-[0.9375rem] text-ink-2">
								{entry.highlights.map((highlight) => (
									<li key={highlight} className="relative pl-4 text-pretty">
										<span
											aria-hidden="true"
											className="absolute top-[0.7em] left-0 size-1 rounded-full bg-line-strong"
										/>
										{highlight}
									</li>
								))}
							</ul>
						</li>
					))}
				</ol>
			</ResumeSection>

			<ResumeSection title="Skills">
				<dl className="grid gap-2 text-[0.9375rem]">
					{skillGroups.map((group) => (
						<div key={group.label} className="grid gap-x-4 sm:grid-cols-[7rem_1fr]">
							<dt className="text-ink-3">{group.label}</dt>
							<dd className="text-ink-2">{group.items.join(', ')}</dd>
						</div>
					))}
				</dl>
			</ResumeSection>

			<ResumeSection title="Case studies">
				<ul className="grid gap-2 text-[0.9375rem]">
					{caseStudies.map((caseStudy) => (
						<li key={caseStudy.slug}>
							<Link href={`/work/${caseStudy.slug}`} className="font-medium hover:text-accent-ink">
								{caseStudy.title}
							</Link>
							<span className="text-ink-2"> · {caseStudy.tagline}</span>
						</li>
					))}
				</ul>
			</ResumeSection>

			<ResumeSection title="Education">
				<div className="grid gap-2 text-[0.9375rem]">
					<p>
						<span className="font-semibold">{education.school}</span>
						<span className="text-ink-2">
							{' '}
							· {education.qualification} · {education.period}
						</span>
					</p>
					{certifications.map((certification) => (
						<p key={certification.name}>
							<span className="font-semibold">{certification.name}</span>
							<span className="text-ink-2"> · {certification.issuer}</span>
						</p>
					))}
				</div>
			</ResumeSection>
		</div>
	</div>
)

export default ResumePage
