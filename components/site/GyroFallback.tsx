// Statisches Bild der Ringe – wird serverseitig gerendert und bleibt sichtbar,
// wenn WebGL fehlt, JavaScript aus ist oder reduzierte Bewegung gewünscht wird.
export default function GyroFallback({ className = '' }: { className?: string }) {
  const rings = [1, 0.9, 0.8, 0.7, 0.6, 0.5];
  return (
    <svg viewBox="-160 -160 320 320" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="gyro-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#efe1b6" />
          <stop offset="0.45" stopColor="#d4af37" />
          <stop offset="1" stopColor="#7c6325" />
        </linearGradient>
      </defs>
      <g transform="rotate(-14)">
        {rings.map((r, i) => (
          <ellipse
            key={r}
            cx="0"
            cy="0"
            rx={140 * r}
            ry={140 * r * (0.34 + i * 0.07)}
            fill="none"
            stroke="url(#gyro-gold)"
            strokeWidth={1.6}
            strokeDasharray={`${140 * r * 2.9} ${10 + i * 2}`}
            strokeDashoffset={i * 37}
            opacity={1 - i * 0.08}
          />
        ))}
        <circle r="9" fill="url(#gyro-gold)" />
      </g>
    </svg>
  );
}
