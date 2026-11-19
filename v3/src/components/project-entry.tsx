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
			address={project.address}
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
			<Image
				src={project.logo}
				alt=""
				width={40}
				height={40}
				className="logo size-10 rounded-[10px]"
			/>
			<h3
				id={`project-${project.slug}`}
				className="mt-4 text-[1.375rem] leading-tight font-semibold tracking-[-0.02em] lg:mt-5 lg:text-[1.5rem]"
			>
				{project.name}
			</h3>
			<p className="mt-2.5 max-w-[34rem] text-[1rem] leading-relaxed lg:text-[0.984375rem]">
				{project.description}
			</p>
			{project.note ? <p className="mt-3 text-[0.875rem] leading-snug">{project.note}</p> : null}
		</ShotStrip>
	</article>
)
