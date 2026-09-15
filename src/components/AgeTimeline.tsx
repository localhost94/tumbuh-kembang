import { AGE_SEGMENTS, ageText, segmentForMonth } from '../data/ageSegments'

export function AgeTimeline({ month, onChange }: { month: number; onChange: (m: number) => void }) {
  const active = segmentForMonth(month)

  return (
    <div className="rounded-3xl border border-kia-100 bg-white/95 p-5 shadow-[0_10px_40px_-24px_rgba(219,39,119,0.45)] sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold tracking-wide text-kia-600 uppercase">Usia anak</p>
          <p className="text-3xl font-extrabold text-kia-950">{ageText(month)}</p>
        </div>
        <p className="rounded-full bg-kia-50 px-3 py-1 text-xs font-semibold text-kia-700 ring-1 ring-kia-100">
          {active.label}
        </p>
      </div>

      <div className="mt-5">
        <input
          type="range"
          min={0}
          max={71}
          step={1}
          value={month}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label="Pilih usia anak dalam bulan"
          className="h-4 w-full cursor-pointer"
        />
        <div className="mt-2 flex justify-between text-[10px] font-semibold text-kia-500">
          <span>0 bln</span>
          <span>6</span>
          <span>12</span>
          <span>24</span>
          <span>36</span>
          <span>48</span>
          <span>60</span>
          <span>6 thn</span>
        </div>
      </div>

      <div className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1">
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
    </div>
  )
}
