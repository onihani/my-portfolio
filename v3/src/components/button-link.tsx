import Link from 'next/link'
import type { ReactNode } from 'react'

type ButtonLinkProps = {
	href: string
	children: ReactNode
	variant?: 'primary' | 'secondary' | 'quiet'
	external?: boolean
	download?: boolean
	className?: string
}

const variantClasses: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
	primary: 'bg-ink text-bg hover:bg-ink/90',
	secondary: 'border border-line bg-surface text-ink hover:border-line-strong',
	quiet: 'text-ink-2 hover:text-ink',
}

export const ButtonLink = ({
	href,
	children,
	variant = 'primary',
	external = false,
	download = false,
	className = '',
}: ButtonLinkProps) => {
	const classes = `pressable inline-flex h-11 items-center gap-2 rounded-full px-5 text-[0.9375rem] font-medium ${variantClasses[variant]} ${className}`

	return external || download || href.startsWith('mailto:') ? (
		<a
			href={href}
			className={classes}
			download={download ? true : undefined}
			target={external ? '_blank' : undefined}
			rel={external ? 'noreferrer' : undefined}
		>
			{children}
		</a>
	) : (
		<Link href={href} className={classes}>
			{children}
		</Link>
	)
}
