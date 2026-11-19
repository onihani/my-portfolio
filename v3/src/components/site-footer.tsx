import { links, site } from '@/content/site'

export const SiteFooter = () => (
	<footer className="mt-32 flex flex-col gap-3 border-t border-line pt-6 pb-12 text-[0.9375rem] text-muted sm:flex-row sm:items-center sm:justify-between">
		<p>{site.name}, Accra</p>
		<ul className="-mx-2 flex flex-wrap">
			{links.map((link) => (
				<li key={link.label}>
					<a
						href={link.href}
						className="quiet-link inline-block px-2 py-1.5"
						{...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
					>
						{link.label}
					</a>
				</li>
			))}
		</ul>
	</footer>
)
