import { IconAlert, IconArrow, IconChart, IconShield, IconSpark } from '../Icons'

export function SchoolHero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-12 pb-4 sm:px-6 sm:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3.5 py-1.5 text-xs font-bold text-amber-800">
            <IconSpark className="h-4 w-4" /> Referensi IDAI · Kemenkes · WHO
          </span>
          <h1 className="mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight text-kia-950 sm:text-5xl lg:text-6xl">
            Panduan{' '}
            <span className="bg-gradient-to-r from-kia-600 to-fuchsia-500 bg-clip-text text-transparent">
              usia sekolah & remaja awal
            </span>{' '}
            6–14 tahun
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-kia-900/75 sm:text-lg">
            Kenali tahapan tumbuh kembang, pubertas, gizi seimbang, imunisasi anak sekolah, aktivitas fisik, dan kesehatan
            mental — lengkap dengan cek pertumbuhan 5–19 tahun berdasarkan standar WHO.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#usia"
              className="inline-flex items-center gap-2 rounded-full bg-kia-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-kia-600/25 transition hover:bg-kia-700"
            >
              Jelajahi per usia <IconArrow className="h-4 w-4" />
            </a>
            <a
              href="#pertumbuhan"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-kia-700 ring-1 ring-kia-200 transition hover:bg-kia-50"
            >
              Cek pertumbuhan
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6">
            <Stat value="3" label="Tahap usia" />
            <Stat value="12" label="Vaksin & penguat" />
            <Stat value="5–19" label="Tahun cek tumbuh" />
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
      <div className="rounded-[2rem] border border-kia-100 bg-white/95 p-6 shadow-[0_30px_70px_-40px_rgba(37,99,235,0.55)]">
        <svg viewBox="0 0 360 300" className="h-auto w-full" role="img" aria-label="Ilustrasi grafik pertumbuhan remaja">
          <defs>
            <linearGradient id="schoolBar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>

          {[
            { x: 46, h: 54 },
            { x: 98, h: 84 },
            { x: 150, h: 118 },
            { x: 202, h: 158 },
            { x: 254, h: 206 },
            { x: 306, h: 238 },
          ].map((b, i) => (
            <rect
              key={b.x}
              x={b.x - 18}
              y={250 - b.h}
              width="36"
              height={b.h}
              rx="11"
              fill="url(#schoolBar)"
              opacity={0.32 + i * 0.11}
            />
          ))}

          <path
            d="M28 246 C 96 232, 140 196, 190 150 S 292 66, 340 34"
            fill="none"
            stroke="#2563eb"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1200"
            className="animate-dash"
          />
          {[
            [98, 214],
            [202, 148],
            [306, 72],
          ].map(([cx, cy]) => (
            <circle key={cx} cx={cx} cy={cy} r="7" fill="#fff" stroke="#2563eb" strokeWidth="4" />
          ))}

          <circle cx="46" cy="52" r="26" fill="#bfdbfe" opacity="0.8" />
          <circle cx="322" cy="60" r="16" fill="#93c5fd" />
        </svg>

        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          {[
            { label: 'TB', value: 'Tinggi/U' },
            { label: 'Gizi', value: 'IMT/U' },
            { label: 'Aktif', value: '60 mnt' },
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
          <IconShield className="h-4 w-4 text-emerald-500" /> Imunisasi anak sekolah
        </p>
      </div>
      <div className="absolute -top-5 -right-3 hidden rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-kia-100 sm:block">
        <p className="flex items-center gap-2 text-xs font-bold text-kia-800">
          <IconAlert className="h-4 w-4 text-red-500" /> Deteksi dini pubertas
        </p>
      </div>
      <div className="absolute top-1/2 -left-5 hidden rounded-2xl bg-white px-4 py-3 shadow-lg ring-1 ring-kia-100 lg:block">
        <p className="flex items-center gap-2 text-xs font-bold text-kia-800">
          <IconChart className="h-4 w-4 text-kia-500" /> WHO 2007
        </p>
      </div>
    </div>
  )
}
