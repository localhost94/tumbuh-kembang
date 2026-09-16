import { sourceList, type SchoolAgeSegment } from '../../data/schoolAge'
import { Card } from '../ui'
import { IconArrow, IconShield, IconSpark } from '../Icons'

function Dots({ items, tone = 'kia' }: { items: string[]; tone?: 'kia' | 'amber' | 'violet' }) {
  const dot: Record<string, string> = {
    kia: 'bg-kia-400',
    amber: 'bg-amber-400',
    violet: 'bg-violet-400',
  }
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-2.5 text-sm leading-relaxed text-kia-900/85">
          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot[tone]}`} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

function Block({
  title,
  icon,
  tone,
  children,
}: {
  title: string
  icon: React.ReactNode
  tone: string
  children: React.ReactNode
}) {
  const tones: Record<string, string> = {
    amber: 'bg-amber-100 text-amber-700',
    kia: 'bg-kia-100 text-kia-700',
    violet: 'bg-violet-100 text-violet-700',
  }
  return (
    <Card className="h-full">
      <div className="mb-4 flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-2xl ${tones[tone]}`}>{icon}</span>
        <h3 className="text-base font-bold text-kia-950">{title}</h3>
      </div>
      {children}
    </Card>
  )
}

export function SchoolDevelopment({ segment }: { segment: SchoolAgeSegment }) {
  const sources = sourceList(segment)
  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-2">
        <Block
          title="Yang akan dialami"
          tone="amber"
          icon={<IconSpark className="h-5 w-5" />}
        >
          <Dots items={segment.experienced} tone="amber" />
        </Block>
        <Block title="Yang perlu dilakukan" tone="kia" icon={<IconArrow className="h-5 w-5" />}>
          <Dots items={segment.toDo} />
        </Block>
      </div>

      <Card className="bg-gradient-to-br from-kia-600 to-fuchsia-600 text-white">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-white">
            <IconShield className="h-5 w-5" />
          </span>
          <h3 className="text-base font-bold">Mengapa penting</h3>
        </div>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {segment.why.map((w) => (
            <li key={w} className="flex gap-2.5 text-sm leading-relaxed text-white/90">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
              {w}
            </li>
          ))}
        </ul>
      </Card>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold tracking-wide text-kia-600 uppercase">Sumber:</span>
        {sources.map((s) => (
          <a
            key={s.id}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-kia-50 px-3 py-1 text-xs font-semibold text-kia-700 ring-1 ring-kia-100 transition hover:bg-kia-100"
          >
            {s.publisher}
          </a>
        ))}
      </div>
    </div>
  )
}
