import { skills } from '../data/site'
import Reveal from './Reveal'
import Section from './Section'

export default function Skills() {
  return (
    <Section
      id="skills"
      label="Toolkit"
      title="Technical strengths"
      intro="The tools I reach for most, grouped by where they fit in a product."
    >
      <dl className="divide-y divide-line border-t border-line">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 40}>
            <div className="grid gap-3 py-6 md:grid-cols-[13rem_1fr] md:gap-10">
              <dt className="text-[0.9375rem] font-medium text-ink">{group.title}</dt>
              <dd className="flex flex-wrap gap-x-2 gap-y-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-raised px-2.5 py-1 font-mono text-[0.75rem] text-muted ring-1 ring-line"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
