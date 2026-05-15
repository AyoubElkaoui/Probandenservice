// Premium bandenwiel SVG — 5 Y-spaken zoals AMG/Porsche velg
// Solide gevuld, geen wireframe

type Props = {
  size?: number;
  className?: string;
};

export function TireRim({ size = 620, className }: Props) {
  const cx = size / 2;
  const cy = size / 2;
  const R = (n: number) => (n / 100) * (size / 2);

  const SPOKES = 5;
  const STEP = (2 * Math.PI) / SPOKES;

  // Y-spoke: een stam + twee armen die uitwaaieren naar de velgrand
  const spoke = (i: number) => {
    const base = i * STEP - Math.PI / 2; // start boven

    // Stam: van naaf (r=18) naar splitpunt (r=52)
    const stemW = 0.22; // breedte in radialen
    const s1x = cx + R(18) * Math.cos(base - stemW);
    const s1y = cy + R(18) * Math.sin(base - stemW);
    const s2x = cx + R(18) * Math.cos(base + stemW);
    const s2y = cy + R(18) * Math.sin(base + stemW);
    const sp1x = cx + R(52) * Math.cos(base - stemW * 0.6);
    const sp1y = cy + R(52) * Math.sin(base - stemW * 0.6);
    const sp2x = cx + R(52) * Math.cos(base + stemW * 0.6);
    const sp2y = cy + R(52) * Math.sin(base + stemW * 0.6);

    // Linkerarm: splitpunt → velg links
    const armW = 0.32;
    const la1x = cx + R(52) * Math.cos(base - stemW * 0.6);
    const la1y = cy + R(52) * Math.sin(base - stemW * 0.6);
    const la2x = cx + R(52) * Math.cos(base - armW * 0.7);
    const la2y = cy + R(52) * Math.sin(base - armW * 0.7);
    const lr1x = cx + R(79) * Math.cos(base - armW * 1.2);
    const lr1y = cy + R(79) * Math.sin(base - armW * 1.2);
    const lr2x = cx + R(79) * Math.cos(base - armW * 0.4);
    const lr2y = cy + R(79) * Math.sin(base - armW * 0.4);

    // Rechterarm: splitpunt → velg rechts
    const ra1x = cx + R(52) * Math.cos(base + stemW * 0.6);
    const ra1y = cy + R(52) * Math.sin(base + stemW * 0.6);
    const ra2x = cx + R(52) * Math.cos(base + armW * 0.7);
    const ra2y = cy + R(52) * Math.sin(base + armW * 0.7);
    const rr1x = cx + R(79) * Math.cos(base + armW * 0.4);
    const rr1y = cy + R(79) * Math.sin(base + armW * 0.4);
    const rr2x = cx + R(79) * Math.cos(base + armW * 1.2);
    const rr2y = cy + R(79) * Math.sin(base + armW * 1.2);

    return (
      <g key={i}>
        {/* Stam */}
        <path
          d={`M ${s1x} ${s1y} L ${s2x} ${s2y} L ${sp2x} ${sp2y} L ${sp1x} ${sp1y} Z`}
          fill="rgba(228,0,43,0.55)"
          stroke="rgba(228,0,43,0.85)"
          strokeWidth="1"
        />
        {/* Linkerarm */}
        <path
          d={`M ${la1x} ${la1y} L ${la2x} ${la2y} L ${lr1x} ${lr1y} L ${lr2x} ${lr2y} Z`}
          fill="rgba(228,0,43,0.45)"
          stroke="rgba(228,0,43,0.8)"
          strokeWidth="0.8"
        />
        {/* Rechterarm */}
        <path
          d={`M ${ra1x} ${ra1y} L ${ra2x} ${ra2y} L ${rr1x} ${rr1y} L ${rr2x} ${rr2y} Z`}
          fill="rgba(228,0,43,0.45)"
          stroke="rgba(228,0,43,0.8)"
          strokeWidth="0.8"
        />
      </g>
    );
  };

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
      {/* Buitenste bandprofiel */}
      <circle cx={cx} cy={cy} r={R(97)} stroke="rgba(228,0,43,0.65)" strokeWidth="3" />

      {/* Profielgroeven — korte streepjes om de band */}
      {Array.from({ length: 48 }).map((_, i) => {
        const a = (i / 48) * 2 * Math.PI;
        // Elke 3e streepje is korter → gegroefde buitenband
        const r1 = i % 3 === 0 ? R(87) : R(90);
        const r2 = R(96);
        return (
          <line
            key={i}
            x1={cx + r1 * Math.cos(a)}
            y1={cy + r1 * Math.sin(a)}
            x2={cx + r2 * Math.cos(a)}
            y2={cy + r2 * Math.sin(a)}
            stroke={i % 3 === 0 ? 'rgba(228,0,43,0.55)' : 'rgba(228,0,43,0.3)'}
            strokeWidth={i % 3 === 0 ? '2.5' : '1'}
          />
        );
      })}

      {/* Velg buitenring */}
      <circle cx={cx} cy={cy} r={R(82)} stroke="rgba(228,0,43,0.7)" strokeWidth="2.5" />
      <circle cx={cx} cy={cy} r={R(80)} stroke="rgba(228,0,43,0.3)" strokeWidth="1" />

      {/* 5 Y-spaken */}
      {Array.from({ length: SPOKES }).map((_, i) => spoke(i))}

      {/* Velg binnenring / barrel */}
      <circle cx={cx} cy={cy} r={R(20)} fill="rgba(228,0,43,0.12)" stroke="rgba(228,0,43,0.8)" strokeWidth="2" />
      <circle cx={cx} cy={cy} r={R(13)} fill="rgba(228,0,43,0.35)" stroke="rgba(228,0,43,0.7)" strokeWidth="1.5" />

      {/* 5 boutgaten */}
      {Array.from({ length: 5 }).map((_, i) => {
        const a = (i / 5) * 2 * Math.PI - Math.PI / 2;
        return (
          <circle
            key={i}
            cx={cx + R(26) * Math.cos(a)}
            cy={cy + R(26) * Math.sin(a)}
            r={R(3.5)}
            fill="rgba(0,0,0,0.85)"
            stroke="rgba(228,0,43,0.7)"
            strokeWidth="1"
          />
        );
      })}

      {/* Naafcentrum */}
      <circle cx={cx} cy={cy} r={R(6)} fill="rgba(228,0,43,0.9)" />

      {/* Lichtglans — maakt het een echt premium velg-gevoel */}
      <path
        d={`M ${cx + R(35) * Math.cos(-2.1)} ${cy + R(35) * Math.sin(-2.1)}
           A ${R(35)} ${R(35)} 0 0 1 ${cx + R(35) * Math.cos(-2.8)} ${cy + R(35) * Math.sin(-2.8)}`}
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d={`M ${cx + R(62) * Math.cos(-2.0)} ${cy + R(62) * Math.sin(-2.0)}
           A ${R(62)} ${R(62)} 0 0 1 ${cx + R(62) * Math.cos(-2.9)} ${cy + R(62) * Math.sin(-2.9)}`}
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
