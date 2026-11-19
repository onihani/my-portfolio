import { caseStudies, getCaseStudy } from '@/content/case-studies'
import { ogSize, renderOgImage } from '@/lib/og'

export const alt = 'Case study by Nathaniel Quansah'
export const size = ogSize
export const contentType = 'image/png'

export const generateStaticParams = () => caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }))

const CaseStudyOpengraphImage = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params
	const caseStudy = getCaseStudy(slug)
	return renderOgImage({
		eyebrow: caseStudy ? `Case study · ${caseStudy.domain}` : 'Case study',
		title: caseStudy?.title ?? 'Work',
		subtitle: caseStudy?.tagline ?? '',
	})
}

export default CaseStudyOpengraphImage
