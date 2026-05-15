import type { Metadata } from 'next';
import { site } from '@/lib/site';
import { PageHeader } from '@/components/PageHeader';
import { EmergencyBand } from '@/components/EmergencyBand';
import styles from './faq.module.css';

export const metadata: Metadata = {
  title: 'Veelgestelde vragen',
  description:
    'Antwoorden op de meest gestelde vragen over banden, uitlijnen, airco en onze 24/7 spoedservice.',
  alternates: { canonical: '/faq' },
};

const groups = [
  {
    title: 'Banden & advies',
    items: [
      { q: 'Hoe weet ik wanneer mijn banden aan vervanging toe zijn?', a: 'De wettelijke minimum profieldiepte is 1,6mm, maar wij adviseren al vanaf 3mm te vervangen — vooral voor winterbanden. Loop bij ons binnen voor een gratis profielcheck.' },
      { q: 'Welke band past bij mijn auto?', a: 'Dat hangt af van uw rijstijl, kilometrage en het soort wegen waar u op rijdt. Wij adviseren op basis van uw situatie — niet op marge. Eerlijk advies, geen verkooppraatjes.' },
      { q: 'Allseasons of zomer- en winterset?', a: 'Voor minder dan 15.000 km per jaar en vooral stadsverkeer is een goede allseason prima. Rijdt u veel snelweg of de Alpen op? Dan adviseren we een aparte zomer- en winterset.' },
      { q: 'Voeren jullie alle merken?', a: 'Wij voeren Michelin, Continental, Pirelli, Bridgestone, Goodyear, Dunlop, Hankook, Nokian en Vredestein. Andere merken? Vragen kost niets.' },
    ],
  },
  {
    title: '3D Uitlijnen',
    items: [
      { q: 'Wat is 3D uitlijnen?', a: 'In plaats van één meetpunt per wiel gebruikt 3D uitlijnen vier camera’s. De software meet caster, camber en toe — tot op tienden van een graad nauwkeurig. Het resultaat krijgt u in een rapport mee.' },
      { q: 'Wanneer is uitlijnen nodig?', a: 'Na het stoten van een trottoirband, na het rijden door een diepe kuil, bij merkbaar trekken van de auto, of standaard bij vier nieuwe banden. Een check kost niets.' },
      { q: 'Hoe lang duurt 3D uitlijnen?', a: '45 minuten gemiddeld, inclusief meting voor en na.' },
    ],
  },
  {
    title: 'Airco',
    items: [
      { q: 'Hoe vaak moet ik mijn airco laten vullen?', a: 'Een airco verliest gemiddeld 10% van zijn koudemiddel per jaar. Na 3 — 5 jaar koelt hij merkbaar minder. Dan is het tijd voor een vulbeurt.' },
      { q: 'R134a of R1234yf — wat heb ik?', a: 'Auto’s tot circa 2017 hebben meestal R134a. Auto’s daarna R1234yf. Wij hebben beide op voorraad en checken voor u welk type u nodig heeft.' },
      { q: 'Wat doen jullie bij een vulbeurt?', a: 'Bijvullen, lekkagecontrole met UV, optioneel filterwissel en ontsmetting tegen bacteriën en muffe geur.' },
    ],
  },
  {
    title: '24/7 Spoed',
    items: [
      { q: 'Hoe snel staan jullie er?', a: 'Zo snel mogelijk. We rijden direct naar je toe zodra je belt. In Culemborg en omgeving — afhankelijk van je locatie en het verkeer.' },
      { q: 'Wat kost een spoedrit?', a: 'Dat hangt af van wat er moet gebeuren. Wij stellen de prijs altijd vooraf vast — geen verrassingen achteraf.' },
      { q: 'Werken jullie ook ’s nachts en in het weekend?', a: 'Ja, 365 dagen per jaar, 24 uur per dag. Voor dezelfde reactietijd.' },
      { q: 'Wat als mijn band niet meer te redden is?', a: 'Dan monteren we ter plekke uw reservewiel, of slepen we uw auto naar onze werkplaats.' },
    ],
  },
  {
    title: 'Praktisch',
    items: [
      { q: 'Moet ik een afspraak maken?', a: 'Voor montage en uitlijnen graag wel — dan staan uw banden klaar. Spoed kan altijd, ook zonder afspraak.' },
      { q: 'Kan ik wachten in de werkplaats?', a: 'Bij ons in de showroom is koffie, water en wifi. De meeste klussen duren onder de 60 minuten.' },
      { q: 'Slaan jullie mijn andere set op?', a: 'Ja, €49 per seizoen per set. Inclusief profielcheck en een automatische herinnering voor de volgende wissel.' },
      { q: 'Kan ik met de pin betalen?', a: 'Pin, contactloos, en factuur op rekening voor zakelijke klanten.' },
    ],
  },
];

// FAQ structured data — helps Google show direct answers
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: groups.flatMap(g =>
    g.items.map(it => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHeader
        eyebrow="VEELGESTELDE VRAGEN"
        title={<>Wat u wilt weten.</>}
        lede="Een overzicht van de vragen die wij dagelijks krijgen — over banden, uitlijnen, airco en onze spoeddienst. Staat uw vraag er niet bij? Bel ons gerust."
        crumbs={[{ href: '/', label: 'Home' }, { label: 'FAQ' }]}
      />

      <section className={styles.body}>
        <div className="container">
          {groups.map(g => (
            <div key={g.title} className={styles.group}>
              <div className={styles.groupHead}>
                <div className={styles.groupNum}>{String(groups.indexOf(g) + 1).padStart(2, '0')}</div>
                <h2 className={styles.groupTitle}>{g.title}</h2>
              </div>
              <dl className={styles.list}>
                {g.items.map(it => (
                  <details key={it.q} className={styles.item}>
                    <summary>
                      <span>{it.q}</span>
                      <span className={styles.chev} aria-hidden="true">+</span>
                    </summary>
                    <p>{it.a}</p>
                  </details>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </section>

      <EmergencyBand
        heading={<>Vraag niet beantwoord?<br />Bel ons.</>}
        subline="Wij nemen altijd de tijd voor uw vraag — ook als u uiteindelijk niets bestelt."
      />
    </>
  );
}
