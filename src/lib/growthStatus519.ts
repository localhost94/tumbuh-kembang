import {
  BASE_MONTH,
  MAX_MONTH_519,
  MAX_MONTH_WFA_519,
  WHO_LMS_5_19,
  type Indicator519,
} from '../data/whoGrowth5to19'
import type { Tone } from './growthStatus'

export interface CategoryResult519 {
  z: number
  status: string
  tone: Tone
  detail: string
}

function monthIndex(month: number): number {
  return Math.round(month) - BASE_MONTH
}

function maxMonthFor(indicator: Indicator519): number {
  return indicator === 'wfa' ? MAX_MONTH_WFA_519 : MAX_MONTH_519
}

export function supported519(indicator: Indicator519, month: number): boolean {
  return month >= BASE_MONTH && month <= maxMonthFor(indicator)
}

/** Hitung z-score (LMS/Box-Cox) memakai WHO Reference 2007 (5–19 tahun). */
export function lmsZ519(sex: 'L' | 'P', indicator: Indicator519, month: number, value: number): number | null {
  if (!supported519(indicator, month)) return null
  if (!Number.isFinite(value) || value <= 0) return null
  const tuple = WHO_LMS_5_19[sex][indicator][monthIndex(month)]
  if (!tuple) return null
  const [L, M, S] = tuple
  if (M <= 0 || S <= 0) return null
  if (L === 0) return Math.log(value / M) / S
  return (Math.pow(value / M, L) - 1) / (L * S)
}

/** Kebalikan z-score: nilai (kg/cm/BMI) pada z tertentu. Untuk menggambar kurva. */
export function lmsValue519(sex: 'L' | 'P', indicator: Indicator519, month: number, z: number): number | null {
  if (!supported519(indicator, month)) return null
  const tuple = WHO_LMS_5_19[sex][indicator][monthIndex(month)]
  if (!tuple) return null
  const [L, M, S] = tuple
  if (L === 0) return M * Math.exp(S * z)
  return M * Math.pow(1 + L * S * z, 1 / L)
}

function band(z: number, cuts: number[], statuses: string[], tones: Tone[], details: string[]): CategoryResult519 {
  for (let i = 0; i < cuts.length; i++) {
    if (z < cuts[i]) return { z, status: statuses[i], tone: tones[i], detail: details[i] }
  }
  const last = cuts.length
  return { z, status: statuses[last], tone: tones[last], detail: details[last] }
}

/**
 * Klasifikasi status gizi anak 5–18 tahun, mengacu pada Permenkes No. 2 Tahun 2020
 * (Standar Antropometri Anak) yang menggunakan The WHO Reference 2007.
 * Indeks: hfa (TB/U), bfa (IMT/U), dan wfa (BB/U, WHO 2007, 5–10 tahun).
 */
export function classify519(
  sex: 'L' | 'P',
  indicator: Indicator519,
  month: number,
  value: number,
): CategoryResult519 | null {
  const z = lmsZ519(sex, indicator, month, value)
  if (z === null) return null

  if (indicator === 'hfa') {
    return band(
      z,
      [-3, -2, 3],
      ['Sangat pendek', 'Pendek', 'Normal', 'Tinggi'],
      ['low', 'low', 'ok', 'ok'],
      [
        'Tinggi badan jauh di bawah rentang usianya (berisiko tinggi stunting). Segera konsultasikan ke tenaga kesehatan.',
        'Tinggi badan sedikit di bawah rentang usianya (pendek). Perbaiki gizi dan periksa ke fasilitas kesehatan.',
        'Tinggi badan dalam rentang normal untuk usianya. Pertahankan gizi seimbang dan aktivitas fisik.',
        'Tinggi badan di atas rata-rata usianya. Umumnya tidak perlu dikhawatirkan bila pertumbuhannya konsisten.',
      ],
    )
  }

  if (indicator === 'bfa') {
    return band(
      z,
      [-3, -2, 1, 2, 3],
      ['Gizi buruk', 'Gizi kurang', 'Gizi baik', 'Berisiko gizi lebih', 'Gizi lebih', 'Obesitas'],
      ['low', 'low', 'ok', 'high', 'high', 'high'],
      [
        'Status gizi buruk menurut IMT/U. Segera bawa anak ke fasilitas kesehatan.',
        'Status gizi kurang menurut IMT/U. Perbaiki asupan gizi dan konsultasikan ke tenaga kesehatan.',
        'Status gizi baik (normal) menurut IMT/U. Pertahankan pola makan seimbang dan aktivitas fisik.',
        'Berisiko gizi lebih. Batasi gula, garam, dan lemak serta tingkatkan aktivitas fisik.',
        'Gizi lebih (overweight). Atur pola makan dan aktivitas fisik, konsultasikan ke tenaga kesehatan.',
        'Obesitas. Perlu pendampingan tenaga kesehatan untuk pemantauan dan penanganan.',
      ],
    )
  }

  return band(
    z,
    [-3, -2],
    ['Berat badan sangat kurang', 'Berat badan kurang', 'Berat badan normal'],
    ['low', 'low', 'ok'],
    [
      'Berat badan jauh di bawah rentang usianya. Segera konsultasikan ke tenaga kesehatan.',
      'Berat badan sedikit di bawah rentang usianya. Tingkatkan asupan gizi dan pantau pertumbuhannya.',
      'Berat badan dalam rentang normal usianya. BB/U tidak menilai kegemukan — gunakan IMT/U untuk itu.',
    ],
  )
}

export interface Note519 {
  index: string
  label: string
  bands: { range: string; status: string }[]
}

/** Ambang batas status gizi anak 5–18 tahun (Permenkes No. 2 Tahun 2020). */
export const ANTHROPOMETRY_NOTES_5_18: Note519[] = [
  {
    index: 'TB/U',
    label: 'Tinggi badan menurut umur (5–18 tahun)',
    bands: [
      { range: '< -3 SD', status: 'Sangat pendek (severely stunted)' },
      { range: '-3 s.d. < -2 SD', status: 'Pendek (stunted)' },
      { range: '-2 s.d. +3 SD', status: 'Normal' },
      { range: '> +3 SD', status: 'Tinggi' },
    ],
  },
  {
    index: 'IMT/U',
    label: 'Indeks massa tubuh menurut umur (5–18 tahun)',
    bands: [
      { range: '< -3 SD', status: 'Gizi buruk (severely wasted)' },
      { range: '-3 s.d. < -2 SD', status: 'Gizi kurang (wasted)' },
      { range: '-2 s.d. +1 SD', status: 'Gizi baik (normal)' },
      { range: '> +1 s.d. +2 SD', status: 'Berisiko gizi lebih' },
      { range: '> +2 s.d. +3 SD', status: 'Gizi lebih (overweight)' },
      { range: '> +3 SD', status: 'Obesitas (obese)' },
    ],
  },
  {
    index: 'BB/U',
    label: 'Berat badan menurut umur (5–10 tahun, WHO 2007)',
    bands: [
      { range: '< -3 SD', status: 'Berat badan sangat kurang' },
      { range: '-3 s.d. < -2 SD', status: 'Berat badan kurang' },
      { range: '≥ -2 SD', status: 'Berat badan normal' },
    ],
  },
]
