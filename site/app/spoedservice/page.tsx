import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { PageHeader } from '@/components/PageHeader';
import { ProcessSteps } from '@/components/ProcessSteps';
import { Reviews } from '@/components/Reviews';
import { Button } from '@/components/Button';
import { Stripe } from '@/components/Stripe';
import styles from './spoed.module.css';

export const metadata: Metadata = {
  title: '24/7 Spoedservice — binnen 45 minuten naast u',
  description:
    'Lekke band, pech onderweg? Wij rijden naar je toe — 24 uur per dag, 7 dagen per week. Tijdelijke band ter plekke, kapotte band nemen we mee. Culemborg en omgeving.',
  alternates: { canonical: '/spoedservice' },
};

const steps = [
  { n: '01', t: 'Bel de spoedlijn', d: 'Eén nummer, 24/7 bereikbaar. Onze monteur neemt direct op.' },
  { n: '02', t: 'Wij rijden uit', d: `Zo snel mogelijk naast je. Culemborg en omgeving. Je weet vooraf wat het kost.` },
  { n: '03', t: 'Ter plekke verholpen', d: 'Band gerepareerd of vervangen. In het ergste geval slepen wij naar de werkplaats.' },
];

const faqs = [
  { q: 'Hoe snel staan jullie er?', a: `Zo snel mogelijk. We rijden direct naar je toe zodra je belt. In Culemborg en omgeving, afhankelijk van je locatie en het verkeer.` },
  { q: 'Wat kost een spoedrit?', a: 'De prijs hangt af van wat er moet gebeuren (reparatie, vervanging, slepen). Wij stellen de prijs altijd vooraf vast — geen verrassingen achteraf.' },
  { q: 'Wat als mijn band niet meer te redden is?', a: 'Dan monteren we ter plekke jouw reservewiel, of slepen we jouw auto naar onze werkplaats. Jij beslist — wij adviseren.' },
  { q: 'Werken jullie ook ’s nachts en in het weekend?', a: 'Ja, 365 dagen per jaar, 24 uur per dag. Voor dezelfde reactietijd.' },
];

export default function SpoedservicePage() {
  return (
    <>
      {/* Red header — different from inner pages, signals urgency */}
      <section className={styles.redHero}>
        <div className={styles.redPattern} aria-hidden="true" />
        <div className={`container ${styles.redInner}`}>
          <div className={styles.liveTag}>● LIVE · NU BEREIKBAAR</div>
          <h1 className={styles.h1}>
            LEKKE BAND?<br />
            <span>WIJ RIJDEN UIT.</span>
          </h1>
          <p className={styles.lede}>
            Eén telefoontje en onze spoedwagen rijdt — dag en nacht, Culemborg en omgeving.
            Zo snel mogelijk naast je. Vaste prijs vooraf, geen verrassingen achteraf.
          </p>

          <div className={styles.callBox}>
            <div>
              <div className={styles.callLabel}>SPOEDLIJN 24 / 7</div>
              <a href={`tel:${site.emergencyPhone.tel}`} className={styles.callNumber}>
                {site.emergencyPhone.display}
              </a>
            </div>
            <Button href={`tel:${site.emergencyPhone.tel}`} variant="primary">
              Nu bellen
            </Button>
          </div>

          <ul className={styles.kpis}>
            <li><strong>Zo snel mogelijk</strong><span>reactietijd</span></li>
            <li><strong>24/7</strong><span>365 dagen per jaar</span></li>
            <li><strong>Culemborg en omgeving</strong><span>werkgebied</span></li>
            <li><strong>Vaste prijs</strong><span>vooraf vastgesteld</span></li>
          </ul>
        </div>
        <Stripe color="#000" />
      </section>

      {/* Process */}
      <section className={styles.section}>
        <div className={`container ${styles.processGrid}`}>
          <div>
            <div className="eyebrow">HOE WERKT HET</div>
            <h2 className={styles.h2}>Drie stappen.<br />Geen gedoe.</h2>
            <p className={styles.processIntro}>
              U belt — wij rijden — uw auto rijdt weer. Zo simpel houden wij het, ook midden in de nacht.
            </p>
          </div>
          <ProcessSteps steps={steps} />
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className="eyebrow">VEELGESTELDE VRAGEN</div>
          <h2 className={styles.h2}>Wat u wilt weten.</h2>
          <dl className={styles.faq}>
            {faqs.map(f => (
              <div key={f.q} className={styles.faqRow}>
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Reviews */}
      <section className={styles.section}>
        <div className="container">
          <div className="eyebrow">SPOEDKLANTEN OVER ONS</div>
          <h2 className={styles.h2}>Reddertjes — zeggen ze.</h2>
          <div style={{ marginTop: 40 }}><Reviews /></div>
        </div>
      </section>
    </>
  );
}
