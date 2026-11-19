import { ButtonLink } from '@/components/button-link'

const NotFound = () => (
	<section className="container-page pt-24 pb-12 md:pt-36">
		<p className="type-eyebrow">404</p>
		<h1 className="type-display mt-4 max-w-[14ch]">This page does not exist.</h1>
		<p className="type-lede mt-6 max-w-[32rem]">
			The link may be old, or the page moved when the site was rebuilt.
		</p>
		<div className="mt-8 flex flex-wrap gap-2.5">
			<ButtonLink href="/">Go home</ButtonLink>
			<ButtonLink href="/work" variant="secondary">
				See my work
			</ButtonLink>
		</div>
	</section>
)

export default NotFound
