'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'

import { CloseIcon, MenuIcon } from '@/components/icons'
import { navigation } from '@/content/site'

const isActivePath = (pathname: string, href: string) =>
	pathname === href || pathname.startsWith(`${href}/`)

export const DesktopNav = () => {
	const pathname = usePathname()
	return (
		<ul className="hidden items-center gap-0.5 md:flex">
			{navigation.map((item) => {
				const active = isActivePath(pathname, item.href)
				return (
					<li key={item.href}>
						<Link
							href={item.href}
							aria-current={active ? 'page' : undefined}
							className={`pressable inline-flex h-9 items-center rounded-full px-3.5 text-[0.875rem] font-medium ${
								active ? 'bg-surface-2 text-ink' : 'text-ink-2 hover:text-ink'
							}`}
						>
							{item.label}
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export const MobileNav = () => {
	const pathname = usePathname()
	const menuRef = useRef<HTMLDivElement>(null)

	const close = () => menuRef.current?.hidePopover()

	return (
		<div className="md:hidden">
			<button
				type="button"
				popoverTarget="site-menu"
				aria-label="Open menu"
				className="pressable grid size-9 place-items-center rounded-full text-ink-2 hover:text-ink"
			>
				<MenuIcon />
			</button>
			<div ref={menuRef} id="site-menu" popover="auto" className="site-menu material">
				<div className="flex items-center justify-between pb-2 pl-3">
					<span className="type-eyebrow">Menu</span>
					<button
						type="button"
						onClick={close}
						aria-label="Close menu"
						className="pressable grid size-9 place-items-center rounded-full text-ink-2"
					>
						<CloseIcon />
					</button>
				</div>
				<ul className="grid gap-0.5">
					{[{ label: 'Home', href: '/' }, ...navigation].map((item) => {
						const active = item.href === '/' ? pathname === '/' : isActivePath(pathname, item.href)
						return (
							<li key={item.href}>
								<Link
									href={item.href}
									onClick={close}
									aria-current={active ? 'page' : undefined}
									className={`pressable flex h-11 items-center rounded-xl px-3 text-[1.0625rem] font-medium ${
										active ? 'bg-surface-2 text-ink' : 'text-ink-2'
									}`}
								>
									{item.label}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
