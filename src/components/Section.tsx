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
            <h2 className="display text-ink mt-4 text-[2rem] leading-[1.15] sm:text-[2.5rem]">{title}</h2>
          )}
          {intro && <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.7] text-muted">{intro}</p>}
        </header>
      </Reveal>
      {children}
    </section>
  )
}
