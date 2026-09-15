import { VACCINES, VACCINE_BENEFITS } from '../data/immunization'
import { Card, Pill } from './ui'
import { IconShield, IconSyringe } from './Icons'

export function ImmunizationTimeline({ month }: { month: number }) {
  const groups = VACCINES.reduce<Record<string, typeof VACCINES>>((acc, v) => {
    ;(acc[v.ageLabel] ??= []).push(v)
    return acc
  }, {})

  return (
    <Card>
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-700">
          <IconSyringe />
        </span>
        <div>
          <h3 className="text-base font-bold text-kia-950">Jadwal imunisasi dasar & lanjutan</h3>
          <p className="text-sm text-kia-900/70">
            Imunisasi dasar lengkap sesuai usia melindungi anak dari penyakit berbahaya.
          </p>
        </div>
      </div>

      <div className="relative space-y-4 border-l-2 border-dashed border-fuchsia-200 pl-5">
        {Object.entries(groups).map(([ageLabel, items]) => {
          const isNow = items.some((v) => v.ageMonth === month || v.ageMonth === month + 1)
          const isPast = items.every((v) => v.ageMonth < month)
          return (
            <div key={ageLabel} className="relative">
              <span
                className={`absolute -left-[27px] top-1.5 h-4 w-4 rounded-full border-2 border-white ${
                  isNow ? 'bg-fuchsia-600' : isPast ? 'bg-fuchsia-200' : 'bg-slate-300'
                }`}
              />
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-extrabold text-kia-950">{ageLabel}</p>
                {isNow && <Pill tone="kia">Perhatikan usia ini</Pill>}
              </div>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {items.map((v) => (
                  <div
                    key={v.id}
                    className={`rounded-2xl border p-3 transition ${
                      isNow ? 'border-fuchsia-200 bg-fuchsia-50/70' : 'border-slate-100 bg-white'
                    }`}
                  >
                    <p className="text-sm font-bold text-kia-950">{v.name}</p>
                    <p className="mt-0.5 text-xs text-kia-900/70">{v.protects}</p>
                    {v.note && <p className="mt-1 text-xs text-fuchsia-700">{v.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-7 rounded-2xl bg-fuchsia-50/70 p-4 ring-1 ring-fuchsia-100">
        <div className="mb-3 flex items-center gap-2">
          <IconShield className="h-5 w-5 text-fuchsia-700" />
          <h4 className="text-sm font-bold text-kia-950">Manfaat imunisasi</h4>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {VACCINE_BENEFITS.map((b) => (
            <div key={b.name} className="rounded-xl bg-white px-3 py-2.5 text-sm leading-relaxed ring-1 ring-fuchsia-100">
              <span className="font-semibold text-fuchsia-800">{b.name}</span>
              <span className="text-kia-900/80"> — {b.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
