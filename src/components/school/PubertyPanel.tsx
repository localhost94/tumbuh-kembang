import { PUBERTY_ALERTS, PUBERTY_CARE, PUBERTY_TRACKS } from '../../data/puberty'
import { referenceById } from '../../data/schoolSources'
import { Card } from '../ui'
import { IconAlert, IconCheck, IconSpark } from '../Icons'

export function PubertyPanel() {
  const src = referenceById('idai-pubertas')
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {PUBERTY_TRACKS.map((t) => (
        <Card key={t.id} className="h-full">
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                t.id === 'P' ? 'bg-fuchsia-100 text-fuchsia-700' : 'bg-sky-100 text-sky-700'
              }`}
            >
              <IconSpark className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-kia-950">{t.label}</h3>
              <p className="text-xs font-semibold text-kia-600">{t.onset}</p>
            </div>
          </div>
          <p className="mb-3 rounded-xl bg-kia-50/70 px-3 py-2 text-xs leading-relaxed font-medium text-kia-800">
            {t.peak}
          </p>
          <ul className="space-y-2">
            {t.signs.map((s) => (
              <li key={s} className="flex gap-2.5 text-sm leading-relaxed text-kia-900/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-kia-400" />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-xl bg-white px-3 py-2 text-xs leading-relaxed text-kia-900/70 ring-1 ring-kia-100">
            {t.note}
          </p>
        </Card>
      ))}

      <Card className="border-red-100 lg:col-span-2">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-100 text-red-600">
            <IconAlert className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-base font-bold text-kia-950">Kapan perlu ke dokter?</h3>
            <p className="text-sm text-kia-900/70">Pubertas terlalu dini, terlambat, atau tidak berurutan.</p>
          </div>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {PUBERTY_ALERTS.map((a) => (
            <li
              key={a}
              className="flex gap-2.5 rounded-xl bg-white px-3 py-2.5 text-sm leading-relaxed text-kia-900/85 ring-1 ring-red-100"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
              {a}
            </li>
          ))}
        </ul>
      </Card>

      <Card className="lg:col-span-2">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <IconCheck className="h-5 w-5" />
          </span>
          <h3 className="text-base font-bold text-kia-950">Menjaga kebersihan diri saat pubertas</h3>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {PUBERTY_CARE.map((c) => (
            <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-kia-900/85">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              {c}
            </li>
          ))}
        </ul>
        <a
          href={src.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-xs font-semibold text-kia-700 underline decoration-kia-300 underline-offset-4"
        >
          Sumber: {src.publisher} — {src.title}
        </a>
      </Card>
    </div>
  )
}
