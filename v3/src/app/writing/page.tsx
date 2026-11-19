import type { Metadata } from 'next'
import Link from 'next/link'

import { writingPosts } from '@/content/writing'
import { formatLongDate } from '@/lib/dates'

export const metadata: Metadata = {
	title: 'Writing',
	description: 'Articles by Nathaniel Quansah on building software.',
	alternates: { canonical: '/writing' },
}

const WritingPage = () => (
	<section aria-labelledby="writing">
		<h1 id="writing" className="enter text-[2rem] leading-tight font-medium tracking-[-0.025em]">
			Writing
		</h1>
		<p className="enter mt-1 text-[1.1875rem] text-muted" style={{ '--i': 1 }}>
			Notes and guides from building software.
		</p>
		<ul className="mt-14 grid">
			{writingPosts.map((post, index) => (
				<li key={post.slug} className="enter" style={{ '--i': index + 2 }}>
					<Link
						href={`/writing/${post.slug}`}
						className="group grid gap-x-8 gap-y-1 border-t border-line py-5 sm:grid-cols-[8rem_1fr]"
					>
						<span className="text-[0.9375rem] text-muted tabular-nums">
							{formatLongDate(post.publishedAt)}
						</span>
						<span className="grid gap-1">
							<span className="font-medium underline decoration-transparent decoration-1 underline-offset-[0.22em] transition-[text-decoration-color] duration-200 group-hover:decoration-current">
								{post.title}
							</span>
							<span className="text-ink-2">{post.description}</span>
							<span className="text-[0.9375rem] text-muted">{post.readingMinutes} min read</span>
						</span>
					</Link>
				</li>
			))}
		</ul>
	</section>
)

export default WritingPage
