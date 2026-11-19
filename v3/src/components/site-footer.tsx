import type { ComponentType } from 'react'

import { EmailTile, GitHubTile, LinkedInTile, XTile } from '@/components/social-icons'
import { links, site } from '@/content/site'

type SocialMark = {
	Tile: ComponentType
	/** The glow under the tile on hover, in the tile's colour */
	glow: string
}

const socialMarks: Record<string, SocialMark> = {
	Email: { Tile: EmailTile, glow: 'rgb(240 68 58 / 0.55)' },
	GitHub: { Tile: GitHubTile, glow: 'rgb(110 64 201 / 0.55)' },
	LinkedIn: { Tile: LinkedInTile, glow: 'rgb(10 95 184 / 0.55)' },
	X: { Tile: XTile, glow: 'rgb(0 0 0 / 0.45)' },
}

export const SiteFooter = () => (
	<footer className="mt-32 flex flex-col gap-5 border-t border-line pt-8 pb-12 text-[0.9375rem] text-muted sm:flex-row sm:items-center sm:justify-between">
		<p>{site.name}, Accra</p>
		<ul className="flex gap-3" aria-label="Contact and socials">
			{links.map((link) => {
				const mark = socialMarks[link.label]
				return (
					<li key={link.label}>
						<a
							href={link.href}
							aria-label={link.label}
							title={link.label}
							className="social"
							style={mark ? { '--glow': mark.glow } : undefined}
							{...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
						>
							{mark ? <mark.Tile /> : link.label}
						</a>
					</li>
				)
			})}
		</ul>
	</footer>
)
