import { MAX_MONTH, WHO_LMS, type Indicator } from '../data/whoGrowth'
import type { Sex } from '../data/growth'

export type Tone = 'low' | 'ok' | 'high' | 'unknown'

/** Hitung z-score (metode LMS / Box-Cox) menurut Standar Antropometri Anak. */
export function lmsZ(sex: Sex, indicator: Indicator, month: number, value: number): number | null {
  if (!Number.isFinite(month) || month < 0 || month > MAX_MONTH) return null
  if (!Number.isFinite(value) || value <= 0) return null
  const tuple = WHO_LMS[sex][indicator][Math.round(month)]
  if (!tuple) return null
  const [L, M, S] = tuple
  if (M <= 0 || S <= 0) return null
  if (L === 0) return Math.log(value / M) / S
  return (Math.pow(value / M, L) - 1) / (L * S)
}

/** Kebalikan z-score: nilai (kg/cm/BMI) pada z tertentu. Dipakai untuk menggambar kurva. */
export function lmsValue(sex: Sex, indicator: Indicator, month: number, z: number): number | null {
  if (month < 0 || month > MAX_MONTH) return null
  const tuple = WHO_LMS[sex][indicator][Math.round(month)]
  if (!tuple) return null
  const [L, M, S] = tuple
  if (L === 0) return M * Math.exp(S * z)
  return M * Math.pow(1 + L * S * z, 1 / L)
}

export interface CategoryResult {
  z: number
  status: string
  tone: Tone
  detail: string
}

function band(z: number, cuts: number[], statuses: string[], tones: Tone[], details: string[]): CategoryResult {
  for (let i = 0; i < cuts.length; i++) {
    if (z < cuts[i]) {
      return { z, status: statuses[i], tone: tones[i], detail: details[i] }
    }
  }
  const last = cuts.length
  return { z, status: statuses[last], tone: tones[last], detail: details[last] }
}

/**
 * Klasifikasi status sesuai Permenkes No. 2 Tahun 2020 (Standar Antropometri Anak):
 * - wfa (BB/U)
 * - lhfa (PB/TB/U)
 * - bfa (IMT/U)
 */
export function classify(sex: Sex, indicator: Indicator, month: number, value: number): CategoryResult | null {
  const z = lmsZ(sex, indicator, month, value)
  if (z === null) return null

  if (indicator === 'wfa') {
    return band(
      z,
      [-3, -2, 1],
      ['Berat badan sangat kurang', 'Berat badan kurang', 'Berat badan normal', 'Risiko berat badan lebih'],
      ['low', 'low', 'ok', 'high'],
      [
        'Berat badan jauh di bawah rentang usianya. Segera konsultasikan ke tenaga kesehatan dan kejar kecukupan gizi kaya protein hewani.',
        'Berat badan sedikit di bawah rentang usianya. Tingkatkan asupan gizi dan pantau kenaikan berat badan tiap bulan di Posyandu.',
        'Berat badan anak dalam rentang normal untuk usianya. Pertahankan gizi seimbang dan pemantauan rutin.',
        'Berat badan di atas rentang normal usianya. Jaga pola makan seimbang dan aktivitas fisik, lalu konsultasikan ke tenaga kesehatan.',
      ],
    )
  }

  if (indicator === 'lhfa') {
    return band(
      z,
      [-3, -2, 3],
      ['Sangat pendek', 'Pendek', 'Normal', 'Tinggi'],
      ['low', 'low', 'ok', 'ok'],
      [
        'Tinggi badan jauh di bawah rentang usianya (berisiko tinggi stunting). Segera konsultasikan ke tenaga kesehatan.',
        'Tinggi badan sedikit di bawah rentang usianya (pendek/stunting). Perbaiki gizi dan cek ke fasilitas kesehatan.',
        'Tinggi badan anak normal untuk usianya. Pertahankan gizi seimbang dan pemantauan rutin.',
        'Tinggi badan anak di atas rata-rata usianya. Tidak perlu dikhawatirkan bila pertumbuhannya konsisten.',
      ],
    )
  }

  return band(
    z,
    [-3, -2, 1, 2, 3],
    ['Gizi buruk', 'Gizi kurang', 'Gizi baik', 'Berisiko gizi lebih', 'Gizi lebih', 'Obesitas'],
    ['low', 'low', 'ok', 'high', 'high', 'high'],
    [
      'Status gizi buruk. Segera bawa anak ke fasilitas kesehatan untuk penanganan.',
      'Status gizi kurang. Perbaiki asupan gizi dan konsultasikan ke tenaga kesehatan.',
      'Status gizi anak baik (normal) sesuai tinggi badannya. Pertahankan pola makan seimbang.',
      'Berisiko gizi lebih. Batasi makanan/minuman tinggi gula dan lemak, dorong aktivitas fisik.',
      'Gizi lebih (overweight). Atur pola makan dan aktivitas fisik, konsultasikan ke tenaga kesehatan.',
      'Obesitas. Konsultasikan ke tenaga kesehatan untuk penanganan dan pemantauan.',
    ],
  )
}

export function bmiValue(weightKg: number, heightCm: number): number | null {
  if (!Number.isFinite(weightKg) || !Number.isFinite(heightCm) || weightKg <= 0 || heightCm <= 0) return null
  const m = heightCm / 100
  return weightKg / (m * m)
}

export const TONE_STYLES: Record<Tone, { bg: string; text: string; ring: string; dot: string }> = {
  low: { bg: 'bg-amber-50', text: 'text-amber-700', ring: 'ring-amber-200', dot: 'bg-amber-500' },
  ok: { bg: 'bg-emerald-50', text: 'text-emerald-700', ring: 'ring-emerald-200', dot: 'bg-emerald-500' },
  high: { bg: 'bg-rose-50', text: 'text-rose-700', ring: 'ring-rose-200', dot: 'bg-rose-500' },
  unknown: { bg: 'bg-slate-50', text: 'text-slate-600', ring: 'ring-slate-200', dot: 'bg-slate-400' },
}
