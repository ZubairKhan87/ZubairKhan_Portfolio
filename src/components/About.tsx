import { achievements, education } from '../data/site'
import Reveal from './Reveal'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" label="Background" title="Education & recognition">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div>
            <p className="label">Education</p>
            <h3 className="display text-ink mt-4 text-[1.375rem] leading-snug">{education.degree}</h3>
            <p className="mt-1.5 text-[1rem] text-muted">{education.school}</p>
            <p className="mt-3 font-mono text-[0.8125rem] text-faint">
              {education.period} · CGPA {education.gpa}
            </p>

            <p className="mt-6 text-[0.9375rem] leading-[1.7] text-muted">
              <span className="text-ink">Coursework — </span>
              {education.coursework.join(', ')}.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div>
            <p className="label">Achievements</p>
            <ul className="mt-4 space-y-6">
              {achievements.map((item) => (
                <li key={item.title} className="border-l-2 border-accent pl-4">
                  <p className="text-[1.0625rem] leading-snug font-medium text-ink">{item.title}</p>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
