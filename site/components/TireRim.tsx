// Decoratief bandenwiel SVG — draait langzaam in hero achtergrond
// Helderder opacities zodat het wiel écht zichtbaar is op donkere achtergrond

type Props = {
  size?: number;
  className?: string;
};

export function TireRim({ size = 620, className }: Props) {
  const cx = size / 2;
  const cy = size / 2;
  const r = (n: number) => (n / 200) * (size / 2);

  const spokes = 5;
  const treadCount = 40;

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
      {/* Buitenste bandrand — prominent */}
      <circle cx={cx} cy={cy} r={r(197)} stroke="rgba(228,0,43,0.55)" strokeWidth="2.5" />
      <circle cx={cx} cy={cy} r={r(191)} stroke="rgba(228,0,43,0.25)" strokeWidth="1" />

      {/* Profielblokken langs de buitenrand */}
      {Array.from({ length: treadCount }).map((_, i) => {
        const a1 = (i * (360 / treadCount) - 2.5) * (Math.PI / 180);
        const a2 = (i * (360 / treadCount) + 2.5) * (Math.PI / 180);
        const r1 = r(181);
        const r2 = r(195);
        return (
          <path
            key={i}
            d={`M ${cx + r1 * Math.cos(a1)} ${cy + r1 * Math.sin(a1)}
               L ${cx + r2 * Math.cos(a1)} ${cy + r2 * Math.sin(a1)}
               A ${r2} ${r2} 0 0 1 ${cx + r2 * Math.cos(a2)} ${cy + r2 * Math.sin(a2)}
               L ${cx + r1 * Math.cos(a2)} ${cy + r1 * Math.sin(a2)}
               A ${r1} ${r1} 0 0 0 ${cx + r1 * Math.cos(a1)} ${cy + r1 * Math.sin(a1)}`}
            fill={i % 2 === 0 ? 'rgba(228,0,43,0.35)' : 'rgba(228,0,43,0.15)'}
          />
        );
      })}

      {/* Velg buitenring — helder */}
      <circle cx={cx} cy={cy} r={r(162)} stroke="rgba(228,0,43,0.65)" strokeWidth="2.5" />

      {/* Velg binnenring */}
      <circle cx={cx} cy={cy} r={r(132)} stroke="rgba(228,0,43,0.45)" strokeWidth="1.5" />

      {/* 5 spaken — duidelijk zichtbaar */}
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * (360 / spokes)) * (Math.PI / 180);
        const delta = (18 * Math.PI) / 180;
        return (
          <path
            key={i}
            d={`M ${cx + r(32) * Math.cos(angle - delta)} ${cy + r(32) * Math.sin(angle - delta)}
               C ${cx + r(75) * Math.cos(angle - delta * 0.5)} ${cy + r(75) * Math.sin(angle - delta * 0.5)}
                 ${cx + r(115) * Math.cos(angle - delta * 0.15)} ${cy + r(115) * Math.sin(angle - delta * 0.15)}
                 ${cx + r(130) * Math.cos(angle)} ${cy + r(130) * Math.sin(angle)}
               C ${cx + r(115) * Math.cos(angle + delta * 0.15)} ${cy + r(115) * Math.sin(angle + delta * 0.15)}
                 ${cx + r(75) * Math.cos(angle + delta * 0.5)} ${cy + r(75) * Math.sin(angle + delta * 0.5)}
                 ${cx + r(32) * Math.cos(angle + delta)} ${cy + r(32) * Math.sin(angle + delta)}`}
            fill="rgba(228,0,43,0.25)"
            stroke="rgba(228,0,43,0.55)"
            strokeWidth="1.5"
          />
        );
      })}

      {/* Naaf — opvallend centrum */}
      <circle cx={cx} cy={cy} r={r(30)} fill="rgba(228,0,43,0.15)" stroke="rgba(228,0,43,0.7)" strokeWidth="2" />
      <circle cx={cx} cy={cy} r={r(17)} fill="rgba(228,0,43,0.3)" stroke="rgba(228,0,43,0.6)" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={r(6)} fill="rgba(228,0,43,0.9)" />

      {/* 5 boutgaten */}
      {Array.from({ length: 5 }).map((_, i) => {
        const angle = (i * 72 - 90) * (Math.PI / 180);
        return (
          <g key={i}>
            <circle
              cx={cx + r(22) * Math.cos(angle)}
              cy={cy + r(22) * Math.sin(angle)}
              r={r(4)}
              fill="rgba(10,10,11,0.9)"
              stroke="rgba(228,0,43,0.6)"
              strokeWidth="1"
            />
          </g>
        );
      })}

      {/* Extra sierring voor premium uitstraling */}
      <circle cx={cx} cy={cy} r={r(148)} stroke="rgba(228,0,43,0.18)" strokeWidth="1" strokeDasharray="8 4" />
    </svg>
  );
}
