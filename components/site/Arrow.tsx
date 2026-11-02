export default function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      aria-hidden="true"
      focusable="false"
      className={`btn-arrow shrink-0 ${className}`}
    >
      <path d="M0 6h16M11 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
