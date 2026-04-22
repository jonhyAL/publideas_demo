// Print registration mark (+) used as decorative SVG element
export default function RegistrationMark({ size = 24, color = '#E2D8C8', className = '' }) {
  const half = size / 2
  const arm = size * 0.38
  const r = size * 0.18

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Horizontal bar */}
      <line x1={half - arm} y1={half} x2={half + arm} y2={half} stroke={color} strokeWidth="1.5" />
      {/* Vertical bar */}
      <line x1={half} y1={half - arm} x2={half} y2={half + arm} stroke={color} strokeWidth="1.5" />
      {/* Center circle */}
      <circle cx={half} cy={half} r={r} stroke={color} strokeWidth="1.5" />
    </svg>
  )
}
