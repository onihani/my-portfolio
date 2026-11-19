import { readFile } from 'node:fs/promises'
import path from 'node:path'

import type { Element, Root } from 'hast'
import { toString } from 'hast-util-to-string'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import sharp from 'sharp'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'

export type ArticleHeading = {
	id: string
	text: string
	depth: 2 | 3
}

export type RenderedArticle = {
	html: string
	headings: Array<ArticleHeading>
}

const contentDirectory = path.join(process.cwd(), 'src/content/writing')
const publicDirectory = path.join(process.cwd(), 'public')

// Gives every local image real dimensions so the article never shifts while loading.
const rehypeImageDimensions = () => async (tree: Root) => {
	const images: Array<Element> = []
	visit(tree, 'element', (node) => {
		if (
			node.tagName === 'img' &&
			typeof node.properties.src === 'string' &&
			node.properties.src.startsWith('/')
		) {
			images.push(node)
		}
	})
	await Promise.all(
		images.map(async (node) => {
			const metadata = await sharp(
				path.join(publicDirectory, String(node.properties.src)),
			).metadata()
			node.properties.width = metadata.width
			node.properties.height = metadata.height
			node.properties.loading = 'lazy'
			node.properties.decoding = 'async'
			if (!node.properties.alt) node.properties.alt = 'Screenshot from the tutorial'
		}),
	)
}

// Links that leave the site open in a new tab.
const rehypeExternalLinks = () => (tree: Root) => {
	visit(tree, 'element', (node) => {
		const href = node.properties.href
		if (node.tagName === 'a' && typeof href === 'string' && /^https?:\/\//.test(href)) {
			node.properties.target = '_blank'
			node.properties.rel = ['noreferrer']
		}
	})
}

const collectHeadings = (headings: Array<ArticleHeading>) => () => (tree: Root) => {
	visit(tree, 'element', (node) => {
		if (
			(node.tagName === 'h2' || node.tagName === 'h3') &&
			typeof node.properties.id === 'string'
		) {
			headings.push({
				id: node.properties.id,
				text: toString(node),
				depth: node.tagName === 'h2' ? 2 : 3,
			})
		}
	})
}

export const renderArticle = async (sourceFile: string): Promise<RenderedArticle> => {
	'use cache'
	const markdown = await readFile(path.join(contentDirectory, sourceFile), 'utf8')
	const headings: Array<ArticleHeading> = []

	const file = await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkRehype)
		.use(rehypeSlug)
		.use(collectHeadings(headings))
		.use(rehypeImageDimensions)
		.use(rehypeExternalLinks)
		.use(rehypePrettyCode, {
			theme: { light: 'github-light', dark: 'github-dark-dimmed' },
			keepBackground: false,
			defaultLang: 'plaintext',
		})
		.use(rehypeStringify)
		.process(markdown)

	return { html: String(file), headings }
}
