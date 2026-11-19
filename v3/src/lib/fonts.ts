import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'

// Paper direction: system type (SF on Apple devices) plus one serif accent.
export const instrumentSerif = Instrument_Serif({
	weight: '400',
	style: 'italic',
	subsets: ['latin'],
	variable: '--font-instrument-serif',
	display: 'swap',
})

// Graphite direction only. Not preloaded, so Paper visitors never download them.
export const geist = Geist({
	subsets: ['latin'],
	variable: '--font-geist',
	display: 'swap',
	preload: false,
})

export const geistMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono',
	display: 'swap',
	preload: false,
})
