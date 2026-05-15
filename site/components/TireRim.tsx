// Decoratief bandenwiel SVG — draait langzaam in de hero achtergrond
// Server component — geen JS nodig

type Props = {
  size?: number;
  className?: string;
};

export function TireRim({ size = 620, className }: Props) {
  const cx = size / 2;
  const cy = size / 2;
  const r = (n: number) => (n / 200) * (size / 2);

  const spokes = 5;
  const treadCount = 36;

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
      {/* Outer tire wall */}
      <circle cx={cx} cy={cy} r={r(196)} stroke="rgba(228,0,43,0.18)" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={r(188)} stroke="rgba(228,0,43,0.08)" strokeWidth="1" />

      {/* Tread blocks around outer edge */}
      {Array.from({ length: treadCount }).map((_, i) => {
        const a1 = (i * (360 / treadCount) - 2) * (Math.PI / 180);
        const a2 = (i * (360 / treadCount) + 2) * (Math.PI / 180);
        const r1 = r(178), r2 = r(194);
        return (
          <path
            key={i}
            d={`M ${cx + r1 * Math.cos(a1)} ${cy + r1 * Math.sin(a1)}
               L ${cx + r2 * Math.cos(a1)} ${cy + r2 * Math.sin(a1)}
               A ${r2} ${r2} 0 0 1 ${cx + r2 * Math.cos(a2)} ${cy + r2 * Math.sin(a2)}
               L ${cx + r1 * Math.cos(a2)} ${cy + r1 * Math.sin(a2)}
               A ${r1} ${r1} 0 0 0 ${cx + r1 * Math.cos(a1)} ${cy + r1 * Math.sin(a1)}`}
            fill="rgba(228,0,43,0.12)"
          />
        );
      })}

      {/* Rim outer circle */}
      <circle cx={cx} cy={cy} r={r(160)} stroke="rgba(228,0,43,0.22)" strokeWidth="1.5" />

      {/* Rim inner circle */}
      <circle cx={cx} cy={cy} r={r(130)} stroke="rgba(228,0,43,0.14)" strokeWidth="1" />

      {/* Spokes */}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * (360 / spokes)) * (Math.PI / 180);
        const spokeAngleOffset = (16 * Math.PI) / 180;
        return (
          <g key={i}>
            {/* Spoke body */}
            <path
              d={`M ${cx + r(30) * Math.cos(angle - spokeAngleOffset)} ${cy + r(30) * Math.sin(angle - spokeAngleOffset)}
                 C ${cx + r(70) * Math.cos(angle - spokeAngleOffset * 0.6)} ${cy + r(70) * Math.sin(angle - spokeAngleOffset * 0.6)}
                   ${cx + r(110) * Math.cos(angle - spokeAngleOffset * 0.2)} ${cy + r(110) * Math.sin(angle - spokeAngleOffset * 0.2)}
                   ${cx + r(128) * Math.cos(angle)} ${cy + r(128) * Math.sin(angle)}
                 C ${cx + r(110) * Math.cos(angle + spokeAngleOffset * 0.2)} ${cy + r(110) * Math.sin(angle + spokeAngleOffset * 0.2)}
                   ${cx + r(70) * Math.cos(angle + spokeAngleOffset * 0.6)} ${cy + r(70) * Math.sin(angle + spokeAngleOffset * 0.6)}
                   ${cx + r(30) * Math.cos(angle + spokeAngleOffset)} ${cy + r(30) * Math.sin(angle + spokeAngleOffset)}`}
              fill="rgba(228,0,43,0.1)"
              stroke="rgba(228,0,43,0.2)"
              strokeWidth="0.8"
            />
          </g>
        );
      })}

      {/* Center hub */}
      <circle cx={cx} cy={cy} r={r(28)} fill="rgba(228,0,43,0.06)" stroke="rgba(228,0,43,0.3)" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={r(16)} fill="rgba(228,0,43,0.1)" stroke="rgba(228,0,43,0.25)" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={r(6)} fill="rgba(228,0,43,0.4)" />

      {/* Lug bolt holes (5) */}
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i * 72) * (Math.PI / 180);
        return (
          <circle
            key={i}
            cx={cx + r(22) * Math.cos(angle)}
            cy={cy + r(22) * Math.sin(angle)}
            r={r(3)}
            fill="rgba(10,10,11,0.8)"
            stroke="rgba(228,0,43,0.3)"
            strokeWidth="0.8"
          />
        );
      })}
    </svg>
  );
}
