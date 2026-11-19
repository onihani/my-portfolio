import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ArrowLeftIcon } from '@/components/icons'
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
			<Link
				href="/writing"
				className="quiet-link enter inline-flex items-center gap-1.5 text-[0.9375rem]"
			>
				<ArrowLeftIcon className="size-3.5" />
				Writing
			</Link>
			<h1
				className="enter mt-8 text-[1.75rem] leading-tight font-medium tracking-[-0.02em] md:text-[2.25rem]"
				style={{ '--i': 1 }}
			>
				{post.title}
			</h1>
			<p className="enter mt-3 text-[0.9375rem] text-muted" style={{ '--i': 2 }}>
				{formatLongDate(post.publishedAt)} · {post.readingMinutes} min read · Originally on{' '}
				<a href={post.originalUrl} className="link">
					Hashnode
				</a>
			</p>
			<div
				className="prose enter mt-12"
				style={{ '--i': 3 }}
				dangerouslySetInnerHTML={{ __html: html }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
			/>
		</article>
	)
}

export default ArticlePage
