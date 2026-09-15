import { useEffect, useRef, useState, type ReactNode, type TouchEvent } from 'react'
import { ageText } from '../../data/ageSegments'
import { IconArrow, IconBook, IconChevron, IconClose, IconSpark } from '../Icons'
import { useGrowthModel } from './growthModel'
import { PertumbuhanLeft, PertumbuhanRight } from './GrowthBook'
import {
  AboutLeft,
  AboutRight,
  BahayaLeft,
  BahayaRight,
  CoverPage,
  DaruratLeft,
  DaruratRight,
  GiziLeft,
  GiziRight,
  ImunisasiLeft,
  ImunisasiRight,
  PerkembanganLeft,
  PerkembanganRight,
  StandarLeft,
  StandarRight,
  TOC,
  UsiaLeft,
  UsiaRight,
} from './pages'

function Paper({ children, pageNo, side }: { children: ReactNode; pageNo: number; side: 'left' | 'right' }) {
  return (
    <div className="book-page relative min-h-[72vh] overflow-hidden px-5 py-6 sm:px-7 lg:min-h-0 lg:py-7">
      <div className="flex h-full flex-col">{children}</div>
      <span className={`page-number ${side === 'left' ? 'left-5 sm:left-7' : 'right-5 sm:right-7'}`}>{pageNo}</span>
    </div>
  )
}

function DoubleSpread({
  left,
  right,
  leftNo,
  rightNo,
}: {
  left: ReactNode
  right: ReactNode
  leftNo: number
  rightNo: number
}) {
  return (
    <div className="book-shell rounded-[2rem] p-3 shadow-[0_40px_80px_-40px_rgba(157,23,77,0.7)] sm:p-4">
      <div className="relative grid overflow-hidden rounded-[1.4rem] border border-white/40 bg-white lg:h-[min(80vh,724px)] lg:grid-cols-2">
        <Paper pageNo={leftNo} side="left">
          {left}
        </Paper>
        <Paper pageNo={rightNo} side="right">
          {right}
        </Paper>
        <div className="book-gutter pointer-events-none absolute inset-y-0 left-1/2 hidden w-12 -translate-x-1/2 lg:block" />
      </div>
    </div>
  )
}

export function KiaBook({ month, onMonth }: { month: number; onMonth: (m: number) => void }) {
  const [index, setIndex] = useState(0)
  const [tocOpen, setTocOpen] = useState(false)
  const growth = useGrowthModel()

  const spreads: { id: string; label: string; node: ReactNode }[] = [
    { id: 'cover', label: 'Sampul', node: <CoverPage onStart={() => setIndex(1)} /> },
    {
      id: 'about',
      label: 'Tentang buku ini',
      node: <DoubleSpread left={<AboutLeft onGo={setIndex} />} right={<AboutRight />} leftNo={2} rightNo={3} />,
    },
    {
      id: 'usia',
      label: 'Bab 1 · Panduan per usia',
      node: <DoubleSpread left={<UsiaLeft month={month} />} right={<UsiaRight month={month} />} leftNo={4} rightNo={5} />,
    },
    {
      id: 'perkembangan',
      label: 'Bab 1 · Perkembangan & stimulasi',
      node: (
        <DoubleSpread
          left={<PerkembanganLeft month={month} />}
          right={<PerkembanganRight month={month} />}
          leftNo={6}
          rightNo={7}
        />
      ),
    },
    {
      id: 'gizi',
      label: 'Bab 1 · Gizi & MPASI',
      node: <DoubleSpread left={<GiziLeft month={month} />} right={<GiziRight />} leftNo={8} rightNo={9} />,
    },
    {
      id: 'bahaya',
      label: 'Bab 1 · Tanda bahaya & pengasuhan',
      node: (
        <DoubleSpread left={<BahayaLeft month={month} />} right={<BahayaRight />} leftNo={10} rightNo={11} />
      ),
    },
    {
      id: 'pertumbuhan',
      label: 'Bab 2 · Cek pertumbuhan & kurva',
      node: <DoubleSpread left={<PertumbuhanLeft model={growth} />} right={<PertumbuhanRight model={growth} />} leftNo={12} rightNo={13} />,
    },
    {
      id: 'standar',
      label: 'Bab 2 · Kategori gizi & tabel KIA',
      node: <DoubleSpread left={<StandarLeft />} right={<StandarRight />} leftNo={14} rightNo={15} />,
    },
    {
      id: 'imunisasi',
      label: 'Bab 3 · Linimasa imunisasi',
      node: <DoubleSpread left={<ImunisasiLeft month={month} />} right={<ImunisasiRight />} leftNo={16} rightNo={17} />,
    },
    {
      id: 'darurat',
      label: 'Bab 4 · Darurat & sumber',
      node: <DoubleSpread left={<DaruratLeft />} right={<DaruratRight />} leftNo={18} rightNo={19} />,
    },
  ]

  const last = spreads.length - 1
  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(last, i + 1))

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'Escape') setTocOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [last])

  const touchX = useRef(0)
  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: TouchEvent) => {
    const tag = (e.target as HTMLElement)?.tagName
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'BUTTON') return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) < 55) return
    if (dx < 0) next()
    else prev()
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-3 pb-20 sm:px-6">
      {/* pita penanda usia */}
      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-kia-200 bg-white/85 px-4 py-2.5 shadow-sm">
        <div className="flex min-w-[132px] items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-kia-500 to-fuchsia-500 text-white">
            <IconSpark className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="text-[10px] font-bold tracking-wide text-kia-500 uppercase">Usia anak</p>
            <p className="text-[13px] font-extrabold text-kia-800">{ageText(month)}</p>
          </div>
        </div>
        <div className="min-w-[200px] flex-1">
          <input
            type="range"
            min={0}
            max={71}
            step={1}
            value={month}
            onChange={(e) => onMonth(Number(e.target.value))}
            aria-label="Pilih usia anak dalam bulan"
            className="h-4 w-full cursor-pointer"
          />
          <div className="mt-0.5 flex justify-between text-[9px] font-semibold text-kia-400">
            <span>0 bln</span>
            <span>1 thn</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6 thn</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTocOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-full bg-kia-50 px-3 py-1.5 text-[11px] font-semibold text-kia-700 ring-1 ring-kia-100 transition hover:bg-kia-100"
          >
            <IconBook className="h-3.5 w-3.5" /> Daftar isi
          </button>
          <span className="text-[11px] font-semibold text-kia-500">
            {index + 1}/{spreads.length}
          </span>
        </div>
      </div>

      {/* buku */}
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {spreads.map((s, i) => (
          <div key={s.id} className={i === index ? 'animate-page-turn' : 'hidden'}>
            {s.node}
          </div>
        ))}
      </div>

      {/* navigasi */}
      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[12px] font-bold text-kia-700 ring-1 ring-kia-200 transition hover:bg-kia-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <IconChevron className="h-3.5 w-3.5 rotate-90" /> Sebelumnya
        </button>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {spreads.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-label={s.label}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-5 bg-kia-600' : 'w-2 bg-kia-200 hover:bg-kia-300'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          disabled={index === last}
          className="inline-flex items-center gap-1.5 rounded-full bg-kia-600 px-4 py-2 text-[12px] font-bold text-white shadow-md shadow-kia-600/25 transition hover:bg-kia-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Berikutnya <IconChevron className="h-3.5 w-3.5 -rotate-90" />
        </button>
      </div>
      <p className="mt-2 text-center text-[10.5px] text-kia-400">
        Halaman {spreads[index].label} · gunakan tombol ← → atau geser untuk membalik halaman
      </p>

      {/* daftar isi */}
      {tocOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-kia-950/50 p-4" onClick={() => setTocOpen(false)}>
          <div
            className="max-h-[85vh] w-full max-w-md overflow-hidden rounded-3xl bg-white p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-extrabold text-kia-950">Daftar isi</h2>
              <button
                type="button"
                onClick={() => setTocOpen(false)}
                aria-label="Tutup"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-kia-50 text-kia-700 hover:bg-kia-100"
              >
                <IconClose className="h-4 w-4" />
              </button>
            </div>
            <ol className="space-y-1.5">
              {spreads.map((s, i) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setIndex(i)
                      setTocOpen(false)
                    }}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-[12px] font-semibold transition ${
                      i === index ? 'bg-kia-600 text-white' : 'bg-kia-50 text-kia-800 hover:bg-kia-100'
                    }`}
                  >
                    <span className="w-5 shrink-0 text-center text-[11px] font-extrabold">{i + 1}</span>
                    {s.label}
                    <IconArrow className="ml-auto h-3.5 w-3.5 opacity-60" />
                  </button>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-center text-[10px] text-kia-400">Total {TOC.length + 1} bagian · 20 halaman</p>
          </div>
        </div>
      )}
    </div>
  )
}
