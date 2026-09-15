import { useEffect, useMemo, useState } from 'react'
import type { AgeSegment } from '../data/ageSegments'
import { MILESTONES } from '../data/milestones'
import { Card, ProgressRing } from './ui'
import { IconAlert, IconCheck, IconClose, IconRefresh } from './Icons'

type Answer = 'ya' | 'tidak'
type Answers = Record<string, Answer>

export function MilestoneChecklist({ segment }: { segment: AgeSegment }) {
  const milestones = MILESTONES[segment.id]
  const storageKey = `tk-milestones-${segment.id}`
  const [answers, setAnswers] = useState<Answers>({})

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      setAnswers(raw ? (JSON.parse(raw) as Answers) : {})
    } catch {
      setAnswers({})
    }
  }, [storageKey])

  const update = (id: string, value: Answer) => {
    setAnswers((prev) => {
      const next = { ...prev, [id]: value }
      try {
        localStorage.setItem(storageKey, JSON.stringify(next))
      } catch {
        /* ignore storage errors */
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

  const stats = useMemo(() => {
    const total = milestones?.length ?? 0
    const ya = milestones?.filter((m) => answers[m.id] === 'ya').length ?? 0
    const tidak = milestones?.filter((m) => answers[m.id] === 'tidak').length ?? 0
    return { total, ya, tidak }
  }, [milestones, answers])

  if (!milestones || milestones.length === 0) {
    return (
      <Card>
        <h3 className="text-base font-bold text-kia-950">Penanda perkembangan</h3>
        <p className="mt-2 text-sm leading-relaxed text-kia-900/70">
          Pada usia ini, pemantauan dilakukan melalui pemeriksaan langsung oleh tenaga kesehatan (0–6 jam, 6–48 jam, 3–7
          hari, dan 8–28 hari setelah lahir) serta lembar pemantauan harian. Kenali tanda bahaya dan segera periksa bila
          ditemukan.
        </p>
      </Card>
    )
  }

  return (
    <Card>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <ProgressRing value={stats.ya} total={stats.total} />
          <div>
            <h3 className="text-base font-bold text-kia-950">Penanda perkembangan</h3>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-kia-900/70">
              Beri tanda sesuai kemampuan anak. Jika anak belum bisa melakukan salah satu hal berikut, segera bawa ke
              Puskesmas.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-100">
                Bisa: {stats.ya}
              </span>
              <span className="rounded-full bg-red-50 px-3 py-1 text-red-700 ring-1 ring-red-100">
                Belum: {stats.tidak}
              </span>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600 ring-1 ring-slate-100">
                Belum diisi: {stats.total - stats.ya - stats.tidak}
              </span>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 self-start rounded-full bg-kia-50 px-3.5 py-2 text-xs font-semibold text-kia-700 transition hover:bg-kia-100"
        >
          <IconRefresh className="h-4 w-4" /> Reset
        </button>
      </div>

      <ul className="mt-6 space-y-2.5">
        {milestones.map((m, i) => {
          const answer = answers[m.id]
          return (
            <li
              key={m.id}
              className={`flex items-start gap-3 rounded-2xl border p-3 transition ${
                answer === 'ya'
                  ? 'border-emerald-100 bg-emerald-50/60'
                  : answer === 'tidak'
                    ? 'border-red-100 bg-red-50/60'
                    : 'border-slate-100 bg-white'
              }`}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-kia-600/10 text-xs font-bold text-kia-700">
                {i + 1}
              </span>
              <p className="flex-1 text-sm leading-relaxed text-kia-900/85">{m.text}</p>
              <div className="flex shrink-0 gap-1.5">
                <button
                  type="button"
                  onClick={() => update(m.id, 'ya')}
                  aria-label="Bisa"
                  className={`flex h-8 w-8 items-center justify-center rounded-xl transition ${
                    answer === 'ya'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white text-emerald-600 ring-1 ring-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  <IconCheck className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => update(m.id, 'tidak')}
                  aria-label="Belum bisa"
                  className={`flex h-8 w-8 items-center justify-center rounded-xl transition ${
                    answer === 'tidak'
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-red-500 ring-1 ring-red-200 hover:bg-red-50'
                  }`}
                >
                  <IconClose className="h-4 w-4" />
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      {stats.tidak > 0 && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl bg-amber-50 p-4 text-amber-800 ring-1 ring-amber-100">
          <IconAlert className="mt-0.5 h-5 w-5 shrink-0" />
          <p className="text-sm leading-relaxed">
            Ada {stats.tidak} penanda yang belum tercapai. Ini bukan diagnosis — segera konsultasikan ke Posyandu, Puskesmas,
            atau fasilitas kesehatan untuk penilaian tumbuh kembang anak.
          </p>
        </div>
      )}
    </Card>
  )
}
