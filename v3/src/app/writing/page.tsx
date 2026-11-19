import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ArrowRightIcon } from '@/components/icons'
import type { WritingPost } from '@/content/types'
import { writingPosts } from '@/content/writing'
import { formatLongDate } from '@/lib/dates'

export const metadata: Metadata = {
	title: 'Writing',
	description: 'Guides and notes by Nathaniel Quansah from building software.',
	alternates: { canonical: '/writing' },
}

const PostMeta = ({ post }: { post: WritingPost }) => (
	<p className="text-[0.9375rem] text-muted tabular-nums">
		<time dateTime={post.publishedAt}>{formatLongDate(post.publishedAt)}</time> ·{' '}
		{post.readingMinutes} min read
	</p>
)

// The cover casts a soft glow in its own colours: the same image again, blurred, just beneath it
const PostCover = ({ post, sizes }: { post: WritingPost; sizes: string }) => (
	<span className="relative isolate block rounded-xl">
		<Image
			src={post.cover}
			alt=""
			fill
			sizes={sizes}
			aria-hidden="true"
			className="ambient-image"
		/>
		<span className="logo relative block aspect-video overflow-hidden rounded-xl bg-surface">
			<Image
				src={post.cover}
				alt=""
				fill
				sizes={sizes}
				className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
			/>
		</span>
	</span>
)

const PostTitle = ({ title, className }: { title: string; className: string }) => (
	<span
		className={`block font-medium tracking-[-0.01em] underline decoration-transparent decoration-1 underline-offset-[0.22em] transition-[text-decoration-color] duration-200 group-hover:decoration-current ${className}`}
	>
		{title}
	</span>
)

const WritingPage = () => {
	const [latest, ...older] = writingPosts

	return (
		<section aria-labelledby="writing">
			<h1 id="writing" className="enter text-[2rem] leading-tight font-medium tracking-[-0.025em]">
				Writing
			</h1>
			<p className="enter mt-1 text-[1.1875rem] text-muted" style={{ '--i': 1 }}>
				Guides and notes from building software.
			</p>

			{latest ? (
				<article className="enter mt-12" style={{ '--i': 2 }}>
					<Link href={`/writing/${latest.slug}`} className="group block">
						<PostCover post={latest} sizes="(min-width: 704px) 640px, 100vw" />
						<span className="mt-5 block">
							<PostMeta post={latest} />
							<PostTitle title={latest.title} className="mt-1.5 text-[1.375rem] leading-snug" />
							<span className="mt-2 block text-ink-2">{latest.description}</span>
							<span className="mt-4 inline-flex items-center gap-1.5 text-[0.9375rem] text-ink">
								Read the article
								<ArrowRightIcon className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
							</span>
						</span>
					</Link>
				</article>
			) : null}

			{older.length > 0 ? (
				<ul className="mt-14 grid gap-8">
					{older.map((post) => (
						<li key={post.slug}>
							<Link
								href={`/writing/${post.slug}`}
								className="group grid gap-4 sm:grid-cols-[11rem_1fr] sm:items-center sm:gap-6"
							>
								<PostCover post={post} sizes="(min-width: 640px) 176px, 100vw" />
								<span>
									<PostMeta post={post} />
									<PostTitle title={post.title} className="mt-1 text-[1.0625rem]" />
									<span className="mt-1 block text-ink-2">{post.description}</span>
								</span>
							</Link>
						</li>
					))}
				</ul>
			) : null}
		</section>
	)
}

export default WritingPage
