import Image from 'next/image';
import { site } from '@/lib/site';
import { ServiceGrid } from '@/components/ServiceGrid';
import { EmergencyBand } from '@/components/EmergencyBand';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Reviews } from '@/components/Reviews';
import { Stripe } from '@/components/Stripe';
import { Button } from '@/components/Button';
import { TireRim } from '@/components/TireRim';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>

        {/* Moodbild — zweeft vrij rechts, geen kolom, geen box */}
        <div className={styles.heroImg} aria-hidden="true">
          <Image
            src="/moodbild-alpha.webp"
            alt=""
            fill
            priority
            sizes="60vw"
            style={{ objectFit: 'contain', objectPosition: 'right center' }}
          />
        </div>

        {/* Gradient — tekst leesbaar, auto naadloos geïntegreerd */}
        <div className={styles.heroOverlay} aria-hidden="true" />

        {/* Lichtsporen */}
        <div className={styles.speedLines} aria-hidden="true" />

        {/* Roterend wiel — zweeft tussen tekst en auto */}
        <div className={styles.tireWrap} aria-hidden="true">
          <TireRim size={500} className={styles.tireRim} />
        </div>

        {/* Tekst — vrij gepositioneerd, z-index boven alles */}
        <div className={styles.heroContent}>
          <div className={styles.heroFlags}>
            <span className={styles.flagSpoed}>● 24/7 SPOED</span>
            <span className={styles.flagInfo}>CULEMBORG · UTRECHT · NIEUWEGEIN</span>
          </div>

          <h1 className={styles.heroH1}>
            BANDEN.<br />
            UITLIJNEN.<br />
            <span className={styles.red}>SPOED.</span>
          </h1>

          <p className={styles.heroLede}>
            Lekke band midden in de nacht? Nieuwe banden nodig?
            Of uitlijnen omdat je stuur trekt? Wij zijn er. Altijd.
          </p>

          <div className={styles.heroCtas}>
            <Button href={`tel:${site.emergencyPhone.tel}`}>
              Bel: {site.emergencyPhone.display}
            </Button>
            <Button href="/contact" variant="ghost">Maak een afspraak</Button>
          </div>

          <div className={styles.statRow}>
            <div className={styles.stat}>
              <div className={styles.statN}>5.0</div>
              <div className={styles.statL}>Google · 158 reviews</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statN}>24/7</div>
              <div className={styles.statL}>bereikbaar</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statN}>80</div>
              <div className={styles.statL}>km/u tijdelijke band</div>
            </div>
          </div>
        </div>

        <Stripe />
      </section>

      {/* ── DIENSTEN ───────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={`${styles.sectionHead} container`}>
          <div>
            <div className="eyebrow">ONZE DIENSTEN</div>
            <h2 className={styles.h2}>
              ALLES VOOR UW BANDEN.<br />
              ONDER ÉÉN DAK.
            </h2>
          </div>
          <a href="/diensten" className={styles.headLink}>ALLE DIENSTEN →</a>
        </div>
        <div className="container">
          <ServiceGrid />
        </div>
      </section>

      {/* ── ZOMERACTIES ────────────────────────────────────── */}
      <section className={styles.sectionActies}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <div className="eyebrow">ZOMERACTIES 2026 · T/M 31 AUGUSTUS</div>
              <h2 className={styles.h2}>
                RIJKLAAR VOOR<br />
                DE ZOMER.
              </h2>
            </div>
            <a href="/actie/vakantiecheck" className={styles.headLink}>ALLE ACTIES →</a>
          </div>
          <div className={styles.actiesGrid}>
            {[
              { href: '/actie/zomerbanden',   label: 'ZOMER',     title: 'Zomerbanden',       sub: 'Advies op maat' },
              { href: '/actie/vakantiecheck', label: 'VAKANTIE',  title: 'Vakantiecheck',      sub: 'Klaar voor de weg' },
              { href: '/actie/airco-zomer',   label: 'AIRCO',     title: 'Airco service',      sub: 'R134a & R1234yf' },
              { href: '/actie/road-trip',     label: 'ALLES-IN-1', title: 'Compleet bezoek',  sub: 'Één keer, alles gedaan' },
            ].map(a => (
              <a key={a.href} href={a.href} className={styles.actieCard}>
                <span className={styles.actiePrijs}>{a.label}</span>
                <span className={styles.actieTitle}>{a.title}</span>
                <span className={styles.actieSub}>{a.sub}</span>
                <span className={styles.actieArrow} aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY ──────────────────────────────────────── */}
      <EmergencyBand />

      {/* ── PROCESS ────────────────────────────────────────── */}
      <section className={styles.sectionProcess}>
        <div className={`${styles.processGrid} container`}>
          <div>
            <div className="eyebrow">HOE HET WERKT</div>
            <h2 className={styles.h2}>
              DRIE STAPPEN.<br />
              GEEN GEDOE.
            </h2>
            <p className={styles.processIntro}>
              Of je nu snel nieuwe banden nodig hebt of een afspraak wilt plannen — wij regelen het.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={`${styles.sectionHead} container`}>
          <div>
            <div className="eyebrow">KLANTEN OVER ONS</div>
            <h2 className={styles.h2}>
              TEVREDEN KLANTEN.<br />
              ALTIJD IN BEWEGING.
            </h2>
          </div>
          <div className={styles.bigStars} aria-hidden="true">
            <div className={styles.starLine}>★★★★★</div>
            <div className={styles.starSub}>5.0 GOOGLE · 158 REVIEWS</div>
          </div>
        </div>
        <div className="container">
          <Reviews />
        </div>
      </section>

      {/* ── WERKGEBIED ─────────────────────────────────────── */}
      <section className={styles.sectionWerkgebied}>
        <div className="container">
          <div className={styles.sectionHead}>
            <div>
              <div className="eyebrow">WERKGEBIED</div>
              <h2 className={styles.h2}>
                CULEMBORG<br />
                EN OMGEVING.
              </h2>
            </div>
            <p className={styles.werkgebiedIntro}>
              Wij zijn gevestigd in Culemborg en helpen klanten uit de hele regio.
              Werkplaatsbezoek of spoedservice aan huis — wij rijden naar je toe.
            </p>
          </div>
          <div className={styles.stadsGrid}>
            {site.serviceAreaCities.map(city => (
              <div key={city} className={styles.stadsItem}>
                <span className={styles.stadsPin} aria-hidden="true">↗</span>
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
