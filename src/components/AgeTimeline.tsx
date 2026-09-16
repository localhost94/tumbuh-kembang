import { AGE_SEGMENTS, ageText, segmentForMonth } from '../data/ageSegments'

/** Satu-satunya kontrol usia: slider global yang menempel di header. */
export function AgeBar({ month, onChange }: { month: number; onChange: (m: number) => void }) {
  const active = segmentForMonth(month)

  return (
    <div className="flex items-center gap-3">
      <div className="hidden shrink-0 items-baseline gap-2 sm:flex">
        <span className="text-[11px] font-bold tracking-wide text-kia-600 uppercase">Usia anak</span>
        <span className="text-sm font-extrabold text-kia-950">{ageText(month)}</span>
      </div>
      <span className="shrink-0 text-xs font-extrabold text-kia-950 sm:hidden">{ageText(month)}</span>

      <input
        type="range"
        min={0}
        max={71}
        step={1}
        value={month}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label="Pilih usia anak dalam bulan"
        className="h-4 min-w-0 flex-1 cursor-pointer"
      />

      <span className="shrink-0 rounded-full bg-kia-50 px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-kia-700 ring-1 ring-kia-100">
        {active.short}
      </span>
    </div>
  )
}

/** Lompat cepat antar rentang usia. Terikat ke state usia yang sama dengan AgeBar. */
export function AgeTimeline({ month, onChange }: { month: number; onChange: (m: number) => void }) {
  const active = segmentForMonth(month)

  return (
    <div className="rounded-3xl border border-kia-100 bg-white/95 p-5 shadow-[0_10px_40px_-24px_rgba(219,39,119,0.45)] sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold tracking-wide text-kia-600 uppercase">Rentang usia</p>
          <p className="text-xl font-extrabold text-kia-950">{active.label}</p>
        </div>
        <p className="rounded-full bg-kia-50 px-3 py-1 text-xs font-semibold text-kia-700 ring-1 ring-kia-100">
          {ageText(month)}
        </p>
      </div>

      <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
        {AGE_SEGMENTS.map((s) => {
          const isActive = s.id === active.id
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onChange(s.minMonth)}
              className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold whitespace-nowrap transition ${
                isActive
                  ? 'bg-kia-600 text-white shadow-md shadow-kia-600/25'
                  : 'bg-kia-50 text-kia-700 hover:bg-kia-100'
              }`}
            >
              {s.short}
            </button>
          )
        })}
      </div>

      <p className="mt-3 text-xs text-kia-900/60">Geser slider usia di bagian atas halaman untuk memilih bulan tertentu.</p>
    </div>
  )
}
