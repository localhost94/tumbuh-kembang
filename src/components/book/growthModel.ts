import { useMemo, useState } from 'react'
import { MAX_MONTH, type Indicator } from '../../data/whoGrowth'
import type { Sex } from '../../data/growth'
import { bmiValue, classify } from '../../lib/growthStatus'

export const MONTH_NAMES = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
]

const NOW = new Date()
const CURRENT_YEAR = NOW.getFullYear()
const CURRENT_MONTH = NOW.getMonth()

export const BIRTH_YEARS = Array.from({ length: 8 }, (_, i) => CURRENT_YEAR - i)

function defaultBirth() {
  const d = new Date(CURRENT_YEAR, CURRENT_MONTH - 6, 1)
  return { month: d.getMonth(), year: d.getFullYear() }
}

function parseNum(v: string): number | null {
  if (!v.trim()) return null
  const n = Number(v.replace(',', '.'))
  return Number.isFinite(n) ? n : null
}

export function useGrowthModel() {
  const initial = defaultBirth()
  const [sex, setSex] = useState<Sex>('L')
  const [birthMonth, setBirthMonth] = useState(initial.month)
  const [birthYear, setBirthYear] = useState(initial.year)
  const [weight, setWeight] = useState('')
  const [lengthValue, setLengthValue] = useState('')
  const [metric, setMetric] = useState<Indicator>('wfa')

  const ageMonths = (CURRENT_YEAR - birthYear) * 12 + (CURRENT_MONTH - birthMonth)
  const ageValid = ageMonths >= 0 && ageMonths <= 72
  const supported = ageValid && ageMonths <= MAX_MONTH
  const monthNum = Math.max(0, ageMonths)
  const ageYears = Math.floor(monthNum / 12)
  const ageRest = monthNum % 12

  const weightNum = parseNum(weight)
  const lengthNum = parseNum(lengthValue)
  const bmi = weightNum != null && lengthNum != null ? bmiValue(weightNum, lengthNum) : null
  const isLength = monthNum <= 24
  const heightLabel = isLength ? 'Panjang badan (cm)' : 'Tinggi badan (cm)'

  const results = useMemo(() => {
    if (!supported) return null
    const wfa = weightNum != null ? classify(sex, 'wfa', monthNum, weightNum) : null
    const lhfa = lengthNum != null ? classify(sex, 'lhfa', monthNum, lengthNum) : null
    const bfa = bmi != null ? classify(sex, 'bfa', monthNum, bmi) : null
    return { wfa, lhfa, bfa }
  }, [supported, sex, monthNum, weightNum, lengthNum, bmi])

  const point =
    supported &&
    ((metric === 'wfa' && weightNum != null) ||
      (metric === 'lhfa' && lengthNum != null) ||
      (metric === 'bfa' && bmi != null))
      ? {
          month: monthNum,
          value:
            metric === 'wfa' ? (weightNum as number) : metric === 'lhfa' ? (lengthNum as number) : (bmi as number),
        }
      : null

  return {
    sex,
    setSex,
    birthMonth,
    setBirthMonth,
    birthYear,
    setBirthYear,
    weight,
    setWeight,
    lengthValue,
    setLengthValue,
    metric,
    setMetric,
    ageMonths,
    ageValid,
    supported,
    monthNum,
    ageYears,
    ageRest,
    isLength,
    heightLabel,
    results,
    point,
  }
}

export type GrowthModel = ReturnType<typeof useGrowthModel>
