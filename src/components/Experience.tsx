import { experience } from '../data/site'
import ExternalLink from './ExternalLink'
import Reveal from './Reveal'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I work">
      {experience.map((job) => (
        <Reveal key={job.company}>
          <article className="grid gap-6 md:grid-cols-[9rem_1fr] md:gap-12">
            <p className="label md:pt-2">{job.period}</p>

            <div>
              <h3 className="display text-ink text-[1.625rem] leading-snug">{job.role}</h3>
              <p className="mt-1.5 text-[1.0625rem] text-muted">{job.company}</p>

              <ul className="mt-7 space-y-4">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3.5 text-[1.0625rem] leading-[1.7] text-muted">
                    <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-line pt-7">
                <p className="label">Shipped in this role</p>
                <ul className="mt-5 space-y-5">
                  {job.highlights.map((item) => (
                    <li key={item.name}>
                      <ExternalLink href={item.href} variant="plain" className="text-ink hover:text-accent">
                        <span className="text-[1.0625rem] font-medium">{item.name}</span>
                      </ExternalLink>
                      <p className="mt-1 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
                        {item.summary}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <p className="label">Day to day</p>
                <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                  {job.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-raised px-2.5 py-1 font-mono text-[0.75rem] text-muted ring-1 ring-line"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </Section>
  )
}
