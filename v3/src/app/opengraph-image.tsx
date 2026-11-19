import { site } from '@/content/site'
import { ogSize, renderOgImage } from '@/lib/og'

export const alt = `${site.name}, full-stack engineer in Accra, Ghana`
export const size = ogSize
export const contentType = 'image/png'

const OpengraphImage = () =>
	renderOgImage({ eyebrow: `${site.availability}`, title: site.name, subtitle: site.positioning })

export default OpengraphImage
