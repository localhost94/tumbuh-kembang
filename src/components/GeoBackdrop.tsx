export function GeoBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-kia-50 via-[#fff5f9] to-white" />
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.2" fill="#f9a8d4" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.35" />
        <circle cx="88%" cy="8%" r="170" fill="#fbcfe8" opacity="0.35" />
        <circle cx="6%" cy="34%" r="120" fill="#fde68a" opacity="0.3" />
        <circle cx="72%" cy="72%" r="140" fill="#f9a8d4" opacity="0.28" />
        <path
          d="M-40 520 C 220 430, 340 640, 640 540 S 1080 360, 1480 470"
          fill="none"
          stroke="#f9a8d4"
          strokeWidth="2"
          opacity="0.35"
        />
        <path
          d="M-40 600 C 260 500, 420 700, 760 600 S 1120 460, 1460 560"
          fill="none"
          stroke="#fcd34d"
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>
    </div>
  )
}
