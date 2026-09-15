import type { AgeSegment } from '../data/ageSegments'
import { STIMULATION } from '../data/stimulation'
import { Card } from './ui'
import { IconBlocks } from './Icons'

export function StimulationGrid({ segment }: { segment: AgeSegment }) {
  const group = STIMULATION[segment.id]
  return (
    <Card>
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
          <IconBlocks />
        </span>
        <div>
          <h3 className="text-base font-bold text-kia-950">Ide stimulasi</h3>
          <p className="text-sm text-kia-900/70">{group.title}</p>
        </div>
      </div>
      <p className="mb-5 rounded-2xl bg-violet-50 px-4 py-3 text-sm leading-relaxed text-violet-900/80">
        Lakukan stimulasi dalam suasana aman, nyaman, dan menyenangkan sesuai usia anak.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {group.items.map((item, i) => (
          <li
            key={item}
            className="group flex items-start gap-3 rounded-2xl border border-violet-100/70 bg-white p-3.5 transition hover:border-violet-200 hover:bg-violet-50/50"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white">
              {i + 1}
            </span>
            <span className="text-sm leading-relaxed text-kia-900/85">{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
