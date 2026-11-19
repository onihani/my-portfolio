'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ThemeToggle } from '@/components/theme-toggle'
import { navigation, site } from '@/content/site'
import portrait from '../../public/images/me-1-1.jpeg'

const isCurrent = (pathname: string, href: string) =>
	href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

export const SiteHeader = () => {
	const pathname = usePathname()

	return (
		<header className="flex items-center justify-between pt-6 md:pt-8">
			<Link href="/" className="press block rounded-full" aria-label={`${site.name}, home`}>
				<Image
					src={portrait}
					alt=""
					width={36}
					height={36}
					priority
					className="size-9 rounded-full object-cover"
				/>
			</Link>
			<div className="-mr-2 flex items-center gap-1">
				<nav aria-label="Main">
					<ul className="flex items-center text-[0.9375rem]">
						{navigation.map((item) => {
							const current = isCurrent(pathname, item.href)
							return (
								<li key={item.href}>
									<Link
										href={item.href}
										aria-current={current ? 'page' : undefined}
										className={`press block rounded-full px-3 py-2.5 transition-colors duration-200 ${
											current ? 'text-ink' : 'text-muted hover:text-ink'
										}`}
									>
										{item.label}
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
				<ThemeToggle />
			</div>
		</header>
	)
}
