import type { Metadata } from 'next';
import Image from 'next/image';
import { Wrench, Layers, ArrowRight } from 'lucide-react';
import { site } from '@/lib/site';
import { Button } from '@/components/Button';
import { Reviews } from '@/components/Reviews';
import { EmergencyBand } from '@/components/EmergencyBand';
import s from '../actie.module.css';

export const metadata: Metadata = {
  title: 'Zomerbanden — De juiste band voor uw auto | Probandenservice Culemborg',
  description:
    'Goede zomerbanden ziet u niet — maar op nat asfalt bij 80 km/u voelt u ze meteen. Eerlijk advies, alle merken op voorraad. Probandenservice Culemborg.',
  alternates: { canonical: '/actie/zomerbanden' },
  openGraph: {
    title: 'Zomerbanden. De juiste. Voor uw auto.',
    description:
      'Geen commissie, geen dure opties opdringen. Wij kijken wat bij uw auto en rijstijl past. Michelin, Continental, Pirelli, Vredestein en meer.',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85',
    ],
  },
};

const highlights = [
  {
    icon: <Wrench size={24} />,
    title: 'Wij rijden niet op commissie',
    text: 'Onze monteurs verdienen hetzelfde of u een dure of goedkope band koopt. Dat maakt het advies eerlijk. Als een budgetband prima bij u past, zeggen we dat gewoon.',
  },
  {
    icon: <Layers size={24} />,
    title: 'Alle merken op voorraad',
    text: 'Michelin, Continental, Pirelli, Vredestein, Hankook, Falken — vrijwel alle maten direct leverbaar. U hoeft niet te wachten op een bestelling.',
  },
  {
    icon: <ArrowRight size={24} />,
    title: 'Meer dan alleen zomerbanden',
    text: 'Twijfelt u? Wij hebben ook allseasonbanden. En als u winterbanden heeft staan: wissel ze op tijd. Wij adviseren welk type het beste bij uw situatie past.',
  },
];

const reviews = [
  {
    name: 'Thomas van der Berg',
    role: 'Culemborg · 1 maand geleden',
    text: '"Vorig jaar Michelins gehaald. Zit er nog op. Advies was eerlijk — geen dure opties opdringen. Ze zeiden dat een Continental voor mijn rijstijl net zo goed was. Geluisterd."',
    stars: 5,
  },
  {
    name: 'Fatima El Khattabi',
    role: 'Schiedam · 3 weken geleden',
    text: '"Continental P7s gehaald. Montage in 40 minuten klaar. Wisten ook precies welk profiel beter is voor mijn Renault op de snelweg. Geen bullshit, gewoon goed werk."',
    stars: 5,
  },
  {
    name: 'Pieter Janssen',
    role: 'Capelle a/d IJssel · 2 maanden geleden',
    text: '"Pirelli voor m\'n Golf. Verschil in grip op nat is direct voelbaar. Goed advies, nette werkplaats. Ze hadden m\'n maat direct op voorraad."',
    stars: 5,
  },
];

export default function ZomerbandenPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className={s.hero}>
        <div className={s.heroBg}>
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85"
            alt="Monteur werkt aan banden in de werkplaats van Probandenservice"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 45%' }}
          />
        </div>
        <div className={s.heroOverlay} />

        <div className={s.heroContent}>
          <div className={s.serviceTag}>Zomerbanden</div>

          <h1 className={s.heroH1}>
            ZOMERBANDEN.<br />
            DE JUISTE.<br />
            <span className={s.heroH1Accent}>VOOR UW AUTO.</span>
          </h1>

          <p className={s.heroLede}>
            Goede zomerbanden ziet u niet — maar op nat asfalt bij 80 km/u voelt u ze meteen.
            Wij kijken wat bij uw auto en rijstijl past.
          </p>

          <div className={s.heroCtaRow}>
            <Button href="/contact">AFSPRAAK MAKEN</Button>
            <Button href={`tel:${site.phone.tel}`} variant="ghost">
              BEL {site.phone.display}
            </Button>
          </div>
        </div>
      </section>

      {/* ── STATEMENT ─────────────────────────────────────── */}
      <section className={s.statementSection}>
        <div className={s.container}>
          <p className={s.bigStatement}>
            Op droog asfalt merk je het verschil niet. Op een natte rotonde bij 70 km/u
            wel. <em>Dat is waarom het ertoe doet.</em>
          </p>
        </div>
      </section>

      {/* ── HIGHLIGHTS ────────────────────────────────────── */}
      <section className={s.section}>
        <div className={s.container}>
          <p className={s.sectionEyebrow}>HOE WIJ WERKEN</p>
          <h2 className={s.sectionH2}>
            EERLIJK<br />ADVIES.
          </h2>
          <div className={s.highlightGrid}>
            {highlights.map((h, i) => (
              <div key={i} className={s.highlightItem}>
                <div className={s.highlightIcon}>{h.icon}</div>
                <h3 className={s.highlightTitle}>{h.title}</h3>
                <p className={s.highlightText}>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHICH TIRE FITS YOU ───────────────────────────── */}
      <section className={s.sectionAlt}>
        <div className={s.container}>
          <p className={s.sectionEyebrow}>WELK BAND PAST BIJ U</p>
          <h2 className={s.sectionH2}>
            NIET IEDEREEN<br />RIJDT HETZELFDE.
          </h2>

          <div className={s.infoGrid}>
            <div className={s.infoBlock}>
              <span className={s.infoBlockLabel}>Zuinig rijden · Forenzen</span>
              <h3 className={s.infoBlockTitle}>LAGE ROL&shy;WEERSTAND</h3>
              <p className={s.infoBlockText}>
                Rijdt u veel kilometers op de snelweg? Dan is een band met lage rolweerstand
                interessant. Minder verbruik, minder lawaai. Merken als Michelin Energy Saver
                of Bridgestone Ecopia zijn hierop gericht.
              </p>
            </div>
            <div className={s.infoBlock}>
              <span className={s.infoBlockLabel}>Sportief · Natte bochten</span>
              <h3 className={s.infoBlockTitle}>KORTE REM&shy;WEG</h3>
              <p className={s.infoBlockText}>
                Rijdt u sportief of woont u in een regio met veel regen? Dan weegt een korte
                remweg zwaarder. Pirelli P-Zero, Continental SportContact — dat segment
                presteert uitstekend op nat asfalt.
              </p>
            </div>
          </div>

          <div className={s.honestNote}>
            <p className={s.honestNoteTitle}>Wij helpen u kiezen</p>
            <p className={s.honestNoteText}>
              Weet u het niet zeker? Dat is volkomen normaal. Zeg gewoon welke auto u rijdt,
              hoeveel kilometer per jaar, en of u meer op de snelweg of in de stad rijdt.
              Dan geven wij u twee of drie opties — met eerlijk verschil uitgelegd.
            </p>
          </div>
        </div>
      </section>

      {/* ── BRANDS ────────────────────────────────────────── */}
      <section className={s.brandsSection}>
        <div className={s.container}>
          <p className={s.sectionEyebrow}>OP VOORRAAD</p>
          <div className={s.brandsRow}>
            {site.brands.map((b) => (
              <span key={b} className={s.brandItem}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAR ───────────────────────────────────────── */}
      <div className={s.ctaBar}>
        <div className={s.ctaBarInner}>
          <div className={s.ctaBarText}>
            <h2 className={s.ctaBarH2}>
              WIJ ADVISEREN.<br />U BESLIST.
            </h2>
            <p className={s.ctaBarSub}>
              Bel ons of kom langs. Wij helpen u de band kiezen die bij uw auto past.
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
              <p className={s.sectionEyebrow}>KLANTEN AAN HET WOORD</p>
              <h2 className={s.sectionH2}>
                ZO KLINKT<br />GOED WERK.
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
