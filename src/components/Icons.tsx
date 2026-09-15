interface IconProps {
  className?: string
}

const base = 'h-5 w-5'
const common = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function IconRuler({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <rect x="3" y="8" width="18" height="8" rx="2" />
      <path d="M7 8v3M11 8v4M15 8v3M19 8v4" />
    </svg>
  )
}

export function IconScale({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M12 4v16M7 20h10" />
      <path d="M5 8l3-4 3 4M13 8l3-4 3 4" />
      <path d="M5 8a3 3 0 0 0 6 0M13 8a3 3 0 0 0 6 0" />
    </svg>
  )
}

export function IconShield({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function IconDrop({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M12 3s6 6.4 6 10.4A6 6 0 0 1 6 13.4C6 9.4 12 3 12 3Z" />
    </svg>
  )
}

export function IconMoon({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5Z" />
    </svg>
  )
}

export function IconTooth({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M12 4c-2 0-3-1-5-1S4 5 4 8c0 2 .6 3.4 1.2 5 .5 1.3.8 1.7.9 3.3.1 1.4.4 2.7 1.4 2.7 1.4 0 1.2-2.4 2-4 .4-.8.8-1.2 1.5-1.2s1.1.4 1.5 1.2c.8 1.6.6 4 2 4 1 0 1.3-1.3 1.4-2.7.1-1.6.4-2 .9-3.3.6-1.6 1.2-3 1.2-5 0-3-1-4-3-4s-3 1-5 1Z" />
    </svg>
  )
}

export function IconBlocks({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
      <rect x="8.5" y="5" width="7" height="7" rx="1" />
    </svg>
  )
}

export function IconBall({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4c2 2.6 2 13.4 0 16M4.6 9.5c3.2 1.6 11.6 1.6 14.8 0M5 15c3-1.4 11-1.4 14 0" />
    </svg>
  )
}

export function IconClock({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function IconSyringe({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M14 4l6 6M17 7l-9 9-4 1 1-4 9-9" />
      <path d="M7 13l-2 2M10 16l-2 2" />
    </svg>
  )
}

export function IconSpark({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M12 3v5M12 16v5M3 12h5M16 12h5M6.3 6.3l3 3M14.7 14.7l3 3M17.7 6.3l-3 3M9.3 14.7l-3 3" />
    </svg>
  )
}

export function IconBook({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15H7.5A2.5 2.5 0 0 0 5 20.5V5.5Z" />
      <path d="M5 18V5.5M19 18v3H7.5A2.5 2.5 0 0 1 5 18" />
    </svg>
  )
}

export function IconCheck({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  )
}

export function IconClose({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function IconChevron({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export function IconArrow({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconRefresh({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M20 12a8 8 0 1 1-2.3-5.6" />
      <path d="M20 4v5h-5" />
    </svg>
  )
}

export function IconAlert({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M12 4l9 15H3l9-15Z" />
      <path d="M12 10v4M12 17h.01" />
    </svg>
  )
}

export function IconChart({ className = base }: IconProps) {
  return (
    <svg className={className} {...common}>
      <path d="M4 4v16h16" />
      <path d="M7 15l3-4 3 2 4-6" />
    </svg>
  )
}
