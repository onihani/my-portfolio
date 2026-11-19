import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { writingPosts } from '@/content/writing'
import { formatLongDate } from '@/lib/dates'

export const metadata: Metadata = {
	title: 'Writing',
	description:
		'Tutorials and notes by Nathaniel Quansah on smart contracts, backend engineering and building products.',
	alternates: { canonical: '/writing' },
}

const WritingPage = () => (
	<div className="container-page pt-16 md:pt-24">
		<p className="type-eyebrow enter">Writing</p>
		<h1
			className="type-display enter mt-4 max-w-[14ch]"
			style={{ '--enter-delay': '60ms' } as React.CSSProperties}
		>
			Notes and tutorials.
		</h1>
		<p
			className="type-lede enter mt-6 max-w-[34rem]"
			style={{ '--enter-delay': '120ms' } as React.CSSProperties}
		>
			Longer pieces on things I have built. More on payments and backend engineering soon.
		</p>

		<ul className="mt-14 grid gap-10 md:mt-20">
			{writingPosts.map((post) => (
				<li key={post.slug}>
					<Link
						href={`/writing/${post.slug}`}
						className="group grid gap-6 md:grid-cols-[22rem_1fr] md:items-center md:gap-10"
					>
						<div className="overflow-hidden rounded-[var(--radius-shot)] border border-line">
							<Image
								src={post.cover}
								alt=""
								width={1600}
								height={900}
								sizes="(min-width: 768px) 352px, 100vw"
								className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.015]"
							/>
						</div>
						<div className="grid gap-2">
							<p className="font-mono text-[0.8125rem] text-ink-3 tabular-nums">
								{formatLongDate(post.publishedAt)} · {post.readingMinutes} min read
							</p>
							<h2 className="type-heading group-hover:text-accent-ink">{post.title}</h2>
							<p className="max-w-xl text-ink-2 text-pretty">{post.description}</p>
							<p className="font-mono text-[0.75rem] text-ink-3">{post.tags.join(' · ')}</p>
						</div>
					</Link>
				</li>
			))}
		</ul>
	</div>
)

export default WritingPage
