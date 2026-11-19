import Image from 'next/image'

import { ArrowUpRightIcon } from '@/components/icons'
import { ShotStrip } from '@/components/shot-strip'
import type { Project } from '@/content/types'

type ProjectEntryProps = {
	project: Project
	/** Position in the list; the horizontal rail uses it to place and scale each card */
	index: number
}

export const ProjectEntry = ({ project, index }: ProjectEntryProps) => (
	<article
		id={`work-${project.slug}`}
		aria-labelledby={`project-${project.slug}`}
		className={index === 0 ? 'panel' : 'panel rise'}
		data-tone={project.textTone}
		data-rail-index={index}
		style={{ '--panel': project.color, '--i': index }}
	>
		<ShotStrip
			projectName={project.name}
			address={project.address}
			shots={project.shots}
			priority={index === 0}
			action={
				<a href={project.link.href} target="_blank" rel="noreferrer" className="panel-link press">
					<span>{project.link.label}</span>
					{/* Two arrows: on hover the first flies out to the top right as the second slides in */}
					<span className="arrow-swap" aria-hidden="true">
						<ArrowUpRightIcon />
						<ArrowUpRightIcon />
					</span>
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
