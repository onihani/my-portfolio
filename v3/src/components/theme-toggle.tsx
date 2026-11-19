'use client'

import { useSyncExternalStore } from 'react'

import { MoonIcon, SunIcon } from '@/components/icons'

type ResolvedTheme = 'light' | 'dark'

const THEME_EVENT = 'themechange'
const darkQuery = '(prefers-color-scheme: dark)'

const getSystemTheme = (): ResolvedTheme =>
	window.matchMedia(darkQuery).matches ? 'dark' : 'light'

const getResolvedTheme = (): ResolvedTheme => {
	const chosen = document.documentElement.dataset.theme
	return chosen === 'light' || chosen === 'dark' ? chosen : getSystemTheme()
}

const subscribe = (onChange: () => void) => {
	const media = window.matchMedia(darkQuery)
	media.addEventListener('change', onChange)
	window.addEventListener(THEME_EVENT, onChange)
	return () => {
		media.removeEventListener('change', onChange)
		window.removeEventListener(THEME_EVENT, onChange)
	}
}

// Picking the same theme as the device clears the choice, so the site follows the device again
const applyTheme = (next: ResolvedTheme) => {
	const root = document.documentElement
	const followsSystem = next === getSystemTheme()
	if (followsSystem) delete root.dataset.theme
	else root.dataset.theme = next
	try {
		if (followsSystem) localStorage.removeItem('theme')
		else localStorage.setItem('theme', next)
	} catch {
		// Storage can be blocked; the choice then lasts for this page view only
	}
	window.dispatchEvent(new Event(THEME_EVENT))
}

export const ThemeToggle = () => {
	const theme = useSyncExternalStore(subscribe, getResolvedTheme, () => null)
	const isDark = theme === 'dark'

	const toggle = () => {
		const next: ResolvedTheme = isDark ? 'light' : 'dark'
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
		if (typeof document.startViewTransition === 'function' && !reduceMotion) {
			document.startViewTransition(() => applyTheme(next))
		} else {
			applyTheme(next)
		}
	}

	return (
		<button
			type="button"
			onClick={toggle}
			aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
			className="press nav-item raise-on-hover grid size-9 place-items-center rounded-full text-muted hover:text-ink"
		>
			<SunIcon className="theme-icon col-start-1 row-start-1 size-[18px]" data-shown={isDark} />
			<MoonIcon
				className="theme-icon col-start-1 row-start-1 size-[18px]"
				data-shown={theme === 'light'}
			/>
		</button>
	)
}
