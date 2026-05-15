import type { Metadata } from 'next';
import { Target, Wind, Car } from 'lucide-react';
import { site } from '@/lib/site';
import { Button } from '@/components/Button';
import { Reviews } from '@/components/Reviews';
import { EmergencyBand } from '@/components/EmergencyBand';
import s from '../actie.module.css';

export const metadata: Metadata = {
  title: 'Alles in één bezoek — Banden, uitlijnen, airco | Probandenservice Culemborg',
  description:
    'Banden wisselen, uitlijnen, airco bijvullen — wij doen het in één keer. U hoeft maar één keer te komen. Efficient, vakkundig, klaar.',
  alternates: { canonical: '/actie/road-trip' },
  openGraph: {
    title: 'Alles in één bezoek. Banden, uitlijnen, airco.',
    description:
      'Geen twee keer langs. Wij plannen alles achter elkaar in. U rijdt naar binnen met drie vragen en vertrekt met drie antwoorden.',
    images: [
      'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?auto=format&fit=crop&w=1200&q=85',
    ],
  },
};

const services = [
  {
    n: '1',
    icon: <Car size={28} />,
    title: 'BANDEN WISSELEN',
    text: 'Alle vier banden gewisseld en dynamisch gebalanceerd. Of u nu nieuwe banden koopt of zomerbanden op wintervelgen wisselt — klaar in gemiddeld 45 minuten. Inclusief spanning check op alle vier.',
  },
  {
    n: '2',
    icon: <Target size={28} />,
    title: '3D UITLIJNEN',
    text: 'Na het monteren van nieuwe banden moet u altijd uitlijnen. Beginnen op een scheef onderstel sloopt nieuwe banden al na een paar duizend kilometer. Wij meten met een Hunter 3D-machine en corrigeren direct.',
  },
  {
    n: '3',
    icon: <Wind size={28} />,
    title: 'AIRCO BIJVULLEN',
    text: 'R134a of R1234yf — wij hebben beide. Bijvullen inclusief lekkagecontrole en meting voor en na. Als het systeem goed zit, zeggen we dat ook gewoon. Geen onnodige service verkopen.',
  },
];

const reviews = [
  {
    name: 'Lars Hendriks',
    role: 'Culemborg · 3 weken geleden',
    text: '"In één ochtend alles gedaan. Banden gemonteerd, uitlijning gecorrigeerd — die was scheef, wisten we niet — en airco gecheckt. Twee uur en ik was klaar. Super."',
    stars: 5,
  },
  {
    name: 'Naomi van Dijk',
    role: 'Spijkenisse · 1 maand geleden',
    text: '"Ze zijn eerlijk over wat nodig is. Mijn banden hadden geen nieuwe nodig qua profiel. Dat hebben ze gewoon gezegd. Alleen uitlijnen en airco. Goed advies."',
    stars: 5,
  },
  {
    name: 'David Okonkwo',
    role: 'Capelle a/d IJssel · 2 maanden geleden',
    text: '"Banden, uitlijnen, airco — alles in één bezoek geregeld voor de vakantie naar Italië. Heenrit én terugreis zonder problemen. Dat zegt genoeg."',
    stars: 5,
  },
];

export default function RoadTripPage() {
  return (
    <>
      {/* ── HERO — minimal/typographic ────────────────────── */}
      <section className={s.heroDark}>
        <div className={s.heroDarkContent}>
          <div className={s.serviceTag}>Alles in één bezoek</div>

          <h1 className={s.heroH1}>
            ALLES IN<br />
            <span className={s.heroH1Accent}>ÉÉN</span><br />
            BEZOEK.
          </h1>

          <p className={s.heroLede}>
            Banden wisselen, uitlijnen, airco bijvullen — wij doen het in één keer.
            U hoeft maar één keer te komen.
          </p>

          <div className={s.heroCtaRow}>
            <Button href="/contact">AFSPRAAK MAKEN</Button>
            <Button href={`tel:${site.phone.tel}`} variant="ghost">
              BEL {site.phone.display}
            </Button>
          </div>
        </div>
      </section>

      {/* ── NUMBERED SERVICES ─────────────────────────────── */}
      <section className={s.sectionAlt}>
        <div className={s.container}>
          <p className={s.sectionEyebrow}>WAT WE IN ÉÉN BEZOEK DOEN</p>
          <h2 className={s.sectionH2}>
            DRIE DIENSTEN.<br />GEEN GEDOE.
          </h2>

          <div className={s.numberedList}>
            {services.map((svc) => (
              <div key={svc.n} className={s.numberItem}>
                <span className={s.numberN}>{svc.n}</span>
                <div className={s.numberContent}>
                  <h3 className={s.numberTitle}>{svc.title}</h3>
                  <p className={s.numberText}>{svc.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW LONG DOES IT TAKE ─────────────────────────── */}
      <section className={s.timelineSection}>
        <div className={s.container}>
          <p className={s.sectionEyebrow}>HOELANG DUURT HET</p>
          <h2 className={s.sectionH2}>
            TWEE UUR.<br />ALLES GEDAAN.
          </h2>

          <div className={s.timelineGrid}>
            <div className={s.timelineStep}>
              <span className={s.timelineNum}>01</span>
              <h3 className={s.timelineTitle}>Banden wisselen + balanceren</h3>
              <p className={s.timelineText}>
                Gemiddeld 45 minuten voor vier banden. Inclusief torquen op de juiste koppelwaarden
                en bandenspanning op fabriekswaarden.
              </p>
            </div>
            <div className={s.timelineStep}>
              <span className={s.timelineNum}>02</span>
              <h3 className={s.timelineTitle}>3D uitlijnen</h3>
              <p className={s.timelineText}>
                Direct daarna de uitlijning. Meting duurt een kwartier. Correctie er bij —
                samen zo&rsquo;n 30 tot 45 minuten. Auto staat recht als hij hoort te staan.
              </p>
            </div>
            <div className={s.timelineStep}>
              <span className={s.timelineNum}>03</span>
              <h3 className={s.timelineTitle}>Airco bijvullen + check</h3>
              <p className={s.timelineText}>
                Kan deels parallel lopen met de uitlijning. Een uur in totaal voor vullen,
                lekkagecheck en meting voor en na. U rijdt weg met koud.
              </p>
            </div>
          </div>

          <div className={s.honestNote}>
            <p className={s.honestNoteTitle}>Heeft u niet alle drie nodig?</p>
            <p className={s.honestNoteText}>
              Geen probleem. Wij doen gewoon wat nodig is. Als uw banden er prima bij staan,
              zeggen we dat. Heeft u alleen airco en uitlijnen nodig — dan is het dat.
              Geen pakket om een pakket te verkopen.
            </p>
          </div>
        </div>
      </section>

      {/* ── TRUST BLOCK ───────────────────────────────────── */}
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

      {/* ── CTA BAR ───────────────────────────────────────── */}
      <div className={s.ctaBar}>
        <div className={s.ctaBarInner}>
          <div className={s.ctaBarText}>
            <h2 className={s.ctaBarH2}>
              ÉÉN BEZOEK.<br />KLAAR.
            </h2>
            <p className={s.ctaBarSub}>
              Bel ons en zeg wat u nodig heeft. We plannen het in een keer.
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
              <p className={s.sectionEyebrow}>KLANTEN OVER ONS</p>
              <h2 className={s.sectionH2}>
                GEREDEN.<br />GEARRIVEERD.
              </h2>
            </div>
          </div>
          <Reviews reviews={reviews} />
        </div>
      </section>

      {/* ── EMERGENCY ─────────────────────────────────────── */}
      <EmergencyBand />
    </>
  );
}
