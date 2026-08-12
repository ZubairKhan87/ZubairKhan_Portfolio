import type { ReactNode } from 'react'
import { ArrowUpRightIcon } from './Icons'

type ExternalLinkProps = {
  href: string
  children: ReactNode
  /**
   * `text` for inline links, `button` for the bordered pill used on project cards,
   * `plain` when the caller supplies its own type styles.
   */
  variant?: 'text' | 'button' | 'plain'
  icon?: ReactNode
  className?: string
}

/** Every outbound link goes through here so `rel`/`target` stay consistent. */
export default function ExternalLink({
  href,
  children,
  variant = 'text',
  icon,
  className = '',
}: ExternalLinkProps) {
  const styles = {
    button:
      'inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-[0.8125rem] font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent',
    text: 'group inline-flex items-center gap-1.5 text-[0.9375rem] text-muted transition-colors duration-200 hover:text-accent',
    plain: 'group inline-flex items-center gap-1.5 transition-colors duration-200',
  }[variant]

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles} ${className}`}>
      {icon}
      {children}
      {variant !== 'button' && (
        <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  )
}
