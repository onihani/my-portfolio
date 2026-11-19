import { ArrowUpRightIcon } from '@/components/icons'
import { ProjectEntry } from '@/components/project-entry'
import { earlierProjects, projects } from '@/content/projects'
import { site } from '@/content/site'

const HomePage = () => (
	<>
		<section aria-labelledby="intro">
			<h1
				id="intro"
				className="enter text-[2rem] leading-tight font-medium tracking-[-0.025em] md:text-[2.5rem]"
			>
				{site.name}
			</h1>
			<p className="enter mt-1 text-[1.1875rem] text-muted md:text-[1.375rem]" style={{ '--i': 1 }}>
				{site.headline}
			</p>
			<p className="enter mt-6 max-w-[34rem] text-ink-2" style={{ '--i': 2 }}>
				I build payments and web platforms, from government licensing to health records and fintech.
				Most of what I make is below.
			</p>
			<a
				href={site.building.href}
				target="_blank"
				rel="noreferrer"
				className="enter press mt-6 inline-flex items-center gap-2.5 rounded-full bg-surface py-1.5 pr-3 pl-3.5 text-[0.9375rem] shadow-[0_0_0_1px_var(--line)]"
				style={{ '--i': 3 }}
			>
				<span className="live-dot" aria-hidden="true" />
				<span>
					Building <span className="font-medium">{site.building.name}</span>
				</span>
				<ArrowUpRightIcon className="size-3.5 text-muted" />
			</a>
		</section>

		<section aria-labelledby="work" className="layout col-[full]! mt-24 md:mt-32">
			<h2 id="work" className="enter text-[1.25rem] font-medium" style={{ '--i': 4 }}>
				Work
			</h2>
			<div className="wide mt-8 grid gap-16 md:gap-24">
				{projects.map((project, index) => (
					<ProjectEntry key={project.slug} project={project} isFirst={index === 0} />
				))}
			</div>
		</section>

		<section aria-labelledby="earlier" className="mt-24 md:mt-32">
			<h2 id="earlier" className="text-[1.25rem] font-medium">
				Earlier
			</h2>
			<ul className="mt-6 grid gap-5">
				{earlierProjects.map((project) => (
					<li key={project.name} className="grid gap-0.5">
						<div className="flex items-baseline justify-between gap-4">
							{project.link ? (
								<a
									href={project.link.href}
									target="_blank"
									rel="noreferrer"
									className="link font-medium"
								>
									{project.name}
								</a>
							) : (
								<span className="font-medium">{project.name}</span>
							)}
							<span className="shrink-0 text-[0.9375rem] text-muted">{project.context}</span>
						</div>
						<p className="text-ink-2">{project.description}</p>
					</li>
				))}
			</ul>
		</section>
	</>
)

export default HomePage
