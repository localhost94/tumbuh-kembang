import { useEffect, useState, type ReactNode } from 'react'
import { AGE_SEGMENTS, ageText, segmentForMonth } from '../../data/ageSegments'
import { MILESTONES } from '../../data/milestones'
import { STIMULATION } from '../../data/stimulation'
import {
  MPASI_PRINCIPLES,
  NUTRITION_STAGES,
  OLDER_CHILD_NUTRITION,
  SUPPLEMENTS,
  type NutritionStage,
} from '../../data/nutrition'
import { DANGER_GROUPS } from '../../data/dangerSigns'
import { CARE_GROUPS } from '../../data/care'
import { VACCINES, VACCINE_BENEFITS } from '../../data/immunization'
import { DISCLAIMER, EMERGENCY_NUMBERS, SOURCE } from '../../data/source'
import { ANTHROPOMETRY_NOTES, GROWTH_TABLE } from '../../data/growth'
import { ProgressRing } from '../ui'
import {
  IconAlert,
  IconArrow,
  IconBlocks,
  IconCheck,
  IconClose,
  IconDrop,
  IconMoon,
  IconRefresh,
  IconShield,
  IconSpark,
  IconSyringe,
  IconTooth,
} from '../Icons'

/* ── kit halaman ringkas ─────────────────────────────────── */

export function PageHead({ chapter, title, sub }: { chapter: string; title: string; sub?: string }) {
  return (
    <header className="mb-3 shrink-0">
      <span className="inline-block rounded-full bg-kia-100 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-kia-700 uppercase">
        {chapter}
      </span>
      <h2 className="mt-1.5 text-[16px] leading-tight font-extrabold text-kia-950 sm:text-[17px]">{title}</h2>
      {sub && <p className="mt-1 text-[11px] leading-snug text-kia-900/65">{sub}</p>}
    </header>
  )
}

const DOT: Record<string, string> = {
  kia: 'bg-kia-400',
  amber: 'bg-amber-400',
  red: 'bg-red-400',
  fuchsia: 'bg-fuchsia-400',
  emerald: 'bg-emerald-400',
  orange: 'bg-orange-400',
  violet: 'bg-violet-400',
  sky: 'bg-fuchsia-300',
}

export function Dots({ items, tone = 'kia', className = '' }: { items: string[]; tone?: string; className?: string }) {
  return (
    <ul className={`space-y-1.5 ${className}`}>
      {items.map((t) => (
        <li key={t} className="flex gap-2 text-[11px] leading-snug text-kia-900/85">
          <span className={`mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full ${DOT[tone] ?? DOT.kia}`} />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

const TONES: Record<string, string> = {
  kia: 'bg-kia-100 text-kia-700',
  amber: 'bg-amber-100 text-amber-700',
  red: 'bg-red-100 text-red-600',
  fuchsia: 'bg-fuchsia-100 text-fuchsia-700',
  orange: 'bg-orange-100 text-orange-600',
  violet: 'bg-violet-100 text-violet-700',
  emerald: 'bg-emerald-100 text-emerald-700',
  sky: 'bg-fuchsia-100 text-fuchsia-700',
}

export function MiniHead({ icon, title, tone = 'kia' }: { icon: ReactNode; title: string; tone?: string }) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl ${TONES[tone] ?? TONES.kia}`}>
        {icon}
      </span>
      <h3 className="text-[12.5px] leading-tight font-bold text-kia-950">{title}</h3>
    </div>
  )
}

export function Mini({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-kia-100 bg-white/85 p-3 ${className}`}>{children}</div>
}

function Tile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-kia-100 bg-white/80 px-2.5 py-2">
      <p className="text-[9.5px] font-bold tracking-wide text-kia-600 uppercase">{label}</p>
      <p className="mt-0.5 text-[11px] leading-snug font-medium text-kia-900/85">{value}</p>
    </div>
  )
}

/* ── 1. Sampul ───────────────────────────────────────────── */

export function CoverPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="book-shell relative mx-auto flex w-full max-w-[560px] flex-col items-center justify-center overflow-hidden rounded-[2rem] px-8 py-12 text-center shadow-2xl">
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full opacity-40">
        <circle cx="12%" cy="16%" r="90" fill="#ffffff" opacity="0.16" />
        <circle cx="88%" cy="82%" r="120" fill="#ffffff" opacity="0.12" />
        <circle cx="82%" cy="12%" r="46" fill="#fde68a" opacity="0.5" />
      </svg>
      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1.5 text-[10px] font-bold tracking-wide text-white uppercase ring-1 ring-white/30">
          <IconSpark className="h-3.5 w-3.5" /> Buku KIA 2024
        </span>
        <h1 className="mt-6 text-[2.4rem] leading-[1.05] font-extrabold text-white sm:text-5xl">
          Tumbuh Kembang Anak
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-[12.5px] leading-relaxed text-white/85">
          Panduan visual interaktif usia 0–6 tahun — pertumbuhan, perkembangan, gizi, imunisasi, dan tanda bahaya.
        </p>
        <button
          type="button"
          onClick={onStart}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-kia-700 shadow-lg transition hover:bg-kia-50"
        >
          Mulai membaca <IconArrow className="h-4 w-4" />
        </button>
        <p className="mt-6 text-[10.5px] text-white/70">
          Kementerian Kesehatan RI · Tanpa login · Gratis
        </p>
      </div>
    </div>
  )
}

/* ── 2. Daftar isi & tentang ─────────────────────────────── */

export function AboutLeft({ onGo }: { onGo: (index: number) => void }) {
  const entries = TOC.map((e) => e)
  return (
    <>
      <PageHead chapter="Buku KIA 2024" title="Daftar Isi" sub="Ketuk bab untuk membuka halaman." />
      <ol className="flex-1 space-y-1.5 overflow-hidden">
        {entries.map((e, i) => (
          <li key={e.label}>
            <button
              type="button"
              onClick={() => onGo(e.index)}
              className="flex w-full items-center gap-3 rounded-xl border border-kia-100 bg-white/80 px-3 py-2 text-left transition hover:border-kia-300 hover:bg-kia-50"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-kia-100 text-[11px] font-extrabold text-kia-700">
                {i + 1}
              </span>
              <span className="flex-1 text-[11.5px] leading-snug font-semibold text-kia-950">{e.label}</span>
              <span className="text-[10px] font-semibold text-kia-400">
                {e.kind === 'single' ? '1 hal.' : '2 hal.'}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </>
  )
}

export function AboutRight() {
  return (
    <>
      <PageHead chapter="Tentang" title="Cara memakai buku ini" sub="Dirangkum dari Buku Kesehatan Ibu dan Anak (KIA) 2024." />
      <div className="flex-1 space-y-2.5">
        <Mini className="bg-kia-50/70">
          <MiniHead icon={<IconSpark className="h-3.5 w-3.5" />} title="Interaktif & tanpa login" />
          <Dots
            tone="kia"
            items={[
              'Geser usia anak pada pita penanda di atas buku; isi buku menyesuaikan otomatis.',
              'Centang penanda perkembangan untuk memantau capaian anak.',
              'Masukkan berat & tinggi badan pada bab Pertumbuhan untuk melihat status gizi.',
            ]}
          />
        </Mini>
        <Mini>
          <MiniHead icon={<IconShield className="h-3.5 w-3.5" />} title="Bukan pengganti tenaga kesehatan" tone="emerald" />
          <p className="text-[11px] leading-snug text-kia-900/75">{DISCLAIMER}</p>
        </Mini>
        <Mini>
          <MiniHead icon={<IconDrop className="h-3.5 w-3.5" />} title="Sumber data" tone="orange" />
          <p className="text-[11px] leading-snug font-bold text-kia-950">{SOURCE.title}</p>
          <p className="mt-0.5 text-[10.5px] leading-snug text-kia-900/70">
            {SOURCE.publisher} · {SOURCE.isbn} · {SOURCE.year}
          </p>
        </Mini>
      </div>
    </>
  )
}

/* ── 3. Per usia ─────────────────────────────────────────── */

export function UsiaLeft({ month }: { month: number }) {
  const segment = segmentForMonth(month)
  return (
    <>
      <PageHead
        chapter="Bab 1 · Per usia"
        title={segment.label}
        sub={`Usia terpilih: ${ageText(month)} · rujukan ${segment.pages}`}
      />
      <div className="flex-1 space-y-2.5 overflow-hidden">
        <Mini className="bg-amber-50/60">
          <MiniHead icon={<IconSpark className="h-3.5 w-3.5" />} title="Yang akan dialami" tone="amber" />
          <Dots items={segment.experienced} tone="amber" />
        </Mini>
        <Mini>
          <MiniHead icon={<IconArrow className="h-3.5 w-3.5" />} title="Yang harus dilakukan" />
          <Dots items={segment.toDo} />
        </Mini>
      </div>
    </>
  )
}

export function UsiaRight({ month }: { month: number }) {
  const segment = segmentForMonth(month)
  return (
    <>
      <PageHead chapter="Bab 1 · Per usia" title="Mengapa penting" sub="Alasan di balik setiap langkah pengasuhan." />
      <Mini className="flex-1 bg-gradient-to-br from-kia-600 to-fuchsia-600 text-white">
        <div className="mb-2 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/20 text-white">
            <IconShield className="h-3.5 w-3.5" />
          </span>
          <h3 className="text-[12.5px] font-bold">Mengapa penting</h3>
        </div>
        <ul className="space-y-2">
          {segment.why.map((w) => (
            <li key={w} className="flex gap-2 text-[11px] leading-snug text-white/90">
              <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
              {w}
            </li>
          ))}
        </ul>
        <p className="mt-4 rounded-xl bg-white/10 px-3 py-2 text-[10.5px] font-medium text-white/85">
          Sumber: Buku KIA 2024 — {segment.pages}
        </p>
      </Mini>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {AGE_SEGMENTS.map((s) => (
          <span
            key={s.id}
            className={`rounded-lg px-2 py-1.5 text-center text-[9.5px] font-semibold ${
              s.id === segment.id ? 'bg-kia-600 text-white' : 'bg-kia-50 text-kia-700'
            }`}
          >
            {s.short}
          </span>
        ))}
      </div>
    </>
  )
}

/* ── 4. Perkembangan ─────────────────────────────────────── */

export function PerkembanganLeft({ month }: { month: number }) {
  const segment = segmentForMonth(month)
  const milestones = MILESTONES[segment.id]
  const storageKey = `tk-milestones-${segment.id}`
  const [answers, setAnswers] = useState<Record<string, 'ya' | 'tidak'>>({})

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      setAnswers(raw ? (JSON.parse(raw) as Record<string, 'ya' | 'tidak'>) : {})
    } catch {
      setAnswers({})
    }
  }, [storageKey])

  const update = (id: string, value: 'ya' | 'tidak') => {
    setAnswers((prev) => {
      const next = { ...prev, [id]: value }
      try {
        localStorage.setItem(storageKey, JSON.stringify(next))
      } catch {
        /* ignore */
      }
      return next
    })
  }

  const reset = () => {
    setAnswers({})
    try {
      localStorage.removeItem(storageKey)
    } catch {
      /* ignore */
    }
  }

  if (!milestones || milestones.length === 0) {
    return (
      <>
        <PageHead chapter="Bab 1 · Perkembangan" title="Penanda perkembangan" />
        <p className="text-[11.5px] leading-relaxed text-kia-900/75">
          Pada usia ini pemantauan dilakukan melalui pemeriksaan langsung oleh tenaga kesehatan (0–6 jam, 6–48 jam, 3–7
          hari, dan 8–28 hari setelah lahir) serta lembar pemantauan harian.
        </p>
      </>
    )
  }

  const ya = milestones.filter((m) => answers[m.id] === 'ya').length
  const tidak = milestones.filter((m) => answers[m.id] === 'tidak').length

  return (
    <>
      <div className="mb-2 flex items-center gap-3">
        <ProgressRing value={ya} total={milestones.length} size={62} stroke={7} />
        <div className="min-w-0 flex-1">
          <span className="inline-block rounded-full bg-kia-100 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-kia-700 uppercase">
            Bab 1 · SDIDTK
          </span>
          <h2 className="mt-1 text-[15px] leading-tight font-extrabold text-kia-950">Penanda perkembangan</h2>
          <div className="mt-1 flex flex-wrap gap-1.5 text-[10px] font-semibold">
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700 ring-1 ring-emerald-100">Bisa: {ya}</span>
            <span className="rounded-full bg-red-50 px-2 py-0.5 text-red-700 ring-1 ring-red-100">Belum: {tidak}</span>
            <button type="button" onClick={reset} className="inline-flex items-center gap-1 rounded-full bg-kia-50 px-2 py-0.5 text-kia-700 hover:bg-kia-100">
              <IconRefresh className="h-3 w-3" /> Reset
            </button>
          </div>
        </div>
      </div>

      <ul className="grid flex-1 content-start gap-1.5 overflow-hidden sm:grid-cols-2">
        {milestones.map((m, i) => {
          const a = answers[m.id]
          return (
            <li
              key={m.id}
              className={`flex items-start gap-2 rounded-xl border p-2 transition ${
                a === 'ya' ? 'border-emerald-100 bg-emerald-50/60' : a === 'tidak' ? 'border-red-100 bg-red-50/60' : 'border-kia-100 bg-white'
              }`}
            >
              <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-kia-600/10 text-[9.5px] font-bold text-kia-700">
                {i + 1}
              </span>
              <p className="flex-1 text-[10.5px] leading-snug text-kia-900/85">{m.text}</p>
              <div className="flex shrink-0 gap-1">
                <button
                  type="button"
                  aria-label="Bisa"
                  onClick={() => update(m.id, 'ya')}
                  className={`flex h-5.5 w-5.5 items-center justify-center rounded-lg transition ${
                    a === 'ya' ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-600 ring-1 ring-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  <IconCheck className="h-3 w-3" />
                </button>
                <button
                  type="button"
                  aria-label="Belum bisa"
                  onClick={() => update(m.id, 'tidak')}
                  className={`flex h-5.5 w-5.5 items-center justify-center rounded-lg transition ${
                    a === 'tidak' ? 'bg-red-500 text-white' : 'bg-white text-red-500 ring-1 ring-red-200 hover:bg-red-50'
                  }`}
                >
                  <IconClose className="h-3 w-3" />
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      {tidak > 0 && (
        <p className="mt-2 shrink-0 rounded-xl bg-amber-50 px-2.5 py-2 text-[10.5px] leading-snug text-amber-800 ring-1 ring-amber-100">
          Ada {tidak} penanda belum tercapai. Ini bukan diagnosis — konsultasikan ke Posyandu/Puskesmas.
        </p>
      )}
    </>
  )
}

export function PerkembanganRight({ month }: { month: number }) {
  const group = STIMULATION[segmentForMonth(month).id]
  return (
    <>
      <PageHead chapter="Bab 1 · Stimulasi" title="Ide stimulasi" sub={group.title} />
      <p className="mb-2 shrink-0 rounded-xl bg-violet-50 px-3 py-2 text-[11px] leading-snug text-violet-900/80">
        Lakukan stimulasi dalam suasana aman, nyaman, dan menyenangkan sesuai usia anak.
      </p>
      <ul className="grid flex-1 content-start gap-1.5 overflow-hidden sm:grid-cols-2">
        {group.items.map((item, i) => (
          <li key={item} className="flex items-start gap-2 rounded-xl border border-violet-100/70 bg-white p-2">
            <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[9.5px] font-bold text-violet-700">
              {i + 1}
            </span>
            <span className="text-[10.5px] leading-snug text-kia-900/85">{item}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

/* ── 5. Gizi ─────────────────────────────────────────────── */

function stageForMonth(month: number): string {
  if (month < 6) return 'asi'
  if (month < 9) return 'mpasi-6-8'
  if (month < 12) return 'mpasi-9-11'
  if (month < 24) return 'mpasi-12-23'
  return 'older'
}

export function GiziLeft({ month }: { month: number }) {
  const [selected, setSelected] = useState(stageForMonth(month))
  useEffect(() => setSelected(stageForMonth(month)), [month])
  const stage: NutritionStage | undefined = NUTRITION_STAGES.find((s) => s.id === selected)

  return (
    <>
      <PageHead chapter="Bab 1 · Gizi" title="Gizi & MPASI" sub="Porsi, tekstur, dan frekuensi makan sesuai usia." />
      <div className="mb-2.5 flex shrink-0 flex-wrap gap-1.5">
        {NUTRITION_STAGES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSelected(s.id)}
            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition ${
              selected === s.id ? 'bg-orange-500 text-white' : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
            }`}
          >
            {s.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setSelected('older')}
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition ${
            selected === 'older' ? 'bg-orange-500 text-white' : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
          }`}
        >
          Gizi 2–6 tahun
        </button>
      </div>

      {stage && (
        <div className="flex-1 space-y-2 overflow-hidden">
          <div className="grid grid-cols-2 gap-1.5">
            <Tile label="Tekstur" value={stage.texture} />
            <Tile label="Porsi" value={stage.amount} />
            <Tile label="Frekuensi" value={stage.frequency} />
            <Tile label="Energi MPASI" value={stage.energy} />
            <Tile label="Cairan" value={stage.fluid} />
            <Tile label="Usia" value={stage.ageRange} />
          </div>
          <Mini className="bg-orange-50/60">
            <p className="mb-1.5 text-[9.5px] font-bold tracking-wide text-orange-700 uppercase">Catatan</p>
            <Dots items={stage.notes} tone="orange" />
          </Mini>
        </div>
      )}
    </>
  )
}

export function GiziRight() {
  const older = OLDER_CHILD_NUTRITION[0]
  return (
    <>
      <PageHead chapter="Bab 1 · Gizi" title="Prinsip & suplementasi" sub="Syarat MPASI yang baik dan vitamin rutin." />
      <div className="flex-1 space-y-2.5 overflow-hidden">
        <Mini>
          <MiniHead icon={<IconSpark className="h-3.5 w-3.5" />} title="Syarat MPASI yang baik" />
          <ol className="space-y-1.5">
            {MPASI_PRINCIPLES.map((p) => (
              <li key={p.title} className="text-[10.5px] leading-snug text-kia-900/80">
                <span className="font-bold text-kia-800">{p.title}</span> — {p.detail}
              </li>
            ))}
          </ol>
        </Mini>
        <Mini>
          <MiniHead icon={<IconTooth className="h-3.5 w-3.5" />} title="Suplementasi rutin" tone="orange" />
          <ul className="space-y-1.5">
            {SUPPLEMENTS.map((s) => (
              <li key={s.label} className="rounded-lg bg-kia-50/70 px-2.5 py-1.5 text-[10.5px] leading-snug ring-1 ring-kia-100">
                <span className="font-bold text-kia-800">{s.label}</span>
                <span className="ml-1 text-kia-600">({s.age})</span>
                <p className="text-kia-900/75">{s.detail}</p>
              </li>
            ))}
          </ul>
        </Mini>
        <Mini>
          <MiniHead icon={<IconDrop className="h-3.5 w-3.5" />} title={`Pemenuhan gizi ${older.ageLabel}`} tone="orange" />
          <Dots items={older.items} tone="orange" />
        </Mini>
      </div>
    </>
  )
}

/* ── 6. Tanda bahaya & perawatan ─────────────────────────── */

export function BahayaLeft({ month }: { month: number }) {
  const primaryId = month < 1 ? 'neonatal' : 'balita'
  const [open, setOpen] = useState(primaryId)
  const active = DANGER_GROUPS.find((g) => g.id === open) ?? DANGER_GROUPS[0]

  return (
    <>
      <PageHead chapter="Bab 4 · Waspada" title="Tanda bahaya" sub="Segera periksa ke bidan/dokter bila ditemukan." />
      <div className="mb-2 flex shrink-0 flex-wrap gap-1.5">
        {DANGER_GROUPS.map((g) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setOpen(g.id)}
            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition ${
              open === g.id ? 'bg-red-500 text-white' : 'bg-red-50 text-red-700 hover:bg-red-100'
            }`}
          >
            {g.id === 'neonatal' ? 'Bayi 0–28 hari' : g.id === 'balita' ? 'Balita 29 hari–5 thn' : 'Pemantauan harian'}
          </button>
        ))}
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">
        <Mini className="border-red-100 bg-red-50/40">
          <MiniHead icon={<IconAlert className="h-3.5 w-3.5" />} title={active.title} tone="red" />
          <p className="mb-2 text-[10px] text-kia-900/60">{active.appliesTo}</p>
          <Dots items={active.items} tone="red" className="sm:columns-1" />
        </Mini>
        <p className="rounded-xl bg-red-100/70 px-2.5 py-2 text-[10.5px] leading-snug font-semibold text-red-700">
          {active.note}
        </p>
      </div>
    </>
  )
}

export function BahayaRight() {
  const [open, setOpen] = useState(CARE_GROUPS[0].id)
  const active = CARE_GROUPS.find((g) => g.id === open) ?? CARE_GROUPS[0]

  return (
    <>
      <PageHead chapter="Bab 1 · Pengasuhan" title="Perawatan & pola asuh" sub="Panduan praktis harian untuk keluarga." />
      <div className="grid flex-1 grid-cols-[112px_1fr] gap-2 overflow-hidden">
        <ul className="space-y-1 overflow-hidden">
          {CARE_GROUPS.map((g) => (
            <li key={g.id}>
              <button
                type="button"
                onClick={() => setOpen(g.id)}
                className={`w-full rounded-lg px-2 py-1.5 text-left text-[10px] leading-tight font-semibold transition ${
                  open === g.id ? 'bg-kia-600 text-white' : 'bg-kia-50 text-kia-700 hover:bg-kia-100'
                }`}
              >
                {g.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="overflow-hidden rounded-2xl border border-kia-100 bg-white/85 p-3">
          <MiniHead icon={<IconMoon className="h-3.5 w-3.5" />} title={active.title} tone="fuchsia" />
          <Dots items={active.items} tone="fuchsia" />
        </div>
      </div>
    </>
  )
}

/* ── 8. Standar antropometri & tabel KIA ─────────────────── */

export function StandarLeft() {
  return (
    <>
      <PageHead
        chapter="Bab 2 · Pertumbuhan"
        title="Kategori status gizi"
        sub="Permenkes No. 2 Tahun 2020 tentang Standar Antropometri Anak."
      />
      <div className="grid flex-1 content-start gap-2 overflow-hidden sm:grid-cols-2">
        {ANTHROPOMETRY_NOTES.map((n) => (
          <div key={n.index} className="rounded-xl border border-kia-100 p-2.5">
            <p className="text-[11.5px] font-extrabold text-kia-900">{n.index}</p>
            <p className="mb-1.5 text-[9.5px] text-kia-900/60">{n.label}</p>
            <ul className="space-y-1">
              {n.bands.map((b) => (
                <li key={b.range} className="flex items-baseline justify-between gap-2 text-[9.5px]">
                  <span className="shrink-0 rounded bg-kia-50 px-1 py-0.5 font-semibold text-kia-700">{b.range}</span>
                  <span className="text-right text-kia-900/75">{b.status}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export function StandarRight() {
  const [sex, setSex] = useState<'L' | 'P'>('L')
  const rows = GROWTH_TABLE[sex]
  const half = Math.ceil(rows.length / 2)
  const cols = [rows.slice(0, half), rows.slice(half)]

  return (
    <>
      <div className="mb-2 flex items-start justify-between gap-3">
        <PageHead chapter="Bab 2 · Pertumbuhan" title="Tabel pertumbuhan 0–2 tahun" sub="Rentang ideal berat & panjang badan (Buku KIA 2024)." />
        <div className="flex shrink-0 gap-1">
          {(['L', 'P'] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSex(s)}
              className={`rounded-lg px-2 py-1 text-[10px] font-semibold transition ${
                sex === s ? 'bg-kia-600 text-white' : 'bg-kia-50 text-kia-700 hover:bg-kia-100'
              }`}
            >
              {s === 'L' ? 'L' : 'P'}
            </button>
          ))}
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2 overflow-hidden">
        {cols.map((col, ci) => (
          <table key={ci} className="w-full text-left text-[9px]">
            <thead>
              <tr className="text-kia-700">
                <th className="pb-1 font-bold">Bln</th>
                <th className="pb-1 font-bold">BB (kg)</th>
                <th className="pb-1 font-bold">TB (cm)</th>
              </tr>
            </thead>
            <tbody className="text-kia-900/80">
              {col.map((r) => (
                <tr key={r.month} className="border-t border-kia-50">
                  <td className="py-0.5 font-semibold">{r.month}</td>
                  <td className="py-0.5">
                    {r.weightMin.toFixed(1)}–{r.weightMax.toFixed(1)}
                  </td>
                  <td className="py-0.5">
                    {r.lengthMin.toFixed(1)}–{r.lengthMax.toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </>
  )
}

/* ── 9. Imunisasi ────────────────────────────────────────── */

export function ImunisasiLeft({ month }: { month: number }) {
  const groups = VACCINES.reduce<Record<string, typeof VACCINES>>((acc, v) => {
    ;(acc[v.ageLabel] ??= []).push(v)
    return acc
  }, {})

  return (
    <>
      <PageHead chapter="Bab 3 · Lindungi anak" title="Jadwal imunisasi" sub="Imunisasi dasar & lanjutan (Buku KIA 2024 hal. 124–125)." />
      <div className="grid flex-1 content-start gap-1.5 overflow-hidden sm:grid-cols-2">
        {Object.entries(groups).map(([ageLabel, items]) => {
          const isNow = items.some((v) => v.ageMonth === month || v.ageMonth === month + 1)
          const isPast = items.every((v) => v.ageMonth < month)
          return (
            <div
              key={ageLabel}
              className={`rounded-xl border p-2 ${
                isNow ? 'border-kia-300 bg-kia-50/70 ring-1 ring-kia-200' : 'border-slate-100 bg-white'
              }`}
            >
              <div className="mb-1 flex items-center gap-1.5">
                <span className={`h-2 w-2 shrink-0 rounded-full ${isNow ? 'bg-kia-600' : isPast ? 'bg-kia-200' : 'bg-slate-300'}`} />
                <p className="text-[10px] font-extrabold text-kia-950">{ageLabel}</p>
                {isNow && <span className="rounded-full bg-kia-600 px-1.5 py-0.5 text-[8.5px] font-bold text-white">kini</span>}
              </div>
              <ul className="space-y-0.5">
                {items.map((v) => (
                  <li key={v.id} className="text-[9.5px] leading-snug text-kia-900/80">
                    <span className="font-semibold text-kia-900">{v.name}</span>
                    <span className="text-kia-900/55"> — {v.protects}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </>
  )
}

export function ImunisasiRight() {
  return (
    <>
      <PageHead chapter="Bab 3 · Lindungi anak" title="Manfaat imunisasi" sub="Melindungi anak dari penyakit berbahaya." />
      <div className="flex-1 space-y-2 overflow-hidden">
        {VACCINE_BENEFITS.map((b) => (
          <div key={b.name} className="rounded-xl bg-white px-2.5 py-2 text-[10.5px] leading-snug ring-1 ring-kia-100">
            <span className="font-bold text-kia-800">{b.name}</span>
            <span className="text-kia-900/80"> — {b.detail}</span>
          </div>
        ))}
        <Mini className="bg-kia-50/70">
          <MiniHead icon={<IconSyringe className="h-3.5 w-3.5" />} title="Catatan" />
          <Dots
            items={[
              'Imunisasi RV harus dilengkapi sebelum usia 8 bulan.',
              'Imunisasi JE hanya di daerah endemis/percontohan.',
              'Imunisasi lanjutan memperpanjang masa perlindungan.',
            ]}
          />
        </Mini>
      </div>
    </>
  )
}

/* ── 10. Darurat & sumber ────────────────────────────────── */

export function DaruratLeft() {
  return (
    <>
      <PageHead chapter="Bab 4 · Waspada" title="Kapan harus ke fasilitas kesehatan?" sub="Segera bawa anak bila menemukan tanda berikut." />
      <div className="flex-1 space-y-2 overflow-hidden">
        <Mini className="border-red-100 bg-red-50/40">
          <MiniHead icon={<IconAlert className="h-3.5 w-3.5" />} title="Segera ke faskes" tone="red" />
          <Dots
            tone="red"
            items={[
              'Tidak bisa minum atau tidak mau menyusu sama sekali.',
              'Sesak napas, napas cepat, atau dada tertarik ke dalam.',
              'Kejang, tampak biru (sianosis), atau sangat lemah.',
              'Demam tinggi yang tidak membaik, atau diare dengan tanda dehidrasi.',
              'Berat badan tidak naik sesuai pertumbuhan.',
              'Muntah terus-menerus atau tidak buang air kecil > 6 jam.',
            ]}
          />
        </Mini>
        <Mini>
          <MiniHead icon={<IconBlocks className="h-3.5 w-3.5" />} title="Ajak anak ke Posyandu tiap bulan" tone="violet" />
          <p className="text-[11px] leading-snug text-kia-900/75">
            Timbang berat, ukur panjang/tinggi, dan cek perkembangan setiap bulan. Plot hasil ukur di KMS/Posyandu agar
            pertumbuhan terpantau.
          </p>
        </Mini>
      </div>
    </>
  )
}

export function DaruratRight() {
  return (
    <>
      <PageHead chapter="Bab 4 · Waspada" title="Nomor darurat & sumber" sub="Simpan nomor penting ini." />
      <div className="mb-3 grid shrink-0 grid-cols-2 gap-2">
        {EMERGENCY_NUMBERS.map((e) => (
          <div key={e.label} className="rounded-2xl bg-red-50 px-3 py-2.5 text-center ring-1 ring-red-100">
            <p className="text-xl font-extrabold text-red-700">{e.number}</p>
            <p className="text-[10px] font-semibold text-red-500">{e.label}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">
        <Mini>
          <MiniHead icon={<IconShield className="h-3.5 w-3.5" />} title="Sumber data" tone="emerald" />
          <p className="text-[11px] leading-snug font-bold text-kia-950">{SOURCE.title}</p>
          <p className="mt-0.5 text-[10.5px] leading-snug text-kia-900/70">
            {SOURCE.publisher} · {SOURCE.isbn} · {SOURCE.year}
          </p>
          <p className="mt-1.5 text-[10.5px] leading-snug text-kia-900/70">
            Status gizi: Standar Antropometri Anak — WHO Child Growth Standards (2006) / Permenkes No. 2 Tahun 2020.
          </p>
        </Mini>
        <Mini className="bg-kia-50/70">
          <p className="text-[10.5px] leading-snug text-kia-900/75">{DISCLAIMER}</p>
        </Mini>
      </div>
    </>
  )
}

/* ── metadata bab untuk daftar isi ───────────────────────── */

export const TOC: { label: string; index: number; kind: 'single' | 'double' }[] = [
  { label: 'Tentang buku ini', index: 1, kind: 'double' },
  { label: 'Bab 1 · Panduan per usia', index: 2, kind: 'double' },
  { label: 'Bab 1 · Penanda perkembangan & stimulasi', index: 3, kind: 'double' },
  { label: 'Bab 1 · Gizi & MPASI', index: 4, kind: 'double' },
  { label: 'Bab 1 · Tanda bahaya & pengasuhan', index: 5, kind: 'double' },
  { label: 'Bab 2 · Cek pertumbuhan & kurva', index: 6, kind: 'double' },
  { label: 'Bab 2 · Kategori gizi & tabel KIA', index: 7, kind: 'double' },
  { label: 'Bab 3 · Linimasa imunisasi', index: 8, kind: 'double' },
  { label: 'Bab 4 · Darurat & sumber', index: 9, kind: 'double' },
]
