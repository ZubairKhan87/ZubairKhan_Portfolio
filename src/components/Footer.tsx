import { profile } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p className="font-mono text-[0.75rem] text-faint">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="font-mono text-[0.75rem] text-faint transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
