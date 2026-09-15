import { useEffect, useState } from 'react'
import {
  MPASI_PRINCIPLES,
  NUTRITION_STAGES,
  OLDER_CHILD_NUTRITION,
  SUPPLEMENTS,
  type NutritionStage,
} from '../data/nutrition'
import { Card, Pill } from './ui'
import { IconDrop, IconSpark, IconTooth } from './Icons'

function stageForMonth(month: number): string {
  if (month < 6) return 'asi'
  if (month < 9) return 'mpasi-6-8'
  if (month < 12) return 'mpasi-9-11'
  if (month < 24) return 'mpasi-12-23'
  return 'older'
}

export function NutritionPanel({ month }: { month: number }) {
  const [selected, setSelected] = useState(stageForMonth(month))

  useEffect(() => {
    setSelected(stageForMonth(month))
  }, [month])

  const stage: NutritionStage | undefined = NUTRITION_STAGES.find((s) => s.id === selected)
  const showOlder = selected === 'older'

  return (
    <Card>
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
          <IconDrop />
        </span>
        <div>
          <h3 className="text-base font-bold text-teal-950">Gizi & MPASI</h3>
          <p className="text-sm text-teal-900/70">Porsi, tekstur, dan frekuensi makan sesuai usia anak.</p>
        </div>
      </div>

      <div className="no-scrollbar mb-5 flex gap-2 overflow-x-auto pb-1">
        {NUTRITION_STAGES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSelected(s.id)}
            className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition ${
              selected === s.id
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
            }`}
          >
            {s.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setSelected('older')}
          className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition ${
            showOlder
              ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
              : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
          }`}
        >
          Gizi 2–6 tahun
        </button>
      </div>

      {stage && (
        <div className="animate-rise">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <h4 className="text-lg font-extrabold text-teal-950">{stage.label}</h4>
            <Pill tone="amber">{stage.ageRange}</Pill>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <InfoTile label="Tekstur" value={stage.texture} />
            <InfoTile label="Porsi" value={stage.amount} />
            <InfoTile label="Frekuensi" value={stage.frequency} />
            <InfoTile label="Energi MPASI" value={stage.energy} />
            <InfoTile label="Cairan" value={stage.fluid} />
            <div className="rounded-2xl bg-orange-50/70 p-4 ring-1 ring-orange-100">
              <p className="mb-2 text-xs font-bold tracking-wide text-orange-700 uppercase">Catatan</p>
              <ul className="space-y-2">
                {stage.notes.map((n) => (
                  <li key={n} className="flex gap-2 text-sm leading-relaxed text-teal-900/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {showOlder && (
        <div className="animate-rise">
          {OLDER_CHILD_NUTRITION.map((g) => (
            <div key={g.ageLabel}>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <h4 className="text-lg font-extrabold text-teal-950">Pemenuhan gizi {g.ageLabel}</h4>
                <Pill tone="amber">Makanan keluarga</Pill>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 rounded-2xl bg-orange-50/70 p-3.5 text-sm leading-relaxed text-teal-900/85 ring-1 ring-orange-100"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-teal-100 p-4">
          <div className="mb-3 flex items-center gap-2">
            <IconSpark className="h-5 w-5 text-teal-600" />
            <h4 className="text-sm font-bold text-teal-950">Syarat MPASI yang baik</h4>
          </div>
          <ol className="space-y-2.5">
            {MPASI_PRINCIPLES.map((p) => (
              <li key={p.title} className="text-sm leading-relaxed text-teal-900/80">
                <span className="font-semibold text-teal-800">{p.title}</span> — {p.detail}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-2xl border border-teal-100 p-4">
          <div className="mb-3 flex items-center gap-2">
            <IconTooth className="h-5 w-5 text-teal-600" />
            <h4 className="text-sm font-bold text-teal-950">Suplementasi rutin</h4>
          </div>
          <ul className="space-y-3">
            {SUPPLEMENTS.map((s) => (
              <li key={s.label} className="rounded-xl bg-teal-50/70 p-3 text-sm leading-relaxed ring-1 ring-teal-100">
                <span className="font-semibold text-teal-800">{s.label}</span>
                <span className="ml-1 text-teal-600">({s.age})</span>
                <p className="text-teal-900/75">{s.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-teal-100 bg-white p-4">
      <p className="text-xs font-bold tracking-wide text-teal-600 uppercase">{label}</p>
      <p className="mt-1.5 text-sm leading-relaxed font-medium text-teal-900/85">{value}</p>
    </div>
  )
}
