import { profile } from '../data/site'
import ExternalLink from './ExternalLink'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import Reveal from './Reveal'

export default function Hero() {
  const { headline } = profile

  return (
    <section id="top" className="mx-auto w-full max-w-5xl px-6 pt-14 pb-20 sm:px-8 sm:pt-20 sm:pb-28 lg:px-10">
      <Reveal>
        <p className="inline-flex items-center gap-2.5 rounded-full border border-line py-1.5 pr-4 pl-3 text-[0.8125rem] text-muted">
          <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          {profile.availability}
        </p>
      </Reveal>

      <Reveal delay={60}>
        <h1 className="display text-ink mt-8 text-[3.25rem] leading-[1.02] sm:text-[4.5rem] lg:text-[5.25rem]">
          {profile.name}
        </h1>
      </Reveal>

      <Reveal delay={120}>
        <p className="mt-6 max-w-2xl text-[1.375rem] leading-[1.35] font-medium tracking-[-0.01em] text-ink sm:text-[1.75rem]">
          {headline.lead} <span className="text-accent">{headline.accent}</span> {headline.trail}
        </p>
      </Reveal>

      <Reveal delay={180}>
        <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.75] text-muted">{profile.summary}</p>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.9375rem] font-medium text-surface transition-opacity duration-200 hover:opacity-85"
          >
            <MailIcon className="h-4 w-4" />
            Get in touch
          </a>

          <div className="flex items-center gap-6">
            <ExternalLink href={profile.github} icon={<GitHubIcon />}>
              GitHub
            </ExternalLink>
            <ExternalLink href={profile.linkedin} icon={<LinkedInIcon />}>
              LinkedIn
            </ExternalLink>
          </div>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <p className="label mt-14">{profile.location}</p>
      </Reveal>
    </section>
  )
}
