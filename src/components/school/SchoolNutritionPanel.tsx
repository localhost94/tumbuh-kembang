import {
  ANEMIA_FACTS,
  ANEMIA_SIGNS,
  IRON_SOURCES,
  ISI_PIRINGKU,
  ISI_PIRINGKU_TIPS,
  SUPPLEMENT_NOTES,
  TTD_GUIDELINES,
} from '../../data/schoolNutrition'
import { referenceById } from '../../data/schoolSources'
import { Card } from '../ui'
import { IconAlert, IconDrop, IconShield, IconSpark } from '../Icons'

export function SchoolNutritionPanel() {
  const ttdRef = referenceById('kemenkes-ttd')
  const isiRef = referenceById('kemenkes-isi-piringku')

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Card className="h-full">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
            <IconSpark className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-base font-bold text-kia-950">Isi Piringku</h3>
            <p className="text-sm text-kia-900/70">Porsi gizi seimbang dalam satu piring.</p>
          </div>
        </div>

        <div className="mb-4 overflow-hidden rounded-2xl ring-1 ring-orange-100">
          <div className="flex h-28 w-full">
            <div className="flex w-1/2 flex-col items-center justify-center bg-emerald-50 px-3 text-center">
              <span className="text-2xl font-extrabold text-emerald-700">50%</span>
              <span className="text-xs font-bold text-emerald-800">Sayur & buah</span>
            </div>
            <div className="flex w-1/2 flex-col items-center justify-center bg-amber-50 px-3 text-center">
              <span className="text-2xl font-extrabold text-amber-700">50%</span>
              <span className="text-xs font-bold text-amber-800">Makanan pokok & lauk pauk</span>
            </div>
          </div>
        </div>

        <ul className="space-y-2">
          {ISI_PIRINGKU.map((p) => (
            <li key={p.label} className="text-sm leading-relaxed text-kia-900/85">
              <span className="font-bold text-kia-800">{p.label}</span> — {p.detail}
            </li>
          ))}
        </ul>

        <ul className="mt-4 space-y-2 border-t border-kia-100 pt-4">
          {ISI_PIRINGKU_TIPS.map((t) => (
            <li key={t} className="flex gap-2.5 text-sm leading-relaxed text-kia-900/85">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
              {t}
            </li>
          ))}
        </ul>
        <a
          href={isiRef.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-xs font-semibold text-kia-700 underline decoration-kia-300 underline-offset-4"
        >
          Sumber: {isiRef.publisher}
        </a>
      </Card>

      <Card className="h-full border-red-100">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-100 text-red-600">
            <IconDrop className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-base font-bold text-kia-950">Cegah anemia pada remaja putri</h3>
            <p className="text-sm text-kia-900/70">Zat besi cukup, konsentrasi belajar terjaga.</p>
          </div>
        </div>

        <ul className="space-y-2">
          {ANEMIA_FACTS.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-kia-900/85">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-4 rounded-2xl bg-red-50/60 p-3.5 ring-1 ring-red-100">
          <p className="mb-2 flex items-center gap-2 text-xs font-bold tracking-wide text-red-700 uppercase">
            <IconAlert className="h-4 w-4" /> Kenali gejalanya
          </p>
          <ul className="grid gap-1.5 sm:grid-cols-2">
            {ANEMIA_SIGNS.map((s) => (
              <li key={s} className="flex gap-2 text-xs leading-snug text-kia-900/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Card>

      <Card className="h-full">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <IconShield className="h-5 w-5" />
          </span>
          <h3 className="text-base font-bold text-kia-950">Makanan kaya zat besi</h3>
        </div>
        <ul className="space-y-2">
          {IRON_SOURCES.map((s) => (
            <li key={s} className="flex gap-2.5 text-sm leading-relaxed text-kia-900/85">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-2xl bg-kia-50/70 p-3.5 text-sm leading-relaxed text-kia-900/80">
          <span className="font-bold text-kia-800">Catatan: </span>
          {SUPPLEMENT_NOTES[0]} {SUPPLEMENT_NOTES[1]}
        </div>
      </Card>

      <Card className="h-full border-emerald-100 bg-emerald-50/40">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white">
            <IconDrop className="h-5 w-5" />
          </span>
          <h3 className="text-base font-bold text-kia-950">Tablet Tambah Darah (TTD)</h3>
        </div>
        <dl className="space-y-2.5">
          <div className="rounded-xl bg-white px-3 py-2.5 ring-1 ring-emerald-100">
            <dt className="text-[11px] font-bold tracking-wide text-emerald-700 uppercase">Sasaran</dt>
            <dd className="text-sm text-kia-900/85">{TTD_GUIDELINES.target}</dd>
          </div>
          <div className="rounded-xl bg-white px-3 py-2.5 ring-1 ring-emerald-100">
            <dt className="text-[11px] font-bold tracking-wide text-emerald-700 uppercase">Dosis</dt>
            <dd className="text-sm text-kia-900/85">{TTD_GUIDELINES.dose}</dd>
          </div>
          <div className="rounded-xl bg-white px-3 py-2.5 ring-1 ring-emerald-100">
            <dt className="text-[11px] font-bold tracking-wide text-emerald-700 uppercase">Durasi</dt>
            <dd className="text-sm text-kia-900/85">{TTD_GUIDELINES.duration}</dd>
          </div>
        </dl>
        <ul className="mt-3 space-y-2">
          {TTD_GUIDELINES.howTo.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-kia-900/85">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              {h}
            </li>
          ))}
        </ul>
        <a
          href={ttdRef.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-xs font-semibold text-kia-700 underline decoration-kia-300 underline-offset-4"
        >
          Sumber: {ttdRef.publisher}
        </a>
      </Card>
    </div>
  )
}
