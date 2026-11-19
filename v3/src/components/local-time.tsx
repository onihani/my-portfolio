'use client'

import { useSyncExternalStore } from 'react'

import { site } from '@/content/site'

const formatter =
	typeof Intl === 'undefined'
		? null
		: new Intl.DateTimeFormat('en-GB', {
				hour: '2-digit',
				minute: '2-digit',
				hour12: false,
				timeZone: site.timeZone,
			})

const subscribe = (onChange: () => void) => {
	const id = window.setInterval(onChange, 15_000)
	return () => window.clearInterval(id)
}

const getTime = () => (formatter ? formatter.format(new Date()) : null)

// Renders nothing on the server, so the static page never bakes in a stale time.
export const LocalTime = () => {
	const time = useSyncExternalStore(subscribe, getTime, () => null)
	return <span className="tabular-nums">{time ? `${time} GMT` : 'GMT'}</span>
}
