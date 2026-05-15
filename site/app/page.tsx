import Image from 'next/image';
import { site } from '@/lib/site';
import { ServiceGrid } from '@/components/ServiceGrid';
import { EmergencyBand } from '@/components/EmergencyBand';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Reviews } from '@/components/Reviews';
import { Stripe } from '@/components/Stripe';
import { Button } from '@/components/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroStripe} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <div className={styles.heroFlags}>
              <span className={styles.flagSpoed}>24/7 SPOED</span>
              <span className={styles.flagInfo}>
                24/7 SPOED · DESKUNDIGE TECHNICI
              </span>
            </div>
            <h1 className={styles.heroH1}>
              BANDEN.<br />
              UITLIJNEN.<br />
              <span className={styles.red}>SPOED.</span>
            </h1>
            <p className={styles.heroLede}>
              Lekke band midden in de nacht? Nieuwe banden nodig voor de APK?
              Of gewoon uitlijnen omdat je stuur trekt? Wij zijn er. Altijd.
              Altijd bereikbaar in Culemborg en omgeving.
            </p>
            <div className={styles.heroCtas}>
              <Button href={`tel:${site.emergencyPhone.tel}`}>Spoed: {site.emergencyPhone.display}</Button>
              <Button href="/contact" variant="ghost">Maak een afspraak</Button>
            </div>

            <div className={styles.statRow}>
              {[
                { n: '24/7', l: 'bereikbaar voor spoed' },
                { n: '80', l: 'km/u tijdelijke band' },
                { n: site.stats.tiresInStock, l: 'banden op voorraad' },
              ].map((s, i) => (
                <div key={i} className={styles.stat}>
                  <div className={styles.statN}>{s.n}</div>
                  <div className={styles.statL}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroMedia}>
            <div className={styles.heroImgWrap}>
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85"
                alt="Professionele monteur wisselt band in de werkplaats van Probandenservice Culemborg"
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className={styles.heroImgOverlay} aria-hidden="true" />
            </div>
            <div className={styles.specCard}>
              <div className={styles.specCheck} aria-hidden="true">✓</div>
              <div>
                <div className={styles.specTitle}>Deskundige technici</div>
                <div className={styles.specSub}>SERVICEGARANTIE · CULEMBORG</div>
              </div>
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
              Of u nu spoedig nieuwe banden nodig heeft of een afspraak plant voor uitlijnen — wij maken het simpel.
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
            <div className={styles.starSub}>GOOGLE BEOORDELINGEN</div>
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
