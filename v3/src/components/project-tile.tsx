import { ArrowUpRightIcon } from '@/components/icons'
import { ShotFrame } from '@/components/shot-frame'
import { TodoText } from '@/components/todo-text'
import type { SmallProject } from '@/content/types'

type ProjectTileProps = {
	project: SmallProject
}

const statusLabel: Record<SmallProject['status'], string> = {
	live: 'Live',
	discontinued: 'Discontinued',
	offline: 'Offline',
	private: 'Private',
}

export const ProjectTile = ({ project }: ProjectTileProps) => {
	const body = (
		<>
			{project.shot ? (
				<ShotFrame
					shot={project.shot}
					domain={project.link?.label ?? null}
					sizes="(min-width: 1120px) 352px, (min-width: 768px) 33vw, 100vw"
					className="mb-4"
				/>
			) : null}
			<div className="flex items-start justify-between gap-3">
				<h3 className="font-semibold tracking-[-0.015em]">{project.name}</h3>
				<span
					className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[0.6875rem] ${
						project.status === 'live' ? 'bg-accent-soft text-accent-ink' : 'bg-surface-2 text-ink-3'
					}`}
				>
					{statusLabel[project.status]}
				</span>
			</div>
			<p className="mt-1.5 text-[0.9375rem] text-ink-2 text-pretty">{project.description}</p>
			<p className="mt-3 font-mono text-[0.75rem] leading-relaxed text-ink-3">
				<TodoText text={project.role} />
				{' · '}
				{project.stack.map((item, index) => (
					<span key={item}>
						<TodoText text={item} />
						{index < project.stack.length - 1 ? ', ' : null}
					</span>
				))}
			</p>
			{project.link && project.status === 'live' ? (
				<p className="mt-3 inline-flex items-center gap-1 text-[0.875rem] font-medium text-ink">
					{project.link.label}
					<ArrowUpRightIcon className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</p>
			) : null}
		</>
	)

	return project.link && project.status === 'live' ? (
		<a
			href={project.link.href}
			target="_blank"
			rel="noreferrer"
			className="group block rounded-[var(--radius-card)] border border-line bg-surface p-4 transition-[border-color,transform] duration-200 ease-out hover:border-line-strong active:scale-[0.99]"
		>
			{body}
		</a>
	) : (
		<div className="rounded-[var(--radius-card)] border border-line bg-surface p-4">{body}</div>
	)
}
