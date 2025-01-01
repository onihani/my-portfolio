// imports
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'

const MarkdownRenderer = ({ content }: { content: string }) => {
	return (
		<div className="prose">
			<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
		</div>
	)
}

export default MarkdownRenderer
