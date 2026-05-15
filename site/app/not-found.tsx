import Link from 'next/link';
import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <section style={{ background: 'var(--bg)', padding: '120px 0' }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--red)', letterSpacing: '0.2em', marginBottom: 16 }}>
          ─── 404 · NIET GEVONDEN
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(64px, 9vw, 124px)', lineHeight: 0.9, margin: '0 0 24px' }}>
          DEZE PAGINA<br />
          <span style={{ color: 'var(--red)' }}>BESTAAT NIET.</span>
        </h1>
        <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--muted)', maxWidth: 480, marginBottom: 40 }}>
          Misschien is hij verhuisd, of misschien hebben we hem zelf nooit gemaakt. Hieronder een paar plekken waar u
          wél terecht kunt.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Button href="/">Naar de homepage</Button>
          <Button href="/diensten" variant="ghost">Alle diensten</Button>
          <Button href="/contact" variant="ghost">Contact</Button>
        </div>
      </div>
    </section>
  );
}
