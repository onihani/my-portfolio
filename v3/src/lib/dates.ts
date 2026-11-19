// Content dates are plain ISO days. Format them in UTC so the build and the browser agree.
export const formatLongDate = (isoDay: string) =>
	new Date(`${isoDay}T00:00:00Z`).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		timeZone: 'UTC',
	})
