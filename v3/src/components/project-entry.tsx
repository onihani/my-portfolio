import Image from 'next/image'

import { ArrowUpRightIcon } from '@/components/icons'
import { ShotStrip } from '@/components/shot-strip'
import type { Project } from '@/content/types'

type ProjectEntryProps = {
	project: Project
	isFirst: boolean
}

export const ProjectEntry = ({ project, isFirst }: ProjectEntryProps) => (
	<article
		aria-labelledby={`project-${project.slug}`}
		className={isFirst ? 'panel' : 'panel rise'}
		data-tone={project.textTone}
		style={{ '--panel': project.color }}
	>
		<ShotStrip
			projectName={project.name}
			shots={project.shots}
			priority={isFirst}
			action={
				<a
					href={project.link.href}
					target="_blank"
					rel="noreferrer"
					className="panel-link press group"
				>
					{project.link.label}
					<ArrowUpRightIcon className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-px group-hover:-translate-y-px" />
				</a>
			}
		>
			<h3
				id={`project-${project.slug}`}
				className="flex items-center gap-3 text-[1.375rem] leading-tight font-semibold tracking-[-0.02em] md:text-[1.625rem]"
			>
				<Image
					src={project.logo}
					alt=""
					width={32}
					height={32}
					className="logo size-8 rounded-[8px]"
				/>
				{project.name}
			</h3>
			<p className="mt-3 max-w-[36rem] text-[1rem] leading-relaxed md:text-[1.0625rem]">
				{project.description}
			</p>
			{project.note ? <p className="mt-2 text-[0.875rem]">{project.note}</p> : null}
		</ShotStrip>
	</article>
)
