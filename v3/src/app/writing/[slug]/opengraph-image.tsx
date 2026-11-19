import { getWritingPost, writingPosts } from '@/content/writing'
import { ogSize, renderOgImage } from '@/lib/og'

export const alt = 'Article by Nathaniel Quansah'
export const size = ogSize
export const contentType = 'image/png'

export const generateStaticParams = () => writingPosts.map((post) => ({ slug: post.slug }))

const ArticleOpengraphImage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params
	const post = getWritingPost(slug)
	return renderOgImage({
		eyebrow: post ? `Writing · ${post.readingMinutes} min read` : 'Writing',
		title: post?.title ?? 'Writing',
		subtitle: post?.description ?? '',
	})
}

export default ArticleOpengraphImage
