import type { ReactNode } from 'react'
import Reveal from './Reveal'

type SectionProps = {
  id: string
  label: string
  title?: string
  intro?: string
  children: ReactNode
  /** Removes the top hairline — used for the first section after the hero. */
  flush?: boolean
}

/** Consistent section chrome: eyebrow label, optional heading, hairline rule. */
export default function Section({ id, label, title, intro, children, flush = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-5xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 ${
        flush ? '' : 'border-t border-line'
      }`}
    >
      <Reveal>
        <header className="mb-12 sm:mb-16">
          <p className="label">{label}</p>
          {title && (
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.015em] text-ink sm:text-4xl">
              {title}
            </h2>
          )}
          {intro && <p className="mt-4 max-w-xl text-[0.975rem] leading-relaxed text-muted">{intro}</p>}
        </header>
      </Reveal>
      {children}
    </section>
  )
}
