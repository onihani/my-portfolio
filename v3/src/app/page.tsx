import Image from 'next/image'
import Link from 'next/link'

import { ArrowUpRightIcon } from '@/components/icons'
import { pastProjects, selectedProjects } from '@/content/projects'
import { links, site } from '@/content/site'
import { writingPosts } from '@/content/writing'
import { formatLongDate } from '@/lib/dates'
import portrait from '../../public/images/me-1-1.jpeg'

const HomePage = () => (
	<>
		<header>
			<Image
				src={portrait}
				alt="Nathaniel Quansah"
				width={56}
				height={56}
				priority
				className="size-14 rounded-full object-cover"
			/>
			<h1 className="mt-6 text-[1.375rem] font-medium tracking-[-0.01em]">{site.name}</h1>
			<p className="text-muted">{site.headline}</p>
		</header>

		<section aria-label="About" className="mt-12 grid gap-4">
			<p>
				I build payments and production web platforms, mostly in Go and TypeScript. Right now I am
				building{' '}
				<a href="https://usewayasend.com" className="text-link">
					WayaSend
				</a>
				, USD cards and money transfers for Africa.
			</p>
			<p>
				Before that I worked with Bashtech, Medtrack, CrowdPad and Hurisoft on government, health
				and real estate software.
			</p>
			<ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-muted">
				{links.map((link) => (
					<li key={link.label}>
						<a href={link.href} className="text-link hover:text-ink">
							{link.label}
						</a>
					</li>
				))}
			</ul>
		</section>

		<section aria-labelledby="selected-work" className="mt-24">
			<h2 id="selected-work" className="font-medium">
				Selected work
			</h2>
			<ul className="mt-8 grid gap-16">
				{selectedProjects.map((project, projectIndex) => (
					<li key={project.name}>
						<div className="flex items-baseline justify-between gap-4">
							<h3 className="font-medium">{project.name}</h3>
							<a
								href={project.link.href}
								target="_blank"
								rel="noreferrer"
								className="inline-flex shrink-0 items-center gap-1 text-[0.9375rem] text-muted hover:text-ink"
							>
								{project.link.label}
								<ArrowUpRightIcon className="size-3.5" />
							</a>
						</div>
						<p className="text-[0.9375rem] text-muted">{project.role}</p>
						<p className="mt-2">{project.description}</p>
						<div className="shots mt-5">
							{project.shots.map((shot, shotIndex) => (
								<a
									key={shot.image.src}
									href={shot.image.src}
									target="_blank"
									rel="noreferrer"
									className="shot"
									aria-label={`Open full screenshot: ${shot.alt}`}
								>
									<Image
										src={shot.image}
										alt={shot.alt}
										sizes="(min-width: 768px) 608px, 86vw"
										placeholder="blur"
										priority={projectIndex === 0 && shotIndex === 0}
										className="block h-auto w-full"
									/>
								</a>
							))}
						</div>
						{project.note ? <p className="text-[0.875rem] text-muted">{project.note}</p> : null}
					</li>
				))}
			</ul>
		</section>

		<section aria-labelledby="writing" className="mt-24">
			<h2 id="writing" className="font-medium">
				Writing
			</h2>
			<ul className="mt-6 grid gap-3">
				{writingPosts.map((post) => (
					<li key={post.slug} className="grid gap-x-6 sm:grid-cols-[7.5rem_1fr]">
						<span className="text-[0.9375rem] text-muted tabular-nums">
							{formatLongDate(post.publishedAt)}
						</span>
						<Link href={`/writing/${post.slug}`} className="text-link">
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</section>

		<section aria-labelledby="past-projects" className="mt-24">
			<h2 id="past-projects" className="font-medium">
				Past projects
			</h2>
			<ul className="mt-6 grid gap-3">
				{pastProjects.map((project) => (
					<li key={project.name}>
						{project.link ? (
							<a href={project.link.href} target="_blank" rel="noreferrer" className="text-link">
								{project.name}
							</a>
						) : (
							<span>{project.name}</span>
						)}
						<span className="text-muted">
							{' '}
							· {project.context}. {project.description}.
						</span>
					</li>
				))}
			</ul>
		</section>

		<footer className="mt-24 text-[0.875rem] text-muted">{site.name}</footer>
	</>
)

export default HomePage
