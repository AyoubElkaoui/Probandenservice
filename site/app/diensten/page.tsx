import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/services';
import { PageHeader } from '@/components/PageHeader';
import { ServiceGrid } from '@/components/ServiceGrid';
import { EmergencyBand } from '@/components/EmergencyBand';
import { Reviews } from '@/components/Reviews';
import s from './diensten.module.css';

export const metadata: Metadata = {
  title: 'Diensten — Banden, uitlijnen, airco & spoed',
  description:
    'Alle bandenservices in Culemborg — banden kopen, wisselen, 3D uitlijnen, airco vullen, 24/7 spoedservice en bandenopslag. Deskundige technici, servicegarantie.',
  alternates: { canonical: '/diensten' },
};

const uspItems = [
  {
    title: 'Servicegarantie',
    text: 'Op al ons werk geven wij servicegarantie. Klopt er iets niet, lossen we het op.',
  },
  {
    title: '24/7 bereikbaar voor spoed',
    text: 'Lekke band midden in de nacht? Wij zijn altijd bereikbaar voor spoedmeldingen.',
  },
  {
    title: 'Vrijblijvende offerte',
    text: 'Wil je eerst weten wat het kost? Geen probleem — vraag een offerte aan zonder verplichtingen.',
  },
  {
    title: '5.0 Google (158 reviews)',
    text: 'Onze klanten waarderen ons met een 5.0 op Google. Eerlijk werk, eerlijk advies.',
  },
];

const lpCards = [
  {
    num: '01',
    title: 'BANDEN KOPEN',
    text: 'Alles over het kiezen van de juiste band voor jouw auto, rijstijl en budget.',
    href: '/lp/banden-kopen',
  },
  {
    num: '02',
    title: 'BANDEN WISSELEN',
    text: 'Hoe en wanneer je banden wisselt, wat er komt kijken en hoe lang het duurt.',
    href: '/lp/banden-wisselen',
  },
  {
    num: '03',
    title: '3D UITLIJNEN',
    text: 'Waarom uitlijnen belangrijk is, hoe een Hunter 3D-machine werkt en wat het je oplevert.',
    href: '/lp/uitlijnen',
  },
  {
    num: '04',
    title: 'AIRCO SERVICE',
    text: 'Airco bijvullen, R134a vs R1234yf, lekkagecontrole — alles uitgelegd.',
    href: '/lp/airco',
  },
  {
    num: '05',
    title: '24/7 SPOEDSERVICE',
    text: 'Wat je kunt verwachten bij een spoedmelding, hoe snel we ter plaatse zijn.',
    href: '/lp/spoedservice',
  },
  {
    num: '06',
    title: 'BANDENOPSLAG',
    text: 'Veilig je seizoensbanden opslaan. Hoe het werkt en wat het kost.',
    href: '/lp/bandenopslag',
  },
];

const dienstenReviews = [
  {
    name: 'ERWU-projects',
    role: 'Google recensie · 5 maanden geleden',
    text: '"Hele aardige en kundige eigenaar van dit kleine bedrijf. Hele scherpe prijs voor winterbanden. De wachttijd is alleen totdat de banden daar bezorgd worden. Daarna supersnel geholpen. Aanrader."',
    stars: 5,
  },
  {
    name: 'Romke Wolters',
    role: 'Google recensie',
    text: '"Heel goed en vakkundig geholpen door Pro Banden Service. Twee voorbanden moesten worden vervangen en gebalanceerd. Ik kon snel een afspraak maken. Top service."',
    stars: 5,
  },
  {
    name: 'Erik de Rooij',
    role: 'Google recensie',
    text: '"Achterbanden laten vervangen. Betreft een klein bedrijfje dat ook buiten reguliere werktijden reageert en beschikbaar is. Aanrader voor iedereen die snel geholpen wil worden."',
    stars: 5,
  },
];

export default function DienstenPage() {
  return (
    <>
      <PageHeader
        eyebrow="DIENSTEN"
        title={<>Zes vakken.<br />Eén werkplaats.</>}
        lede={`Van een eenvoudige bandenwissel tot een nachtelijke pechmelding — wij doen alles wat jouw banden en wielen aangaan. Hieronder de ${services.length} diensten waar wij dagelijks mee bezig zijn.`}
        crumbs={[{ href: '/', label: 'Home' }, { label: 'Diensten' }]}
      />

      {/* ── USP STRIP ─────────────────────────────────────── */}
      <div className={s.uspStrip}>
        {uspItems.map((usp) => (
          <div key={usp.title} className={s.uspItem}>
            <span className={s.uspCheck}>✓</span>
            <p className={s.uspTitle}>{usp.title}</p>
            <p className={s.uspText}>{usp.text}</p>
          </div>
        ))}
      </div>

      {/* ── SERVICES GRID ─────────────────────────────────── */}
      <div style={{ padding: '64px 0 120px', background: 'var(--bg)' }}>
        <div className="container">
          <ServiceGrid />
        </div>
      </div>

      {/* ── LP LINKS ──────────────────────────────────────── */}
      <section className={s.lpSection}>
        <div className={s.lpSectionInner}>
          <p className={s.lpEyebrow}>MEER LEZEN OVER EEN DIENST?</p>
          <h2 className={s.lpHeading}>
            ALLES WAT<br />JE WILT WETEN.
          </h2>
          <p className={s.lpIntro}>
            Elk van onze diensten heeft een uitgebreide informatiepagina waar je meer leest over
            waarom, hoe en wat we doen.
          </p>
          <div className={s.lpGrid}>
            {lpCards.map((card) => (
              <Link key={card.href} href={card.href} className={s.lpCard}>
                <span className={s.lpCardNum}>{card.num}</span>
                <h3 className={s.lpCardTitle}>{card.title}</h3>
                <p className={s.lpCardText}>{card.text}</p>
                <span className={s.lpCardArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────── */}
      <section className={s.reviewsSection}>
        <div className={s.reviewsInner}>
          <p className={s.reviewsEyebrow}>KLANTEN AAN HET WOORD</p>
          <h2 className={s.reviewsHeading}>
            ZO KLINKT<br />GOED WERK.
          </h2>
          <Reviews reviews={dienstenReviews} />
        </div>
      </section>

      <EmergencyBand />
    </>
  );
}
