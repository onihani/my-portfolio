import { ImageResponse } from 'next/og'

import { site } from '@/content/site'

export const ogSize = { width: 1200, height: 630 }

type OgImageContent = {
	eyebrow: string
	title: string
	subtitle: string
}

// One quiet typographic card, in the site's palette.
export const renderOgImage = ({ eyebrow, title, subtitle }: OgImageContent) =>
	new ImageResponse(
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				padding: '72px 80px',
				background: '#efeff2',
				color: '#1d1d1f',
			}}
		>
			<div
				style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28, color: '#66666b' }}
			>
				{eyebrow}
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
				<div
					style={{
						fontSize: title.length > 48 ? 64 : 80,
						fontWeight: 500,
						letterSpacing: '-0.02em',
						lineHeight: 1.04,
					}}
				>
					{title}
				</div>
				<div style={{ fontSize: 32, color: '#66666b', lineHeight: 1.35, maxWidth: 980 }}>
					{subtitle}
				</div>
			</div>
			<div
				style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#66666b' }}
			>
				<span>{site.name}</span>
				<span>nathanielquansah.com</span>
			</div>
		</div>,
		ogSize,
	)
