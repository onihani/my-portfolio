import { site } from '@/content/site'
import { ogSize, renderOgImage } from '@/lib/og'

export const alt = `${site.name}, ${site.headline}`
export const size = ogSize
export const contentType = 'image/png'

const OpengraphImage = () =>
	renderOgImage({ eyebrow: 'Accra, Ghana', title: site.name, subtitle: site.description })

export default OpengraphImage
