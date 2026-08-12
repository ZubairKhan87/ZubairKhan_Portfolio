import type { Project } from '../data/site'
import ExternalLink from './ExternalLink'
import { GitHubIcon } from './Icons'
import Reveal from './Reveal'

type ProjectCardProps = {
  project: Project
  index: number
}

/**
 * Editorial two-column row: index + meta on the left, the story on the right.
 * Collapses to a single column below `md`.
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { name, tagline, problem, outcomes, tech, live, github, note } = project

  return (
    <Reveal as="article" className="group border-t border-line py-10 first:border-t-0 first:pt-0 sm:py-12">
      <div className="grid gap-6 md:grid-cols-[7.5rem_1fr] md:gap-10">
        <div className="flex items-baseline gap-4 md:flex-col md:gap-2">
          <span className="label tabular-nums">{String(index + 1).padStart(2, '0')}</span>
          <span className="label !text-muted">{tagline}</span>
        </div>

        <div>
          <h3 className="font-serif text-2xl leading-snug tracking-[-0.01em] text-ink sm:text-[1.75rem]">
            {name}
          </h3>

          <p className="mt-4 max-w-2xl text-[0.975rem] leading-relaxed text-muted">{problem}</p>

          {outcomes && outcomes.length > 0 && (
            <ul className="mt-5 space-y-2">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink">
                  <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          )}

          <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5">
            {tech.map((item) => (
              <li key={item} className="font-mono text-[0.75rem] text-faint">
                {item}
              </li>
            ))}
          </ul>

          {(live || github || note) && (
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {live && (
                <ExternalLink href={live} variant="button">
                  View live
                </ExternalLink>
              )}
              {github && (
                <ExternalLink href={github} variant="button" icon={<GitHubIcon className="h-3.5 w-3.5" />}>
                  View source
                </ExternalLink>
              )}
              {note && <span className="font-mono text-[0.75rem] text-faint">{note}</span>}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  )
}
