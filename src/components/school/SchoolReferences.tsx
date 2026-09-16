import { SCHOOL_REFERENCES } from '../../data/schoolSources'
import { Card } from '../ui'
import { IconArrow, IconBook } from '../Icons'

export function SchoolReferences() {
  return (
    <Card>
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-kia-100 text-kia-700">
          <IconBook className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-base font-bold text-kia-950">Sumber & referensi</h3>
          <p className="text-sm text-kia-900/70">Seluruh isi halaman ini dirangkum dari sumber resmi berikut.</p>
        </div>
      </div>

      <ol className="grid gap-3 lg:grid-cols-2">
        {SCHOOL_REFERENCES.map((r, i) => (
          <li key={r.id} className="rounded-2xl border border-kia-100 bg-white/90 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-kia-100 text-[11px] font-extrabold text-kia-700">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-sm leading-snug font-bold text-kia-950">{r.title}</p>
                <p className="mt-0.5 text-xs font-semibold text-kia-600">
                  {r.publisher} · {r.year}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-kia-900/70">{r.note}</p>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-kia-700 underline decoration-kia-300 underline-offset-4"
                >
                  Buka sumber <IconArrow className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Card>
  )
}
