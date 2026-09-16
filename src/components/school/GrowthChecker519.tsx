import { useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Indicator519 } from '../../data/whoGrowth5to19'
import { MAX_MONTH_WFA_519 } from '../../data/whoGrowth5to19'
import { ANTHROPOMETRY_NOTES_5_18, classify519, type CategoryResult519 } from '../../lib/growthStatus519'
import { bmiValue, TONE_STYLES } from '../../lib/growthStatus'
import { GrowthChart519 } from './GrowthChart519'
import { Card } from '../ui'
import { IconChart } from '../Icons'

function parseNum(v: string): number | null {
  if (!v.trim()) return null
  const n = Number(v.replace(',', '.'))
  return Number.isFinite(n) ? n : null
}

export function GrowthChecker519({ year, onChangeYear }: { year: number; onChangeYear: (y: number) => void }) {
  const [sex, setSex] = useState<'L' | 'P'>('L')
  const [weight, setWeight] = useState('')
  const [heightValue, setHeightValue] = useState('')
  const [metric, setMetric] = useState<Indicator519>('bfa')

  const month = year * 12
  const weightNum = parseNum(weight)
  const heightNum = parseNum(heightValue)
  const bmi = weightNum != null && heightNum != null ? bmiValue(weightNum, heightNum) : null
  const wfaSupported = month <= MAX_MONTH_WFA_519

  useEffect(() => {
    if (!wfaSupported && metric === 'wfa') setMetric('bfa')
  }, [wfaSupported, metric])

  const results = useMemo(() => {
    const hfa = heightNum != null ? classify519(sex, 'hfa', month, heightNum) : null
    const bfa = bmi != null ? classify519(sex, 'bfa', month, bmi) : null
    const wfa = weightNum != null && wfaSupported ? classify519(sex, 'wfa', month, weightNum) : null
    return { hfa, bfa, wfa }
  }, [sex, month, weightNum, heightNum, bmi, wfaSupported])

  const point =
    (metric === 'hfa' && heightNum != null) ||
    (metric === 'bfa' && bmi != null) ||
    (metric === 'wfa' && weightNum != null && wfaSupported)
      ? {
          month,
          value: metric === 'hfa' ? (heightNum as number) : metric === 'bfa' ? (bmi as number) : (weightNum as number),
        }
      : null

  const metrics: [Indicator519, string][] = [
    ['bfa', 'IMT (IMT/U)'],
    ['hfa', 'Tinggi (TB/U)'],
    ['wfa', 'Berat (BB/U)'],
  ]

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,390px)_1fr]">
      <Card>
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-kia-100 text-kia-700">
            <IconChart />
          </span>
          <div>
            <h3 className="text-base font-bold text-kia-950">Cek pertumbuhan 5–19 tahun</h3>
            <p className="text-sm text-kia-900/70">Acuan WHO Reference 2007 / Permenkes No. 2 Tahun 2020.</p>
          </div>
        </div>

        <div className="space-y-4">
          <Field label="Jenis kelamin">
            <div className="grid grid-cols-2 gap-2">
              {(['L', 'P'] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSex(s)}
                  className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                    sex === s ? 'bg-kia-600 text-white shadow-md shadow-kia-600/25' : 'bg-kia-50 text-kia-700 hover:bg-kia-100'
                  }`}
                >
                  {s === 'L' ? 'Laki-laki' : 'Perempuan'}
                </button>
              ))}
            </div>
          </Field>

          <div className="rounded-2xl bg-kia-50/70 px-3.5 py-3 ring-1 ring-kia-100">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-wide text-kia-600 uppercase">Usia</span>
              <span className="text-lg font-extrabold text-kia-900">{year} tahun</span>
            </div>
            <input
              type="range"
              min={5}
              max={19}
              step={1}
              value={year}
              onChange={(e) => onChangeYear(Number(e.target.value))}
              aria-label="Pilih usia dalam tahun"
              className="mt-2 h-4 w-full cursor-pointer"
            />
            <div className="mt-0.5 flex justify-between text-[9px] font-semibold text-kia-400">
              <span>5</span>
              <span>10</span>
              <span>15</span>
              <span>19 th</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Berat badan (kg)">
              <input
                inputMode="decimal"
                placeholder="mis. 45"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full rounded-xl border border-kia-100 bg-white px-3 py-2.5 text-sm font-semibold text-kia-900 outline-none focus:border-kia-400 focus:ring-2 focus:ring-kia-100"
              />
            </Field>
            <Field label="Tinggi badan (cm)">
              <input
                inputMode="decimal"
                placeholder="mis. 155"
                value={heightValue}
                onChange={(e) => setHeightValue(e.target.value)}
                className="w-full rounded-xl border border-kia-100 bg-white px-3 py-2.5 text-sm font-semibold text-kia-900 outline-none focus:border-kia-400 focus:ring-2 focus:ring-kia-100"
              />
            </Field>
          </div>

          <div className="space-y-3 pt-1">
            <ResultCard title="Status gizi (IMT/U)" result={results.bfa} empty="Masukkan berat dan tinggi badan." />
            <ResultCard title="Tinggi badan menurut umur (TB/U)" result={results.hfa} empty="Masukkan tinggi badan." />
            {wfaSupported && (
              <ResultCard title="Berat badan menurut umur (BB/U)" result={results.wfa} empty="Masukkan berat badan." />
            )}
          </div>

          <p className="text-xs leading-relaxed text-kia-900/60">
            Alat ini bersifat edukatif dan bukan diagnosis. Z-score dihitung dengan The WHO Reference 2007 untuk usia 5–19
            tahun. Untuk usia 5–18 tahun di Indonesia, kategori mengikuti Permenkes No. 2 Tahun 2020. Konsultasikan hasilnya
            ke tenaga kesehatan.
          </p>
        </div>
      </Card>

      <div className="space-y-5">
        <Card>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-base font-bold text-kia-950">Kurva pertumbuhan 5–19 tahun</h3>
            <div className="flex flex-wrap gap-2">
              {metrics.map(([m, label]) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMetric(m)}
                  disabled={m === 'wfa' && !wfaSupported}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${
                    metric === m ? 'bg-kia-600 text-white' : 'bg-kia-50 text-kia-700 hover:bg-kia-100'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <GrowthChart519 sex={sex} metric={metric} point={point} />
          {!wfaSupported && (
            <p className="mt-3 rounded-xl bg-amber-50 px-3 py-2 text-xs font-medium text-amber-800 ring-1 ring-amber-100">
              BB/U hanya tersedia untuk usia 5–10 tahun. Gunakan IMT/U dan TB/U untuk usia di atas 10 tahun.
            </p>
          )}
        </Card>

        <Card>
          <h3 className="mb-1 text-base font-bold text-kia-950">Kategori status gizi 5–18 tahun</h3>
          <p className="mb-3 text-xs text-kia-900/60">Permenkes No. 2 Tahun 2020 tentang Standar Antropometri Anak.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {ANTHROPOMETRY_NOTES_5_18.map((n) => (
              <div key={n.index} className="rounded-2xl border border-kia-100 p-4">
                <p className="text-sm font-extrabold text-kia-900">{n.index}</p>
                <p className="mb-2 text-xs text-kia-900/60">{n.label}</p>
                <ul className="space-y-1.5">
                  {n.bands.map((b) => (
                    <li key={b.range} className="flex items-center justify-between gap-2 text-xs">
                      <span className="shrink-0 rounded-md bg-kia-50 px-1.5 py-0.5 font-semibold text-kia-700">{b.range}</span>
                      <span className="text-right text-kia-900/75">{b.status}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold tracking-wide text-kia-600 uppercase">{label}</span>
      {children}
    </label>
  )
}

function ResultCard({ title, result, empty }: { title: string; result?: CategoryResult519 | null; empty: string }) {
  if (!result) {
    return (
      <div className={`rounded-2xl px-4 py-3 ring-1 ${TONE_STYLES.unknown.bg} ${TONE_STYLES.unknown.ring}`}>
        <p className="text-sm font-bold text-slate-600">{title}</p>
        <p className="text-xs text-slate-500">{empty}</p>
      </div>
    )
  }
  const t = TONE_STYLES[result.tone]
  const z = result.z
  return (
    <div className={`rounded-2xl px-4 py-3 ring-1 ${t.bg} ${t.ring}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className={`h-2.5 w-2.5 rounded-full ${t.dot}`} />
          <p className="text-sm font-bold text-kia-950">{title}</p>
        </div>
        <span className={`rounded-full bg-white/70 px-2 py-0.5 text-xs font-bold ${t.text}`}>
          Z {z >= 0 ? '+' : ''}
          {z.toFixed(2)}
        </span>
      </div>
      <p className={`mt-1 text-sm font-bold ${t.text}`}>{result.status}</p>
      <p className={`mt-0.5 text-xs leading-relaxed ${t.text}`}>{result.detail}</p>
    </div>
  )
}
