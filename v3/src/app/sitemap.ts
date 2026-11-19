import type { MetadataRoute } from 'next'

import { site } from '@/content/site'
import { writingPosts } from '@/content/writing'

const sitemap = (): MetadataRoute.Sitemap => [
	{ url: site.url, changeFrequency: 'monthly', priority: 1 },
	...writingPosts.map((post) => ({
		url: `${site.url}/writing/${post.slug}`,
		lastModified: post.publishedAt,
		changeFrequency: 'yearly' as const,
		priority: 0.5,
	})),
]

export default sitemap
