import Image from 'next/image'
import Link from 'next/link'

import { ArrowRightIcon, ArrowUpRightIcon, GitHubIcon } from '@/components/icons'
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
			<div className="enter mt-8 grid max-w-[36rem] gap-4 text-ink-2" style={{ '--i': 2 }}>
				<p>
					I&apos;ve been building for the web since 2020, from a national licensing portal for
					Ghana&apos;s tourism businesses to health records and real estate software.
				</p>
				<p>
					Right now I&apos;m building{' '}
					<a href={site.building.href} target="_blank" rel="noreferrer" className="link text-ink">
						WayaSend
					</a>
					, USD cards and cross-border transfers for people across Africa. I work mostly in Go and
					TypeScript, on both the backend and the frontend.
				</p>
			</div>
			<Link
				href="/about"
				className="enter quiet-link group mt-6 inline-flex items-center gap-1.5 text-[0.9375rem]"
				style={{ '--i': 3 }}
			>
				More about me
				<ArrowRightIcon className="size-3.5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
			</Link>
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

		<section aria-labelledby="more-projects" className="mt-24 md:mt-32">
			<h2 id="more-projects" className="text-[1.25rem] font-medium">
				More projects
			</h2>
			<ul className="mt-6 grid gap-5">
				{earlierProjects.map((project) => {
					const content = (
						<>
							{project.logo ? (
								<Image
									src={project.logo}
									alt=""
									width={36}
									height={36}
									className="logo size-9 rounded-[9px]"
								/>
							) : (
								<span
									aria-hidden="true"
									className="logo grid size-9 place-items-center rounded-[9px] bg-surface text-ink"
								>
									<GitHubIcon className="size-[18px]" />
								</span>
							)}
							<span className="min-w-0 flex-1">
								<span className="flex items-center gap-1 font-medium">
									{project.name}
									{project.link ? (
										<ArrowUpRightIcon className="size-3.5 text-muted transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
									) : null}
								</span>
								<span className="block text-[0.9375rem] text-muted">{project.description}</span>
							</span>
							<span className="shrink-0 self-start pt-0.5 text-[0.9375rem] text-muted">
								{project.context}
							</span>
						</>
					)
					return (
						<li key={project.name}>
							{project.link ? (
								<a
									href={project.link.href}
									target="_blank"
									rel="noreferrer"
									className="group flex items-center gap-4"
								>
									{content}
								</a>
							) : (
								<div className="flex items-center gap-4">{content}</div>
							)}
						</li>
					)
				})}
			</ul>
		</section>
	</>
)

export default HomePage
