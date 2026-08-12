import { profile } from '../data/site'
import ExternalLink from './ExternalLink'
import { GitHubIcon, LinkedInIcon } from './Icons'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl border-t border-line px-6 py-20 sm:px-8 sm:py-28 lg:px-10"
    >
      <Reveal>
        <p className="label">Contact</p>
        <h2 className="display text-ink mt-4 max-w-2xl text-[2rem] leading-[1.15] sm:text-[2.5rem]">
          Have something to build? Let's talk.
        </h2>
        <p className="mt-5 max-w-lg text-[1.0625rem] leading-[1.7] text-muted">
          Open to roles and freelance work in AI-powered products and full-stack engineering. The fastest way
          to reach me is email.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <a
          href={`mailto:${profile.email}`}
          className="display text-ink group mt-10 inline-block text-[1.375rem] break-all transition-colors duration-200 hover:text-accent sm:text-[1.625rem]"
        >
          {profile.email}
          <span className="block h-px w-full origin-left scale-x-100 bg-line transition-colors duration-200 group-hover:bg-accent" />
        </a>
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <ExternalLink href={profile.linkedin} icon={<LinkedInIcon />}>
            LinkedIn
          </ExternalLink>
          <ExternalLink href={profile.github} icon={<GitHubIcon />}>
            GitHub
          </ExternalLink>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="text-[0.9375rem] text-muted transition-colors duration-200 hover:text-accent"
          >
            {profile.phone}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
