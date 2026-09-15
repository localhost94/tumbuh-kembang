import { useState } from 'react'
import { CARE_GROUPS } from '../data/care'
import { Card } from './ui'
import { IconChevron, IconMoon } from './Icons'

export function CarePanel() {
  const [open, setOpen] = useState<Record<string, boolean>>({ [CARE_GROUPS[0].id]: true })
  const toggle = (id: string) => setOpen((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <Card>
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-700">
          <IconMoon />
        </span>
        <div>
          <h3 className="text-base font-bold text-kia-950">Perawatan & pola asuh</h3>
          <p className="text-sm text-kia-900/70">Panduan praktis harian untuk ibu, ayah, dan keluarga.</p>
        </div>
      </div>

      <div className="space-y-3">
        {CARE_GROUPS.map((g) => {
          const isOpen = !!open[g.id]
          return (
            <div key={g.id} className="overflow-hidden rounded-2xl border border-kia-100 bg-white">
              <button
                type="button"
                onClick={() => toggle(g.id)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition hover:bg-kia-50/60"
              >
                <p className="text-sm font-bold text-kia-950">{g.title}</p>
                <IconChevron className={`h-5 w-5 shrink-0 text-kia-500 transition ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <ul className="animate-rise grid gap-2 px-4 pb-4 sm:grid-cols-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 rounded-xl bg-kia-50/60 px-3 py-2.5 text-sm leading-relaxed text-kia-900/85"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </Card>
  )
}
