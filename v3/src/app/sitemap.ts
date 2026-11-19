import type { MetadataRoute } from 'next'

import { caseStudies } from '@/content/case-studies'
import { site } from '@/content/site'
import { writingPosts } from '@/content/writing'

const sitemap = (): MetadataRoute.Sitemap => [
	{ url: site.url, changeFrequency: 'monthly', priority: 1 },
	{ url: `${site.url}/work`, changeFrequency: 'monthly', priority: 0.9 },
	...caseStudies.map((caseStudy) => ({
		url: `${site.url}/work/${caseStudy.slug}`,
		changeFrequency: 'monthly' as const,
		priority: caseStudy.featured ? 0.8 : 0.6,
	})),
	{ url: `${site.url}/about`, changeFrequency: 'monthly', priority: 0.7 },
	{ url: `${site.url}/resume`, changeFrequency: 'monthly', priority: 0.7 },
	{ url: `${site.url}/contact`, changeFrequency: 'yearly', priority: 0.6 },
	{ url: `${site.url}/writing`, changeFrequency: 'monthly', priority: 0.5 },
	...writingPosts.map((post) => ({
		url: `${site.url}/writing/${post.slug}`,
		lastModified: post.publishedAt,
		changeFrequency: 'yearly' as const,
		priority: 0.5,
	})),
]

export default sitemap
