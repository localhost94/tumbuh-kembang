import { useEffect, useState } from 'react'
import { GeoBackdrop } from './components/GeoBackdrop'
import { AgeTimeline } from './components/AgeTimeline'
import { SummaryCards } from './components/SummaryCards'
import { MilestoneChecklist } from './components/MilestoneChecklist'
import { StimulationGrid } from './components/StimulationGrid'
import { NutritionPanel } from './components/NutritionPanel'
import { DangerSigns } from './components/DangerSigns'
import { CarePanel } from './components/CarePanel'
import { GrowthChecker } from './components/GrowthChecker'
import { ImmunizationTimeline } from './components/ImmunizationTimeline'
import { KiaBook } from './components/book/KiaBook'
import { Section } from './components/ui'
import { segmentForMonth } from './data/ageSegments'
import { EMERGENCY_NUMBERS, DISCLAIMER, SOURCE } from './data/source'
import {
  IconAlert,
  IconArrow,
  IconBook,
  IconChart,
  IconShield,
  IconSpark,
  IconSyringe,
} from './components/Icons'

const NAV = [
  { href: '#usia', label: 'Per Usia' },
  { href: '#pertumbuhan', label: 'Pertumbuhan' },
  { href: '#imunisasi', label: 'Imunisasi' },
  { href: '#tanda-bahaya', label: 'Tanda Bahaya' },
]

type Mode = 'buku' | 'web'

export default function App() {
  const [month, setMonth] = useState(0)
  const [mode, setMode] = useState<Mode>(() => {
    try {
      return localStorage.getItem('tk-mode') === 'web' ? 'web' : 'buku'
    } catch {
      return 'buku'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('tk-mode', mode)
    } catch {
      /* ignore */
    }
  }, [mode])

  return (
    <div className="min-h-screen">
      <GeoBackdrop />

      <header className="sticky top-0 z-40 border-b border-kia-100/70 bg-white/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-kia-500 to-fuchsia-500 text-white">
              <IconSpark className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-extrabold text-kia-950">Tumbuh Kembang Anak</span>
              <span className="block text-[11px] font-medium text-kia-600">Panduan Interaktif · Buku KIA 2024</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {mode === 'web' &&
              NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-full px-3.5 py-2 text-sm font-semibold text-kia-700 transition hover:bg-kia-50"
                >
                  {n.label}
                </a>
              ))}
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle mode={mode} onChange={setMode} />
            {mode === 'web' && (
              <a
                href="#pertumbuhan"
                className="hidden rounded-full bg-kia-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-kia-600/25 transition hover:bg-kia-700 lg:inline-flex"
              >
                Cek Pertumbuhan
              </a>
            )}
          </div>
        </div>
      </header>

      <main id="top">
        {mode === 'buku' ? (
          <div className="pt-6">
            <KiaBook month={month} onMonth={setMonth} />
          </div>
        ) : (
          <WebView month={month} onChangeMonth={setMonth} />
        )}
      </main>

      <Footer />
    </div>
  )
}

function ModeToggle({ mode, onChange }: { mode: Mode; onChange: (m: Mode) => void }) {
  return (
    <div className="flex items-center rounded-full bg-kia-50 p-0.5 ring-1 ring-kia-100">
      {(['buku', 'web'] as const).map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => onChange(m)}
          aria-pressed={mode === m}
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold transition ${
            mode === m ? 'bg-kia-600 text-white shadow-sm' : 'text-kia-700 hover:text-kia-900'
          }`}
        >
          {m === 'buku' ? <IconBook className="h-3.5 w-3.5" /> : <IconSpark className="h-3.5 w-3.5" />}
          {m === 'buku' ? 'Buku' : 'Web'}
        </button>
      ))}
    </div>
  )
}

function WebView({ month, onChangeMonth }: { month: number; onChangeMonth: (m: number) => void }) {
  const segment = segmentForMonth(month)
  return (
    <>
      <Hero />

      <Section
        id="usia"
        eyebrow="Jelajahi per usia"
        title="Panduan lengkap dari 0 hari sampai 6 tahun"
        description="Geser usia anak untuk melihat apa yang akan dialami, apa yang harus dilakukan, penanda perkembangan, ide stimulasi, gizi, dan perawatan yang sesuai. Semua 11 rentang usia sesuai Buku KIA 2024."
      >
        <div className="space-y-6">
          <AgeTimeline month={month} onChange={onChangeMonth} />
          <SummaryCards segment={segment} />
          <div className="grid gap-5 xl:grid-cols-2">
            <MilestoneChecklist segment={segment} />
            <StimulationGrid segment={segment} />
          </div>
          <NutritionPanel month={month} />
          <div className="grid gap-5 xl:grid-cols-2">
            <DangerSigns month={month} />
            <CarePanel />
          </div>
        </div>
      </Section>

      <Section
        id="pertumbuhan"
        eyebrow="Alat interaktif"
        title="Cek pertumbuhan & lihat kurva ideal"
        description="Pilih jenis kelamin serta bulan dan tahun lahir anak — usianya dihitung otomatis. Masukkan berat dan panjang/tinggi badan untuk melihat z-score dan status gizi menurut Standar Antropometri Anak (WHO/Permenkes No. 2 Tahun 2020) untuk usia 0–5 tahun."
      >
        <GrowthChecker />
      </Section>

      <Section
        id="imunisasi"
        eyebrow="Lindungi anak"
        title="Linimasa imunisasi"
        description="Sesuaikan dengan usia anak pada slider di atas untuk melihat vaksin yang perlu diperhatikan. Jadwal mengikuti Buku KIA 2024 halaman 124–125."
      >
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-3.5 py-2 text-sm font-semibold text-fuchsia-800 ring-1 ring-fuchsia-100">
            <IconSyringe className="h-4 w-4" /> Usia terpilih: {month} bulan
          </span>
          <a href="#usia" className="text-sm font-semibold text-kia-700 underline decoration-kia-300 underline-offset-4">
            Ubah usia di bagian Per Usia
          </a>
        </div>
        <ImmunizationTimeline month={month} />
      </Section>

      <Section
        id="tanda-bahaya"
        eyebrow="Waspada"
        title="Kenali tanda bahaya"
        description="Segera bawa anak ke bidan, dokter, atau fasilitas kesehatan bila menemukan tanda berikut."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <DangerSigns month={month} />
          <Card
            title="Kapan harus segera ke fasilitas kesehatan?"
            items={[
              'Tidak bisa minum atau tidak mau menyusu sama sekali.',
              'Sesak napas, napas cepat, atau dada tertarik ke dalam.',
              'Kejang, tampak biru (sianosis), atau sangat lemah.',
              'Demam tinggi dan tidak membaik, atau diare dengan tanda dehidrasi.',
              'Berat badan tidak naik sesuai pertumbuhan.',
            ]}
          />
        </div>
      </Section>
    </>
  )
}


function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-12 pb-4 sm:px-6 sm:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3.5 py-1.5 text-xs font-bold text-amber-800">
            <IconSpark className="h-4 w-4" /> Tanpa login · Gratis · Data Buku KIA 2024
          </span>
          <h1 className="mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight text-kia-950 sm:text-5xl lg:text-6xl">
            Pendamping visual{' '}
            <span className="bg-gradient-to-r from-kia-600 to-fuchsia-500 bg-clip-text text-transparent">
              tumbuh kembang anak
            </span>{' '}
            usia 0–6 tahun
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-kia-900/75 sm:text-lg">
            Pantau pertumbuhan, kenali tahapan perkembangan, lengkapi imunisasi, dan pahami tanda bahaya — semuanya
            dirangkum interaktif dari Buku Kesehatan Ibu dan Anak (KIA) 2024 Kementerian Kesehatan RI.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#usia"
              className="inline-flex items-center gap-2 rounded-full bg-kia-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-kia-600/25 transition hover:bg-kia-700"
            >
              Mulai jelajah per usia <IconArrow className="h-4 w-4" />
            </a>
            <a
              href="#pertumbuhan"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-kia-700 ring-1 ring-kia-200 transition hover:bg-kia-50"
            >
              Cek pertumbuhan anak
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            <Stat value="11" label="Rentang usia" />
            <Stat value="21" label="Jenis imunisasi" />
            <Stat value="10" label="Kelompok penanda perkembangan" />
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-extrabold text-kia-700">{value}</p>
      <p className="text-xs font-semibold tracking-wide text-kia-900/60 uppercase">{label}</p>
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="rounded-[2rem] border border-kia-100 bg-white/95 p-6 shadow-[0_30px_70px_-40px_rgba(219,39,119,0.6)]">
        <svg viewBox="0 0 360 300" className="h-auto w-full">
          <defs>
            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
          </defs>

          {[
            { x: 40, h: 60 },
            { x: 90, h: 96 },
            { x: 140, h: 132 },
            { x: 190, h: 168 },
            { x: 240, h: 204 },
            { x: 290, h: 240 },
          ].map((b, i) => (
            <rect
              key={b.x}
              x={b.x - 16}
              y={250 - b.h}
              width="32"
              height={b.h}
              rx="10"
              fill="url(#barGrad)"
              opacity={0.35 + i * 0.11}
            />
          ))}

          <path
            d="M24 250 C 90 236, 130 190, 180 150 S 280 70, 336 40"
            fill="none"
            stroke="#db2777"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1200"
            className="animate-dash"
          />
          {[
            [90, 218],
            [180, 150],
            [270, 78],
          ].map(([cx, cy]) => (
            <circle key={cx} cx={cx} cy={cy} r="7" fill="#fff" stroke="#db2777" strokeWidth="4" />
          ))}

          <circle cx="40" cy="52" r="26" fill="#fde68a" opacity="0.7" />
          <circle cx="318" cy="64" r="16" fill="#f9a8d4" />
          <rect x="296" y="196" width="34" height="34" rx="10" fill="#f0abfc" opacity="0.6" />
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          {[
            { label: 'Panjang', value: '90,9 cm' },
            { label: 'Berat', value: '13,6 kg' },
            { label: 'LiLA', value: '≥ 12,4 cm' },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl bg-kia-50/80 px-2 py-3">
              <p className="text-[11px] font-semibold tracking-wide text-kia-600 uppercase">{c.label}</p>
              <p className="text-sm font-extrabold text-kia-900">{c.value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-5 -left-4 hidden rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-kia-100 sm:block">
        <p className="flex items-center gap-2 text-xs font-bold text-kia-800">
          <IconShield className="h-4 w-4 text-emerald-500" /> Imunisasi dasar lengkap
        </p>
      </div>
      <div className="absolute -top-5 -right-3 hidden rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-kia-100 sm:block">
        <p className="flex items-center gap-2 text-xs font-bold text-kia-800">
          <IconAlert className="h-4 w-4 text-red-500" /> Deteksi dini
        </p>
      </div>
    </div>
  )
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-kia-100/80 bg-white/95 p-6 shadow-[0_10px_40px_-24px_rgba(219,39,119,0.45)]">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-100 text-red-600">
          <IconAlert />
        </span>
        <h3 className="text-base font-bold text-kia-950">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-kia-900/80">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-5 grid grid-cols-2 gap-2">
        {EMERGENCY_NUMBERS.map((e) => (
          <div key={e.label} className="rounded-2xl bg-red-50 px-3 py-2 text-center ring-1 ring-red-100">
            <p className="text-lg font-extrabold text-red-700">{e.number}</p>
            <p className="text-[11px] font-semibold text-red-500">{e.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-8 border-t border-kia-100 bg-white/90">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-kia-500 to-fuchsia-500 text-white">
              <IconSpark className="h-5 w-5" />
            </span>
            <span className="text-sm font-extrabold text-kia-950">Tumbuh Kembang Anak</span>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-kia-900/70">{DISCLAIMER}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={SOURCE.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-kia-50 px-4 py-2 text-xs font-semibold text-kia-700 ring-1 ring-kia-100 transition hover:bg-kia-100"
            >
              Unduh Buku KIA 2024 <IconArrow className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://ayosehat.kemkes.go.id"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-kia-50 px-4 py-2 text-xs font-semibold text-kia-700 ring-1 ring-kia-100 transition hover:bg-kia-100"
            >
              Ayo Sehat Kemenkes <IconArrow className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-kia-100 bg-white/80 p-5">
          <h3 className="text-xs font-bold tracking-wide text-kia-600 uppercase">Sumber data</h3>
          <p className="mt-2 text-sm font-bold text-kia-950">{SOURCE.title}</p>
          <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-kia-900/70">
            <li>{SOURCE.publisher}</li>
            <li>{SOURCE.isbn}</li>
            <li>Tahun {SOURCE.year}</li>
          </ul>
          <div className="mt-4 flex items-center gap-2 border-t border-kia-100 pt-4 text-xs text-kia-900/60">
            <IconChart className="h-4 w-4 text-kia-500" />
            Data gizi mengacu pada Permenkes No. 2 Tahun 2020 tentang Standar Antropometri Anak.
          </div>
        </div>
      </div>
      <div className="border-t border-kia-100 py-5 text-center text-xs text-kia-900/50">
        Dibuat untuk edukasi kesehatan ibu dan anak. Bukan layanan medis.
      </div>
    </footer>
  )
}
