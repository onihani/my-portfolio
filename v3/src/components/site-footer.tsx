import type { ComponentType, SVGProps } from 'react'

import { GitHubIcon, LinkedInIcon, MailIcon, XIcon } from '@/components/icons'
import { links, site } from '@/content/site'

const socialIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
	Email: MailIcon,
	GitHub: GitHubIcon,
	LinkedIn: LinkedInIcon,
	X: XIcon,
}

export const SiteFooter = () => (
	<footer className="mt-32 flex flex-col gap-3 border-t border-line pt-6 pb-12 text-[0.9375rem] text-muted sm:flex-row sm:items-center sm:justify-between">
		<p>{site.name}, Accra</p>
		<ul className="-mx-2 flex flex-wrap">
			{links.map((link) => {
				const Icon = socialIcons[link.label]
				return (
					<li key={link.label}>
						<a
							href={link.href}
							className="quiet-link inline-flex items-center gap-1.5 px-2 py-1.5"
							{...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
						>
							{Icon ? <Icon className="size-3.5" /> : null}
							{link.label}
						</a>
					</li>
				)
			})}
		</ul>
	</footer>
)
