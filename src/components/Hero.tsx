import { profile } from '../data/site'
import ExternalLink from './ExternalLink'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import Reveal from './Reveal'

export default function Hero() {
  const { headline } = profile

  return (
    <section id="top" className="mx-auto w-full max-w-5xl px-6 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28 lg:px-10">
      <Reveal>
        <p className="label flex items-center gap-2.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {profile.availability}
        </p>
      </Reveal>

      <Reveal delay={60}>
        <h1 className="mt-7 max-w-3xl font-serif text-[2.5rem] leading-[1.08] tracking-[-0.02em] text-ink sm:text-[3.5rem] lg:text-[4rem]">
          {headline.lead}{' '}
          <span className="italic text-accent">{headline.accent}</span> {headline.trail}
        </h1>
      </Reveal>

      <Reveal delay={120}>
        <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-muted">{profile.summary}</p>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.875rem] font-medium text-surface transition-opacity duration-200 hover:opacity-85"
          >
            <MailIcon className="h-3.5 w-3.5" />
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

      <Reveal delay={240}>
        <p className="label mt-14">{profile.location}</p>
      </Reveal>
    </section>
  )
}
