import { useState } from 'react'
import { DANGER_GROUPS } from '../data/dangerSigns'
import { Card } from './ui'
import { IconAlert, IconChevron } from './Icons'

export function DangerSigns({ month }: { month: number }) {
  const primaryId = month < 1 ? 'neonatal' : 'balita'
  const [open, setOpen] = useState<Record<string, boolean>>({ [primaryId]: true })

  const toggle = (id: string) => setOpen((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <Card className="border-red-100">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-100 text-red-600">
          <IconAlert />
        </span>
        <div>
          <h3 className="text-base font-bold text-kia-950">Tanda bahaya</h3>
          <p className="text-sm text-kia-900/70">
            Kenali tanda bahaya dan segera periksa ke bidan/dokter/perawat. Geser usia untuk menyesuaikan.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {DANGER_GROUPS.map((g) => {
          const isOpen = !!open[g.id]
          const isPrimary = g.id === primaryId
          return (
            <div
              key={g.id}
              className={`overflow-hidden rounded-2xl border transition ${
                isPrimary ? 'border-red-200 bg-red-50/40' : 'border-slate-100 bg-white'
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(g.id)}
                className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
              >
                <div>
                  <p className="text-sm font-bold text-kia-950">{g.title}</p>
                  <p className="text-xs text-kia-900/60">{g.appliesTo}</p>
                </div>
                <IconChevron className={`h-5 w-5 shrink-0 text-kia-500 transition ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <div className="animate-rise px-4 pb-4">
                  <div className="mb-3 grid gap-2 sm:grid-cols-2">
                    {g.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl bg-white px-3 py-2.5 text-sm leading-relaxed text-kia-900/85 ring-1 ring-red-100"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="rounded-xl bg-red-100/70 px-3 py-2 text-xs font-semibold text-red-700">{g.note}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Card>
  )
}
