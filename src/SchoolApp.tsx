import { useEffect, useState } from 'react'
import { GeoBackdrop } from './components/GeoBackdrop'
import { SchoolAgeBar, SchoolAgeTimeline } from './components/school/SchoolAgeBar'
import { SchoolHero } from './components/school/SchoolHero'
import { SchoolDevelopment } from './components/school/SchoolDevelopment'
import { PubertyPanel } from './components/school/PubertyPanel'
import { SchoolNutritionPanel } from './components/school/SchoolNutritionPanel'
import { SchoolImmunizationTimeline } from './components/school/SchoolImmunizationTimeline'
import { LifestylePanel } from './components/school/LifestylePanel'
import { SchoolAlerts } from './components/school/SchoolAlerts'
import { GrowthChecker519 } from './components/school/GrowthChecker519'
import { SchoolReferences } from './components/school/SchoolReferences'
import { Section } from './components/ui'
import { segmentForYear } from './data/schoolAge'
import { IconArrow, IconSpark } from './components/Icons'

const NAV = [
  { href: '#usia', label: 'Per Usia' },
  { href: '#pertumbuhan', label: 'Pertumbuhan' },
  { href: '#pubertas', label: 'Pubertas' },
  { href: '#gizi', label: 'Gizi' },
  { href: '#imunisasi', label: 'Imunisasi' },
  { href: '#gaya-hidup', label: 'Gaya Hidup' },
  { href: '#tanda-bahaya', label: 'Tanda Bahaya' },
]

export default function SchoolApp() {
  const [year, setYear] = useState(9)
  const [growthYear, setGrowthYear] = useState(9)
  const segment = segmentForYear(year)

  useEffect(() => {
    document.title = 'Anak Usia Sekolah 6–14 Tahun · Panduan Interaktif'
  }, [])

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
              <span className="block text-sm font-extrabold text-kia-950">Anak Usia Sekolah</span>
              <span className="block text-[11px] font-medium text-kia-600">Panduan 6–14 tahun · IDAI · Kemenkes · WHO</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 xl:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-kia-700 transition hover:bg-kia-50"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="./index.html"
            className="inline-flex items-center gap-1.5 rounded-full bg-kia-50 px-3.5 py-2 text-xs font-semibold text-kia-700 ring-1 ring-kia-100 transition hover:bg-kia-100"
          >
            Usia 0–6 tahun <IconArrow className="h-4 w-4" />
          </a>
        </div>

        <div className="border-t border-kia-100/70">
          <div className="mx-auto max-w-6xl px-4 py-2.5 sm:px-6">
            <SchoolAgeBar year={year} onChange={setYear} />
          </div>
        </div>
      </header>

      <main id="top">
        <SchoolHero />

        <Section
          id="usia"
          eyebrow="Jelajahi per usia"
          title={`Panduan usia ${segment.short}`}
          description="Geser usia anak untuk melihat apa yang akan dialami, apa yang perlu dilakukan, dan mengapa hal itu penting. Setiap bagian disertai sumbernya."
        >
          <div className="space-y-6">
            <SchoolAgeTimeline year={year} onChange={setYear} />
            <SchoolDevelopment segment={segment} />
          </div>
        </Section>

        <Section
          id="pertumbuhan"
          eyebrow="Alat interaktif"
          title="Cek pertumbuhan 5–19 tahun"
          description="Masukkan jenis kelamin, berat, dan tinggi badan untuk melihat z-score tinggi badan (TB/U), status gizi (IMT/U), dan berat badan (BB/U). Acuan The WHO Reference 2007 dan Permenkes No. 2 Tahun 2020."
        >
          <GrowthChecker519 year={growthYear} onChangeYear={setGrowthYear} />
        </Section>

        <Section
          id="pubertas"
          eyebrow="Masa transisi"
          title="Pubertas: apa yang normal dan kapan perlu waspada"
          description="Pubertas adalah proses alami. Kenali urutan tanda dan waktu yang wajar agar orang tua dan anak lebih tenang."
        >
          <PubertyPanel />
        </Section>

        <Section
          id="gizi"
          eyebrow="Gizi seimbang"
          title="Isi Piringku & cegah anemia"
          description="Anak usia sekolah membutuhkan gizi seimbang. Remaja putri perlu perhatian khusus pada zat besi untuk mencegah anemia."
        >
          <SchoolNutritionPanel />
        </Section>

        <Section
          id="imunisasi"
          eyebrow="Lindungi anak"
          title="Imunisasi anak sekolah"
          description="Lengkapi imunisasi lanjutan melalui Bulan Imunisasi Anak Sekolah (BIAS) dan ikuti rekomendasi IDAI 2024. Imunisasi yang terlewat masih dapat dikejar."
        >
          <SchoolImmunizationTimeline />
        </Section>

        <Section
          id="gaya-hidup"
          eyebrow="Sehat setiap hari"
          title="Aktivitas fisik, tidur, waktu layar & kesehatan mental"
          description="Kebiasaan sehari-hari membentuk kesehatan jangka panjang. Ikuti anjuran WHO dan jaga komunikasi keluarga."
        >
          <LifestylePanel />
        </Section>

        <Section
          id="tanda-bahaya"
          eyebrow="Waspada"
          title="Tanda yang perlu diperiksakan"
          description="Bila menemukan tanda berikut, segera bawa anak ke Puskesmas, klinik, atau rumah sakit terdekat."
        >
          <SchoolAlerts />
        </Section>

        <Section
          id="referensi"
          eyebrow="Dapat dipercaya"
          title="Sumber & referensi"
          description="Halaman ini bersifat edukatif dan bukan pengganti konsultasi tenaga kesehatan."
        >
          <SchoolReferences />
        </Section>
      </main>

      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-8 border-t border-kia-100 bg-white/90">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-kia-500 to-fuchsia-500 text-white">
            <IconSpark className="h-5 w-5" />
          </span>
          <span className="text-sm font-extrabold text-kia-950">Anak Usia Sekolah 6–14 Tahun</span>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-kia-900/70">
          Situs ini adalah rangkuman edukatif dari rekomendasi Ikatan Dokter Anak Indonesia (IDAI), Kementerian Kesehatan
          RI, dan World Health Organization (WHO), serta bukan pengganti konsultasi, diagnosis, atau penanganan oleh tenaga
          kesehatan. Bila anak menunjukkan tanda bahaya atau Anda memiliki kekhawatiran tentang tumbuh kembangnya, segera
          kunjungi fasilitas kesehatan terdekat.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="./index.html"
            className="inline-flex items-center gap-2 rounded-full bg-kia-50 px-4 py-2 text-xs font-semibold text-kia-700 ring-1 ring-kia-100 transition hover:bg-kia-100"
          >
            <IconArrow className="h-3.5 w-3.5 rotate-180" /> Panduan usia 0–6 tahun (Buku KIA 2024)
          </a>
          <a
            href="#referensi"
            className="inline-flex items-center gap-2 rounded-full bg-kia-50 px-4 py-2 text-xs font-semibold text-kia-700 ring-1 ring-kia-100 transition hover:bg-kia-100"
          >
            Lihat semua sumber <IconArrow className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="border-t border-kia-100 py-5 text-center text-xs text-kia-900/50">
        Dibuat untuk edukasi kesehatan anak dan remaja. Bukan layanan medis.
      </div>
    </footer>
  )
}
