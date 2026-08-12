type IconProps = { className?: string }

const base = 'h-4 w-4'

export function GitHubIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  )
}

export function LinkedInIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M3.6 5.5H.9V15h2.7V5.5ZM2.25 1a1.57 1.57 0 1 0 0 3.13 1.57 1.57 0 0 0 0-3.13ZM15 9.56C15 6.9 13.58 5.3 11.4 5.3c-1.19 0-2.03.53-2.44 1.24h-.03V5.5H6.35V15h2.7v-4.7c0-1.24.23-2.44 1.77-2.44 1.51 0 1.53 1.41 1.53 2.52V15H15V9.56Z" />
    </svg>
  )
}

export function MailIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="1.5" y="3" width="13" height="10" rx="1.5" />
      <path d="m2 4.5 6 4 6-4" />
    </svg>
  )
}

export function ArrowUpRightIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 11 11 5M5.5 5H11v5.5" />
    </svg>
  )
}

export function SunIcon({ className = base }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="8" cy="8" r="3.1" />
      <path d="M8 1v1.6M8 13.4V15M15 8h-1.6M2.6 8H1m11-5-1.1 1.1M5.1 10.9 4 12m8 0-1.1-1.1M5.1 5.1 4 4" />
    </svg>
  )
}

export function MoonIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 9.8A5.9 5.9 0 0 1 6.2 2.5a5.9 5.9 0 1 0 7.3 7.3Z" />
    </svg>
  )
}
