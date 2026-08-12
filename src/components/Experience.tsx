import { experience } from '../data/site'
import Reveal from './Reveal'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" label="Experience" title="Where I work">
      {experience.map((job) => (
        <Reveal key={job.company}>
          <article className="grid gap-6 md:grid-cols-[7.5rem_1fr] md:gap-10">
            <p className="label md:pt-1.5">{job.period}</p>

            <div>
              <h3 className="font-serif text-2xl leading-snug tracking-[-0.01em] text-ink">{job.role}</h3>
              <p className="mt-1 text-[0.9375rem] text-muted">{job.company}</p>

              <ul className="mt-6 space-y-4">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[0.975rem] leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </Section>
  )
}
