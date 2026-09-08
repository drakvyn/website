interface ReticleProps {
  className?: string;
}

export function ReticleSvg({ className }: ReticleProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g className="reticle-tris">
        <path d="M 32 12 L 48 12 L 40 24 Z" />
        <path d="M 68 32 L 68 48 L 56 40 Z" />
        <path d="M 48 68 L 32 68 L 40 56 Z" />
        <path d="M 12 48 L 12 32 L 24 40 Z" />
      </g>
      <g className="reticle-links">
        <path d="M 51.5 21.5 L 58.5 28.5" />
        <path d="M 58.5 51.5 L 51.5 58.5" />
        <path d="M 28.5 58.5 L 21.5 51.5" />
        <path d="M 21.5 28.5 L 28.5 21.5" />
      </g>
    </svg>
  );
}
