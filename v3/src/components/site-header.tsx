import Link from 'next/link'

import { DesktopNav, MobileNav } from '@/components/site-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { site } from '@/content/site'

export const SiteHeader = () => (
	<header className="no-print sticky top-0 z-40 pt-3">
		<div className="container-page">
			<nav
				aria-label="Main"
				className="material flex h-12 items-center justify-between gap-2 rounded-full border border-line py-1.5 pr-1.5 pl-4 shadow-[var(--shadow-float)]"
			>
				<Link
					href="/"
					className="pressable flex items-center gap-2.5 rounded-full text-[0.9375rem] font-semibold tracking-[-0.015em]"
				>
					<span aria-hidden="true" className="size-2 rounded-full bg-accent" />
					{site.name}
				</Link>
				<div className="flex items-center gap-1">
					<DesktopNav />
					<span aria-hidden="true" className="mx-1 hidden h-5 w-px bg-line md:block" />
					<ThemeToggle />
					<MobileNav />
				</div>
			</nav>
		</div>
	</header>
)
