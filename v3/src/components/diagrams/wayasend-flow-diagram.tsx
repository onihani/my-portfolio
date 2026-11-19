type FlowNode = {
	id: string
	x: number
	y: number
	width: number
	title: string
	detail: string
	tone?: 'accent'
}

type FlowEdge = {
	id: string
	path: string
	label?: { text: string; x: number; y: number; anchor?: 'start' | 'middle' | 'end' }
}

type FlowLayout = {
	viewBox: string
	nodeHeight: number
	nodes: Array<FlowNode>
	edges: Array<FlowEdge>
}

const wideLayout: FlowLayout = {
	viewBox: '0 0 800 284',
	nodeHeight: 68,
	nodes: [
		{ id: 'clients', x: 1, y: 24, width: 168, title: 'Web & mobile', detail: 'React · Expo' },
		{
			id: 'api',
			x: 211,
			y: 24,
			width: 168,
			title: 'Go API',
			detail: 'Fiber · GORM',
			tone: 'accent',
		},
		{ id: 'jobs', x: 421, y: 24, width: 168, title: 'Background jobs', detail: 'Asynq · Redis' },
		{ id: 'partners', x: 631, y: 24, width: 168, title: 'Partners', detail: 'cards · KYC · OTP' },
		{ id: 'db', x: 211, y: 192, width: 168, title: 'PostgreSQL', detail: 'primary store' },
		{
			id: 'hooks',
			x: 421,
			y: 192,
			width: 168,
			title: 'Webhook handler',
			detail: 'HMAC verified',
			tone: 'accent',
		},
	],
	edges: [
		{ id: 'clients-api', path: 'M169 58 H207' },
		{ id: 'api-jobs', path: 'M379 58 H417' },
		{ id: 'jobs-partners', path: 'M589 58 H627' },
		{ id: 'api-db', path: 'M295 92 V188' },
		{
			id: 'partners-hooks',
			path: 'M715 92 V226 H593',
			label: { text: 'webhook events', x: 705, y: 164, anchor: 'end' },
		},
		{
			id: 'hooks-jobs',
			path: 'M505 192 V96',
			label: { text: 'enqueue', x: 513, y: 148, anchor: 'start' },
		},
	],
}

const tallLayout: FlowLayout = {
	viewBox: '0 0 340 500',
	nodeHeight: 64,
	nodes: [
		{ id: 'clients', x: 1, y: 1, width: 190, title: 'Web & mobile', detail: 'React · Expo' },
		{
			id: 'api',
			x: 1,
			y: 125,
			width: 190,
			title: 'Go API',
			detail: 'Fiber · GORM',
			tone: 'accent',
		},
		{ id: 'jobs', x: 1, y: 249, width: 190, title: 'Background jobs', detail: 'Asynq · Redis' },
		{ id: 'partners', x: 1, y: 373, width: 190, title: 'Partners', detail: 'cards · KYC · OTP' },
		{ id: 'db', x: 215, y: 125, width: 124, title: 'PostgreSQL', detail: 'primary store' },
		{
			id: 'hooks',
			x: 215,
			y: 249,
			width: 124,
			title: 'Webhooks',
			detail: 'HMAC verified',
			tone: 'accent',
		},
	],
	edges: [
		{ id: 'clients-api', path: 'M96 65 V121' },
		{ id: 'api-jobs', path: 'M96 189 V245' },
		{ id: 'jobs-partners', path: 'M96 313 V369' },
		{ id: 'api-db', path: 'M191 157 H211' },
		{
			id: 'partners-hooks',
			path: 'M191 405 H277 V317',
			label: { text: 'events', x: 285, y: 370, anchor: 'start' },
		},
		{ id: 'hooks-jobs', path: 'M215 281 H195' },
	],
}

const FlowSvg = ({ layout, className }: { layout: FlowLayout; className: string }) => (
	<svg viewBox={layout.viewBox} className={`diagram h-auto w-full ${className}`} aria-hidden="true">
		<defs>
			<marker
				id={`arrow-${layout.viewBox.replace(/\s/g, '')}`}
				viewBox="0 0 8 8"
				refX="7"
				refY="4"
				markerWidth="7"
				markerHeight="7"
				orient="auto-start-reverse"
			>
				<path
					d="M0 0.5 7.5 4 0 7.5"
					fill="none"
					className="stroke-ink-3"
					strokeWidth="1.25"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</marker>
		</defs>
		{layout.edges.map((edge) => (
			<g key={edge.id}>
				<path
					d={edge.path}
					pathLength={1}
					fill="none"
					className="diagram-edge stroke-line-strong"
					strokeWidth="1.25"
					markerEnd={`url(#arrow-${layout.viewBox.replace(/\s/g, '')})`}
				/>
				{edge.label ? (
					<text
						x={edge.label.x}
						y={edge.label.y}
						textAnchor={edge.label.anchor ?? 'middle'}
						className="fill-ink-3 font-mono text-[11px]"
					>
						{edge.label.text}
					</text>
				) : null}
			</g>
		))}
		{layout.nodes.map((node) => (
			<g key={node.id} className="diagram-node">
				<rect
					x={node.x}
					y={node.y}
					width={node.width}
					height={layout.nodeHeight}
					rx="12"
					className={
						node.tone === 'accent' ? 'fill-accent-soft stroke-accent' : 'fill-surface stroke-line'
					}
					strokeWidth="1"
				/>
				<text
					x={node.x + 14}
					y={node.y + 28}
					className="fill-ink text-[14px] font-semibold tracking-[-0.01em]"
				>
					{node.title}
				</text>
				<text x={node.x + 14} y={node.y + 48} className="fill-ink-3 font-mono text-[11px]">
					{node.detail}
				</text>
			</g>
		))}
	</svg>
)

export const WayasendFlowDiagram = () => (
	<figure className="grid gap-3">
		<div
			role="img"
			aria-label="WayaSend architecture. Web and mobile clients call a Go API on Fiber and GORM, which stores data in PostgreSQL and enqueues Asynq background jobs on Redis. Jobs call partners for card issuing, KYC and OTP. Partners send webhook events to a webhook handler that verifies HMAC signatures and enqueues more jobs."
		>
			<FlowSvg layout={wideLayout} className="hidden md:block" />
			<FlowSvg layout={tallLayout} className="mx-auto max-w-[22rem] md:hidden" />
		</div>
	</figure>
)
