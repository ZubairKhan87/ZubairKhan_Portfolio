import { personalProjects, professionalProjects } from '../data/site'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import Section from './Section'

export default function Projects() {
  return (
    <Section
      id="work"
      label="Selected work"
      title="Things I've built"
      intro="A mix of AI systems I built on my own and platforms I shipped professionally."
    >
      <div>
        {personalProjects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>

      <Reveal>
        <div className="mt-16 mb-2 border-t border-line pt-10">
          <p className="label">Professional work</p>
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted">
            Products built with a team at Evolve Edge Technologies. The codebases are private, so these link
            to the live platforms.
          </p>
        </div>
      </Reveal>

      <div className="mt-8">
        {professionalProjects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={personalProjects.length + i} />
        ))}
      </div>
    </Section>
  )
}
