import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getWritingPost, writingPosts } from '@/content/writing'
import { site } from '@/content/site'
import { formatLongDate } from '@/lib/dates'
import { renderArticle } from '@/lib/markdown'

type ArticlePageProps = {
	params: Promise<{ slug: string }>
}

export const generateStaticParams = () => writingPosts.map((post) => ({ slug: post.slug }))

export const generateMetadata = async ({ params }: ArticlePageProps): Promise<Metadata> => {
	const { slug } = await params
	const post = getWritingPost(slug)
	if (!post) return {}
	return {
		title: post.title,
		description: post.description,
		alternates: { canonical: `/writing/${post.slug}` },
		openGraph: {
			type: 'article',
			title: post.title,
			description: post.description,
			publishedTime: post.publishedAt,
			authors: [site.name],
			url: `/writing/${post.slug}`,
		},
	}
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
	const { slug } = await params
	const post = getWritingPost(slug)
	if (!post) notFound()

	const { html } = await renderArticle(post.sourceFile)
	const articleJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'TechArticle',
		headline: post.title,
		description: post.description,
		datePublished: post.publishedAt,
		author: { '@type': 'Person', name: site.name, url: site.url },
		mainEntityOfPage: `${site.url}/writing/${post.slug}`,
	}

	return (
		<article>
			<Link href="/" className="text-muted hover:text-ink">
				{site.name}
			</Link>
			<h1 className="mt-12 text-[1.375rem] font-medium tracking-[-0.01em]">{post.title}</h1>
			<p className="text-muted">
				{formatLongDate(post.publishedAt)} · {post.readingMinutes} min read · Originally on{' '}
				<a href={post.originalUrl} className="text-link">
					Hashnode
				</a>
			</p>
			<div className="prose mt-10" dangerouslySetInnerHTML={{ __html: html }} />
			<footer className="mt-20">
				<Link href="/" className="text-link">
					Back to home
				</Link>
			</footer>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
			/>
		</article>
	)
}

export default ArticlePage
