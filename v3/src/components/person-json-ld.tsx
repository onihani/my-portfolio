import { links, site } from '@/content/site'

export const PersonJsonLd = () => {
	const person = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: site.name,
		alternateName: 'Nat',
		url: site.url,
		image: `${site.url}/images/me-1-1.jpeg`,
		jobTitle: 'Software engineer',
		address: { '@type': 'PostalAddress', addressLocality: 'Accra', addressCountry: 'GH' },
		sameAs: links.filter((link) => link.href.startsWith('https')).map((link) => link.href),
	}

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
		/>
	)
}
