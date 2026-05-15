import type { Metadata } from 'next';
import Image from 'next/image';
import { Wind, Thermometer, CheckCircle, Clock, Droplets, Search } from 'lucide-react';
import { site } from '@/lib/site';
import { Button } from '@/components/Button';
import { Reviews } from '@/components/Reviews';
import { EmergencyBand } from '@/components/EmergencyBand';
import s from '../actie.module.css';

export const metadata: Metadata = {
  title: 'Airco bijvullen — In één uur opgelost | Probandenservice Culemborg',
  description:
    'Elk jaar verliest een airco gemiddeld 10% van zijn koudemiddel. Na drie, vier jaar koelt hij merkbaar minder. Wij vullen bij, checken op lekkages en u rijdt weg.',
  alternates: { canonical: '/actie/airco-zomer' },
  openGraph: {
    title: 'Airco werkt niet? In één uur opgelost.',
    description:
      'R134a én R1234yf — wij hebben beide. Bijvullen, lekkagecheck, meting voor en na. Klaar terwijl u wacht.',
    images: [
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=85',
    ],
  },
};

const serviceItems = [
  {
    icon: <Wind size={20} />,
    title: 'Koudemiddel bijvullen',
    text: 'Op fabrieksspecificatie bijgevuld. R134a voor oudere auto\'s, R1234yf voor nieuwere modellen. U hoeft niet zelf uit te zoeken welk type.',
  },
  {
    icon: <Search size={20} />,
    title: 'Lekkagecontrole met UV-licht',
    text: 'Het volledige systeem gecontroleerd op lekkages. Als er iets lekt, weet u het — en beslist u zelf of u het direct laat repareren.',
  },
  {
    icon: <Thermometer size={20} />,
    title: 'Uitblaastemperatuur meting',
    text: 'Gemeten voor en na het bijvullen. Zo ziet u zwart op wit dat uw airco weer koud blaast.',
  },
  {
    icon: <Droplets size={20} />,
    title: 'Pollenfilter check',
    text: 'Wij bekijken uw pollenfilter. Als hij aan vervanging toe is, zeggen we dat. Verplicht is het niet — u beslist.',
  },
  {
    icon: <Clock size={20} />,
    title: 'Klaar in één uur',
    text: 'Gemiddeld een uur. U kunt in de wachtkamer zitten of even boodschappen doen. Geen halve dag weg.',
  },
  {
    icon: <CheckCircle size={20} />,
    title: 'Beide typen koelmiddel op voorraad',
    text: 'R134a én R1234yf. Niet alle garages hebben beide. Wij wel. U rijdt met welke auto dan ook gewoon bij ons naartoe.',
  },
];

const reviews = [
  {
    name: 'Kevin Mostert',
    role: 'Culemborg · 1 maand geleden',
    text: '"Airco blies al tijden niet koud. Binnen een uur gevuld, lek gevonden en gerepareerd. Rijdt nu als een koelkast. Duidelijk uitgelegd wat er was."',
    stars: 5,
  },
  {
    name: 'Yasmine Oufkir',
    role: 'Schiedam · 2 weken geleden',
    text: '"Snel en netjes. De UV-check gaf direct aan waar het probleem zat. Geen gedoe, gewoon opgelost. Alles in minder dan een uur."',
    stars: 5,
  },
  {
    name: 'Rob Dijkstra',
    role: 'Ridderkerk · 6 weken geleden',
    text: '"Mijn R1234yf-systeem was leeg. Niet overal leverbaar maar hier geen probleem. Goed werk, vriendelijk personeel."',
    stars: 5,
  },
];

export default function AircoZomerPage() {
  return (
    <>
      {/* ── HERO (dark/cool blue tint) ─────────────────────── */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1600&q=85"
            alt="Professionele garage — airco service bij Probandenservice Culemborg"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
          />
        </div>
        <div className={s.heroOverlayCool} />

        <div className={s.heroContent}>
          <div className={s.serviceTagBlue}>Airco service</div>

          <h1 className={s.heroH1}>
            AIRCO WERKT NIET?<br />
            IN ÉÉN UUR<br />
            <span className={s.heroH1Blue}>OPGELOST.</span>
          </h1>

          <p className={s.heroLede}>
            Elk jaar verliest een airco gemiddeld 10% van zijn koudemiddel.
            Na drie, vier jaar koelt hij merkbaar minder. Wij vullen bij,
            checken op lekkages en u rijdt weg.
          </p>

          <div className={s.heroCtaRow}>
            <Button href="/contact">AFSPRAAK MAKEN</Button>
            <Button href={`tel:${site.phone.tel}`} variant="ghost">
              BEL {site.phone.display}
            </Button>
          </div>
        </div>
      </section>

      {/* ── WHY REFILL ────────────────────────────────────── */}
      <section className={s.sectionDark}>
        <div className={s.container}>
          <p className={s.sectionEyebrow}>WAAROM BIJVULLEN</p>
          <h2 className={s.sectionH2}>
            ELKE AIRCO<br />LEKT EEN BEETJE.
          </h2>

          <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: '1.65', maxWidth: '640px', marginBottom: '40px' }}>
            Zelfs een perfect werkend aircosysteem verliest elk jaar 5 tot 15 procent koudemiddel
            door micro-lekkages. Dat is normaal. Maar na drie of vier jaar voelt u het.
            U zet de airco op stand 4 en er komt lauwe lucht. Dan is bijvullen tijd.
          </p>

          <div className={s.factBar}>
            <p className={s.factBarTitle}>Dit kunt u zelf makkelijk testen</p>
            <p className={s.factBarText}>
              Zet de airco op de koudste stand. Houd uw hand voor de uitblaasopening.
              Koelt hij niet onder de 10°C? Dan is bijvullen waarschijnlijk nodig.
              Wij meten het exact — voor en na de service.
            </p>
          </div>
        </div>
      </section>

      {/* ── R134a vs R1234yf ──────────────────────────────── */}
      <section className={s.sectionAlt}>
        <div className={s.container}>
          <p className={s.sectionEyebrow}>TWEE TYPEN KOELMIDDEL</p>
          <h2 className={s.sectionH2}>
            R134a ÉN R1234yf.<br />WIJ HEBBEN BEIDE.
          </h2>

          <div className={s.aircoTypeGrid}>
            <div className={s.aircoTypeBlock}>
              <span className={s.aircoTypeTag}>R134a</span>
              <h3 className={s.aircoTypeTitle}>OUDERE AUTO&rsquo;S</h3>
              <p className={s.aircoTypeText}>
                R134a werd tot circa 2017 standaard gebruikt in personenwagens.
                Heeft u een auto van voor die tijd? Dan is dit het type dat u nodig heeft.
                Wij hebben het op voorraad en kunnen dezelfde dag vullen.
              </p>
            </div>
            <div className={s.aircoTypeBlock}>
              <span className={s.aircoTypeTag}>R1234yf</span>
              <h3 className={s.aircoTypeTitle}>NIEUWERE AUTO&rsquo;S</h3>
              <p className={s.aircoTypeText}>
                R1234yf is de nieuwe Europese standaard — verplicht vanaf 2017 voor
                nieuwe modellen. Niet alle garages hebben dit middel op voorraad.
                Wij wel. U hoeft geen specialist te zoeken.
              </p>
            </div>
          </div>

          <div className={s.honestNote}>
            <p className={s.honestNoteTitle}>Weet u niet welk type?</p>
            <p className={s.honestNoteText}>
              Geen probleem. Wij controleren dit bij binnenkomst. Het staat in uw voertuigpapieren
              of wij lezen het uit — u hoeft er zelf niets voor te doen.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICE INCLUDES ──────────────────────────────── */}
      <section className={s.section}>
        <div className={s.container}>
          <p className={s.sectionEyebrow}>WAT DE SERVICE INHOUDT</p>
          <h2 className={s.sectionH2}>
            MEER DAN<br />ALLEEN VULLEN.
          </h2>

          <div className={s.serviceGrid}>
            {serviceItems.map((item, i) => (
              <div key={i} className={s.serviceItem}>
                <span className={s.serviceItemIcon}>{item.icon}</span>
                <div className={s.serviceItemText}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAR ───────────────────────────────────────── */}
      <div className={s.ctaBar}>
        <div className={s.ctaBarInner}>
          <div className={s.ctaBarText}>
            <h2 className={s.ctaBarH2}>
              KOEL RIJDEN.<br />DIRECT GEHOLPEN.
            </h2>
            <p className={s.ctaBarSub}>
              Bel of boek online. Vaak dezelfde of volgende dag geholpen.
            </p>
          </div>
          <div className={s.ctaBarActions}>
            <a href={`tel:${site.phone.tel}`} className={s.ctaBarPhone}>
              {site.phone.display}
            </a>
            <span className={s.ctaBarNote}>{site.hours.weekdays} · {site.hours.saturday}</span>
          </div>
        </div>
      </div>

      {/* ── REVIEWS ───────────────────────────────────────── */}
      <section className={s.reviewsSection}>
        <div className={s.container}>
          <div className={s.reviewsHead}>
            <div>
              <p className={s.sectionEyebrow}>KLANTEN OVER AIRCO</p>
              <h2 className={s.sectionH2}>
                KOEL.<br />TEVREDEN.
              </h2>
            </div>
          </div>
          <Reviews reviews={reviews} />
        </div>
      </section>

      {/* ── TRUST ─────────────────────────────────────────── */}
      <div className={s.trustStrip}>
        <div className={s.trustStripInner}>
          <div className={s.trustBadge}>
            <span className={s.trustBadgeNumRed}>4.8 ★</span>
            <span className={s.trustBadgeLabel}>Google sterren</span>
          </div>
          <div className={s.trustBadge}>
            <span className={s.trustBadgeNum}>24/7</span>
            <span className={s.trustBadgeLabel}>Bereikbaar voor spoed</span>
          </div>
          <div className={s.trustBadge}>
            <span className={s.trustBadgeNum}>Deskundig</span>
            <span className={s.trustBadgeLabel}>Vakkundige technici</span>
          </div>
          <div className={s.trustBadge}>
            <span className={s.trustBadgeNum}>RDW</span>
            <span className={s.trustBadgeLabel}>Erkend bedrijf</span>
          </div>
        </div>
      </div>

      {/* ── EMERGENCY ─────────────────────────────────────── */}
      <EmergencyBand />
    </>
  );
}
