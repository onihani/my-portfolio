import type { Metadata, Viewport } from 'next'
import { Host_Grotesk } from 'next/font/google'
import Script from 'next/script'

import './globals.css'

import { PersonJsonLd } from '@/components/person-json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { site } from '@/content/site'

// The whole site is static output. The build fails if anything adds request-time rendering.
export const ensureStatic = 'navigation'

const hostGrotesk = Host_Grotesk({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-host',
	display: 'swap',
})

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: { default: site.name, template: `%s · ${site.name}` },
	description: site.description,
	alternates: { canonical: '/' },
	openGraph: {
		type: 'website',
		url: site.url,
		siteName: site.name,
		title: site.name,
		description: site.description,
	},
	twitter: { card: 'summary_large_image', creator: '@onihani' },
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: '/apple-touch-icon.png',
	},
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#f5f5f7' },
		{ media: '(prefers-color-scheme: dark)', color: '#000000' },
	],
}

const isProduction = process.env.VERCEL_ENV === 'production'

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
	<html lang="en" className={hostGrotesk.variable}>
		<body className="layout min-h-dvh grid-rows-[auto_1fr_auto]">
			<SiteHeader />
			<main className="layout col-[full]! content-start pt-16 md:pt-24">{children}</main>
			<SiteFooter />
			<PersonJsonLd />
			{isProduction ? (
				<Script
					src="https://umami-production-4add.up.railway.app/script.js"
					data-website-id="c06d6829-676c-4947-ab06-11e2874bf0bf"
					strategy="lazyOnload"
				/>
			) : null}
		</body>
	</html>
)

export default RootLayout
