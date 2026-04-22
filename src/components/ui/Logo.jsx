// Publideas logo: 4-color quadrant grid
export default function Logo({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Publideas logo"
    >
      {/* Top-left: Red */}
      <rect x="0" y="0" width="14" height="14" rx="2" fill="#E53935" />
      {/* Top-right: Yellow */}
      <rect x="18" y="0" width="14" height="14" rx="2" fill="#FDD835" />
      {/* Bottom-left: Green */}
      <rect x="0" y="18" width="14" height="14" rx="2" fill="#2DC653" />
      {/* Bottom-right: Blue */}
      <rect x="18" y="18" width="14" height="14" rx="2" fill="#1E88E5" />
    </svg>
  )
}
