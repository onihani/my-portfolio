import { site, skillGroups, socials } from '@/content/site'

export const PersonJsonLd = () => {
	const person = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: site.name,
		alternateName: site.shortName,
		url: site.url,
		image: `${site.url}/images/me-1-1.jpeg`,
		jobTitle: site.role,
		email: `mailto:${site.email}`,
		address: { '@type': 'PostalAddress', addressLocality: 'Accra', addressCountry: 'GH' },
		sameAs: socials.map((social) => social.href),
		knowsAbout: skillGroups.flatMap((group) => group.items).slice(0, 24),
	}

	return (
		<script
			type="application/ld+json"
			// JSON-LD must be a raw script body. The content is static and our own.
			dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, '\\u003c') }}
		/>
	)
}
