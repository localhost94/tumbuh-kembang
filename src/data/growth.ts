export type Sex = 'L' | 'P'

export interface GrowthRange {
  month: number
  weightMin: number
  weightMax: number
  lengthMin: number
  lengthMax: number
}

/**
 * Tabel Pertumbuhan Anak 0–2 Tahun (Buku KIA 2024, hal. 130–131).
 * Kisaran "Ideal" berat badan (kg) dan panjang badan (cm) per bulan.
 */
export const GROWTH_TABLE: Record<Sex, GrowthRange[]> = {
  L: [
    { month: 0, weightMin: 2.5, weightMax: 3.9, lengthMin: 46.1, lengthMax: 51.8 },
    { month: 1, weightMin: 3.4, weightMax: 5.1, lengthMin: 50.8, lengthMax: 56.7 },
    { month: 2, weightMin: 4.3, weightMax: 6.3, lengthMin: 54.4, lengthMax: 60.4 },
    { month: 3, weightMin: 5.0, weightMax: 7.2, lengthMin: 57.3, lengthMax: 63.5 },
    { month: 4, weightMin: 5.6, weightMax: 7.8, lengthMin: 59.7, lengthMax: 66.0 },
    { month: 5, weightMin: 6.0, weightMax: 8.4, lengthMin: 61.7, lengthMax: 68.0 },
    { month: 6, weightMin: 6.4, weightMax: 8.8, lengthMin: 63.3, lengthMax: 69.8 },
    { month: 7, weightMin: 6.7, weightMax: 9.2, lengthMin: 64.8, lengthMax: 71.3 },
    { month: 8, weightMin: 6.9, weightMax: 9.6, lengthMin: 66.2, lengthMax: 72.8 },
    { month: 9, weightMin: 7.1, weightMax: 9.9, lengthMin: 67.5, lengthMax: 74.2 },
    { month: 10, weightMin: 7.4, weightMax: 10.2, lengthMin: 68.7, lengthMax: 75.6 },
    { month: 11, weightMin: 7.6, weightMax: 10.5, lengthMin: 69.9, lengthMax: 76.9 },
    { month: 12, weightMin: 7.7, weightMax: 10.8, lengthMin: 71.0, lengthMax: 78.1 },
    { month: 13, weightMin: 7.9, weightMax: 11.0, lengthMin: 72.1, lengthMax: 79.3 },
    { month: 14, weightMin: 8.1, weightMax: 11.3, lengthMin: 73.1, lengthMax: 80.5 },
    { month: 15, weightMin: 8.3, weightMax: 11.5, lengthMin: 74.1, lengthMax: 81.7 },
    { month: 16, weightMin: 8.4, weightMax: 11.7, lengthMin: 75.0, lengthMax: 82.8 },
    { month: 17, weightMin: 8.6, weightMax: 12.0, lengthMin: 76.0, lengthMax: 83.9 },
    { month: 18, weightMin: 8.8, weightMax: 12.2, lengthMin: 76.9, lengthMax: 85.0 },
    { month: 19, weightMin: 8.9, weightMax: 12.5, lengthMin: 77.7, lengthMax: 86.0 },
    { month: 20, weightMin: 9.1, weightMax: 12.7, lengthMin: 78.6, lengthMax: 87.0 },
    { month: 21, weightMin: 9.2, weightMax: 12.9, lengthMin: 79.4, lengthMax: 88.0 },
    { month: 22, weightMin: 9.4, weightMax: 13.2, lengthMin: 80.2, lengthMax: 89.0 },
    { month: 23, weightMin: 9.5, weightMax: 13.4, lengthMin: 81.0, lengthMax: 89.9 },
    { month: 24, weightMin: 9.7, weightMax: 13.6, lengthMin: 81.7, lengthMax: 90.9 },
  ],
  P: [
    { month: 0, weightMin: 2.4, weightMax: 3.7, lengthMin: 45.4, lengthMax: 51.0 },
    { month: 1, weightMin: 3.2, weightMax: 4.8, lengthMin: 49.8, lengthMax: 55.6 },
    { month: 2, weightMin: 3.9, weightMax: 5.8, lengthMin: 53.0, lengthMax: 59.1 },
    { month: 3, weightMin: 4.5, weightMax: 6.6, lengthMin: 55.6, lengthMax: 61.9 },
    { month: 4, weightMin: 5.0, weightMax: 7.3, lengthMin: 57.8, lengthMax: 64.3 },
    { month: 5, weightMin: 5.4, weightMax: 7.8, lengthMin: 59.6, lengthMax: 66.2 },
    { month: 6, weightMin: 5.7, weightMax: 8.2, lengthMin: 61.2, lengthMax: 68.0 },
    { month: 7, weightMin: 6.0, weightMax: 8.6, lengthMin: 62.7, lengthMax: 69.6 },
    { month: 8, weightMin: 6.3, weightMax: 9.0, lengthMin: 64.0, lengthMax: 71.1 },
    { month: 9, weightMin: 6.5, weightMax: 9.3, lengthMin: 65.3, lengthMax: 72.6 },
    { month: 10, weightMin: 6.7, weightMax: 9.6, lengthMin: 66.5, lengthMax: 73.9 },
    { month: 11, weightMin: 6.9, weightMax: 9.9, lengthMin: 67.7, lengthMax: 75.3 },
    { month: 12, weightMin: 7.0, weightMax: 10.1, lengthMin: 68.9, lengthMax: 76.6 },
    { month: 13, weightMin: 7.2, weightMax: 10.4, lengthMin: 70.0, lengthMax: 77.8 },
    { month: 14, weightMin: 7.4, weightMax: 10.6, lengthMin: 71.0, lengthMax: 79.1 },
    { month: 15, weightMin: 7.6, weightMax: 10.9, lengthMin: 72.0, lengthMax: 80.2 },
    { month: 16, weightMin: 7.7, weightMax: 11.1, lengthMin: 73.0, lengthMax: 81.4 },
    { month: 17, weightMin: 7.9, weightMax: 11.4, lengthMin: 74.0, lengthMax: 82.5 },
    { month: 18, weightMin: 8.1, weightMax: 11.6, lengthMin: 74.9, lengthMax: 83.6 },
    { month: 19, weightMin: 8.2, weightMax: 11.8, lengthMin: 75.8, lengthMax: 84.7 },
    { month: 20, weightMin: 8.4, weightMax: 12.1, lengthMin: 76.7, lengthMax: 85.7 },
    { month: 21, weightMin: 8.6, weightMax: 12.3, lengthMin: 77.5, lengthMax: 86.7 },
    { month: 22, weightMin: 8.7, weightMax: 12.5, lengthMin: 78.4, lengthMax: 87.7 },
    { month: 23, weightMin: 8.9, weightMax: 12.8, lengthMin: 79.2, lengthMax: 88.7 },
    { month: 24, weightMin: 9.0, weightMax: 13.0, lengthMin: 80.0, lengthMax: 89.6 },
  ],
}

export interface AnthropometryNote {
  index: string
  label: string
  bands: { range: string; status: string }[]
}

/** Ambang status gizi (Permenkes No. 2 Tahun 2020 tentang Standar Antropometri Anak). */
export const ANTHROPOMETRY_NOTES: AnthropometryNote[] = [
  {
    index: 'BB/U',
    label: 'Berat badan menurut umur',
    bands: [
      { range: '< -3 SD', status: 'Berat badan sangat kurang (severely underweight)' },
      { range: '-3 SD s.d. < -2 SD', status: 'Berat badan kurang (underweight)' },
      { range: '-2 SD s.d. +1 SD', status: 'Berat badan normal' },
      { range: '> +1 SD', status: 'Risiko berat badan lebih' },
    ],
  },
  {
    index: 'PB/TB-U',
    label: 'Panjang/tinggi badan menurut umur',
    bands: [
      { range: '< -3 SD', status: 'Sangat pendek (severely stunted)' },
      { range: '-3 SD s.d. < -2 SD', status: 'Pendek (stunted)' },
      { range: '-2 SD s.d. +3 SD', status: 'Normal' },
      { range: '> +3 SD', status: 'Tinggi' },
    ],
  },
  {
    index: 'BB/TB',
    label: 'Berat badan menurut tinggi badan',
    bands: [
      { range: '< -3 SD', status: 'Gizi buruk (severely wasted)' },
      { range: '-3 SD s.d. < -2 SD', status: 'Gizi kurang (wasted)' },
      { range: '-2 SD s.d. +1 SD', status: 'Gizi baik (normal)' },
      { range: '> +1 SD s.d. +2 SD', status: 'Berisiko gizi lebih' },
      { range: '> +2 SD s.d. +3 SD', status: 'Gizi lebih (overweight)' },
      { range: '> +3 SD', status: 'Obesitas (obese)' },
    ],
  },
  {
    index: 'IMT/U',
    label: 'Indeks massa tubuh menurut umur',
    bands: [
      { range: '< -3 SD', status: 'Gizi buruk (severely wasted)' },
      { range: '-3 SD s.d. < -2 SD', status: 'Gizi kurang (wasted)' },
      { range: '-2 SD s.d. +1 SD', status: 'Gizi baik (normal)' },
      { range: '> +1 SD s.d. +2 SD', status: 'Berisiko gizi lebih' },
      { range: '> +2 SD s.d. +3 SD', status: 'Gizi lebih (overweight)' },
      { range: '> +3 SD', status: 'Obesitas (obese)' },
    ],
  },
  {
    index: 'LiLA',
    label: 'Lingkar lengan atas (6–59 bulan)',
    bands: [
      { range: '< 11,5 cm', status: 'Gizi buruk' },
      { range: '11,5–12,4 cm', status: 'Gizi kurang' },
      { range: '> 12,4 cm', status: 'Gizi baik' },
    ],
  },
]
