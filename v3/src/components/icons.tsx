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
