import type { WritingPost } from '@/content/types'

export const writingPosts: Array<WritingPost> = [
	{
		slug: 'building-fungible-tokens-with-the-near-js-sdk',
		title: 'Building Fungible Tokens with the NEAR JS SDK',
		description:
			'A step-by-step guide to building, testing and deploying a NEP-141 fungible token on NEAR with the JavaScript SDK.',
		publishedAt: '2024-06-03',
		readingMinutes: 26,
		cover: '/writing/near-fungible-tokens/cover.jpg',
		originalUrl: 'https://onihani.hashnode.dev/building-fungible-tokens-with-the-near-js-sdk',
		sourceFile: 'building-fungible-tokens-with-the-near-js-sdk.md',
	},
]

export const getWritingPost = (slug: string) =>
	writingPosts.find((post) => post.slug === slug) ?? null
