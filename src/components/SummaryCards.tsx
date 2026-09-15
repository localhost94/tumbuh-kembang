import type { AgeSegment } from '../data/ageSegments'
import { Card } from './ui'
import { IconArrow, IconSpark, IconShield } from './Icons'

export function SummaryCards({ segment }: { segment: AgeSegment }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <Card className="animate-rise lg:col-span-1">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
            <IconSpark />
          </span>
          <h3 className="text-base font-bold text-kia-950">Yang akan dialami</h3>
        </div>
        <ul className="space-y-3">
          {segment.experienced.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-kia-900/80">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              {item}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="animate-rise lg:col-span-1">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-kia-100 text-kia-700">
            <IconArrow />
          </span>
          <h3 className="text-base font-bold text-kia-950">Yang harus dilakukan</h3>
        </div>
        <ul className="space-y-3">
          {segment.toDo.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-kia-900/80">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-kia-400" />
              {item}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="animate-rise bg-gradient-to-br from-kia-600 to-fuchsia-600 text-white lg:col-span-1">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-white">
            <IconShield />
          </span>
          <h3 className="text-base font-bold">Mengapa penting</h3>
        </div>
        <ul className="space-y-3">
          {segment.why.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/90">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 rounded-2xl bg-white/10 px-3 py-2 text-xs font-medium text-white/80">
          Sumber: Buku KIA 2024 — {segment.pages}
        </p>
      </Card>
    </div>
  )
}
