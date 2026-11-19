import Image from 'next/image'

import { ArrowUpRightIcon } from '@/components/icons'
import { ShotStrip } from '@/components/shot-strip'
import type { Project } from '@/content/types'

type ProjectEntryProps = {
	project: Project
	isFirst: boolean
}

export const ProjectEntry = ({ project, isFirst }: ProjectEntryProps) => (
	<article aria-labelledby={`project-${project.slug}`} className={isFirst ? undefined : 'rise'}>
		<div className="panel" style={{ '--panel': project.color }}>
			<ShotStrip projectName={project.name} shots={project.shots} priority={isFirst} />
		</div>
		<div className="mt-5 grid gap-1.5 px-1 sm:mt-6 md:px-2">
			<div className="flex items-center justify-between gap-4">
				<h3 id={`project-${project.slug}`} className="flex items-center gap-2.5 font-medium">
					<Image src={project.logo} alt="" width={22} height={22} className="logo size-[22px]" />
					{project.name}
				</h3>
				<a
					href={project.link.href}
					target="_blank"
					rel="noreferrer"
					className="quiet-link inline-flex shrink-0 items-center gap-1 text-[0.9375rem]"
				>
					{project.link.label}
					<ArrowUpRightIcon className="size-3.5" />
				</a>
			</div>
			<p className="max-w-[38rem] text-ink-2">{project.description}</p>
			{project.note ? <p className="text-[0.875rem] text-muted">{project.note}</p> : null}
		</div>
	</article>
)
