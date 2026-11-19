type PipelineStep = {
	title: string
	detail: string
	marker: string | null
	tone?: 'endpoint' | 'step'
}

type PipelineDiagramProps = {
	label: string
	steps: Array<PipelineStep>
}

// A linear flow that reads left to right on wide screens and top to bottom on phones.
export const PipelineDiagram = ({ label, steps }: PipelineDiagramProps) => (
	<ol aria-label={label} className="pipeline grid gap-2.5 md:flex md:items-stretch md:gap-0">
		{steps.map((step, index) => (
			<li
				key={step.title}
				className="pipeline-step relative flex md:min-w-0 md:flex-1 md:items-stretch"
			>
				<div
					className={`grid w-full content-start gap-1 rounded-xl border px-3.5 py-3 ${
						step.tone === 'endpoint'
							? 'border-dashed border-line-strong bg-transparent'
							: 'border-line bg-surface'
					}`}
				>
					{step.marker ? (
						<span className="font-mono text-[0.6875rem] text-accent-ink tabular-nums">
							{step.marker}
						</span>
					) : null}
					<span className="text-[0.9375rem] leading-snug font-semibold tracking-[-0.01em]">
						{step.title}
					</span>
					<span className="font-mono text-[0.6875rem] leading-relaxed text-ink-3">
						{step.detail}
					</span>
				</div>
				{index < steps.length - 1 ? (
					<span
						aria-hidden="true"
						className="pipeline-arrow absolute -bottom-2.5 left-6 z-10 grid h-2.5 w-px place-items-center bg-line-strong md:static md:my-auto md:h-px md:w-5 md:shrink-0"
					/>
				) : null}
			</li>
		))}
	</ol>
)

export const gtaApprovalSteps: Array<PipelineStep> = [
	{ title: 'Operator applies', detail: 'register · apply · track', marker: null, tone: 'endpoint' },
	{ title: 'Inspector', detail: 'inspection', marker: 'L1' },
	{ title: 'Regional Director', detail: 'regional review', marker: 'L2' },
	{ title: 'SQA', detail: 'quality assurance', marker: 'L3' },
	{ title: 'DEDOPs', detail: 'operations', marker: 'L4' },
	{ title: 'CEO', detail: 'final approval', marker: 'L5' },
	{ title: 'Licence issued', detail: 'public record', marker: null, tone: 'endpoint' },
]

export const rendevuPipelineSteps: Array<PipelineStep> = [
	{ title: 'EventPlatform contract', detail: 'Solidity on Base', marker: '01' },
	{ title: 'Subsquid indexer', detail: 'contract events', marker: '02' },
	{ title: 'PostgreSQL + GraphQL', detail: 'queryable history', marker: '03' },
	{ title: 'Typesense', detail: 'search + natural language', marker: '04' },
	{ title: 'Next.js app', detail: 'Thirdweb wallets', marker: '05' },
]
