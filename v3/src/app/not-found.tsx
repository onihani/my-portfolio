import Link from 'next/link'

const NotFound = () => (
	<section>
		<h1 className="text-[1.375rem] font-medium">Page not found</h1>
		<p className="mt-2 text-muted">
			This page does not exist.{' '}
			<Link href="/" className="text-link">
				Go home
			</Link>
			.
		</p>
	</section>
)

export default NotFound
