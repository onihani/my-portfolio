'use client'

import { useEffect, useState } from 'react'

import { CheckIcon, CopyIcon } from '@/components/icons'
import { site } from '@/content/site'

type CopyEmailButtonProps = {
	variant?: 'icon' | 'label'
}

export const CopyEmailButton = ({ variant = 'label' }: CopyEmailButtonProps) => {
	const [copied, setCopied] = useState(false)

	useEffect(() => {
		if (!copied) return
		const id = window.setTimeout(() => setCopied(false), 1800)
		return () => window.clearTimeout(id)
	}, [copied])

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(site.email)
			setCopied(true)
		} catch {
			window.location.href = `mailto:${site.email}`
		}
	}

	const stateLabel = copied ? 'Copied' : 'Copy email'

	return (
		<button
			type="button"
			onClick={copy}
			aria-label={variant === 'icon' ? stateLabel : undefined}
			className={
				variant === 'icon'
					? 'pressable inline-grid size-11 place-items-center rounded-full border border-line bg-surface text-ink-2 hover:border-line-strong hover:text-ink'
					: 'pressable inline-flex h-11 items-center gap-2 rounded-full border border-line bg-surface px-5 text-[0.9375rem] font-medium text-ink hover:border-line-strong'
			}
		>
			<span className="grid">
				<CopyIcon
					className="col-start-1 row-start-1 transition-[opacity,filter,transform] duration-200 ease-out"
					style={{
						opacity: copied ? 0 : 1,
						filter: copied ? 'blur(2px)' : 'none',
						transform: copied ? 'scale(0.8)' : 'none',
					}}
				/>
				<CheckIcon
					className="col-start-1 row-start-1 text-success transition-[opacity,filter,transform] duration-200 ease-out"
					style={{
						opacity: copied ? 1 : 0,
						filter: copied ? 'none' : 'blur(2px)',
						transform: copied ? 'none' : 'scale(0.8)',
					}}
				/>
			</span>
			{variant === 'label' ? (
				<span aria-live="polite">{stateLabel}</span>
			) : (
				<span className="sr-only" aria-live="polite">
					{copied ? 'Email copied' : ''}
				</span>
			)}
		</button>
	)
}
