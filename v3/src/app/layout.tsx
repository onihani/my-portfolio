import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

import './globals.css'

import { PersonJsonLd } from '@/components/person-json-ld'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { site } from '@/content/site'
import { designDirection } from '@/lib/design'
import { geist, geistMono, instrumentSerif } from '@/lib/fonts'

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: {
		default: `${site.name}, full-stack engineer`,
		template: `%s · ${site.name}`,
	},
	description: site.description,
	applicationName: site.name,
	authors: [{ name: site.name, url: site.url }],
	creator: site.name,
	alternates: { canonical: '/' },
	openGraph: {
		type: 'website',
		url: site.url,
		siteName: site.name,
		title: `${site.name}, full-stack engineer`,
		description: site.description,
		locale: 'en_GB',
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@onihani',
		site: '@onihani',
	},
	robots: { index: true, follow: true },
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		],
		apple: '/apple-touch-icon.png',
	},
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#f6f5f1' },
		{ media: '(prefers-color-scheme: dark)', color: '#0f0f0e' },
	],
	colorScheme: 'light dark',
}

// Runs before paint so a saved theme never flashes the wrong colours.
const themeScript = `(()=>{try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}})()`

const isProduction = process.env.VERCEL_ENV === 'production'

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
	<html
		lang="en"
		data-direction={designDirection}
		suppressHydrationWarning
		className={`${instrumentSerif.variable} ${geist.variable} ${geistMono.variable}`}
	>
		<head>
			<script dangerouslySetInnerHTML={{ __html: themeScript }} />
		</head>
		<body className="min-h-dvh">
			<a
				href="#content"
				className="sr-only rounded-full bg-ink px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
			>
				Skip to content
			</a>
			<SiteHeader />
			<main id="content">{children}</main>
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
