import { useEffect, useRef, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Stagger in ms — keep small, this is a hint of motion, not a show. */
  delay?: number
  as?: ElementType
  className?: string
}

/**
 * Fades content in once as it enters the viewport.
 * A single shared observer per instance, disconnected after firing.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (!('IntersectionObserver' in window)) {
      node.dataset.visible = 'true'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        node.dataset.visible = 'true'
        observer.disconnect()
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-visible="false"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
