# ZubairKhan_Portfolio

Personal portfolio of **Muhammad Zubair Khan** — Software Engineer.

A single-page site built with React, TypeScript, Vite and Tailwind CSS v4. No UI kit,
no animation library — the whole thing is a handful of components and one set of design tokens.

## Getting started

```bash
npm install
npm run dev      
npm run build    
npm run preview 
```

## Updating content

All copy lives in [`src/data/site.ts`](src/data/site.ts) — profile, projects, experience,
skills, education, achievements and nav items. Components read from it, so adding a project
means adding an object to `personalProjects` or `professionalProjects`:

```ts
{
  name: 'Project name',
  tagline: 'Short category line',
  problem: 'What it solves, in two or three sentences.',
  outcomes: ['Measurable result'],      
  tech: ['Django', 'React.js'],
  live: 'https://…',                    
  github: 'https://…',                  
  note: 'Private codebase',             
}
```

Omitting `live` or `github` hides that button entirely — private/company work never renders
a dead link.

## Design tokens

Colors, fonts and the dark palette are defined once in [`src/index.css`](src/index.css):
`@theme` holds the light values, `:root[data-theme='dark']` overrides only what changes.
Theme is resolved before first paint by a small inline script in [`index.html`](index.html)
(system preference by default, overridable by the navbar toggle, persisted in `localStorage`).

## Structure

```
src/
  data/site.ts        all content
  components/
    Navbar.tsx        sticky nav, scroll-spy, mobile link strip
    Hero.tsx          name, positioning, contact CTAs
    Projects.tsx      personal work + professional work
    ProjectCard.tsx   one project row
    Experience.tsx    employment
    Skills.tsx        grouped technologies
    About.tsx         education + achievements
    Contact.tsx       email, LinkedIn, GitHub, phone
    Footer.tsx
    Section.tsx       shared section chrome
    Reveal.tsx        IntersectionObserver fade-in
    ExternalLink.tsx  safe target/rel for outbound links
    ThemeToggle.tsx
    Icons.tsx         inline SVGs
```

## Deploying

The build output is static. On Vercel : build command `npm run build`,
output directory `dist`.
