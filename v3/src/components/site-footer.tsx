import Link from 'next/link'

import { ArrowUpRightIcon } from '@/components/icons'
import { LocalTime } from '@/components/local-time'
import { navigation, site, socials } from '@/content/site'

export const SiteFooter = () => (
	<footer className="no-print mt-32 border-t border-line">
		<div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
			<div className="grid content-start gap-3">
				<p className="text-[0.9375rem] font-semibold tracking-[-0.015em]">{site.name}</p>
				<p className="max-w-xs text-[0.9375rem] text-ink-3">
					{site.role} in {site.location}. <LocalTime /> right now.
				</p>
			</div>
			<div className="grid content-start gap-3">
				<p className="type-eyebrow">Pages</p>
				<ul className="grid gap-1.5 text-[0.9375rem]">
					{navigation.map((item) => (
						<li key={item.href}>
							<Link href={item.href} className="text-ink-2 hover:text-ink">
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="grid content-start gap-3">
				<p className="type-eyebrow">Elsewhere</p>
				<ul className="grid gap-1.5 text-[0.9375rem]">
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
						<a href={`mailto:${site.email}`} className="text-ink-2 hover:text-ink">
							Email
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="container-page flex flex-wrap items-center justify-between gap-3 border-t border-line py-6 text-[0.8125rem] text-ink-3">
			<p>Designed and built by Nat with Next.js.</p>
			<a
				href={site.repo}
				target="_blank"
				rel="noreferrer"
				className="inline-flex items-center gap-1 hover:text-ink"
			>
				Source on GitHub
				<ArrowUpRightIcon className="size-3.5" />
			</a>
		</div>
	</footer>
)
