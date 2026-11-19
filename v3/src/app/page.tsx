import Link from 'next/link'

import { ArrowRightIcon } from '@/components/icons'
import { ProjectEntry } from '@/components/project-entry'
import { projects } from '@/content/projects'
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
				Selected work
			</h2>
			<div className="wide mt-8 grid gap-5 md:gap-6">
				{projects.map((project, index) => (
					<ProjectEntry key={project.slug} project={project} isFirst={index === 0} />
				))}
			</div>
		</section>
	</>
)

export default HomePage
