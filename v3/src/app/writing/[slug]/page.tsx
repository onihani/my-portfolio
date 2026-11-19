import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { ArrowLeftIcon, ArrowUpRightIcon } from '@/components/icons'
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

	const { html, headings } = await renderArticle(post.sourceFile)
	const articleJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'TechArticle',
		headline: post.title,
		description: post.description,
		datePublished: post.publishedAt,
		image: `${site.url}${post.cover}`,
		author: { '@type': 'Person', name: site.name, url: site.url },
		mainEntityOfPage: `${site.url}/writing/${post.slug}`,
	}

	return (
		<article className="pt-12 md:pt-20">
			<header className="container-text">
				<Link
					href="/writing"
					className="group inline-flex items-center gap-1.5 text-[0.875rem] text-ink-3 hover:text-ink"
				>
					<ArrowLeftIcon className="transition-transform duration-200 ease-out group-hover:-translate-x-0.5" />
					Writing
				</Link>
				<p className="mt-10 font-mono text-[0.8125rem] text-ink-3 tabular-nums">
					{formatLongDate(post.publishedAt)} · {post.readingMinutes} min read
				</p>
				<h1 className="type-title mt-3">{post.title}</h1>
				<p className="type-lede mt-4">{post.description}</p>
				<p className="mt-5 text-[0.875rem] text-ink-3">
					Originally published on{' '}
					<a
						href={post.originalUrl}
						target="_blank"
						rel="noreferrer"
						className="link-inline inline-flex items-center gap-0.5"
					>
						Hashnode
						<ArrowUpRightIcon className="size-3" />
					</a>
					.
				</p>
			</header>

			<div className="container-page mt-10 md:mt-14">
				<Image
					src={post.cover}
					alt=""
					width={1600}
					height={900}
					sizes="(min-width: 1120px) 1088px, 100vw"
					priority
					className="block h-auto w-full rounded-[var(--radius-card)] border border-line"
				/>
			</div>

			<div className="container-page mt-12 grid gap-10 md:mt-16 xl:grid-cols-[1fr_42rem_1fr]">
				<div className="hidden xl:block" />
				<div className="prose-article min-w-0" dangerouslySetInnerHTML={{ __html: html }} />
				<nav aria-label="Contents" className="hidden xl:block">
					<div className="sticky top-24 max-h-[calc(100dvh-8rem)] overflow-auto pl-6">
						<p className="type-eyebrow mb-3">Contents</p>
						<ul className="grid gap-1.5 border-l border-line text-[0.8125rem]">
							{headings.map((heading) => (
								<li key={heading.id} className={heading.depth === 3 ? 'pl-6' : 'pl-3'}>
									<a href={`#${heading.id}`} className="block text-ink-3 hover:text-ink">
										{heading.text}
									</a>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }}
			/>
		</article>
	)
}

export default ArticlePage
