'use client'

import { useSyncExternalStore } from 'react'

import { MoonIcon, SunIcon } from '@/components/icons'

type ResolvedTheme = 'light' | 'dark'

const THEME_EVENT = 'themechange'
const darkQuery = '(prefers-color-scheme: dark)'

const getSystemTheme = (): ResolvedTheme =>
	window.matchMedia(darkQuery).matches ? 'dark' : 'light'

const getResolvedTheme = (): ResolvedTheme => {
	const stored = document.documentElement.dataset.theme
	return stored === 'light' || stored === 'dark' ? stored : getSystemTheme()
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

const applyTheme = (next: ResolvedTheme) => {
	const root = document.documentElement
	try {
		if (next === getSystemTheme()) {
			delete root.dataset.theme
			localStorage.removeItem('theme')
		} else {
			root.dataset.theme = next
			localStorage.setItem('theme', next)
		}
	} catch {
		root.dataset.theme = next
	}
	window.dispatchEvent(new Event(THEME_EVENT))
}

export const ThemeToggle = () => {
	const theme = useSyncExternalStore(subscribe, getResolvedTheme, () => 'light' as ResolvedTheme)
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
			aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
			className="pressable relative grid size-9 place-items-center rounded-full text-ink-2 hover:text-ink"
		>
			<SunIcon
				className="col-start-1 row-start-1 transition-[opacity,transform,filter] duration-200 ease-out"
				style={{
					opacity: isDark ? 1 : 0,
					transform: isDark ? 'scale(1)' : 'scale(0.6)',
					filter: isDark ? 'blur(0)' : 'blur(2px)',
				}}
			/>
			<MoonIcon
				className="col-start-1 row-start-1 transition-[opacity,transform,filter] duration-200 ease-out"
				style={{
					opacity: isDark ? 0 : 1,
					transform: isDark ? 'scale(0.6)' : 'scale(1)',
					filter: isDark ? 'blur(2px)' : 'blur(0)',
				}}
			/>
		</button>
	)
}
