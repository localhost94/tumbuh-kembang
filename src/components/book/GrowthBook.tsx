import type { ReactNode } from 'react'
import { type CategoryResult, TONE_STYLES } from '../../lib/growthStatus'
import { GrowthChart } from '../GrowthChart'
import { IconChevron } from '../Icons'
import { PageHead } from './pages'
import { BIRTH_YEARS, MONTH_NAMES, type GrowthModel } from './growthModel'

export function PertumbuhanLeft({ model }: { model: GrowthModel }) {
  const { results } = model
  return (
    <>
      <PageHead
        chapter="Bab 2 · Pertumbuhan"
        title="Cek pertumbuhan anak"
        sub="Usia dihitung dari bulan & tahun lahir. Berlaku untuk usia 0–5 tahun."
      />

      <div className="flex-1 space-y-2 overflow-hidden">
        <div className="grid grid-cols-2 gap-1.5">
          {(['L', 'P'] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => model.setSex(s)}
              className={`rounded-xl px-3 py-2 text-[11px] font-semibold transition ${
                model.sex === s ? 'bg-kia-600 text-white shadow-md shadow-kia-600/25' : 'bg-kia-50 text-kia-700 hover:bg-kia-100'
              }`}
            >
              {s === 'L' ? 'Laki-laki' : 'Perempuan'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          <Field label="Bulan lahir">
            <Select
              value={model.birthMonth}
              onChange={model.setBirthMonth}
              options={MONTH_NAMES.map((label, i) => ({ value: i, label }))}
            />
          </Field>
          <Field label="Tahun lahir">
            <Select
              value={model.birthYear}
              onChange={model.setBirthYear}
              options={BIRTH_YEARS.map((y) => ({ value: y, label: String(y) }))}
            />
          </Field>
        </div>

        <div className={`rounded-xl px-3 py-2 ring-1 ${model.ageValid ? 'bg-kia-50/70 ring-kia-100' : 'bg-amber-50 ring-amber-100'}`}>
          <span className="text-[9.5px] font-bold tracking-wide text-kia-600 uppercase">Usia anak saat ini</span>
          {model.ageValid ? (
            <p className="mt-0.5 text-[15px] font-extrabold text-kia-900">
              {model.ageYears} tahun {model.ageRest} bulan
              <span className="ml-2 text-[10px] font-semibold text-kia-600">= {model.monthNum} bulan</span>
            </p>
          ) : (
            <p className="mt-0.5 text-[11px] font-semibold text-amber-800">
              {model.ageMonths < 0
                ? 'Tanggal lahir di masa depan. Periksa kembali bulan & tahun lahir.'
                : 'Usia di luar cakupan panduan (0–6 tahun).'}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          <Field label="Berat badan (kg)">
            <input
              inputMode="decimal"
              placeholder="mis. 7,5"
              value={model.weight}
              onChange={(e) => model.setWeight(e.target.value)}
              className="w-full rounded-xl border border-kia-100 bg-white px-2.5 py-2 text-[11px] font-semibold text-kia-900 outline-none focus:border-kia-400 focus:ring-2 focus:ring-kia-100"
            />
          </Field>
          <Field label={model.heightLabel}>
            <input
              inputMode="decimal"
              placeholder={model.isLength ? 'mis. 67,5' : 'mis. 96'}
              value={model.lengthValue}
              onChange={(e) => model.setLengthValue(e.target.value)}
              className="w-full rounded-xl border border-kia-100 bg-white px-2.5 py-2 text-[11px] font-semibold text-kia-900 outline-none focus:border-kia-400 focus:ring-2 focus:ring-kia-100"
            />
          </Field>
        </div>

        {!model.supported && model.ageValid && (
          <p className="rounded-xl bg-amber-50 px-2.5 py-2 text-[10.5px] leading-snug font-medium text-amber-800 ring-1 ring-amber-100">
            Standar antropometri berlaku untuk usia 0–5 tahun (0–60 bulan). Untuk usia di atas 5 tahun, gunakan acuan
            5–19 tahun dan konsultasikan ke tenaga kesehatan.
          </p>
        )}

        {model.supported && (
          <div className="space-y-1.5">
            <ResultBar title="BB/U · berat menurut umur" result={results?.wfa} empty="Masukkan berat badan." />
            <ResultBar title="PB/TB-U · tinggi menurut umur" result={results?.lhfa} empty={`Masukkan ${model.isLength ? 'panjang' : 'tinggi'} badan.`} />
            <ResultBar title="IMT/U · status gizi" result={results?.bfa} empty="Masukkan berat dan tinggi badan." />
          </div>
        )}
      </div>
    </>
  )
}

export function PertumbuhanRight({ model }: { model: GrowthModel }) {
  return (
    <>
      <PageHead
        chapter="Bab 2 · Pertumbuhan"
        title="Kurva pertumbuhan 0–60 bulan"
        sub="Median dengan rentang -2 s.d. +2 SD, dan titik hasil ukur anak."
      />

      <div className="mb-2 flex shrink-0 flex-wrap gap-1.5">
        {(
          [
            ['wfa', 'Berat (BB/U)'],
            ['lhfa', 'Tinggi (PB/TB-U)'],
            ['bfa', 'IMT (IMT/U)'],
          ] as const
        ).map(([m, label]) => (
          <button
            key={m}
            type="button"
            onClick={() => model.setMetric(m)}
            className={`rounded-full px-3 py-1 text-[10.5px] font-semibold transition ${
              model.metric === m ? 'bg-kia-600 text-white' : 'bg-kia-50 text-kia-700 hover:bg-kia-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-hidden rounded-2xl border border-kia-100 bg-white/85 p-3">
        <GrowthChart sex={model.sex} metric={model.metric} point={model.point} />
      </div>

      <p className="mt-2 shrink-0 text-[10px] leading-snug text-kia-900/60">
        Alat ini bersifat edukatif dan bukan diagnosis. Z-score dihitung dengan Standar Antropometri Anak
        (WHO/Permenkes No. 2 Tahun 2020). Selalu plot hasil ukur di KMS/Posyandu dan konsultasikan ke tenaga kesehatan.
      </p>
    </>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[9.5px] font-bold tracking-wide text-kia-600 uppercase">{label}</span>
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
        className="w-full appearance-none rounded-xl border border-kia-100 bg-white px-2.5 py-2 pr-7 text-[11px] font-semibold text-kia-900 outline-none focus:border-kia-400 focus:ring-2 focus:ring-kia-100"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <IconChevron className="pointer-events-none absolute top-1/2 right-2 h-3.5 w-3.5 -translate-y-1/2 text-kia-400" />
    </div>
  )
}

function ResultBar({ title, result, empty }: { title: string; result?: CategoryResult | null; empty: string }) {
  if (!result) {
    return (
      <div className={`rounded-xl px-2.5 py-1.5 ring-1 ${TONE_STYLES.unknown.bg} ${TONE_STYLES.unknown.ring}`}>
        <p className="text-[10.5px] font-bold text-slate-600">{title}</p>
        <p className="text-[10px] text-slate-500">{empty}</p>
      </div>
    )
  }
  const t = TONE_STYLES[result.tone]
  return (
    <div className={`rounded-xl px-2.5 py-1.5 ring-1 ${t.bg} ${t.ring}`}>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className={`h-2 w-2 rounded-full ${t.dot}`} />
          <p className="text-[10.5px] font-bold text-kia-950">{title}</p>
        </div>
        <span className={`rounded-full bg-white/70 px-1.5 py-0.5 text-[10px] font-bold ${t.text}`}>
          Z {result.z >= 0 ? '+' : ''}
          {result.z.toFixed(2)}
        </span>
      </div>
      <p className={`text-[11px] font-bold ${t.text}`}>{result.status}</p>
      <p className={`text-[10px] leading-snug ${t.text}`}>{result.detail}</p>
    </div>
  )
}
