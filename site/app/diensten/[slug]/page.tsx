import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { services, getService } from '@/lib/services';
import { site } from '@/lib/site';
import { PageHeader } from '@/components/PageHeader';
import { EmergencyBand } from '@/components/EmergencyBand';
import { Button } from '@/components/Button';
import styles from './detail.module.css';

type Params = { slug: string };

// ── Service-specific content ──────────────────────────────────────────────────

type ServiceExtra = {
  photo: string;
  photoAlt: string;
  why: string;
  process: { title: string; text: string }[];
  includes: string[];
};

const serviceExtras: Record<string, ServiceExtra> = {
  'banden-verkoop': {
    photo:
      'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    photoAlt: 'Bandenwinkel met groot assortiment banden',
    why:
      'Goede banden redden levens. Een slijtage van 1,5 mm tekort verlengt je remweg bij 80 km/u met meerdere meters. Wij selecteren banden op veiligheid én rijgedrag — niet op marge. Of je nu dagelijks pendelt of kilometers vreet op de snelweg: de juiste band maakt het verschil dat je niet ziet tot het er toe doet.',
    process: [
      {
        title: 'Gratis profielcheck',
        text:
          'We beginnen altijd met een gratis meting van je huidige bandenprofiel. Zo weten we wat je hebt en kunnen we eerlijk advies geven.',
      },
      {
        title: 'Advies op maat',
        text:
          'Op basis van je voertuig, rijstijl en budget selecteren we de beste opties. Geen overkill, geen undersell — gewoon wat bij jou past.',
      },
      {
        title: 'Montage dezelfde dag',
        text:
          'Na je keuze monteren we de banden meteen. Inclusief balancering, bandenspanning en afvoer van de oude set. Klaar om te rijden.',
      },
    ],
    includes: [
      'Gratis profielcheck van je huidige banden',
      'Advies zonder koopverplichting',
      'Krasvrije touchless montage',
      'Balancering alle vier wielen',
      'Afvoer en recycling oude banden',
    ],
  },
  'banden-vervangen': {
    photo:
      'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    photoAlt: 'Monteur wisselt banden op professionele montagemachine',
    why:
      'Banden verwisselen lijkt simpel maar vereist precisie. Verkeerd gemonteerde banden beschadigen je velgen of veroorzaken trilling bij hoge snelheid. Een ongebalanceerd wiel van slechts enkele grammen is al genoeg om het stuur te laten trillen bij 120 km/u. Onze monteurs werken met touchless machines die je velg ontzien en kalibreren elk wiel tot op de gram nauwkeurig.',
    process: [
      {
        title: 'Check-in en inspectie',
        text:
          'Bij binnenkomst controleren we de staat van je banden, velgen en TPMS-sensoren. Zo weten we wat er nodig is voor we beginnen.',
      },
      {
        title: 'Touchless montage + balancering',
        text:
          'We monteren met onze krasvrije machine en balanceren elk wiel individueel. Geen beschadigde velg, geen trilling op de snelweg.',
      },
      {
        title: 'TPMS reset en aflevering',
        text:
          'Na montage resetten we eventuele TPMS-sensoren, stellen de bandenspanning in en leveren je auto netjes af.',
      },
    ],
    includes: [
      'Krasvrije touchless montage',
      'Balancering alle vier wielen',
      'TPMS controle en reset',
      'Bandenspanning instelling op specificatie',
      'Afvoer en recycling oude banden',
    ],
  },
  'airco-vullen': {
    photo:
      'https://images.pexels.com/photos/4489765/pexels-photo-4489765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    photoAlt: 'Monteur voert airco service uit aan auto',
    why:
      'Een airco verliest elk jaar 10–15% van zijn koudemiddel. Na 3 jaar koelt hij merkbaar minder. Bij 30°C buiten stijgt de temperatuur in een gesloten auto binnen minuten naar gevaarlijke waarden — zeker voor kinderen en huisdieren. Een jaarlijkse servicebeurt houdt je systeem op piekcapaciteit en voorkomt dure reparaties later.',
    process: [
      {
        title: 'Type koudemiddel bepalen',
        text:
          'We controleren je kentekendata en het airco-etiket onder de motorkap om precies te bepalen welk koudemiddel jouw systeem gebruikt: R134a of R1234yf.',
      },
      {
        title: 'Bijvullen met lekcontrole',
        text:
          'Het systeem wordt eerst vacuüm gezet om vocht te verwijderen, dan bijgevuld tot de fabriekscapaciteit. Tegelijk controleren we op lekkages met UV-tracer.',
      },
      {
        title: 'Testrit en rapport',
        text:
          'We meten de luchtuitlaattemperatuur voor en na de service en geven je een rapport mee. Koelt hij niet zoals verwacht? Dan gaan we dieper kijken.',
      },
    ],
    includes: [
      'R134a OF R1234yf (wij bepalen welke jouw auto nodig heeft)',
      'UV-lekkagecontrole',
      'Capaciteitsmeting voor en na de service',
      'Vacuüm trekken om vocht te verwijderen',
      'Advies over pollenfilter vervanging',
    ],
  },
  '3d-uitlijnen': {
    photo:
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    photoAlt: 'Auto op 3D-uitlijnbank in de werkplaats',
    why:
      '0,5 graad afwijking vreet 10% van je bandenleven en verhoogt je brandstofverbruik met 3%. Na een trottoirband, kuil of een nieuw stel banden is uitlijnen altijd de moeite waard. Zonder het te merken stuur jij constant bij — dat kost energie, concentratie en op de lange termijn geld aan nieuwe banden.',
    process: [
      {
        title: 'Auto op de meetbank',
        text:
          'We rijden je auto op onze 3D-meetbank en bevestigen sensoren aan alle vier wielen. Het systeem maakt direct een nulmeting van de huidige standen.',
      },
      {
        title: '3D-meting alle vier wielen',
        text:
          'Onze software berekent camber, caster en toe van elk wiel en vergelijkt dit met de fabrieksspecificaties voor jouw voertuig.',
      },
      {
        title: 'Correctie en rapport',
        text:
          'Afwijkingen corrigeren we ter plekke. Na afloop krijg je een digitaal rapport met de standen voor en na — zodat je precies weet wat er is gedaan.',
      },
    ],
    includes: [
      'Meting alle vier wielen (camber, caster, toe)',
      'Correctie waar nodig, binnen fabrieksspecificatie',
      'Digitaal rapport voor en na de correctie',
      'Advies over remmen en wielophanging',
      'Check op ongelijkmatige bandenslijtage',
    ],
  },
  spoedservice: {
    photo:
      'https://images.pexels.com/photos/3807516/pexels-photo-3807516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    photoAlt: 'Monteur helpt automobilist langs de weg',
    why:
      'Pech onderweg kiest geen tijdstip. Een lekke band op de snelweg, op een verlaten industrieterrein, midden in de nacht — het overkomt iedereen. Onze spoedlijn staat 24 uur open, ook op zondag en feestdagen. Wij rijden naar jou toe, zodat jij niet hoeft te wachten op een bergingsdienst die je soms uren laat staan.',
    process: [
      {
        title: 'Bellen, meteen opgenomen',
        text:
          'Bel onze spoedlijn en je krijgt direct iemand aan de lijn. We nemen je locatie op, schatten de rijtijd in en geven je een eerlijke verwachting.',
      },
      {
        title: 'Monteur rijdt direct naar je toe',
        text:
          'Onze monteur vertrekt zo snel mogelijk naar jouw locatie, volledig uitgerust met tijdelijke banden en gereedschap.',
      },
      {
        title: 'Band gerepareerd of tijdelijk gemonteerd',
        text:
          'Ter plekke monteren we een tijdelijke band waarmee je veilig tot 80 km/u kunt rijden. Je kapotte band nemen we mee voor reparatie in de werkplaats.',
      },
    ],
    includes: [
      'Tijdelijke band monteren ter plekke (veilig tot 80 km/u)',
      'Kapotte band meenemen naar de werkplaats',
      'Reparatie van de kapotte band (indien mogelijk)',
      'Advies en eerlijke prijs vooraf, geen verrassingen',
      'Beschikbaar 24/7, ook op zondag en feestdagen',
    ],
  },
  bandenopslag: {
    photo:
      'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    photoAlt: 'Nette bandenopslag in geconditioneerde werkplaats',
    why:
      'Banden in de schuur of kelder verouderen sneller door temperatuurwisselingen, vocht en UV-straling. Een winterband die zomer na zomer in een warme garage staat verliest zijn elasticiteit en is na 3 seizoenen al gevaarlijk — ook al ziet hij er goed uit. Geconditioneerde opslag bij 12–18°C verlengt de levensduur aanzienlijk en bespaart je op de lange termijn geld.',
    process: [
      {
        title: 'Banden inleveren na wisseling',
        text:
          'Direct na de seizoenswisseling labelen we je banden met jouw gegevens en de datum. Geen kans op verwisseling, altijd terug naar dezelfde eigenaar.',
      },
      {
        title: 'Opslag in geconditioneerde ruimte',
        text:
          'Je banden worden opgeslagen op een temperatuurgecontroleerde locatie, weg van vocht, UV en extreme temperatuurwisselingen.',
      },
      {
        title: 'Automatische seizoensherinnering',
        text:
          'We herinneren je automatisch wanneer het tijd is voor de volgende wisseling. Jij hoeft er niet aan te denken — wij regelen het.',
      },
    ],
    includes: [
      'Geconditioneerde opslag (12–18°C, geen vocht, geen UV)',
      'Professionele labeling per band en set',
      'Profielcheck bij elke in- en uitlevering',
      'Automatische herinnering bij seizoenswisseling',
      'Klaar voor montage bij ophalen',
    ],
  },
};

// ── Static params & metadata ──────────────────────────────────────────────────

export function generateStaticParams(): Params[] {
  return services.map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: `/diensten/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServiceDetail({ params }: { params: Params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const related = services.filter(s => s.slug !== service.slug).slice(0, 3);
  const extra = serviceExtras[service.slug];

  return (
    <>
      <PageHeader
        eyebrow={`DIENST · ${service.number}`}
        title={service.title}
        lede={service.tagline}
        crumbs={[
          { href: '/', label: 'Home' },
          { href: '/diensten', label: 'Diensten' },
          { label: service.title },
        ]}
      />

      <article className={styles.body}>
        <div className={`container ${styles.layout}`}>
          {/* ── Main content column ── */}
          <div className={styles.main}>

            {/* 1 · QUICK HERO BAR */}
            <div className={styles.quickHero}>
              <p className={styles.serviceVisualSub}>DIENST · {service.number}</p>
              <div className={styles.quickTags}>
                {service.tags.map(t => (
                  <span key={t} className={styles.quickTag}>{t}</span>
                ))}
              </div>
              {service.duration && (
                <p className={styles.quickDuration}>⏱ {service.duration}</p>
              )}
              <div className={styles.cta}>
                <Button href="/contact">Vraag vrijblijvende offerte</Button>
                <Button href={`tel:${site.phone.tel}`} variant="ghost">
                  Bel: {site.phone.display}
                </Button>
              </div>
            </div>

            {/* 2 · INTRO */}
            <p className={styles.intro}>{service.intro}</p>

            {/* 3 · DETAIL BODY */}
            {service.body.map((block, i) => (
              <section key={i} className={styles.block}>
                <h2 className={styles.h2}>{block.heading}</h2>
                <p className={styles.p}>{block.text}</p>
              </section>
            ))}

            {/* 4 · RELEVANT PHOTO */}
            {extra && (
              <div className={styles.servicePhoto}>
                <Image
                  src={extra.photo}
                  alt={extra.photoAlt}
                  fill
                  sizes="(max-width: 980px) 100vw, 65vw"
                  style={{ objectFit: 'cover' }}
                  priority={false}
                />
              </div>
            )}

            {/* 5 · WHY SECTION */}
            {extra && (
              <section className={styles.whySection}>
                <div className={styles.whyGrid}>
                  <div className={styles.whyText}>
                    <p className={styles.serviceVisualSub}>WAAROM DIT BELANGRIJK IS</p>
                    <h2 className={styles.h2}>Waarom is dit belangrijk?</h2>
                    <p className={styles.p}>{extra.why}</p>
                  </div>
                  <div className={styles.serviceVisual} aria-hidden="true">
                    <span className={styles.serviceVisualNum}>{service.number}</span>
                    <div className={styles.serviceVisualCopy}>
                      <div className={styles.serviceVisualTitle}>{service.title}</div>
                      <div className={styles.serviceVisualSub}>
                        {site.address.city} · {site.phone.display}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* 6 · PROCESS SECTION */}
            {extra && (
              <section className={styles.processSection}>
                <p className={styles.serviceVisualSub}>WERKWIJZE</p>
                <h2 className={styles.h2}>Hoe werkt het?</h2>
                <div>
                  {extra.process.map((step, i) => (
                    <div key={i} className={styles.processStep}>
                      <span className={styles.processN} aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className={styles.processTitle}>{step.title}</h3>
                        <p className={styles.p}>{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7 · WHAT'S INCLUDED */}
            {extra && (
              <section className={styles.includesSection}>
                <p className={styles.serviceVisualSub}>INBEGREPEN</p>
                <h2 className={styles.h2}>Wat is inbegrepen?</h2>
                <ul className={styles.includesList}>
                  {extra.includes.map((item, i) => (
                    <li key={i} className={styles.includesItem}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* 8 · QUOTE CTA SECTION */}
            <section className={styles.quoteCta}>
              <div className={styles.quoteCtaInner}>
                <h2 className={styles.quoteCtaH2}>
                  Klaar voor {service.shortTitle.toLowerCase()}?
                </h2>
                <p className={styles.quoteCtaText}>
                  Vraag een vrijblijvende offerte aan. Wij reageren binnen 1 werkdag.
                </p>
                <div className={styles.quoteCtaBtns}>
                  <Button href="/contact" variant="ghost">
                    Vrijblijvende offerte aanvragen
                  </Button>
                  <Button href={`tel:${site.phone.tel}`} variant="ghost">
                    Bel ons direct
                  </Button>
                </div>
              </div>
            </section>

          </div>

          {/* ── Sidebar ── */}
          <aside className={styles.aside}>
            <div className={styles.factCard}>
              <div className={styles.factHead}>OP EEN RIJ</div>
              <dl className={styles.facts}>
                {service.duration && (
                  <>
                    <dt>Duur</dt>
                    <dd>{service.duration}</dd>
                  </>
                )}
                <dt>Locatie</dt>
                <dd>{site.address.city}</dd>
                <dt>Werkgebied</dt>
                <dd>Utrecht, Nieuwegein,<br />Culemborg, Tiel e.o.</dd>
                <dt>Offerte</dt>
                <dd>Vrijblijvend</dd>
              </dl>
              <div className={styles.tagrow}>
                {service.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>

            <div className={styles.related}>
              <div className={styles.relatedHead}>ANDERE DIENSTEN</div>
              <ul>
                {related.map(r => (
                  <li key={r.slug}>
                    <Link href={`/diensten/${r.slug}`}>
                      <span className={styles.relNum}>{r.number}</span>
                      <span>{r.title}</span>
                      <span className={styles.relArrow} aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </article>

      <EmergencyBand />
    </>
  );
}
