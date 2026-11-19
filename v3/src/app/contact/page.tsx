import type { Metadata } from 'next'

import { ButtonLink } from '@/components/button-link'
import { CopyEmailButton } from '@/components/copy-email-button'
import { ArrowUpRightIcon } from '@/components/icons'
import { LocalTime } from '@/components/local-time'
import { site, socials } from '@/content/site'

export const metadata: Metadata = {
	title: 'Contact',
	description:
		'Email Nathaniel Quansah about senior full-stack, backend and fintech roles or selected contract work.',
	alternates: { canonical: '/contact' },
}

const ContactPage = () => (
	<section aria-labelledby="contact" className="container-page pt-16 md:pt-24">
		<p className="type-eyebrow enter">Contact</p>
		<h1
			id="contact"
			className="type-display enter mt-4 max-w-[14ch]"
			style={{ '--enter-delay': '60ms' } as React.CSSProperties}
		>
			The fastest way to reach me is <span className="type-emphasis">email</span>.
		</h1>

		<div
			className="enter mt-10 grid gap-6"
			style={{ '--enter-delay': '120ms' } as React.CSSProperties}
		>
			<a
				href={`mailto:${site.email}`}
				className="w-fit text-[clamp(1.375rem,1rem+1.8vw,2.25rem)] font-semibold tracking-[-0.03em] decoration-line-strong decoration-1 underline-offset-[0.18em] hover:underline hover:decoration-accent"
			>
				{site.email}
			</a>
			<div className="flex flex-wrap gap-2.5">
				<ButtonLink href={`mailto:${site.email}`}>Write an email</ButtonLink>
				<CopyEmailButton />
			</div>
		</div>

		<dl className="mt-16 grid border-t border-line md:mt-24">
			<div className="grid gap-1 border-b border-line py-5 md:grid-cols-[11rem_1fr] md:gap-8">
				<dt className="type-eyebrow leading-7">Open to</dt>
				<dd className="text-ink-2">{site.openTo}</dd>
			</div>
			<div className="grid gap-1 border-b border-line py-5 md:grid-cols-[11rem_1fr] md:gap-8">
				<dt className="type-eyebrow leading-7">Based in</dt>
				<dd className="text-ink-2">
					{site.location}, on GMT all year. It is <LocalTime /> here right now.
				</dd>
			</div>
			<div className="grid gap-1 border-b border-line py-5 md:grid-cols-[11rem_1fr] md:gap-8">
				<dt className="type-eyebrow leading-7">Elsewhere</dt>
				<dd>
					<ul className="flex flex-wrap gap-x-6 gap-y-2">
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
					</ul>
				</dd>
			</div>
			<div className="grid gap-1 border-b border-line py-5 md:grid-cols-[11rem_1fr] md:gap-8">
				<dt className="type-eyebrow leading-7">CV</dt>
				<dd>
					<a href={site.resumePdf} download className="link-inline">
						Download my CV as a PDF
					</a>
				</dd>
			</div>
		</dl>
	</section>
)

export default ContactPage
