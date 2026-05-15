import type { Metadata } from 'next';
import Image from 'next/image';
import { site } from '@/lib/site';
import { PageHeader } from '@/components/PageHeader';
import { Reviews } from '@/components/Reviews';
import { EmergencyBand } from '@/components/EmergencyBand';
import styles from './over.module.css';

export const metadata: Metadata = {
  title: 'Over ons | Probandenservice Culemborg',
  description:
    'Probandenservice in Culemborg. Deskundige technici, servicegarantie op al ons werk. Van stadsstraten tot snelwegen — 24/7 bereikbaar voor spoed.',
  alternates: { canonical: '/over-ons' },
};

export default function OverOnsPage() {
  return (
    <>
      <PageHeader
        eyebrow={`OVER ${site.name.toUpperCase()}`}
        title={<>Probandenservice.<br />Altijd in beweging.</>}
        lede="Van stadsstraten tot snelwegen. Deskundige technici, servicegarantie op al ons werk, 24/7 bereikbaar voor spoed."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Over ons' }]}
      />

      {/* ── Manifesto block ── */}
      <section className={styles.manifesto}>
        <div className={`container ${styles.manifestoInner}`}>
          <div className={styles.left}>
            <div className="eyebrow">WAAR WIJ VOOR STAAN</div>
            <h2 className={styles.h2}>
              Eerlijk advies.<br />
              Vakkundig werk.<br />
              Scherpe prijs.
            </h2>
          </div>
          <div className={styles.right}>
            <p className={styles.bigP}>
              Een goede band ziet u niet. Maar op nat asfalt bij 90 km/u merk je het verschil tussen
              3 mm en 1,5 mm profiel meteen. <strong>Dát is ons werk.</strong>
            </p>
            <p className={styles.bigP}>
              Zijn je banden nog goed? Dan zeggen we dat. Past er een goedkoper merk bij je rijstijl?
              Dan raden we dat aan. Bellen om 23:00 met pech? Wij rijden uit.
              Zo werken wij — altijd al.
            </p>
          </div>
        </div>
      </section>

      {/* ── Photo grid ── */}
      <section className={styles.photoGrid}>
        <div className={styles.photoLeft}>
          <div className={styles.photoSlot} style={{ aspectRatio: '4/5' }}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85"
              alt="De werkplaats van Probandenservice Culemborg — professionele bandenservice"
              fill
              sizes="(max-width: 720px) 100vw, 40vw"
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            />
          </div>
        </div>
        <div className={styles.photoRight}>
          <div className={styles.photoSlot} style={{ aspectRatio: '4/3' }}>
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85"
              alt="Monteur van Probandenservice helpt een klant"
              fill
              sizes="(max-width: 720px) 100vw, 30vw"
              style={{ objectFit: 'cover', objectPosition: 'center right' }}
            />
          </div>
          <div className={styles.photoSlot} style={{ aspectRatio: '4/3' }}>
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85"
              alt="Ruim assortiment banden op voorraad bij Probandenservice"
              fill
              sizes="(max-width: 720px) 100vw, 30vw"
              style={{ objectFit: 'cover', objectPosition: 'left center' }}
            />
          </div>
        </div>
      </section>

      {/* ── Wat wij doen ── */}
      <section className={styles.timeline}>
        <div className="container">
          <div className="eyebrow">WAT WIJ DOEN</div>
          <h2 className={styles.h2Section}>
            Zes diensten.<br />
            Eén adres.
          </h2>

          <ol className={styles.timelineList}>
            {[
              { y: '01', t: 'Bandenverkoop', d: 'Groot assortiment zomer-, winter- en all-seasonbanden. Alle merken, alle maten.' },
              { y: '02', t: 'Bandenwissel', d: 'Vakkundig gewisseld en gebalanceerd. Klaar terwijl jij wacht.' },
              { y: '03', t: 'Airco vullen', d: 'R134a en R1234yf. Inclusief lekcheck. In een uur geregeld.' },
              { y: '04', t: '3D-Uitlijnen', d: 'Geavanceerde uitlijning voor optimale wegligging en minder bandenslijtage.' },
              { y: '05', t: 'Spoedservice', d: 'Tijdelijke band ter plekke, 24/7 bereikbaar. Kapotte band nemen we mee.' },
              { y: '06', t: 'Bandenopslag', d: 'Jouw set bewaard tot de volgende wisseling. Inclusief profielcheck.' },
            ].map(m => (
              <li key={m.y} className={styles.timelineRow}>
                <span className={styles.timelineYear}>{m.y}</span>
                <div>
                  <h3 className={styles.timelineTitle}>{m.t}</h3>
                  <p className={styles.timelineBody}>{m.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className={styles.reviews}>
        <div className="container">
          <div className="eyebrow">WAT KLANTEN ZEGGEN</div>
          <h2 className={styles.h2Section}>
            TEVREDEN KLANTEN.<br />
            ALTIJD ONDERWEG.
          </h2>
          <div style={{ marginTop: 40 }}><Reviews /></div>
        </div>
      </section>

      <EmergencyBand
        heading={<>Een keer kennismaken?<br />Loop binnen.</>}
        subline={`Onze deur staat open: ${site.address.street}, ${site.address.city}. Of bel — wij maken altijd tijd.`}
      />
    </>
  );
}
