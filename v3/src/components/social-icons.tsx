import type { ReactNode } from 'react'

type SocialTileProps = {
	id: string
	from: string
	to: string
	children: ReactNode
}

/*
 * Each tile is drawn here rather than taken from an icon set: a rounded square with a soft
 * top-to-bottom gradient in the network's colour, a hairline highlight along the top edge,
 * and a white mark. Brand marks are from Simple Icons, redrawn to sit on the tile.
 */
const SocialTile = ({ id, from, to, children }: SocialTileProps) => (
	<svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
		<defs>
			<linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stopColor={from} />
				<stop offset="1" stopColor={to} />
			</linearGradient>
			<linearGradient id={`${id}-shine`} x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stopColor="#fff" stopOpacity="0.45" />
				<stop offset="0.5" stopColor="#fff" stopOpacity="0" />
			</linearGradient>
		</defs>
		<rect width="40" height="40" rx="11" fill={`url(#${id}-fill)`} />
		<rect
			x="0.5"
			y="0.5"
			width="39"
			height="39"
			rx="10.5"
			fill="none"
			stroke={`url(#${id}-shine)`}
		/>
		{children}
	</svg>
)

/* An envelope: a white card with the flap folded in the tile's own colour */
export const EmailTile = () => (
	<SocialTile id="social-email" from="#ff8a5c" to="#f0443a">
		<rect x="9" y="12" width="22" height="16" rx="3.5" fill="#fff" />
		<path
			d="M10.5 14.25 18.4 20.1a2.7 2.7 0 0 0 3.2 0l7.9-5.85"
			fill="none"
			stroke="#f0443a"
			strokeWidth="1.75"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</SocialTile>
)

export const GitHubTile = () => (
	<SocialTile id="social-github" from="#a074f2" to="#6e40c9">
		<path
			transform="translate(9 9) scale(0.9167)"
			fill="#fff"
			d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
		/>
	</SocialTile>
)

export const LinkedInTile = () => (
	<SocialTile id="social-linkedin" from="#2f93ec" to="#0a5fb8">
		<path
			transform="translate(10.5 10.5) scale(0.7917)"
			fill="#fff"
			d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
		/>
	</SocialTile>
)

export const XTile = () => (
	<SocialTile id="social-x" from="#3a3a3e" to="#09090b">
		<path
			transform="translate(11.5 11.5) scale(0.7083)"
			fill="#fff"
			d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
		/>
	</SocialTile>
)
