import type { ReactNode } from 'react'

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}: {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6 ${className}`}>
      <div className="mb-8 max-w-3xl">
        {eyebrow && (
          <span className="mb-3 inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-bold tracking-wide text-teal-700 uppercase">
            {eyebrow}
          </span>
        )}
        <h2 className="text-2xl font-extrabold tracking-tight text-teal-950 sm:text-3xl">{title}</h2>
        {description && <p className="mt-3 text-sm leading-relaxed text-teal-900/70 sm:text-base">{description}</p>}
      </div>
      {children}
    </section>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-3xl border border-teal-100/80 bg-white/95 p-6 shadow-[0_10px_40px_-24px_rgba(13,148,136,0.45)] ${className}`}
    >
      {children}
    </div>
  )
}

export function Pill({ children, tone = 'teal' }: { children: ReactNode; tone?: 'teal' | 'amber' | 'rose' | 'slate' }) {
  const tones: Record<string, string> = {
    teal: 'bg-teal-50 text-teal-700 ring-teal-100',
    amber: 'bg-amber-50 text-amber-700 ring-amber-100',
    rose: 'bg-rose-50 text-rose-700 ring-rose-100',
    slate: 'bg-slate-50 text-slate-600 ring-slate-100',
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${tones[tone]}`}>
      {children}
    </span>
  )
}

export function ProgressRing({
  value,
  total,
  size = 96,
  stroke = 9,
}: {
  value: number
  total: number
  size?: number
  stroke?: number
}) {
  const pct = total > 0 ? value / total : 0
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e6f7f1" strokeWidth={stroke} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="#0d9488"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - pct)}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
      <text
        x="50%"
        y="47%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-teal-900 font-extrabold"
        style={{ fontSize: size * 0.26 }}
      >
        {value}
      </text>
      <text
        x="50%"
        y="68%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-teal-500 font-semibold"
        style={{ fontSize: size * 0.13 }}
      >
        / {total}
      </text>
    </svg>
  )
}
