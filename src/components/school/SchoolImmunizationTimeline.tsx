import { useState } from 'react'
import { BIAS_NOTES, SCHOOL_VACCINES } from '../../data/schoolImmunization'
import { referenceById } from '../../data/schoolSources'
import { Card } from '../ui'
import { IconShield, IconSyringe } from '../Icons'

type Filter = 'semua' | 'BIAS' | 'IDAI 2024'

export function SchoolImmunizationTimeline() {
  const [filter, setFilter] = useState<Filter>('semua')
  const list = filter === 'semua' ? SCHOOL_VACCINES : SCHOOL_VACCINES.filter((v) => v.source === filter)
  const biasRef = referenceById('kemenkes-bias')
  const idaiRef = referenceById('idai-imunisasi-2024')

  return (
    <Card>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-700">
            <IconSyringe className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-base font-bold text-kia-950">Imunisasi anak usia sekolah</h3>
            <p className="text-sm text-kia-900/70">Jadwal BIAS (Kemenkes) & rekomendasi IDAI 2024.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {(['semua', 'BIAS', 'IDAI 2024'] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                filter === f ? 'bg-fuchsia-600 text-white' : 'bg-fuchsia-50 text-fuchsia-700 hover:bg-fuchsia-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <ol className="relative space-y-3 border-l-2 border-fuchsia-100 pl-5">
        {list.map((v) => (
          <li key={v.id} className="relative">
            <span
              className={`absolute -left-[27px] top-2 h-3.5 w-3.5 rounded-full ring-4 ring-white ${
                v.source === 'BIAS' ? 'bg-fuchsia-500' : 'bg-violet-500'
              }`}
            />
            <div className="rounded-2xl border border-kia-100 bg-white/90 p-3.5">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-extrabold text-kia-950">{v.name}</p>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    v.source === 'BIAS' ? 'bg-fuchsia-100 text-fuchsia-700' : 'bg-violet-100 text-violet-700'
                  }`}
                >
                  {v.source}
                </span>
              </div>
              <p className="mt-1 text-xs font-semibold text-kia-600">
                {v.age} · {v.schedule}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-kia-900/80">Melindungi dari {v.protects.toLowerCase()}.</p>
              {v.note && <p className="mt-1 text-xs leading-relaxed text-kia-900/60">{v.note}</p>}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-fuchsia-50/60 p-3.5 ring-1 ring-fuchsia-100">
          <p className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wide text-fuchsia-700 uppercase">
            <IconShield className="h-4 w-4" /> Catatan BIAS
          </p>
          <ul className="space-y-1.5">
            {BIAS_NOTES.map((n) => (
              <li key={n} className="flex gap-2 text-xs leading-snug text-kia-900/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400" />
                {n}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-kia-50/70 p-3.5 text-xs leading-relaxed text-kia-900/75 ring-1 ring-kia-100">
          Sumber jadwal:{' '}
          <a href={biasRef.url} target="_blank" rel="noreferrer" className="font-semibold text-kia-700 underline decoration-kia-300 underline-offset-4">
            {biasRef.publisher}
          </a>{' '}
          dan{' '}
          <a href={idaiRef.url} target="_blank" rel="noreferrer" className="font-semibold text-kia-700 underline decoration-kia-300 underline-offset-4">
            {idaiRef.title}
          </a>
          .
        </div>
      </div>
    </Card>
  )
}
