export function GeoBackdrop({ tone = 'pink' }: { tone?: 'pink' | 'blue' }) {
  const c =
    tone === 'blue'
      ? {
          dot: '#93c5fd',
          c1: '#bfdbfe',
          c2: '#c7d2fe',
          c3: '#dbeafe',
          line1: '#93c5fd',
          line2: '#a5b4fc',
        }
      : {
          dot: '#f9a8d4',
          c1: '#fbcfe8',
          c2: '#fde68a',
          c3: '#f9a8d4',
          line1: '#f9a8d4',
          line2: '#fcd34d',
        }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className={
          tone === 'blue'
            ? 'absolute inset-0 bg-gradient-to-b from-kia-50 via-[#f2f7ff] to-white'
            : 'absolute inset-0 bg-gradient-to-b from-kia-50 via-[#fff5f9] to-white'
        }
      />
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.2" fill={c.dot} opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.35" />
        <circle cx="88%" cy="8%" r="170" fill={c.c1} opacity="0.35" />
        <circle cx="6%" cy="34%" r="120" fill={c.c2} opacity="0.3" />
        <circle cx="72%" cy="72%" r="140" fill={c.c3} opacity="0.28" />
        <path
          d="M-40 520 C 220 430, 340 640, 640 540 S 1080 360, 1480 470"
          fill="none"
          stroke={c.line1}
          strokeWidth="2"
          opacity="0.35"
        />
        <path
          d="M-40 600 C 260 500, 420 700, 760 600 S 1120 460, 1460 560"
          fill="none"
          stroke={c.line2}
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>
    </div>
  )
}
