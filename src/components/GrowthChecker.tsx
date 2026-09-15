import { useMemo, useState, type ReactNode } from 'react'
import { ANTHROPOMETRY_NOTES, GROWTH_TABLE, type Sex } from '../data/growth'
import { MAX_MONTH, type Indicator } from '../data/whoGrowth'
import { TONE_STYLES, bmiValue, classify, type CategoryResult } from '../lib/growthStatus'
import { GrowthChart } from './GrowthChart'
import { Card } from './ui'
import { IconChart, IconChevron } from './Icons'

function parseNum(v: string): number | null {
  if (!v.trim()) return null
  const n = Number(v.replace(',', '.'))
  return Number.isFinite(n) ? n : null
}

const MONTH_NAMES = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
]

const NOW = new Date()
const CURRENT_YEAR = NOW.getFullYear()
const CURRENT_MONTH = NOW.getMonth()
const BIRTH_YEARS = Array.from({ length: 8 }, (_, i) => CURRENT_YEAR - i)

function defaultBirth() {
  const d = new Date(CURRENT_YEAR, CURRENT_MONTH - 6, 1)
  return { month: d.getMonth(), year: d.getFullYear() }
}

type Metric = Indicator

export function GrowthChecker() {
  const initial = defaultBirth()
  const [sex, setSex] = useState<Sex>('L')
  const [birthMonth, setBirthMonth] = useState(initial.month)
  const [birthYear, setBirthYear] = useState(initial.year)
  const [weight, setWeight] = useState('')
  const [lengthValue, setLengthValue] = useState('')
  const [metric, setMetric] = useState<Metric>('wfa')

  const ageMonths = (CURRENT_YEAR - birthYear) * 12 + (CURRENT_MONTH - birthMonth)
  const ageValid = ageMonths >= 0 && ageMonths <= 72
  const supported = ageValid && ageMonths <= MAX_MONTH
  const monthNum = Math.max(0, ageMonths)
  const ageYears = Math.floor(monthNum / 12)
  const ageRest = monthNum % 12

  const weightNum = parseNum(weight)
  const lengthNum = parseNum(lengthValue)
  const bmi = weightNum != null && lengthNum != null ? bmiValue(weightNum, lengthNum) : null

  const isLength = monthNum <= 24
  const heightLabel = isLength ? 'Panjang badan (cm)' : 'Tinggi badan (cm)'

  const results = useMemo(() => {
    if (!supported) return null
    const wfa = weightNum != null ? classify(sex, 'wfa', monthNum, weightNum) : null
    const lhfa = lengthNum != null ? classify(sex, 'lhfa', monthNum, lengthNum) : null
    const bfa = bmi != null ? classify(sex, 'bfa', monthNum, bmi) : null
    return { wfa, lhfa, bfa }
  }, [supported, sex, monthNum, weightNum, lengthNum, bmi])

  const point =
    supported &&
    ((metric === 'wfa' && weightNum != null) ||
      (metric === 'lhfa' && lengthNum != null) ||
      (metric === 'bfa' && bmi != null))
      ? {
          month: monthNum,
          value: metric === 'wfa' ? (weightNum as number) : metric === 'lhfa' ? (lengthNum as number) : (bmi as number),
        }
      : null

  const monthOptions = MONTH_NAMES.map((label, i) => ({ value: i, label }))
  const yearOptions = BIRTH_YEARS.map((y) => ({ value: y, label: String(y) }))

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,390px)_1fr]">
      <Card>
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
            <IconChart />
          </span>
          <div>
            <h3 className="text-base font-bold text-teal-950">Cek pertumbuhan anak</h3>
            <p className="text-sm text-teal-900/70">Usia dihitung otomatis dari bulan & tahun lahir. Untuk 0–5 tahun.</p>
          </div>
        </div>

        <div className="space-y-4">
          <Field label="Jenis kelamin">
            <div className="grid grid-cols-2 gap-2">
              {(['L', 'P'] as Sex[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSex(s)}
                  className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                    sex === s ? 'bg-teal-600 text-white shadow-md shadow-teal-600/25' : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                  }`}
                >
                  {s === 'L' ? 'Laki-laki' : 'Perempuan'}
                </button>
              ))}
            </div>
          </Field>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Bulan lahir">
              <Select value={birthMonth} onChange={setBirthMonth} options={monthOptions} />
            </Field>
            <Field label="Tahun lahir">
              <Select value={birthYear} onChange={setBirthYear} options={yearOptions} />
            </Field>
          </div>

          <div className={`rounded-2xl px-3.5 py-3 ring-1 ${ageValid ? 'bg-teal-50/70 ring-teal-100' : 'bg-amber-50 ring-amber-100'}`}>
            <span className="text-xs font-bold tracking-wide text-teal-600 uppercase">Usia anak saat ini</span>
            {ageValid ? (
              <p className="mt-0.5 text-lg font-extrabold text-teal-900">
                {ageYears} tahun {ageRest} bulan
                <span className="ml-2 text-xs font-semibold text-teal-600">= {monthNum} bulan</span>
              </p>
            ) : (
              <p className="mt-0.5 text-sm font-semibold text-amber-800">
                {ageMonths < 0
                  ? 'Tanggal lahir di masa depan. Periksa kembali bulan & tahun lahir.'
                  : 'Usia di luar cakupan panduan (0–6 tahun).'}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Berat badan (kg)">
              <input
                inputMode="decimal"
                placeholder="mis. 7,5"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full rounded-xl border border-teal-100 bg-white px-3 py-2.5 text-sm font-semibold text-teal-900 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
              />
            </Field>
            <Field label={heightLabel}>
              <input
                inputMode="decimal"
                placeholder={isLength ? 'mis. 67,5' : 'mis. 96'}
                value={lengthValue}
                onChange={(e) => setLengthValue(e.target.value)}
                className="w-full rounded-xl border border-teal-100 bg-white px-3 py-2.5 text-sm font-semibold text-teal-900 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
              />
            </Field>
          </div>

          {!supported && ageValid && (
            <p className="rounded-2xl bg-amber-50 px-3.5 py-3 text-xs leading-relaxed font-medium text-amber-800 ring-1 ring-amber-100">
              Standar antropometri pada panduan ini berlaku untuk usia 0–5 tahun (0–60 bulan). Untuk usia di atas 5 tahun,
              gunakan acuan 5–19 tahun dan konsultasikan ke tenaga kesehatan.
            </p>
          )}

          {supported && (
            <div className="space-y-3 pt-1">
              <ResultCard
                title="Berat badan menurut umur (BB/U)"
                result={results?.wfa}
                empty="Masukkan berat badan."
              />
              <ResultCard
                title="Panjang/tinggi badan menurut umur (PB/TB-U)"
                result={results?.lhfa}
                empty={`Masukkan ${isLength ? 'panjang' : 'tinggi'} badan.`}
              />
              <ResultCard title="Status gizi (IMT/U)" result={results?.bfa} empty="Masukkan berat dan tinggi badan." />
            </div>
          )}

          <p className="text-xs leading-relaxed text-teal-900/60">
            Alat ini bersifat edukatif dan bukan diagnosis. Z-score dihitung dengan Standar Antropometri Anak (WHO/Permenkes
            No. 2 Tahun 2020). Selalu ploting hasil ukur di KMS/Posyandu dan konsultasikan ke tenaga kesehatan.
          </p>
        </div>
      </Card>

      <div className="space-y-5">
        <Card>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-base font-bold text-teal-950">Kurva pertumbuhan 0–60 bulan</h3>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  ['wfa', 'Berat (BB/U)'],
                  ['lhfa', 'Tinggi (PB/TB-U)'],
                  ['bfa', 'IMT (IMT/U)'],
                ] as [Metric, string][]
              ).map(([m, label]) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMetric(m)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                    metric === m ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-700 hover:bg-teal-100'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <GrowthChart sex={sex} metric={metric} point={point} />
        </Card>

        <Card>
          <h3 className="mb-1 text-base font-bold text-teal-950">Kategori status gizi</h3>
          <p className="mb-3 text-xs text-teal-900/60">Permenkes No. 2 Tahun 2020 tentang Standar Antropometri Anak.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {ANTHROPOMETRY_NOTES.map((n) => (
              <div key={n.index} className="rounded-2xl border border-teal-100 p-4">
                <p className="text-sm font-extrabold text-teal-900">{n.index}</p>
                <p className="mb-2 text-xs text-teal-900/60">{n.label}</p>
                <ul className="space-y-1.5">
                  {n.bands.map((b) => (
                    <li key={b.range} className="flex items-center justify-between gap-2 text-xs">
                      <span className="shrink-0 rounded-md bg-teal-50 px-1.5 py-0.5 font-semibold text-teal-700">{b.range}</span>
                      <span className="text-right text-teal-900/75">{b.status}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <details>
            <summary className="cursor-pointer text-sm font-bold text-teal-950">
              Tabel pertumbuhan Buku KIA 2024 (0–2 tahun)
            </summary>
            <p className="mt-2 mb-3 text-xs leading-relaxed text-teal-900/60">
              Rentang ideal berat dan panjang badan per bulan menurut Buku KIA 2024, sebagai pembanding tambahan untuk anak
              usia 0–2 tahun.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] text-left text-xs">
                <thead>
                  <tr className="text-teal-700">
                    <th className="py-1.5 pr-3 font-bold">Umur (bln)</th>
                    <th className="py-1.5 pr-3 font-bold">Berat ideal (kg)</th>
                    <th className="py-1.5 pr-3 font-bold">Panjang ideal (cm)</th>
                  </tr>
                </thead>
                <tbody className="text-teal-900/80">
                  {GROWTH_TABLE[sex].map((r) => (
                    <tr key={r.month} className="border-t border-teal-50">
                      <td className="py-1.5 pr-3 font-semibold">{r.month}</td>
                      <td className="py-1.5 pr-3">
                        {r.weightMin.toFixed(1)}–{r.weightMax.toFixed(1)}
                      </td>
                      <td className="py-1.5 pr-3">
                        {r.lengthMin.toFixed(1)}–{r.lengthMax.toFixed(1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </Card>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold tracking-wide text-teal-600 uppercase">{label}</span>
      {children}
    </label>
  )
}

function Select({
  value,
  onChange,
  options,
}: {
  value: number
  onChange: (v: number) => void
  options: { value: number; label: string }[]
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full appearance-none rounded-xl border border-teal-100 bg-white px-3 py-2.5 pr-9 text-sm font-semibold text-teal-900 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <IconChevron className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-teal-400" />
    </div>
  )
}

function ResultCard({ title, result, empty }: { title: string; result?: CategoryResult | null; empty: string }) {
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
          <p className="text-sm font-bold text-teal-950">{title}</p>
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
