import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
	width: 16,
	height: 16,
	viewBox: '0 0 16 16',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 1.5,
	strokeLinecap: 'round' as const,
	strokeLinejoin: 'round' as const,
	'aria-hidden': true,
}

export const ArrowUpRightIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<path d="M5 11 11 5M6 5h5v5" />
	</svg>
)

export const ArrowRightIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<path d="M3 8h10M9 4l4 4-4 4" />
	</svg>
)

export const ArrowLeftIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<path d="M13 8H3M7 4 3 8l4 4" />
	</svg>
)

export const ChevronLeftIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<path d="M10 3.5 5.5 8l4.5 4.5" />
	</svg>
)

export const ChevronRightIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<path d="M6 3.5 10.5 8 6 12.5" />
	</svg>
)

export const SunIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<circle cx="8" cy="8" r="2.75" />
		<path d="M8 1.75v1.1M8 13.15v1.1M1.75 8h1.1M13.15 8h1.1M3.58 3.58l.78.78M11.64 11.64l.78.78M3.58 12.42l.78-.78M11.64 4.36l.78-.78" />
	</svg>
)

export const MoonIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<path d="M13.25 9.5A5.5 5.5 0 0 1 6.5 2.75a5.5 5.5 0 1 0 6.75 6.75Z" />
	</svg>
)

export const MailIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<rect x="2" y="3.5" width="12" height="9" rx="2" />
		<path d="m2.5 4.75 5.5 4 5.5-4" />
	</svg>
)

// Brand marks from Simple Icons (CC0)
const brand = {
	width: 16,
	height: 16,
	viewBox: '0 0 24 24',
	fill: 'currentColor',
	'aria-hidden': true,
}

export const GitHubIcon = (props: IconProps) => (
	<svg {...brand} {...props}>
		<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
	</svg>
)

export const LinkedInIcon = (props: IconProps) => (
	<svg {...brand} {...props}>
		<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
	</svg>
)

export const XIcon = (props: IconProps) => (
	<svg {...brand} {...props}>
		<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
	</svg>
)

export const LockIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<rect x="3.5" y="7" width="9" height="6.5" rx="1.75" />
		<path d="M5.5 7V5.25a2.5 2.5 0 0 1 5 0V7" />
	</svg>
)
