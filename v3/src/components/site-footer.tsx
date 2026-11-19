import type { ComponentType, CSSProperties, SVGProps } from 'react'

import { GitHubIcon, LinkedInIcon, MailIcon, XIcon } from '@/components/icons'
import { links, site } from '@/content/site'

type SocialMark = {
	Icon: ComponentType<SVGProps<SVGSVGElement>>
	/** Tile colour and the mark's colour on it; GitHub and X follow the theme's ink */
	style: CSSProperties
}

const socialMarks: Record<string, SocialMark> = {
	Email: { Icon: MailIcon, style: { '--social': '#ea4335' } },
	GitHub: { Icon: GitHubIcon, style: { '--social': 'var(--ink)', '--social-ink': 'var(--bg)' } },
	LinkedIn: { Icon: LinkedInIcon, style: { '--social': '#0a66c2' } },
	X: { Icon: XIcon, style: { '--social': 'var(--ink)', '--social-ink': 'var(--bg)' } },
}

export const SiteFooter = () => (
	<footer className="mt-32 flex flex-col gap-4 border-t border-line pt-6 pb-12 text-[0.9375rem] text-muted sm:flex-row sm:items-center sm:justify-between">
		<p>{site.name}, Accra</p>
		<ul className="flex gap-2.5" aria-label="Contact and socials">
			{links.map((link) => {
				const mark = socialMarks[link.label]
				return (
					<li key={link.label}>
						<a
							href={link.href}
							aria-label={link.label}
							title={link.label}
							className="social"
							style={mark?.style}
							{...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
						>
							{mark ? <mark.Icon className="size-[18px]" aria-hidden="true" /> : link.label}
						</a>
					</li>
				)
			})}
		</ul>
	</footer>
)
