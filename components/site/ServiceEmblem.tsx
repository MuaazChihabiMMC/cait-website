// Sechs Ringe für sechs Disziplinen – der Ring der aktuellen Leistung ist hervorgehoben.
// Greift das 3D-Motiv der Startseite statisch auf.
export default function ServiceEmblem({ active, className = '' }: { active: number; className?: string }) {
  const radii = [1, 0.86, 0.72, 0.58, 0.44, 0.3];
  return (
    <svg viewBox="-150 -150 300 300" className={className} aria-hidden="true" focusable="false">
      <g transform="rotate(-16)">
        {radii.map((r, i) => {
          const on = i === active;
          return (
            <ellipse
              key={r}
              rx={140 * r}
              ry={140 * r * 0.42}
              fill="none"
              stroke={on ? '#d4af37' : 'rgba(237,240,245,0.22)'}
              strokeWidth={on ? 2.4 : 1}
              strokeDasharray={on ? undefined : `${140 * r * 2.7} 12`}
            />
          );
        })}
        <circle r="7" fill="#d4af37" />
      </g>
    </svg>
  );
}
