import { useMemo, useState, type MouseEvent } from 'react'
import { BASE_MONTH, MAX_MONTH_519, MAX_MONTH_WFA_519, type Indicator519 } from '../../data/whoGrowth5to19'
import { lmsValue519 } from '../../lib/growthStatus519'

const W = 720
const H = 400
const PAD_L = 58
const PAD_R = 30
const PAD_T = 32
const PAD_B = 50

const LABELS: Record<Indicator519, { title: string; unit: string; axis: string }> = {
  hfa: { title: 'Tinggi badan menurut umur (TB/U)', unit: 'cm', axis: 'Tinggi badan (cm)' },
  bfa: { title: 'Indeks massa tubuh menurut umur (IMT/U)', unit: 'kg/m²', axis: 'IMT (kg/m²)' },
  wfa: { title: 'Berat badan menurut umur (BB/U)', unit: 'kg', axis: 'Berat badan (kg)' },
}

function maxMonthOf(metric: Indicator519): number {
  return metric === 'wfa' ? MAX_MONTH_WFA_519 : MAX_MONTH_519
}

export function GrowthChart519({
  sex,
  metric,
  point,
}: {
  sex: 'L' | 'P'
  metric: Indicator519
  point?: { month: number; value: number } | null
}) {
  const [hoverMonth, setHoverMonth] = useState<number | null>(null)
  const maxM = maxMonthOf(metric)
  const months = useMemo(() => Array.from({ length: maxM - BASE_MONTH + 1 }, (_, i) => BASE_MONTH + i), [maxM])

  const { series, vMin, vMax, xFor, yFor } = useMemo(() => {
    const zs = [-2, 0, 2]
    const series = zs.map((z) => months.map((m) => lmsValue519(sex, metric, m, z) ?? 0))
    const flat = series.flat()
    if (point) flat.push(point.value)
    let vMin = Math.min(...flat)
    let vMax = Math.max(...flat)
    const pad = (vMax - vMin) * 0.08
    vMin = Math.max(0, vMin - pad)
    vMax = vMax + pad
    const span = maxM - BASE_MONTH
    const xFor = (m: number) => PAD_L + ((m - BASE_MONTH) / span) * (W - PAD_L - PAD_R)
    const yFor = (v: number) => PAD_T + (1 - (v - vMin) / (vMax - vMin)) * (H - PAD_T - PAD_B)
    return { series, vMin, vMax, xFor, yFor }
  }, [sex, metric, point, months, maxM])

  const linePath = (vals: number[]) => vals.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xFor(BASE_MONTH + i)} ${yFor(v)}`).join(' ')
  const bandPath = `${linePath(series[0])} ${series[2]
    .map((_, i) => `L ${xFor(BASE_MONTH + (series[2].length - 1 - i))} ${yFor(series[2][series[2].length - 1 - i])}`)
    .join(' ')} Z`

  const gridValues = Array.from({ length: 5 }, (_, i) => vMin + ((vMax - vMin) / 4) * i)
  const xTicks = months.filter((m) => (m - BASE_MONTH) % 12 === 0)

  const handleMove = (e: MouseEvent<SVGRectElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    const m = BASE_MONTH + Math.round(ratio * (maxM - BASE_MONTH))
    setHoverMonth(Math.max(BASE_MONTH, Math.min(maxM, m)))
  }

  const ref = (z: number, m: number) => {
    const v = lmsValue519(sex, metric, m, z)
    return v == null ? '-' : v.toFixed(1)
  }

  const tooltipX = hoverMonth != null ? xFor(hoverMonth) : 0
  const flip = tooltipX > W - 200
  const meta = LABELS[metric]

  const lines = [
    { z: -2, color: '#f59e0b', width: 2 },
    { z: 0, color: '#db2777', width: 3 },
    { z: 2, color: '#34d399', width: 2 },
  ]

  return (
    <div className="w-full">
      <div className="mb-1 text-sm font-bold text-kia-900">{meta.title}</div>
      <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold">
        <span className="inline-flex items-center gap-1.5 text-kia-700">
          <span className="h-0.5 w-4 rounded bg-kia-600" /> Median (0 SD)
        </span>
        <span className="inline-flex items-center gap-1.5 text-amber-600">
          <span className="h-0.5 w-4 rounded bg-amber-500" /> -2 SD
        </span>
        <span className="inline-flex items-center gap-1.5 text-emerald-600">
          <span className="h-0.5 w-4 rounded bg-emerald-400" /> +2 SD
        </span>
        <span className="inline-flex items-center gap-1.5 text-slate-500">
          <span className="h-3 w-3 rounded-sm bg-kia-500/15" /> Rentang normal (-2 s.d. +2 SD)
        </span>
        {point && (
          <span className="inline-flex items-center gap-1.5 text-orange-600">
            <span className="h-3 w-3 rounded-full bg-orange-500" /> Hasil ukur anak
          </span>
        )}
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-label={`Kurva ${meta.title} usia 5-19 tahun, ${sex === 'L' ? 'laki-laki' : 'perempuan'}`}
      >
        {gridValues.map((v) => (
          <g key={v}>
            <line x1={PAD_L} x2={W - PAD_R} y1={yFor(v)} y2={yFor(v)} stroke="#fce7f3" strokeWidth="1" />
            <text x={PAD_L - 10} y={yFor(v)} textAnchor="end" dominantBaseline="middle" className="fill-kia-500" style={{ fontSize: 11 }}>
              {v.toFixed(v >= 100 ? 0 : 1)}
            </text>
          </g>
        ))}

        {xTicks.map((m) => (
          <text key={m} x={xFor(m)} y={H - PAD_B + 22} textAnchor="middle" className="fill-kia-500" style={{ fontSize: 11 }}>
            {Math.round(m / 12)}
          </text>
        ))}

        <path d={bandPath} fill="#db2777" opacity="0.1" />

        {lines.map((l, i) => (
          <path
            key={l.z}
            d={linePath(series[i])}
            fill="none"
            stroke={l.color}
            strokeWidth={l.width}
            strokeLinecap="round"
            strokeDasharray={l.z === 0 ? undefined : '6 5'}
          />
        ))}

        <text x={PAD_L} y={PAD_T - 12} className="fill-kia-600" style={{ fontSize: 12, fontWeight: 700 }}>
          {sex === 'L' ? 'Laki-laki' : 'Perempuan'}
        </text>
        <text x={W - PAD_R} y={H - 8} textAnchor="end" className="fill-kia-400" style={{ fontSize: 11 }}>
          Umur (tahun) · {meta.axis}
        </text>

        {hoverMonth != null && (
          <line x1={xFor(hoverMonth)} x2={xFor(hoverMonth)} y1={PAD_T} y2={H - PAD_B} stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
        )}

        {point && point.month <= maxM && (
          <g>
            <line x1={xFor(point.month)} x2={xFor(point.month)} y1={yFor(point.value)} y2={H - PAD_B} stroke="#f97316" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx={xFor(point.month)} cy={yFor(point.value)} r="7" fill="#f97316" stroke="#fff" strokeWidth="3" />
          </g>
        )}

        {hoverMonth != null && (
          <g transform={`translate(${flip ? tooltipX - 190 : tooltipX + 10}, ${PAD_T + 6})`}>
            <rect width="180" height="70" rx="12" fill="#0f172a" opacity="0.92" />
            <text x="12" y="22" className="fill-white" style={{ fontSize: 12, fontWeight: 700 }}>
              Umur {Math.floor(hoverMonth / 12)} th {hoverMonth % 12} bln
            </text>
            <text x="12" y="42" className="fill-amber-300" style={{ fontSize: 11 }}>
              -2 SD: {ref(-2, hoverMonth)} {meta.unit}
            </text>
            <text x="12" y="58" className="fill-kia-200" style={{ fontSize: 11 }}>
              Median: {ref(0, hoverMonth)} {meta.unit}
            </text>
          </g>
        )}

        <rect
          x={PAD_L}
          y={PAD_T}
          width={W - PAD_L - PAD_R}
          height={H - PAD_T - PAD_B}
          fill="transparent"
          onMouseMove={handleMove}
          onMouseLeave={() => setHoverMonth(null)}
        />
      </svg>
    </div>
  )
}
