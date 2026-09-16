import { HYGIENE_TIPS, LIFESTYLE_BLOCKS } from '../../data/schoolLifestyle'
import { referenceById } from '../../data/schoolSources'
import { Card } from '../ui'
import { IconCheck, IconClock, IconMoon, IconShield, IconSpark } from '../Icons'

const ICONS: Record<string, React.ReactNode> = {
  aktivitas: <IconSpark className="h-5 w-5" />,
  tidur: <IconMoon className="h-5 w-5" />,
  layar: <IconClock className="h-5 w-5" />,
  mental: <IconShield className="h-5 w-5" />,
}

export function LifestylePanel() {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-2">
        {LIFESTYLE_BLOCKS.map((b) => (
          <Card key={b.id} className="h-full">
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-kia-100 text-kia-700">
                {ICONS[b.id]}
              </span>
              <div>
                <h3 className="text-base font-bold text-kia-950">{b.title}</h3>
                <p className="text-xs font-semibold text-kia-600">{b.summary}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {b.items.map((i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-kia-900/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-kia-400" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-1.5 border-t border-kia-100 pt-3">
              {b.sourceIds.map((id) => {
                const ref = referenceById(id)
                return (
                  <a
                    key={id}
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-kia-50 px-2.5 py-0.5 text-[10px] font-semibold text-kia-700 ring-1 ring-kia-100 transition hover:bg-kia-100"
                  >
                    {ref.publisher}
                  </a>
                )
              })}
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <IconCheck className="h-5 w-5" />
          </span>
          <h3 className="text-base font-bold text-kia-950">Kebersihan diri</h3>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {HYGIENE_TIPS.map((h) => (
            <li key={h} className="flex gap-2.5 rounded-xl bg-emerald-50/50 px-3 py-2.5 text-sm leading-relaxed text-kia-900/85 ring-1 ring-emerald-100">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              {h}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
