import type { SkillGroup } from '@/content/types'

type SkillsTableProps = {
	groups: Array<SkillGroup>
}

export const SkillsTable = ({ groups }: SkillsTableProps) => (
	<dl className="grid border-t border-line">
		{groups.map((group) => (
			<div
				key={group.label}
				className="grid gap-1 border-b border-line py-4 md:grid-cols-[11rem_1fr] md:gap-8"
			>
				<dt className="type-eyebrow leading-7">{group.label}</dt>
				<dd className="text-ink-2">
					{group.items.map((item, index) => (
						<span key={item}>
							<span className={index < 2 ? 'text-ink' : undefined}>{item}</span>
							{index < group.items.length - 1 ? <span className="text-ink-3">, </span> : null}
						</span>
					))}
				</dd>
			</div>
		))}
	</dl>
)
