import Link from 'next/link'

const NotFound = () => (
	<section>
		<h1 className="text-[2rem] leading-tight font-medium tracking-[-0.025em]">Page not found</h1>
		<p className="mt-2 text-muted">
			This page does not exist.{' '}
			<Link href="/" className="link text-ink">
				Go home
			</Link>
			.
		</p>
	</section>
)

export default NotFound
