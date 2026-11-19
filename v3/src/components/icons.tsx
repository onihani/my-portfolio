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

export const ArrowUpRightIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<path d="M5 11 11 5M6 5h5v5" />
	</svg>
)

export const DownloadIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<path d="M8 2.5v8M4.5 7 8 10.5 11.5 7M3 13.5h10" />
	</svg>
)

export const CopyIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<rect x="5.5" y="5.5" width="8" height="8" rx="2" />
		<path d="M10.5 5.5V4a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5" />
	</svg>
)

export const CheckIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<path d="m3.5 8.5 3 3 6-7" />
	</svg>
)

export const SunIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<circle cx="8" cy="8" r="3" />
		<path d="M8 1.5v1.25M8 13.25v1.25M1.5 8h1.25M13.25 8h1.25M3.4 3.4l.9.9M11.7 11.7l.9.9M3.4 12.6l.9-.9M11.7 4.3l.9-.9" />
	</svg>
)

export const MoonIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<path d="M13.5 9.6A5.75 5.75 0 0 1 6.4 2.5a5.75 5.75 0 1 0 7.1 7.1Z" />
	</svg>
)

export const MenuIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<path d="M2.5 5.5h11M2.5 10.5h11" />
	</svg>
)

export const CloseIcon = (props: IconProps) => (
	<svg {...base} {...props}>
		<path d="M4 4l8 8M12 4l-8 8" />
	</svg>
)
